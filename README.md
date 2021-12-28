# Buffetswap Toolkit

Forked from [pancake-toolkit][1].

This repository is a monorepo manage with [yarn workspaces](https://classic.yarnpkg.com/en/docs/workspaces/) and [Lerna](https://lerna.js.org/). 

## Packages

- [buffetswap-uikit](https://github.com/buffet-dex/buffetswap-toolkit/tree/master/packages/buffet-uikit) : React components used to build the Buffetswap UI
- [eslint-config-buffetswap](https://github.com/buffet-dex/buffetswap-toolkit/tree/master/packages/eslint-config-buffetswap) : An ESLint config for buffetswap, with Typescript and Prettier support
- [buffetswap-profile-sdk](https://github.com/buffet-dex/buffetswap-toolkit/tree/master/packages/buffetswap-profile-sdk) : Handy functions to retrieve data for Buffetswap Profile system
- [token-lists](https://github.com/buffet-dex/buffetswap-toolkit/tree/master/packages/token-lists) : Main Buffetswap token list and tools to validate it

## How to use

Clone the repository 

```
git clone git@github.com:buffet-dex/buffetswap-toolkit.git
```

Run yarn at the root of the workspace

```
cd buffetswap-toolkit
yarn
```

Then, refer to the readme of each project.

[1]: https://github.com/pancakeswap/pancake-toolkit 
