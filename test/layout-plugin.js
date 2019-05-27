'use strict';

const tap = require('tap');
const plugin = require('../');

tap.test('fastify name - should be podium-layout', t => {
    const functionName = 'podium-layout';

    t.is(plugin[Symbol.for('plugin-meta')].name, functionName);
    t.is(plugin[Symbol.for('fastify.display-name')], functionName);
    t.end();
});
