'use strict'

!(() => {
  const prefix = 'chocoh:'

  const enableKey = prefix + 'enable'

  const modeKey = prefix + 'mode'

  const onBeforeRequest = e => localStorage.getItem(enableKey) && localStorage.getItem(modeKey) !== 'none' ? {
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

  !(browser || chrome).webRequest.onBeforeRequest.addListener(onBeforeRequest, filter, onBeforeRequestExtraInfoSpec)
})()
