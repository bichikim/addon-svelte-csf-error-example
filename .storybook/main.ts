import {StorybookConfig} from '@storybook/svelte-vite'
import sveltePreprocess from 'svelte-preprocess'

const config: StorybookConfig & {svelteOptions?: any} = {
  stories: [
    '../apps/**/*.stories.@(js|jsx|mjs|ts|tsx|svelte)',
  ],
  addons: [
    '@storybook/addon-links',
    '@storybook/addon-essentials',
    '@storybook/addon-interactions',
    '@storybook/addon-svelte-csf',
  ],
  framework: {
    name: '@storybook/svelte-vite',
    options: ({
      builder: {
        viteConfigPath: 'apps/app/vite.config.mts',
      }
    }) as any,
  },
  svelteOptions: {
    preprocess: [sveltePreprocess()],
  },
  docs: {
    autodocs: 'tag',
  },
}

export default config
