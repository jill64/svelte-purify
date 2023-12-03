<script lang="ts">
  import DOMPurify from 'universal-dompurify/browser-only'

  export let html: string
  export let config: DOMPurify.Config | undefined = undefined

  $: sanitized =
    DOMPurify?.sanitize?.(html, {
      ...config,
      RETURN_DOM: false,
      RETURN_DOM_FRAGMENT: false
    }) ?? ''
</script>

<!-- eslint-disable-next-line svelte/no-at-html-tags -->
{@html sanitized}
