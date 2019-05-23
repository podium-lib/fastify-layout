# @podium/fastify-layout

Hapi plugin for @podium/layout.

[![Dependencies](https://img.shields.io/david/podium-lib/fastify-layout.svg?style=flat-square)](https://david-dm.org/podium-lib/fastify-layout)
[![Build Status](https://travis-ci.org/podium-lib/fastify-layout.svg?branch=master&style=flat-square)](https://travis-ci.org/podium-lib/fastify-layout)
[![Greenkeeper badge](https://badges.greenkeeper.io/podium-lib/fastify-layout.svg?style=flat-square)](https://greenkeeper.io/)
[![Known Vulnerabilities](https://snyk.io/test/github/podium-lib/fastify-layout/badge.svg?style=flat-square)](https://snyk.io/test/github/podium-lib/fastify-layout)

Module for building [@podium/layout] servers with [fastify]. For writing layouts,
please see the [Podium documentation].

## Installation

```bash
$ npm install @podium/fastify-layout
```

## Requirements

This module require Fastify v2.0.0 or newer.

## Simple usage

Build a simple layout server including a single podlet:

```js
const FastifyLayout = require('@podium/fastify-layout');
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
```

## Register plugin

The plugin is registered by passing an instance of this plugin to the [fastify]
server `.register()` method together with an instance of the [@podium/layout]
class.

```js
app.register(FastifyLayout, layout);
```

## Request params

On each request [@podium/layout] will run a set of operations, such as the
[@podium/context] parsers, on the request. When doing so [@podium/layout] will
write parameters to `reply.app.podium` which is accessible inside a request
handelers.

```js
app.get('/', async (request, reply) => {
    console.log(reply.app.podium.context);
    [ ... ]
});
```

Its possible to pass request bound parameters to [@podium/context] parsers by
setting an object at `reply.app.params`.

Example: To pass a value to the [@podium/context locale parser] it should be set
on `reply.app.params` by a extension executed previously of this extension.

## License

Copyright (c) 2019 FINN.no

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.

[@podium/context locale parser]: https://github.com/podium-lib/context#locale-1 '@podium/context locale parser'
[Podium documentation]: https://podium-lib.io/ 'Podium documentation'
[@podium/context]: https://github.com/podium-lib/context '@podium/context'
[@podium/layout]: https://github.com/podium-lib/layout '@podium/layout'
[fastify]: https://www.fastify.io/ 'Fastify'