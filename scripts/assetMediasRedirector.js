'use strict'

!(() => {
  const prefix = 'chocoh:'

  const enableKey = prefix + 'enable'

  const onBeforeRequest = e => ~~localStorage.getItem(enableKey) ? {
    redirectUrl: e.url.replace('//shinycolors.enza.fun/assets/', `//shinycolors.enza.fun/chocoh/medias/`)
  } : {
  }

  const filter = {
    urls: [
      'https://shinycolors.enza.fun/assets/*'
    ],
    types: [
      'media'
    ]
  }

  const onBeforeRequestExtraInfoSpec = [
    'blocking'
  ]

  !(browser || chrome).webRequest.onBeforeRequest.addListener(onBeforeRequest, filter, onBeforeRequestExtraInfoSpec)
})()
