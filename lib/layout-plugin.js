/* eslint-disable no-param-reassign */
/* eslint-disable consistent-return */

import { HttpIncoming, pathnameBuilder } from '@podium/utils';
import fp from 'fastify-plugin';

const podiumLayoutFastifyPlugin = (fastify, layout, done) => {
    // Decorate reply with .app.podium we can write to throughout the request
    fastify.decorateReply('app', null);
    fastify.addHook('onRequest', async (request, reply) => {
        // namespace
        reply.app = reply.app || {};
        // used to pass additional values to HttpIncoming
        reply.app.params = reply.app.params || {};
        // used to hold the HttpIncoming object
        reply.app.podium = new HttpIncoming(
            request.raw,
            reply.raw,
            reply.app.params,
        );
        reply.app.podium = await layout.process(reply.app.podium, {
            proxy: false,
        });
    });

    // Decorate response with .podiumSend() method
    fastify.decorateReply('podiumSend', function podiumSend(payload, ...args) {
        this.type('text/html; charset=utf-8'); // "this" here is the fastify 'Reply' object
        this.send(layout.render(this.app.podium, payload, ...args));
    });

    // Mount proxy route as an instance so its executed only on
    // the registered path. Iow: the proxy check is not run on
    // any other routes
    fastify.register((instance, opts, next) => {
        const pathname = pathnameBuilder(
            layout.httpProxy.pathname,
            layout.httpProxy.prefix,
            '/*',
        );

        // Allow all content types for proxy requests
        // https://github.com/fastify/fastify/blob/master/docs/ContentTypeParser.md#catch-all
        instance.addContentTypeParser('*', (req, payload, cb) => {
            cb();
        });

        instance.addHook('preHandler', async (req, reply) => {
            const incoming = await layout.httpProxy.process(reply.app.podium);
            if (incoming.proxy) return;
            return incoming;
        });

        instance.all(pathname, (req, reply) => {
            reply.code(404).send('Not found');
        });

        next();
    });

    done();
};

export default fp(podiumLayoutFastifyPlugin, {
    name: 'podium-layout',
});
