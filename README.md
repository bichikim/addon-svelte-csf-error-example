# Example

## Install
```shell
pnpm install
```

## Run storybook with svelte 
```shell
pnpm run storybook
```
It reaches ParseError: Unexpected token without package.json>type:module

loadSvelteConfig returns
```text
{
  default: { preprocess: [ [Object] ] },
  configFile: '...'
}

```

## Hot fix error

```shell
pnpm run hot-fix
```