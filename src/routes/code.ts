export const code = () =>
  /* html */ `
<script>
  import { Render } from 'svelte-purify'
  import { Render as RenderOnClient } from 'svelte-purify/browser-only'
</script>

<Render html={'<h2>🌐 This is Render on Server</h2>'} />
<RenderOnClient html={'<h2>💻 This is Render on Browser</h2>'} />
`.trim()
