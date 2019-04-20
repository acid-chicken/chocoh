'use strict'

!(() => {
  const prefix = 'chocoh:'

  const enableKey = prefix + 'enable'

  const modeKey = prefix + 'mode'

  const ids = [
    'toggle',
    'red',
    'green',
    'blue'
  ]

  const inputs = ids.map(x => document.getElementById(x)).filter(x => x)

  const labels = ids.map(x => document.getElementById(x + '_label')).filter(x => x)

  const listener = _ => {
    for (const input of inputs) {
      input.checked = input.id === 'toggle' ?
        ~~localStorage.getItem(enableKey) :
        localStorage.getItem(modeKey) === input.value
    }

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

  if (!localStorage.getItem(enableKey)) {
    localStorage.setItem(enableKey, '0')
  }

  if (!localStorage.getItem(modeKey)) {
    localStorage.setItem(modeKey, 'blue')
  }

  document.addEventListener('storage', listener)

  listener()

  for (const input of inputs) {
    if (input.id === 'toggle') {
      input.addEventListener('change', _ => {
        localStorage.setItem(enableKey, (~~input.checked).toString())

        listener()
      })
    } else {
      input.addEventListener('change', _ => {
        localStorage.setItem(modeKey, input.value)

        listener()
      })
    }
  }

  for (const label of labels) {
    label.innerText = (browser || chrome).i18n.getMessage('index__' + label.id)
  }
})()