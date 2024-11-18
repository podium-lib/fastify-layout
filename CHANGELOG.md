## [4.0.1](https://github.com/podium-lib/fastify-layout/compare/v4.0.0...v4.0.1) (2024-11-18)


### Bug Fixes

* **deps:** update dependency @podium/utils to v5.4.0 ([#289](https://github.com/podium-lib/fastify-layout/issues/289)) ([abf4d07](https://github.com/podium-lib/fastify-layout/commit/abf4d074502e6eabe92aa8dfc0488a43fff36ef4))

# [4.0.0](https://github.com/podium-lib/fastify-layout/compare/v3.0.11...v4.0.0) (2024-11-08)


### Bug Fixes

* upgrade to fastify-plugin v5 ([#288](https://github.com/podium-lib/fastify-layout/issues/288)) ([f766426](https://github.com/podium-lib/fastify-layout/commit/f7664260bee1833e08a715b86cb239a574667038))


### BREAKING CHANGES

* requires fastify 5.x

## [3.0.11](https://github.com/podium-lib/fastify-layout/compare/v3.0.10...v3.0.11) (2024-09-25)


### Bug Fixes

* include the protocol when creating HttpIncoming ([#279](https://github.com/podium-lib/fastify-layout/issues/279)) ([efee917](https://github.com/podium-lib/fastify-layout/commit/efee917c009a2fdf3fee6ad921796214e944077b))

## [3.0.10](https://github.com/podium-lib/fastify-layout/compare/v3.0.9...v3.0.10) (2024-09-23)


### Bug Fixes

* process incoming request and params later ([#278](https://github.com/podium-lib/fastify-layout/issues/278)) ([078e872](https://github.com/podium-lib/fastify-layout/commit/078e87236d0bc7fea3b702ac616e5df57d44bb86))

## [3.0.9](https://github.com/podium-lib/fastify-layout/compare/v3.0.8...v3.0.9) (2024-09-23)


### Bug Fixes

* **deps:** update dependency @podium/utils to v5.3.1 ([b4c2544](https://github.com/podium-lib/fastify-layout/commit/b4c2544697456d93de5e5c965cc2e5dc45add8a5))

## [3.0.8](https://github.com/podium-lib/fastify-layout/compare/v3.0.7...v3.0.8) (2024-09-23)


### Bug Fixes

* return the FastifyReply so async works as expected ([#277](https://github.com/podium-lib/fastify-layout/issues/277)) ([2d919ab](https://github.com/podium-lib/fastify-layout/commit/2d919ab0b31190b78a4d96ad906eb89a28ff1f73))

## [3.0.7](https://github.com/podium-lib/fastify-layout/compare/v3.0.6...v3.0.7) (2024-09-23)


### Bug Fixes

* types for context ([#276](https://github.com/podium-lib/fastify-layout/issues/276)) ([5846f73](https://github.com/podium-lib/fastify-layout/commit/5846f73dccb0b1ac9beb1d6e875b3b1f23e0aabe))

## [3.0.6](https://github.com/podium-lib/fastify-layout/compare/v3.0.5...v3.0.6) (2024-06-25)


### Bug Fixes

* include type definition ([55d3268](https://github.com/podium-lib/fastify-layout/commit/55d3268a1439e5576c32cbb492c9d857a84cc1cf))

## [3.0.5](https://github.com/podium-lib/fastify-layout/compare/v3.0.4...v3.0.5) (2024-06-03)


### Bug Fixes

* run podium processes earlier in Fastify lifecycle ([6e9c7a7](https://github.com/podium-lib/fastify-layout/commit/6e9c7a798d55ce96bbdd70036bbc258f98ce8a0c))

## [3.0.4](https://github.com/podium-lib/fastify-layout/compare/v3.0.3...v3.0.4) (2024-05-15)


### Bug Fixes

* **deps:** update dependency @podium/utils to v5.0.7 ([d464c30](https://github.com/podium-lib/fastify-layout/commit/d464c3020def30bce4e76bf2734d4b209cb38ab8))

## [3.0.3](https://github.com/podium-lib/fastify-layout/compare/v3.0.2...v3.0.3) (2024-04-23)


### Bug Fixes

* **deps:** update dependency @podium/utils to v5.0.4 ([2241225](https://github.com/podium-lib/fastify-layout/commit/2241225b68a4f5b2b503d3ec899033d8e0273206))

## [3.0.2](https://github.com/podium-lib/fastify-layout/compare/v3.0.1...v3.0.2) (2024-03-14)


### Bug Fixes

* avoid destructively setting reply.app.podium ([1984899](https://github.com/podium-lib/fastify-layout/commit/19848993a44af78739d1f81a5f951defc690cd1a))

## [3.0.1](https://github.com/podium-lib/fastify-layout/compare/v3.0.0...v3.0.1) (2023-12-04)


### Bug Fixes

* **deps:** update dependency fastify-plugin to v4.5.1 ([3071e8a](https://github.com/podium-lib/fastify-layout/commit/3071e8af616ab78582c57a31f8dad5c08f8355b7))

# [3.0.0](https://github.com/podium-lib/fastify-layout/compare/v2.2.48...v3.0.0) (2023-11-29)


### chore

* Test on Node.js 16 and 18 only ([d5a7ba9](https://github.com/podium-lib/fastify-layout/commit/d5a7ba93d9a51e4e0cbfc3c851a54f7c84004fd2))


### Features

* Convert to ESM. ([7f78857](https://github.com/podium-lib/fastify-layout/commit/7f78857e359700a050abe9048c5092864b1e3cfd))
* Support Fastify 4 and Podium 5 ([0897496](https://github.com/podium-lib/fastify-layout/commit/08974967288b82537bb3378724264c34b630380b))


### BREAKING CHANGES

* Module is ESM only.
* Test on Node.js 16 and 18 only.

# [3.0.0-next.4](https://github.com/podium-lib/fastify-layout/compare/v3.0.0-next.3...v3.0.0-next.4) (2023-11-27)


### Bug Fixes

* bumping version to get version range removal into a version ([#231](https://github.com/podium-lib/fastify-layout/issues/231)) ([9c909f9](https://github.com/podium-lib/fastify-layout/commit/9c909f9e220a3b62fcfcb1f3e9ed1909451da37f))
* **deps:** update dependency @podium/utils to v4.4.37 ([3e91676](https://github.com/podium-lib/fastify-layout/commit/3e91676bf0a21fd966c91448f96e8c50e7ef15bc))
* **deps:** update dependency @podium/utils to v4.4.38 ([96c1279](https://github.com/podium-lib/fastify-layout/commit/96c1279811b53df0bb97ebdfb1d1c1e16e1cc8bd))
* **deps:** update dependency @podium/utils to v4.4.39 ([792f015](https://github.com/podium-lib/fastify-layout/commit/792f015948f4bb193d0c4a1bc6c2fbb644a2aedf))
* **deps:** update dependency @podium/utils to v4.4.40 ([603fbe9](https://github.com/podium-lib/fastify-layout/commit/603fbe95ce139bd66120adc59f316331f64130ba))
* **deps:** update dependency @podium/utils to v4.4.41 ([1cc35fd](https://github.com/podium-lib/fastify-layout/commit/1cc35fdfd4e2b1be76300680b5be282e4982f727))
* **deps:** update dependency @podium/utils to v4.5.1 ([62fb59e](https://github.com/podium-lib/fastify-layout/commit/62fb59efc24e2a5f622b0769aec3583ba4c77926))
* **deps:** update dependency fastify-plugin to v4 ([e5f1ed5](https://github.com/podium-lib/fastify-layout/commit/e5f1ed5944dc2473681d41cabc0a9a53a4b6e50f))
* use LTS aliases to not chase node version anymore ([e0387ff](https://github.com/podium-lib/fastify-layout/commit/e0387ff187de8b6142e13c0bc00a289416ce14bb))

## [2.2.48](https://github.com/podium-lib/fastify-layout/compare/v2.2.47...v2.2.48) (2023-11-27)


### Bug Fixes

* **deps:** update dependency fastify-plugin to v4 ([e5f1ed5](https://github.com/podium-lib/fastify-layout/commit/e5f1ed5944dc2473681d41cabc0a9a53a4b6e50f))
* use LTS aliases to not chase node version anymore ([e0387ff](https://github.com/podium-lib/fastify-layout/commit/e0387ff187de8b6142e13c0bc00a289416ce14bb))

## [2.2.47](https://github.com/podium-lib/fastify-layout/compare/v2.2.46...v2.2.47) (2023-11-20)


### Bug Fixes

* **deps:** update dependency @podium/utils to v4.5.1 ([62fb59e](https://github.com/podium-lib/fastify-layout/commit/62fb59efc24e2a5f622b0769aec3583ba4c77926))

## [2.2.46](https://github.com/podium-lib/fastify-layout/compare/v2.2.45...v2.2.46) (2023-10-23)


### Bug Fixes

* **deps:** update dependency @podium/utils to v4.4.41 ([1cc35fd](https://github.com/podium-lib/fastify-layout/commit/1cc35fdfd4e2b1be76300680b5be282e4982f727))

## [2.2.45](https://github.com/podium-lib/fastify-layout/compare/v2.2.44...v2.2.45) (2023-10-16)


### Bug Fixes

* **deps:** update dependency @podium/utils to v4.4.40 ([603fbe9](https://github.com/podium-lib/fastify-layout/commit/603fbe95ce139bd66120adc59f316331f64130ba))

## [2.2.44](https://github.com/podium-lib/fastify-layout/compare/v2.2.43...v2.2.44) (2023-10-12)


### Bug Fixes

* bumping version to get version range removal into a version ([#231](https://github.com/podium-lib/fastify-layout/issues/231)) ([9c909f9](https://github.com/podium-lib/fastify-layout/commit/9c909f9e220a3b62fcfcb1f3e9ed1909451da37f))

## [2.2.43](https://github.com/podium-lib/fastify-layout/compare/v2.2.42...v2.2.43) (2023-02-01)


### Bug Fixes

* **deps:** update dependency @podium/utils to v4.4.39 ([792f015](https://github.com/podium-lib/fastify-layout/commit/792f015948f4bb193d0c4a1bc6c2fbb644a2aedf))

## [2.2.42](https://github.com/podium-lib/fastify-layout/compare/v2.2.41...v2.2.42) (2022-12-12)


### Bug Fixes

* **deps:** update dependency @podium/utils to v4.4.38 ([96c1279](https://github.com/podium-lib/fastify-layout/commit/96c1279811b53df0bb97ebdfb1d1c1e16e1cc8bd))

## [2.2.41](https://github.com/podium-lib/fastify-layout/compare/v2.2.40...v2.2.41) (2022-11-21)


### Bug Fixes

* **deps:** update dependency @podium/utils to v4.4.37 ([3e91676](https://github.com/podium-lib/fastify-layout/commit/3e91676bf0a21fd966c91448f96e8c50e7ef15bc))

# [3.0.0-next.3](https://github.com/podium-lib/fastify-layout/compare/v3.0.0-next.2...v3.0.0-next.3) (2022-10-03)


### Features

* Support Fastify 4 and Podium 5 ([0897496](https://github.com/podium-lib/fastify-layout/commit/08974967288b82537bb3378724264c34b630380b))

# [3.0.0-next.2](https://github.com/podium-lib/fastify-layout/compare/v3.0.0-next.1...v3.0.0-next.2) (2022-05-19)


### Features

* Convert to ESM. ([7f78857](https://github.com/podium-lib/fastify-layout/commit/7f78857e359700a050abe9048c5092864b1e3cfd))


### BREAKING CHANGES

* Module is ESM only.

# [3.0.0-next.1](https://github.com/podium-lib/fastify-layout/compare/v2.2.40...v3.0.0-next.1) (2022-05-11)


### chore

* Test on Node.js 16 and 18 only ([d5a7ba9](https://github.com/podium-lib/fastify-layout/commit/d5a7ba93d9a51e4e0cbfc3c851a54f7c84004fd2))


### BREAKING CHANGES

* Test on Node.js 16 and 18 only.

## [2.2.40](https://github.com/podium-lib/fastify-layout/compare/v2.2.39...v2.2.40) (2022-03-28)


### Bug Fixes

* **deps:** update dependency @podium/utils to v4.4.36 ([8a4ac25](https://github.com/podium-lib/fastify-layout/commit/8a4ac25665338852e5f25230eaab20e7db8f4ab2))

## [2.2.39](https://github.com/podium-lib/fastify-layout/compare/v2.2.38...v2.2.39) (2022-02-21)


### Bug Fixes

* use additional args when rendering via podiumSend ([69c8be6](https://github.com/podium-lib/fastify-layout/commit/69c8be6e01e5e3fdc838dd74e3754e698bda90f7))

## [2.2.38](https://github.com/podium-lib/fastify-layout/compare/v2.2.37...v2.2.38) (2022-02-08)


### Bug Fixes

* **deps:** update dependency @podium/utils to v4.4.35 ([5de14bd](https://github.com/podium-lib/fastify-layout/commit/5de14bdf6f5568b91a362484839c54542e5eab1b))

## [2.2.37](https://github.com/podium-lib/fastify-layout/compare/v2.2.36...v2.2.37) (2022-01-16)


### Bug Fixes

* **deps:** update dependency @podium/utils to v4.4.34 ([d4e42af](https://github.com/podium-lib/fastify-layout/commit/d4e42af5a30c3d2ad0f3ad200fa9059bfad33798))

## [2.2.36](https://github.com/podium-lib/fastify-layout/compare/v2.2.35...v2.2.36) (2022-01-02)


### Bug Fixes

* **deps:** update dependency @podium/utils to v4.4.33 ([90305e8](https://github.com/podium-lib/fastify-layout/commit/90305e8a93411d44d9c84b2c95bf682d8c2b4448))

## [2.2.35](https://github.com/podium-lib/fastify-layout/compare/v2.2.34...v2.2.35) (2021-11-22)


### Bug Fixes

* **deps:** update dependency @podium/utils to v4.4.32 ([07d06af](https://github.com/podium-lib/fastify-layout/commit/07d06af9d54a19014201540d12b6529f9a99931c))

## [2.2.34](https://github.com/podium-lib/fastify-layout/compare/v2.2.33...v2.2.34) (2021-11-17)


### Bug Fixes

* **deps:** update dependency @podium/utils to v4.4.31 ([4dc151b](https://github.com/podium-lib/fastify-layout/commit/4dc151b1aa205e3c962bdd0b33da5802e48d4269))

## [2.2.33](https://github.com/podium-lib/fastify-layout/compare/v2.2.32...v2.2.33) (2021-11-15)


### Bug Fixes

* **deps:** update dependency @podium/utils to v4.4.30 ([737b746](https://github.com/podium-lib/fastify-layout/commit/737b746bd8c8108ccc95b847a2b15f7f7375e6ae))

## [2.2.32](https://github.com/podium-lib/fastify-layout/compare/v2.2.31...v2.2.32) (2021-11-14)


### Bug Fixes

* **deps:** update dependency @podium/utils to v4.4.29 ([38a4357](https://github.com/podium-lib/fastify-layout/commit/38a4357846ba9d4318d8d094d69eb2f353202f04))

## [2.2.31](https://github.com/podium-lib/fastify-layout/compare/v2.2.30...v2.2.31) (2021-11-09)


### Bug Fixes

* **deps:** update dependency @podium/utils to v4.4.28 ([744e815](https://github.com/podium-lib/fastify-layout/commit/744e815d73f1b9dea4690e228602226a1fe27e18))

## [2.2.30](https://github.com/podium-lib/fastify-layout/compare/v2.2.29...v2.2.30) (2021-10-26)


### Bug Fixes

* **deps:** update dependency @podium/utils to v4.4.27 ([539348e](https://github.com/podium-lib/fastify-layout/commit/539348e454a688688f6422d92f53b882864d0981))

## [2.2.29](https://github.com/podium-lib/fastify-layout/compare/v2.2.28...v2.2.29) (2021-09-13)


### Bug Fixes

* **deps:** update dependency @podium/utils to v4.4.26 ([82f0a47](https://github.com/podium-lib/fastify-layout/commit/82f0a47d5417d257281316f2b03842a06b514fd4))

## [2.2.28](https://github.com/podium-lib/fastify-layout/compare/v2.2.27...v2.2.28) (2021-08-14)


### Bug Fixes

* **deps:** update dependency @podium/utils to v4.4.25 ([06f05a3](https://github.com/podium-lib/fastify-layout/commit/06f05a325431ee55473433d18ba998fa7cd68ecd))

## [2.2.27](https://github.com/podium-lib/fastify-layout/compare/v2.2.26...v2.2.27) (2021-07-16)


### Bug Fixes

* **deps:** update dependency @podium/utils to v4.4.24 ([822f4d3](https://github.com/podium-lib/fastify-layout/commit/822f4d35ae2d453a583e45fa94741692412640e8))

## [2.2.26](https://github.com/podium-lib/fastify-layout/compare/v2.2.25...v2.2.26) (2021-07-04)


### Bug Fixes

* **deps:** update dependency @podium/utils to v4.4.23 ([6f75cd2](https://github.com/podium-lib/fastify-layout/commit/6f75cd28fa060c05dd2a3b722f1762cdc0235b73))

## [2.2.25](https://github.com/podium-lib/fastify-layout/compare/v2.2.24...v2.2.25) (2021-06-07)


### Bug Fixes

* **deps:** update dependency @podium/utils to v4.4.22 ([e2b984b](https://github.com/podium-lib/fastify-layout/commit/e2b984b5278078daaba0d14a3f3bd56cf63da451))

## [2.2.24](https://github.com/podium-lib/fastify-layout/compare/v2.2.23...v2.2.24) (2021-05-24)


### Bug Fixes

* **deps:** update dependency @podium/utils to v4.4.21 ([89b87a5](https://github.com/podium-lib/fastify-layout/commit/89b87a537953bd260bb1e909f377d29a1513d091))

## [2.2.23](https://github.com/podium-lib/fastify-layout/compare/v2.2.22...v2.2.23) (2021-05-15)


### Bug Fixes

* **deps:** update dependency @podium/utils to v4.4.20 ([876c2e8](https://github.com/podium-lib/fastify-layout/commit/876c2e8e2641a127cbae7bee393dc1a4f1a867f6))

## [2.2.22](https://github.com/podium-lib/fastify-layout/compare/v2.2.21...v2.2.22) (2021-05-09)


### Bug Fixes

* **deps:** update dependency @podium/utils to v4.4.19 ([9b86bd8](https://github.com/podium-lib/fastify-layout/commit/9b86bd822d07213fb11e4fd328866dd6a67e8d9f))

## [2.2.21](https://github.com/podium-lib/fastify-layout/compare/v2.2.20...v2.2.21) (2021-05-05)


### Bug Fixes

* **deps:** update dependency @podium/utils to v4.4.18 ([115ab3d](https://github.com/podium-lib/fastify-layout/commit/115ab3db8a5b4ba1ceafcba2ac3d2f6657fe2afd))

## [2.2.20](https://github.com/podium-lib/fastify-layout/compare/v2.2.19...v2.2.20) (2021-04-27)


### Bug Fixes

* **deps:** update dependency @podium/utils to v4.4.17 ([5f93b63](https://github.com/podium-lib/fastify-layout/commit/5f93b631eb09299c084da3a37a4e8458d6bb0d7c))

## [2.2.19](https://github.com/podium-lib/fastify-layout/compare/v2.2.18...v2.2.19) (2021-04-11)


### Bug Fixes

* **deps:** update dependency @podium/utils to v4.4.16 ([65cae2b](https://github.com/podium-lib/fastify-layout/commit/65cae2ba5b1d76e93e11e977a086e67236f0bda7))

## [2.2.18](https://github.com/podium-lib/fastify-layout/compare/v2.2.17...v2.2.18) (2021-04-02)


### Bug Fixes

* **deps:** update dependency @podium/utils to v4.4.15 ([cec3745](https://github.com/podium-lib/fastify-layout/commit/cec3745ac2b7b57ac6be16105c1f149f1caca017))

## [2.2.17](https://github.com/podium-lib/fastify-layout/compare/v2.2.16...v2.2.17) (2021-04-01)


### Bug Fixes

* **deps:** update dependency @podium/utils to v4.4.13 ([46ddd3a](https://github.com/podium-lib/fastify-layout/commit/46ddd3ad3ab88d639fd92f4e28745f5b88c8f9e5))

## [2.2.16](https://github.com/podium-lib/fastify-layout/compare/v2.2.15...v2.2.16) (2021-03-30)


### Bug Fixes

* **deps:** update dependency @podium/utils to v4.4.12 ([69bc03a](https://github.com/podium-lib/fastify-layout/commit/69bc03a1f60231585937c95fa839442f3520f795))

## [2.2.15](https://github.com/podium-lib/fastify-layout/compare/v2.2.14...v2.2.15) (2021-03-27)


### Bug Fixes

* **deps:** update dependency @podium/utils to v4.4.11 ([22fbcdd](https://github.com/podium-lib/fastify-layout/commit/22fbcdd9500ab2badf3ad9aca46e04e12a32ffb5))

## [2.2.14](https://github.com/podium-lib/fastify-layout/compare/v2.2.13...v2.2.14) (2021-03-26)


### Bug Fixes

* **deps:** update dependency @podium/utils to v4.4.10 ([897202f](https://github.com/podium-lib/fastify-layout/commit/897202f3618c71aa97379d62f8e04d4c001746d2))

## [2.2.13](https://github.com/podium-lib/fastify-layout/compare/v2.2.12...v2.2.13) (2021-03-20)


### Bug Fixes

* **deps:** update dependency @podium/utils to v4.4.9 ([58523e9](https://github.com/podium-lib/fastify-layout/commit/58523e9851b2b0dad1e396fa4165a28e6f5d51bf))

## [2.2.12](https://github.com/podium-lib/fastify-layout/compare/v2.2.11...v2.2.12) (2021-03-08)


### Bug Fixes

* **deps:** update dependency @podium/utils to v4.4.8 ([6534399](https://github.com/podium-lib/fastify-layout/commit/653439993937761e9929c1ffbeffece588526ecc))

## [2.2.11](https://github.com/podium-lib/fastify-layout/compare/v2.2.10...v2.2.11) (2021-03-07)


### Bug Fixes

* **deps:** update dependency @podium/utils to v4.4.7 ([6f2f7b8](https://github.com/podium-lib/fastify-layout/commit/6f2f7b8c65c3f13c8c2a9c393e5b09d53cc7977a))

## [2.2.10](https://github.com/podium-lib/fastify-layout/compare/v2.2.9...v2.2.10) (2021-02-17)


### Bug Fixes

* **deps:** update dependency @podium/utils to v4.4.6 ([2527cd8](https://github.com/podium-lib/fastify-layout/commit/2527cd841969d1b2334193e3b49a7f622a2b57a7))

## [2.2.9](https://github.com/podium-lib/fastify-layout/compare/v2.2.8...v2.2.9) (2021-02-11)


### Bug Fixes

* **deps:** update dependency @podium/utils to v4.4.5 ([1c5ad91](https://github.com/podium-lib/fastify-layout/commit/1c5ad910af847d7b8b33378e48e73ec15b1d241c))

## [2.2.8](https://github.com/podium-lib/fastify-layout/compare/v2.2.7...v2.2.8) (2021-02-02)


### Bug Fixes

* **deps:** update dependency @podium/utils to v4.4.4 ([a73e8ae](https://github.com/podium-lib/fastify-layout/commit/a73e8ae0836945ca75b9e2318ddd15207c6c4b35))

## [2.2.7](https://github.com/podium-lib/fastify-layout/compare/v2.2.6...v2.2.7) (2021-01-22)


### Bug Fixes

* **deps:** update dependency @podium/utils to v4.4.3 ([b0d54a0](https://github.com/podium-lib/fastify-layout/commit/b0d54a0f0841a4f90a68cf52c9292a1c448a86d9))

## [2.2.6](https://github.com/podium-lib/fastify-layout/compare/v2.2.5...v2.2.6) (2021-01-21)


### Bug Fixes

* **deps:** update dependency @podium/utils to v4.4.2 ([43809ff](https://github.com/podium-lib/fastify-layout/commit/43809ff75682be1ea24b26d12464d78422b24664))

## [2.2.5](https://github.com/podium-lib/fastify-layout/compare/v2.2.4...v2.2.5) (2020-12-11)


### Bug Fixes

* Move Podium processing to a preHandler hook ([7451b25](https://github.com/podium-lib/fastify-layout/commit/7451b2541d522a3e93ac44d68ec45f6159b8fd1a))

## [2.2.4](https://github.com/podium-lib/fastify-layout/compare/v2.2.3...v2.2.4) (2020-10-29)


### Bug Fixes

* **deps:** update dependency @podium/utils to v4.4.1 ([ec19e78](https://github.com/podium-lib/fastify-layout/commit/ec19e78ccfeae4c82294eb8e89d6b67226f82774))

## [2.2.3](https://github.com/podium-lib/fastify-layout/compare/v2.2.2...v2.2.3) (2020-10-12)


### Bug Fixes

* **deps:** update dependency @podium/utils to v4.4.0 ([ba221d5](https://github.com/podium-lib/fastify-layout/commit/ba221d5d0eb502c1846043e6ce4b3836af67f687))

## [2.2.2](https://github.com/podium-lib/fastify-layout/compare/v2.2.1...v2.2.2) (2020-10-10)


### Bug Fixes

* **deps:** update dependency @podium/utils to v4.3.3 ([b02a722](https://github.com/podium-lib/fastify-layout/commit/b02a722e60b56527871c5276abb243cc95a326f7))

## [2.2.1](https://github.com/podium-lib/fastify-layout/compare/v2.2.0...v2.2.1) (2020-09-13)


### Bug Fixes

* **deps:** update dependency @podium/utils to v4.3.1 ([6523946](https://github.com/podium-lib/fastify-layout/commit/6523946a10824a920d72205aed3452b2d0ded134))

# [2.2.0](https://github.com/podium-lib/fastify-layout/compare/v2.1.1...v2.2.0) (2020-08-17)


### Features

* support Fastify version 3 ([86c6209](https://github.com/podium-lib/fastify-layout/commit/86c620986d133e7d3379ebfb0b7bcf44a2e457c4))
