'use strict'

!(() => {
  const decoder = new TextDecoder()

  const encoder = new TextEncoder()

  const getOrCreate = data => data
    .replace('<meta charset="utf-8">', `<meta charset="utf-8">
<script>
const TrueAudio​Buffer = Audio​Buffer

class ChocohAudio​Buffer {
  constructor() {
    this.buffer = new TrueAudio​Buffer(...arguments)

    console.log(this, 'Audio​Buffer constructor', this.buffer, ...arguments)
  }

  get sampleRate() {
    const result = this.buffer.sampleRate

    console.log(this, 'Audio​Buffer.sampleRate get', result)

    return result
  }

  get length() {
    const result = this.buffer.length

    console.log(this, 'Audio​Buffer.length get', result)

    return result
  }

  get duration() {
    const result = this.buffer.duration

    console.log(this, 'Audio​Buffer.duration get', result)

    return result
  }

  get numberOfChannels() {
    const result = this.buffer.numberOfChannels

    console.log(this, 'Audio​Buffer.numberOfChannels get', result)

    return result
  }

  getChannelData() {
    const result = this.buffer.getChannelData(...arguments)

    console.log(this, 'AudioBuffer.getChannelData()', result, ...arguments)

    return result
  }

  copyFromChannel() {
    const result = this.buffer.copyFromChannel(...arguments)

    console.log(this, 'AudioBuffer.copyFromChannel()', result, ...arguments)

    return result
  }

  copyToChannel() {
    const result = this.buffer.copyToChannel(...arguments)

    console.log(this, 'AudioBuffer.copyToChannel()', result, ...arguments)

    return result
  }
}

window.Audio​Buffer = ChocohAudio​Buffer

const TrueAudioContext = AudioContext

class ChocohAudioContext {
  constructor() {
    this.context = new TrueAudioContext(...arguments)

    console.log(this, 'AudioContext constructor', this.context, ...arguments)
  }

  get baseLatency() {
    const result = this.context.baseLatency

    console.log(this, 'AudioContext.baseLatency get', result)

    return result
  }

  get outputLatency() {
    const result = this.context.outputLatency

    console.log(this, 'AudioContext.outputLatency get', result)

    return result
  }

  close() {
    const result = this.context.close(...arguments)

    console.log(this, 'AudioContext.close()', result, ...arguments)

    return result
  }

  createMediaElementSource() {
    const result = this.context.createMediaElementSource(...arguments)

    console.log(this, 'AudioContext.createMediaElementSource()', result, ...arguments)

    return result
  }

  createMediaStreamSource() {
    const result = this.context.createMediaStreamSource(...arguments)

    console.log(this, 'AudioContext.createMediaStreamSource()', result, ...arguments)

    return result
  }

  createMediaStreamDestination() {
    const result = this.context.createMediaStreamDestination(...arguments)

    console.log(this, 'AudioContext.createMediaStreamDestination()', result, ...arguments)

    return result
  }

  createMediaStreamTrackSource() {
    const result = this.context.createMediaStreamTrackSource(...arguments)

    console.log(this, 'AudioContext.createMediaStreamTrackSource()', result, ...arguments)

    return result
  }

  getOutputTimestamp() {
    const result = this.context.getOutputTimestamp(...arguments)

    console.log(this, 'AudioContext.getOutputTimestamp()', result, ...arguments)

    return result
  }

  suspend() {
    const result = this.context.suspend(...arguments)

    console.log(this, 'AudioContext.suspend()', result, ...arguments)

    return result
  }

  get audioWorklet() {
    const result = this.context.audioWorklet

    console.log(this, 'BaseAudioContext.audioWorklet  get', result)

    return result
  }

  get currentTime() {
    const result = this.context.currentTime

    console.log(this, 'BaseAudioContext.currentTime  get', result)

    return result
  }

  get destination() {
    const result = this.context.destination

    console.log(this, 'BaseAudioContext.destination  get', result)

    return result
  }

  get listener() {
    const result = this.context.listener

    console.log(this, 'BaseAudioContext.listener  get', result)

    return result
  }

  get sampleRate() {
    const result = this.context.sampleRate

    console.log(this, 'BaseAudioContext.sampleRate  get', result)

    return result
  }

  get state() {
    const result = this.context.state

    console.log(this, 'BaseAudioContext.state  get', result)

    return result
  }

  createAnalyser() {
    const result = this.context.createAnalyser(...arguments)

    console.log(this, 'BaseAudioContext.createAnalyser()', result, ...arguments)

    return result
  }

  createBiquadFilter() {
    const result = this.context.createBiquadFilter(...arguments)

    console.log(this, 'BaseAudioContext.createBiquadFilter()', result, ...arguments)

    return result
  }

  createBuffer() {
    const result = this.context.createBuffer(...arguments)

    console.log(this, 'BaseAudioContext.createBuffer()', result, ...arguments)

    return result
  }

  createBufferSource() {
    const result = this.context.createBufferSource(...arguments)

    console.log(this, 'BaseAudioContext.createBufferSource()', result, ...arguments)

    return result
  }

  createConstantSource() {
    const result = this.context.createConstantSource(...arguments)

    console.log(this, 'BaseAudioContext.createConstantSource()', result, ...arguments)

    return result
  }

  createChannelMerger() {
    const result = this.context.createChannelMerger(...arguments)

    console.log(this, 'BaseAudioContext.createChannelMerger()', result, ...arguments)

    return result
  }

  createChannelSplitter() {
    const result = this.context.createChannelSplitter(...arguments)

    console.log(this, 'BaseAudioContext.createChannelSplitter()', result, ...arguments)

    return result
  }

  createConvolver() {
    const result = this.context.createConvolver(...arguments)

    console.log(this, 'BaseAudioContext.createConvolver()', result, ...arguments)

    return result
  }

  createDelay() {
    const result = this.context.createDelay(...arguments)

    console.log(this, 'BaseAudioContext.createDelay()', result, ...arguments)

    return result
  }

  createDynamicsCompressor() {
    const result = this.context.createDynamicsCompressor(...arguments)

    console.log(this, 'BaseAudioContext.createDynamicsCompressor()', result, ...arguments)

    return result
  }

  createGain() {
    const result = this.context.createGain(...arguments)

    console.log(this, 'BaseAudioContext.createGain()', result, ...arguments)

    return result
  }

  createIIRFilter() {
    const result = this.context.createIIRFilter(...arguments)

    console.log(this, 'BaseAudioContext.createIIRFilter()', result, ...arguments)

    return result
  }

  createOscillator() {
    const result = this.context.createOscillator(...arguments)

    console.log(this, 'BaseAudioContext.createOscillator()', result, ...arguments)

    return result
  }

  createPanner() {
    const result = this.context.createPanner(...arguments)

    console.log(this, 'BaseAudioContext.createPanner()', result, ...arguments)

    return result
  }

  createPeriodicWave() {
    const result = this.context.createPeriodicWave(...arguments)

    console.log(this, 'BaseAudioContext.createPeriodicWave()', result, ...arguments)

    return result
  }

  createScriptProcessor() {
    const result = this.context.createScriptProcessor(...arguments)

    console.log(this, 'BaseAudioContext.createScriptProcessor()', result, ...arguments)

    return result
  }

  createStereoPanner() {
    const result = this.context.createStereoPanner(...arguments)

    console.log(this, 'BaseAudioContext.createStereoPanner()', result, ...arguments)

    return result
  }

  createWaveShaper() {
    const result = this.context.createWaveShaper(...arguments)

    console.log(this, 'BaseAudioContext.createWaveShaper()', result, ...arguments)

    return result
  }

  decodeAudioData() {
    const result = this.context.decodeAudioData(...arguments)

    console.log(this, 'BaseAudioContext.decodeAudioData()', result, ...arguments)

    return result
  }

  addEventListener() {
    const result = this.context.addEventListener(...arguments)

    console.log(this, 'EventTarget.addEventListener()', result, ...arguments)

    return result
  }

  removeEventListener() {
    const result = this.context.removeEventListener(...arguments)

    console.log(this, 'EventTarget.removeEventListener()', result, ...arguments)

    return result
  }

  dispatchEvent() {
    const result = this.context.dispatchEvent(...arguments)

    console.log(this, 'EventTarget.dispatchEvent()', result, ...arguments)

    return result
  }
}

window.AudioContext = ChocohAudioContext
</script>`)
    .replace(/window\.console\.\w+\s*=/g, 'window.console.mitsumine =')

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
  })((browser || chrome).webRequest.filterResponseData(requestId))

  const onBeforeRequest = e => (bodyRewriter(e.requestId), {})

  const filter = {
    urls: [
      'https://shinycolors.enza.fun/*'
    ],
    types: [
      'main_frame'
    ]
  }

  const onBeforeRequestExtraInfoSpec = [
    'blocking'
  ]

  browser.webRequest.onBeforeRequest.addListener(onBeforeRequest, filter, onBeforeRequestExtraInfoSpec)
})()
