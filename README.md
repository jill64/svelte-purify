<!----- BEGIN GHOST DOCS HEADER ----->

# svelte-purify

[![npm-version](https://img.shields.io/npm/v/svelte-purify)](https://npmjs.com/package/svelte-purify) [![npm-license](https://img.shields.io/npm/l/svelte-purify)](https://npmjs.com/package/svelte-purify) [![npm-download-month](https://img.shields.io/npm/dm/svelte-purify)](https://npmjs.com/package/svelte-purify) [![npm-min-size](https://img.shields.io/bundlephobia/min/svelte-purify)](https://npmjs.com/package/svelte-purify) [![ci.yml](https://github.com/jill64/svelte-purify/actions/workflows/ci.yml/badge.svg)](https://github.com/jill64/svelte-purify/actions/workflows/ci.yml)

💎 Safe html expansion for Svelte with DOMPurify

<!----- END GHOST DOCS HEADER ----->

## Installation

```sh
npm i svelte-purify
```

## Usage

```svelte
<script>
  import { Render } from 'svelte-purify'

  const code = '<h1>Hello World</h1>'
</script>

<Render html={code} config={/* DOMPurify Config */} />

<!-- Equivalent to {@html code} -->
```

## SSR

`Render` uses DOMPurify internally and only works in the browser or at Node runtime.  
There are 3 options for use in non-node environments such as the edge.

1. Use [`svelte-sanitize`](https://github.com/jill64/svelte-sanitize)

Enables the use of html rendering in non-node environments at the expense of detailed compatibility.  
Please check the link for details.

```svelte
<script>
  import { Render } from 'svelte-sanitize'
</script>

<Render html={/* ... */} />
```

2. Use Browser Only Entry Point

In this case, html is not rendered on the server.

```svelte
<script>
  import { Render } from 'svelte-purify/browser-only'
</script>

<Render html={/* ... */} />
```

3. Manual Config

Conditional Exports is not yet fully supported, so `2.` may not work.  
Sacrificing bundle size avoids this problem.

```sh
npm i dompurify
```

```svelte
<script>
  import { browser } from '$app/environment'
  import DOMPurify from 'dompurify'
</script>

{@html browser ? DOMPurify.sanitize(/* ... */) : 'server-fallback-value'}
```
