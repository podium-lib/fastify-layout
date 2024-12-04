# @podium/fastify-layout

Fastify plugin for @podium/layout.

[![Dependencies](https://img.shields.io/david/podium-lib/fastify-layout.svg)](https://david-dm.org/podium-lib/fastify-layout)
[![GitHub Actions status](https://github.com/podium-lib/fastify-layout/workflows/Run%20Lint%20and%20Tests/badge.svg)](https://github.com/podium-lib/fastify-layout/actions?query=workflow%3A%22Run+Lint+and+Tests%22)

Module for building [@podium/layout] servers with [fastify]. For writing layouts,
please see the [Podium documentation].

## Installation

```bash
npm install @podium/fastify-layout
```

## Simple usage

Build a simple layout server including a single podlet:

```js
import FastifyLayout from '@podium/fastify-layout';
import Layout from '@podium/layout';
import fastify from 'fastify';

const app = fastify({ logger: true });

const layout = new Layout({
    pathname: '/',
    logger: console,
    name: 'layout',
});

const podlet = layout.client.register({
    name: 'myPodlet',
    uri: 'http://localhost:7100/manifest.json',
});

app.register(FastifyLayout, layout);

app.get(layout.pathname(), async (request, reply) => {
    const incoming = reply.app.podium;
    const result = await podlet.fetch(incoming);
    return reply.podiumSend(result.content);
});

const start = async () => {
    try {
        await app.listen({ port: 7000 });
        app.log.info(`server listening on ${app.server.address().port}`);
    } catch (err) {
        app.log.error(err);
        process.exit(1);
    }
};
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

On each request [@podium/layout] will run a set of operations on the request and
create an [incoming] object. The [incoming] object is stored at
`reply.app.podium` which is accessible inside request handlers.

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

## reply.podiumSend(fragment)

This method will wrap the given fragment in a default [document template] before
dispatching.

See [document template] for further information.

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
[document template]: https://podium-lib.io/docs/api/document 'document template'
[@podium/context]: https://github.com/podium-lib/context '@podium/context'
[@podium/layout]: https://github.com/podium-lib/layout '@podium/layout'
[fastify]: https://www.fastify.io/ 'Fastify'
