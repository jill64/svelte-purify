<script lang="ts">
  import DOMPurify from 'universal-dompurify'

  let {
    html,
    config = undefined
  }: {
    html: string
    config?: Parameters<typeof DOMPurify.sanitize>[1]
  } = $props()

  let sanitized = $derived(
    DOMPurify.sanitize(html, {
      ...config,
      RETURN_DOM: false,
      RETURN_DOM_FRAGMENT: false
    })
  )
</script>

<!-- eslint-disable-next-line svelte/no-at-html-tags -->
{@html sanitized}
