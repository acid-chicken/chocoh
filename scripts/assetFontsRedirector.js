'use strict'

!(() => {
  const prefix = 'chocoh:'

  const enableKey = prefix + 'enable'

  const onBeforeRequest = e => localStorage.getItem(enableKey) ? {
    redirectUrl: e.url.replace('//shinycolors.enza.fun/assets/', '//shinycolors.enza.fun/chocoh/fonts/')
  } : {
  }

  const filter = {
    urls: [
      'https://shinycolors.enza.fun/assets/fonts/*'
    ],
    types: [
      'font'
    ]
  }

  const onBeforeRequestExtraInfoSpec = [
    'blocking'
  ]

  browser.webRequest.onBeforeRequest.addListener(onBeforeRequest, filter, onBeforeRequestExtraInfoSpec)
})()
