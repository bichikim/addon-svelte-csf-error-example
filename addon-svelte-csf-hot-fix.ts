import * as nodePath from 'node:path'
import * as nodeFs from 'node:fs'
import {URL, fileURLToPath} from 'node:url'

const Root = fileURLToPath(new URL('.', import.meta.url))
export const NODE_MODULES_PATH = nodePath.join(Root, 'node_modules')

const fixTargetFile = '@storybook/addon-svelte-csf/dist/preset/indexer.js'
const targetCode = 'const svelteOptions = await loadSvelteConfig();'
const newCode = 'const svelteOptions = (await loadSvelteConfig()).default;'

export const fix = () => {
  const filePath = nodePath.join(NODE_MODULES_PATH, fixTargetFile)
  const code = nodeFs.readFileSync(filePath, 'utf8')
  // const svelteOptions = (await loadSvelteConfig()).default;
  nodeFs.writeFileSync(filePath, code.replace(targetCode, newCode), 'utf8')
}

fix()
