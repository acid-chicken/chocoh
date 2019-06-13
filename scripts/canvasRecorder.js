'use strict'

!(() => {
  const context = new AudioContext()

  let ses = {
  }

  const base = ['https:', '', 'shinycolors.enza.fun', 'assets']

  for (const [k, v] of Object.entries({
    camera: '51d3869d32bf9dab4a7ef6c1921eb011aa89e276ce4e4c327100ec297cdfc9a0.m4a?v=0',
    oven: 'd1c8930d816be1515c41dd84dfee0409b58633371df4812c3b17f771cbe7ade6.m4a?v=0',
    whistle: '7992b8f129d9848b4dddb4b037b3a4772525dd2cbf4b4e6adce23c42e2eb34a7.m4a?v=0'
  })) {
    fetch([...base, v].join('/'))
      .then(x => x.arrayBuffer())
      .then(x => context.decodeAudioData(x))
      .then(x => ses[k] = x)
  }

  const play = name => ses[name] && (source => (
    source.buffer = ses[name],
    source.connect(context.destination),
    source.start()
  ))(context.createBufferSource())

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

    play('oven')

    a.dispatchEvent(new MouseEvent('click', {
      bubbles: false
    }))

    recorder = null
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

    play('whistle')

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

        play('camera')

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

  const fpsContainer = document.body.appendChild(document.createElement('div'))

  fpsContainer.style = 'background:#fff7;border-radius:6px 0 0 0;bottom:0;font:12px/2 "Helvetica Neue",Arial,status-bar,sans-serif;padding:0 1ex;position:absolute;right:0;z-index:1'

  const fps = fpsContainer.appendChild(new Text())

  const cache = Array(60)

  let index = 0

  let origin = null

  const clock = e => {
    if (origin) {
      cache[index++] = e - origin
    }

    origin = e

    if (index === 60) {
      index = 0

      fps.data = `${(60000 / cache.reduce((a, c) => a + c, 0)).toFixed(2)} FPS`
    }

    requestAnimationFrame(clock)
  }

  requestAnimationFrame(clock)
})()
