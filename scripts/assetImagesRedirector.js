'use strict'

!(() => {
  const prefix = 'chocoh:'

  const enableKey = prefix + 'enable'

  const modeKey = prefix + 'mode'

  const firstattrKey = prefix + 'firstattr'
  
  const host = ['fun', 'azne', 'srolocynihs'].reduce((a, c) => Array.prototype.reduce.call(c, (a, c) => c + a) + '.' + a)

  const onBeforeRequest = e => ~~localStorage.getItem(enableKey) && localStorage.getItem(modeKey) !== 'none' ? {
    redirectUrl: e.url.replace(`//${host}/assets/`, `//${host}/chocoh/images/${localStorage.getItem(modeKey)}${localStorage.getItem(firstattrKey)}/`)
  } : {
  }

  const filter = {
    urls: [
      `https://${host}/assets/*`
    ],
    types: [
      'image'
    ]
  }

  const onBeforeRequestExtraInfoSpec = [
    'blocking'
  ]

  browser.webRequest.onBeforeRequest.addListener(onBeforeRequest, filter, onBeforeRequestExtraInfoSpec)
})()
