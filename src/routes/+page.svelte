<script lang="ts">
  import { Render } from '$lib'
  import { Render as RenderOnClient } from '$lib/browser-only'
  import { code } from './code'
  import { body } from './body'
</script>

<Render html={code} />
<RenderOnClient html={body} />

<style>
  :global(body) {
    font-family: sans-serif;
  }
  @media (prefers-color-scheme: dark) {
    :global(body) {
      background-color: #161616;
      color: whitesmoke;
    }
  }
</style>
