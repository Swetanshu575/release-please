exports['GitHub Yoshi PHP Mono-Repo generates CHANGELOG and aborts if duplicate 1'] = `
{
    "modules": [
        {
            "name": "google/cloud",
            "versions": [
                "v0.21.0"
            ]
        },
        {
            "name": "datastore",
            "versions": [
                "v2.0.1"
            ]
        }
    ]
}

`

exports['GitHub Yoshi PHP Mono-Repo generates CHANGELOG and aborts if duplicate 2'] = `
:robot: I have created a release \\*beep\\* \\*boop\\* 
---
## 0.21.0

<details><summary>automl 1.8.4</summary>



### Bug Fixes

* correctly label as beta ([#1963](https://www.github.com/googleapis/release-please/issues/1963)) ([52f4fbf](https://www.github.com/googleapis/release-please/commit/52f4fbf))

</details>

<details><summary>datastore 2.0.1</summary>



### Bug Fixes

* Assorted minor fixes for Cloud Datastore client ([#1964](https://www.github.com/googleapis/release-please/issues/1964)) ([269cf92](https://www.github.com/googleapis/release-please/commit/269cf92))

</details>

<details><summary>pubsub 1.0.2</summary>



### Bug Fixes

* Update PubSub timeouts. ([#1967](https://www.github.com/googleapis/release-please/issues/1967)) ([0a84771](https://www.github.com/googleapis/release-please/commit/0a84771))

</details>

<details><summary>speech 2.0.0</summary>



### ⚠ BREAKING CHANGES

* move speech from alpha -> beta (#1962)

### Features

* move speech from alpha -> beta ([#1962](https://www.github.com/googleapis/release-please/issues/1962)) ([8db7f3b](https://www.github.com/googleapis/release-please/commit/8db7f3b))

</details>

<details><summary>websecurityscanner 0.9.0</summary>



### Features

* Add Web Security Center Client ([#1961](https://www.github.com/googleapis/release-please/issues/1961)) ([fa5761e](https://www.github.com/googleapis/release-please/commit/fa5761e))

</details>

This PR was generated with [Release Please](https://github.com/googleapis/release-please).
`