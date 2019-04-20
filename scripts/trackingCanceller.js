'use strict'

!(() => {
  const onBeforeRequest = _ => ({ cancel: true })

  const filter = {
    urls: [
      'https://www.googletagmanager.com/*',
      'https://tracking.shinycolors.enza.fun/*',
      'https://sentry.io/*',
      'https://s.yjtag.jp/*'
    ]
  }

  const onBeforeRequestExtraInfoSpec = [
    'blocking'
  ]

  (browser || chrome).webRequest.onBeforeRequest.addListener(onBeforeRequest, filter, onBeforeRequestExtraInfoSpec)
})()
