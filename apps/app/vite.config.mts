import {svelte} from '@sveltejs/vite-plugin-svelte'
import sveltePreprocess from 'svelte-preprocess'

export default () => {
  return{
    plugins: [
      svelte({
        preprocess: sveltePreprocess()
      }),
    ],
  }
}