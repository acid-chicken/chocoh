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

    const audioContext =
      window.aoba &&
      window.aoba.utils &&
      window.aoba.utils.audioContext

    const stream = new MediaStream([
      canvas instanceof HTMLCanvasElement && canvas.captureStream(),
      audioContext instanceof AudioContext && audioContext.createMediaStreamDestination().stream
    ].filter(x => x).reduce((a, c) => a.concat(c.getTracks()), []))

    recorder = new MediaRecorder(stream)

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

  const shot = () => {
    const [canvas] = document.getElementsByTagName('canvas')

    if (!canvas) {
      return
    }

    const chunks = []

    const push = e => {
      if (e.data) {
        chunks.push(e.data)

        recorder.stop()
      }
    }

    const pull = e => {
      push(e)

      const canvas = document.createElement('canvas')

      const video = document.createElement('video')

      video.src = URL.createObjectURL(new Blob(chunks.splice(0)))

      video.autoplay = true

      const listener = e => {
        video.pause()

        canvas.width = video.width = video.videoWidth

        canvas.height = video.height = video.videoHeight

        const context = canvas.getContext('2d')

        context.drawImage(video, 0, 0, canvas.width, canvas.height)

        const a = document.createElement('a')

        a.download = Date.now() + '.png'

        a.href = canvas.toDataURL()

        a.dispatchEvent(new MouseEvent('click', {
          bubbles: false
        }))
      }

      video.addEventListener('loadeddata', listener)
    }

    const recorder = new MediaRecorder(canvas.captureStream())

    recorder.addEventListener('dataavailable', push)

    recorder.addEventListener('stop', pull)

    recorder.start(1)
  }

  const listener = e =>
    (/^(Mac|Apple|i[A-Z])/.test(navigator.platform) ? e.metaKey : e.ctrlKey) &&
    e.altKey &&
    !(e.code === 'Comma' ? start() :
      e.code === 'Period' ? stop() :
      e.code === 'Slash' ? shot() : true) &&
    e.preventDefault()

  addEventListener('keydown', listener, true)
})()
