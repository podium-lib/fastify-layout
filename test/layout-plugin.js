'use strict';

const { PodletServer, request } = require('@podium/test-utils');
const fastify = require('fastify');
const Layout = require('@podium/layout');
const tap = require('tap');

const FastifyLayout = require('../');

class Server {
    constructor(options = {}, podletAddr) {
        this.app = fastify();

        const layout = new Layout({
            pathname: '/',
            name: 'layout',
            ...options,
        });

        layout.view((incoming, fragment) => {
            return `## ${fragment} ##`;
        });

        const podlet = layout.client.register(podletAddr.options);

        this.app.register(FastifyLayout, layout);

        this.app.get(layout.pathname(), async (req, reply) => {
            const result = await podlet.fetch(reply.app.podium);
            reply.podiumSend(result);
        });
    }

    listen() {
        return new Promise((resolve, reject) => {
            this.app
                .listen(0)
                .then(() => {
                    const address = this.app.server.address();
                    const url = `http://${address.address}:${address.port}`;
                    resolve(url);
                })
                .catch(error => {
                    reject(error);
                });
        });
    }

    close() {
        return new Promise(resolve => {
            this.app.close(() => {
                resolve();
            });
        });
    }
}

/**
 * Constructor
 */

tap.test('fastify name - should be podium-layout', t => {
    const functionName = 'podium-layout';

    t.is(FastifyLayout[Symbol.for('plugin-meta')].name, functionName);
    t.is(FastifyLayout[Symbol.for('fastify.display-name')], functionName);
    t.end();
});

/**
 * Generic tests
 */

tap.test(
    'request layout pathname - should fetch content from podlet and return content wrapped in a document template',
    async t => {
        const podlet = new PodletServer();
        const service = await podlet.listen();

        const layout = new Server({}, service);
        const address = await layout.listen();

        const result = await request({ address, pathname: '/' });
        t.equal(result.body, '## <p>content component</p> ##');

        await layout.close();
        await podlet.close();
        t.end();
    },
);

tap.test(
    'request layout pathname - podlet is dead - should return fallback wrapped in a document template',
    async t => {
        const podlet = new PodletServer();
        const service = await podlet.listen();

        const layout = new Server({}, service);
        const address = await layout.listen();

        // Make sure layout has manifest
        await request({ address, pathname: '/' });

        // Kill podlet
        await podlet.close();

        const result = await request({ address, pathname: '/' });
        t.equal(result.body, '## <p>fallback component</p> ##');

        await layout.close();
        t.end();
    },
);

tap.test(
    'GET to "proxy" url - should proxy the request to the Podlets target endpoint',
    async t => {
        const podlet = new PodletServer();
        const service = await podlet.listen();

        const layout = new Server({}, service);
        const address = await layout.listen();

        // Make sure layout has manifest so proxy endpoints are mounted
        await request({ address, pathname: '/' });

        // Request proxy endpoint
        const result = await request({
            address,
            method: 'GET',
            pathname: '/podium-resource/component/localApi',
        });

        const body = JSON.parse(result.body);

        t.equal(body.body, 'GET proxy target');

        await layout.close();
        await podlet.close();
        t.end();
    },
);

tap.test(
    'POST to "proxy" url - should proxy the request to the Podlets target endpoint',
    async t => {
        const podlet = new PodletServer();
        const service = await podlet.listen();

        const layout = new Server({}, service);
        const address = await layout.listen();

        // Make sure layout has manifest so proxy endpoints are mounted
        await request({ address, pathname: '/' });

        // Request proxy endpoint
        const result = await request(
            {
                address,
                method: 'POST',
                pathname: '/podium-resource/component/localApi',
            },
            'proxy payload',
        );

        const body = JSON.parse(result.body);

        t.equal(body.payload, 'proxy payload');
        t.equal(body.body, 'POST proxy target');

        await layout.close();
        await podlet.close();
        t.end();
    },
);

tap.test(
    'PUT to "proxy" url - should proxy the request to the Podlets target endpoint',
    async t => {
        const podlet = new PodletServer();
        const service = await podlet.listen();

        const layout = new Server({}, service);
        const address = await layout.listen();

        // Make sure layout has manifest so proxy endpoints are mounted
        await request({ address, pathname: '/' });

        // Request proxy endpoint
        const result = await request(
            {
                address,
                method: 'PUT',
                pathname: '/podium-resource/component/localApi',
            },
            'proxy payload',
        );

        const body = JSON.parse(result.body);

        t.equal(body.payload, 'proxy payload');
        t.equal(body.body, 'PUT proxy target');

        await layout.close();
        await podlet.close();
        t.end();
    },
);
