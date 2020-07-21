# Jest reporter template

[![jest](https://jestjs.io/img/jest-badge.svg)](https://github.com/facebook/jest)
[![XO code style](https://img.shields.io/badge/code_style-XO-5ed9c7.svg)](https://github.com/xojs/xo)

A template for creating custom Jest reporters using Typescript.

## :spiral_notepad: Gist

If you'd rather not use this repository here is a [Gist](https://gist.github.com/ryparker/188849eb0f78f53316ef99bf6a4467d5) with the main interface for creating a Jest reporter.

## :rocket: Quick start

1. Clone

```shell
git clone https://github.com/ryparker/jest-reporter-template.git my-custom-reporter && cd my-custom-reporter
```

2. Install dependencies

```shell
yarn install
```

3. Transpile to JS

```shell
yarn build
```

## :wrench: Using the reporter

You will will need to add the reporter's path to the `reporters` option in your `jest.config.js`. 

__**Note: Jest config does not automagically transpile Typescript reporters yet. Although there is an [open feature request](https://github.com/facebook/jest/issues/8810) that you can follow.**__

```JSON
{
  "reporters": ["<rootDir>/my-custom-reporter.js"]
}
```

See the [official Jest docs](https://jestjs.io/docs/en/configuration#reporters-arraymodulename--modulename-options) for more details.

## Related projects

Jest Circus environment: [Template Project](https://github.com/ryparker/jest-circus-reporter-template) | [Gist](https://gist.github.com/ryparker/d3f5cc58913ba7e89b5c34eeabc7bfd9)
