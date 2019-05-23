'use strict'

!(() => {
  const chunks = []

  let recorder = null

  const push = e => {
    if (e.data) {
      chunks.push(e.data)
    }
  }

  const pull = e => {
    push(e)

    const a = document.createElement('a')

    a.download = Date.now() + '.webm'

    a.href = URL.createObjectURL(new Blob(chunks.splice(0)))

    a.dispatchEvent(new MouseEvent('click', {
      bubbles: false
    }))
  }

  const start = () => {
    if (recorder) {
      return
    }

    const [canvas] = document.getElementsByTagName('canvas')

    if (!canvas) {
      return
    }

    document.body.classList.add('record')

    recorder = new MediaRecorder(canvas.captureStream())

    recorder.addEventListener('dataavailable', push)

    recorder.addEventListener('stop', pull)

    recorder.start()
  }

  const stop = () => {
    if (!(recorder instanceof MediaRecorder)) {
      return
    }

    recorder.stop()

    document.body.classList.remove('record')
  }

  const listener = e =>
    (/^(Mac|Apple|i[A-Z])/.test(navigator.platform) ? e.metaKey : e.ctrlKey) &&
    e.altKey &&
    !(e.code === 'Comma' ? start() :
      e.code === 'Period' ? stop() : true) &&
    e.preventDefault()

  addEventListener('keydown', listener, true)
})()
