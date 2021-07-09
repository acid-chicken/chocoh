'use strict'

!(() => {
  const prefix = 'chocoh:'

  const enableKey = prefix + 'enable'

  const modeKey = prefix + 'mode'
  
  const firstattrKey = prefix + 'firstattr'

  const ids = [
    'toggle',
    '_none',
    '_largeonly',
    '_smallonly',
    'none',
    'red',
    'green',
    'blue',
    'cyan',
    'magenta',
    'yellow',
    'black',
    'white',
    'amai'
  ]

  const inputs = ids.map(x => document.getElementById(x)).filter(x => x)

  const labels = ids.map(x => document.getElementById(x + '_label')).filter(x => x)

  const listener = _ => {
    for (const input of inputs) {
      input.checked = input.id === 'toggle' ?
        ~~localStorage.getItem(enableKey) :
        input.id.startsWith('_') ?
          localStorage.getItem(firstattrKey) === input.value :
          localStorage.getItem(modeKey) === input.value
    }

    browser.proxy.settings.set({
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
    localStorage.setItem(modeKey, 'none')
  }
  
  if (!localStorage.getItem(firstattrKey)) {
    localStorage.setItem(firstattrKey, '')
  }

  document.addEventListener('storage', listener)

  listener()

  for (const input of inputs) {
    if (input.id === 'toggle') {
      input.addEventListener('change', _ => {
        localStorage.setItem(enableKey, (~~input.checked).toString())

        listener()
      })
    } else if (input.id.startsWith('_')) {
      input.addEventListener('change', _ => {
        localStorage.setItem(firstattrKey, input.value)

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
    label.innerText = browser.i18n.getMessage('index__' + label.id)
  }
})()
