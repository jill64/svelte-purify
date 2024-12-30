<script lang="ts">
  import type T from 'universal-dompurify'
  import DOMPurify from 'universal-dompurify/browser-only'

  let {
    html,
    config = undefined
  }: {
    html: string
    config?: Parameters<(typeof T)['sanitize']>[1]
  } = $props()

  let sanitized = $state('')

  $effect(() => {
    sanitized =
      DOMPurify?.sanitize?.(html, {
        ...config,
        RETURN_DOM: false,
        RETURN_DOM_FRAGMENT: false
      }) ?? ''
  })
</script>

<!-- eslint-disable-next-line svelte/no-at-html-tags -->
{@html sanitized}
