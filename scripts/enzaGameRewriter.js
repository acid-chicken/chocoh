'use strict'

!(() => {
  const decoder = new TextDecoder()

  const encoder = new TextEncoder()

  const insert = '.data.crossOrigin="anonymous",'

  const getOrCreate = data => data
    .replace(/([\s,])(\w)(\.data=new Image),\2/g, (_, p1, p2, p3) => `${p1}${p2}${p3},${p2}${insert}${p2}`)

  const bodyRewriter = requestId => (filter => {
    let builder = ''

    filter.ondata = e => {
      builder += decoder.decode(e.data, {
        stream: true
      })
    }

    filter.onstop = _ => {
      filter.write(encoder.encode(getOrCreate(builder)))
      filter.close()
    }
  })(browser.webRequest.filterResponseData(requestId))

  const onBeforeRequest = e => (bodyRewriter(e.requestId), {})

  const filter = {
    urls: [
      'https://shinycolors.enza.fun/enza-game.min.js',
      'https://shinycolors.enza.fun/enza-game.min.js?*'
    ],
    types: [
      'script'
    ]
  }

  const onBeforeRequestExtraInfoSpec = [
    'blocking'
  ]

  browser.webRequest.onBeforeRequest.addListener(onBeforeRequest, filter, onBeforeRequestExtraInfoSpec)
})()
