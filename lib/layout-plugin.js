/* eslint-disable no-param-reassign */
/* eslint-disable consistent-return */

import { HttpIncoming, pathnameBuilder } from '@podium/utils';
import fp from 'fastify-plugin';

export default fp(
    (fastify, options, done) => {
    const layout = /** @type {import('@podium/layout').default} */ (options);

    // Decorate reply with .app.podium we can write to throughout the request
    fastify.decorateReply('app', null);
    fastify.addHook('onRequest', async (request, reply) => {
        // namespace
        // @ts-ignore We type this for our consumers with fixup.sh
        reply.app = reply.app || {};
        // used to pass additional values to HttpIncoming
        // @ts-ignore We type this for our consumers with fixup.sh
        reply.app.params = reply.app.params || {};
        // used to hold the HttpIncoming object
        // @ts-ignore We type this for our consumers with fixup.sh
        reply.app.podium = new HttpIncoming(
            request.raw,
            reply.raw,
        // @ts-ignore We type this for our consumers with fixup.sh
            reply.app.params,
        );
        // @ts-ignore We type this for our consumers with fixup.sh
        reply.app.podium = await layout.process(reply.app.podium, {
            proxy: false,
        });
    });

    // Decorate response with .podiumSend() method
    fastify.decorateReply('podiumSend',
        /**
         * @see https://podium-lib.io/docs/api/layout#respodiumsendfragment
         * @param {unknown} payload
         * @param  {unknown[]} args
         */
        function podiumSend(payload, ...args) {
        this.type('text/html; charset=utf-8'); // "this" here is the fastify 'Reply' object
        // @ts-ignore We type this for our consumers with fixup.sh
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
            // @ts-ignore
            cb();
        });

        instance.addHook('preHandler', async (req, reply) => {
            // @ts-ignore We type this for our consumers with fixup.sh
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
}, {
    name: 'podium-layout',
});
