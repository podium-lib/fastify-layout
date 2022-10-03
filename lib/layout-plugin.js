/* eslint-disable no-param-reassign */
/* eslint-disable consistent-return */

import { HttpIncoming, pathnameBuilder } from '@podium/utils';
import fp from 'fastify-plugin';

const podiumLayoutFastifyPlugin = (fastify, layout, done) => {
    // Decorate reply with .app.podium we can write to throught the request
    fastify.decorateReply('app', null);
    fastify.addHook('onRequest', async (request, reply) => {
        reply.app = {
            podium: {},
        };
    });

    // Run parsers on request and store state object on reply.app.podium
    fastify.addHook('preHandler', async (request, reply) => {
        const incoming = new HttpIncoming(
            request.raw,
            reply.raw,
            reply.app.params,
        );
        reply.app.podium = await layout.process(incoming, { proxy: false });
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
    fastify: '4.x',
    name: 'podium-layout',
});
