'use strict';

const FastifyLayout = require('../');
const Layout = require('@podium/layout');
const fastify = require('fastify');

const app = fastify({ logger: true });

const layout = new Layout({
    pathname: '/',
    logger: console,
    name: 'layout',

});

const podlet = layout.client.register({
    name: 'myPodlet',
    uri: 'http://localhost:7100/manifest.json'
});

app.register(FastifyLayout, layout);

app.get('/', async (request, reply) => {
    const incoming = reply.app.podium;
    const result = await Promise.all([
        podlet.fetch(incoming),
    ]);
    reply.podiumSend(result[0].content);
});

// Run the server!
const start = async () => {
    try {
        await app.listen(7000);
        app.log.info(`server listening on ${app.server.address().port}`);
    } catch (err) {
        app.log.error(err);
        process.exit(1);
    }
}
start();
