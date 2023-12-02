<script lang="ts">
  import { Render } from '$lib'
  import { code } from './code'
</script>

<Render html={code} />

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
