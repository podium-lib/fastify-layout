import { HttpIncoming, pathnameBuilder } from '@podium/utils';
import fp from 'fastify-plugin';

export default fp(
    /**
     * @type {import('fastify').FastifyPluginCallback<import('@podium/layout').default>}
     */
    (fastify, layout, done) => {
        // Decorate reply with .app.podium we can write to throughout the request
        if (!fastify.hasReplyDecorator('app')) {
            fastify.decorateReply('app', null);
        }

        fastify.addHook('onRequest', async (request, reply) => {
            // @ts-ignore We decorate this above
            reply.app = reply.app || {};

            // @ts-ignore We type this for our consumers with fixup.sh
            reply.app = reply.app || {};

            // used to pass additional values to HttpIncoming
            // @ts-ignore We type this for our consumers with fixup.sh
            reply.app.params = reply.app.params || {};
        });

        // Run as late as we can (but before the route handler) so other plugins
        // can add to `reply.app.params` using either of the hooks in
        // the lifecycle before it https://fastify.dev/docs/latest/Reference/Hooks/#hooks
        fastify.addHook('preHandler', async (request, reply) => {
            // @ts-expect-error We need the protocol in HttpIncoming https://github.com/podium-lib/utils/blob/1b636c2c8da25e59064e6051a4ae2de1d5e5b7b3/lib/http-incoming.js#L6-L11 but it's not on the raw request by default
            if (!request.raw.protocol) {
                // @ts-expect-error
                request.raw.protocol = request.protocol;
            }
            const incoming = new HttpIncoming(
                request.raw,
                reply.raw,
                // @ts-ignore We type this for our consumers with fixup.sh
                reply.app.params,
            );

            // used to hold the HttpIncoming object
            // @ts-ignore We type this for our consumers with fixup.sh
            reply.app.podium = await layout.process(incoming, {
                proxy: false,
            });
        });

        // Decorate response with .podiumSend() method
        fastify.decorateReply(
            'podiumSend',
            /**
             * @see https://podium-lib.io/docs/api/layout#respodiumsendfragment
             * @param {unknown} payload
             * @param  {unknown[]} args
             */
            function podiumSend(payload, ...args) {
                this.type('text/html; charset=utf-8'); // "this" here is the fastify 'Reply' object
                return this.send(
                    layout.render(
                        // @ts-ignore We type this for our consumers with fixup.sh
                        this.app.podium,
                        // @ts-ignore
                        payload,
                        ...args,
                    ),
                );
            },
        );

        // Mount proxy route as a plugin so its executed only on
        // the registered path and changes we do to the Fastify
        // instance only applies to proxy routes.
        // In other words, the proxy check is not run on any other routes.
        fastify.register((instance, opts, next) => {
            const pathname = pathnameBuilder(
                layout.httpProxy.pathname,
                layout.httpProxy.prefix,
                '/*',
            );

            // Remove the built-in application/json parser in Fastify from
            // the proxy routes instance, otherwise the request stream is
            // already consumed at this point when we try to proxy it,
            // leading to failing requests (timeouts).
            instance.removeAllContentTypeParsers();

            // Allow all content types for proxy requests
            // https://github.com/fastify/fastify/blob/master/docs/ContentTypeParser.md#catch-all
            instance.addContentTypeParser('*', (req, payload, cb) => {
                // @ts-ignore
                cb();
            });

            instance.addHook('preHandler', async (req, reply) => {
                const incoming = await layout.httpProxy.process(
                    // @ts-ignore We type this for our consumers with fixup.sh
                    reply.app.podium,
                );
                if (incoming.proxy) return;
                return incoming;
            });

            instance.all(pathname, (req, reply) => {
                reply.code(404).send('Not found');
            });

            next();
        });

        done();
    },
    {
        name: 'podium-layout',
        fastify: '5.x',
    },
);
