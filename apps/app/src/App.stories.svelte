<script lang="ts" context="module">
  import {Story, Template} from '@storybook/addon-svelte-csf'
  import App from './App.svelte'
  
  const title: string = 'App'
  
  export const meta = {
    title: 'App',
  }
</script>

<Template>
  <App />
</Template>

<Story name="Default" />
