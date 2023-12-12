<script lang="ts">
  import { Render } from '$lib'
  import { Render as RenderOnClient } from '$lib/browser-only'
  import { HighlightSvelte } from '@jill64/npm-demo-layout/highlight'
  import { code } from './code'
</script>

<main>
  <output>
    <Render html={'<h2>🌐 This is Render on Server</h2>'} />
    <RenderOnClient html={'<h2>💻 This is Render on Browser</h2>'} />
  </output>
  <div>
    <HighlightSvelte code={code()} />
  </div>
</main>

<style>
  main {
    display: grid;
    justify-content: center;
    grid-template-columns: auto auto;
    gap: 2rem;
  }
  @media (max-width: 768px) {
    main {
      grid-template-columns: auto;
    }
  }
  div {
    font-size: large;
    max-width: 80vw;
    overflow-x: auto;
  }
</style>
