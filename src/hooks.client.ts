import { clientInit } from '@jill64/sentry-sveltekit-edge'

const onError = clientInit(
  'https://01c9cb8292c0cb410aeec58300adfa5d@o4505814639312896.ingest.sentry.io/4506326934945792'
)

export const handleError = onError()
