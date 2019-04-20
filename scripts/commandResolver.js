'use strict'

!(() => {
  const prefix = 'chocoh:'

  const enableKey = prefix + 'enable'

  const modeKey = prefix + 'mode'

  const listener = e => e === 'toggle' ?
    localStorage.setItem(enableKey, (~localStorage.getItem(enableKey)).toString()) :
    localStorage.setItem(modeKey, e)

  (browser || chrome).commands.onCommand.addListener(listener)
})
