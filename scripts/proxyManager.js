'use strict'

!(() => {
  const prefix = 'chocoh:'

  const enableKey = prefix + 'enable'

  const listener = _ => {
    (browser || chrome).proxy.settings.set({
      value: ~~localStorage.getItem(enableKey) ? {
        http: 'http://localhost:8334',
        httpProxyAll: true,
        proxyType: 'manual'
      } : {
        proxyType: 'system'
      }
    })
  }

  document.addEventListener('storage', listener)
})()
