// Global, module-level Strudel player.
// Lives outside React, so route changes / re-renders can never interrupt it.
import { initStrudel } from '@strudel/web'
import music from '../Components/Utils/music.js'

// Same sample bank the Strudel REPL uses for "piano"
const PIANO_SAMPLES =
  'https://raw.githubusercontent.com/felixroos/dough-samples/main/piano.json'

let status = 'idle' // 'idle' | 'loading' | 'playing' | 'error'
let ready = null    // init promise (runs once, on the first click)
const listeners = new Set()

const setStatus = (next) => {
  status = next
  listeners.forEach((fn) => fn())
}

const init = () => {
  if (!ready) {
    ready = Promise.resolve(
      initStrudel({ prebake: () => globalThis.samples(PIANO_SAMPLES) })
    ).catch((err) => {
      ready = null // allow a retry on the next click
      throw err
    })
  }
  return ready
}

export const subscribe = (fn) => {
  listeners.add(fn)
  return () => listeners.delete(fn)
}

export const getStatus = () => status

export const startMusic = async () => {
  if (status === 'loading' || status === 'playing') return
  setStatus('loading')
  try {
    await init()
    await globalThis.evaluate(music)
    setStatus('playing')
  } catch (err) {
    console.error('Strudel failed to start:', err)
    setStatus('error')
  }
}

export const stopMusic = async () => {
  if (status !== 'playing') return
  setStatus('idle') // update the button straight away

  try { await globalThis.evaluate('silence') } catch { /* ignore */ }
  try { globalThis.hush?.() } catch { /* ignore */ }
 

  try { await getContext()?.suspend() } catch { /* ignore */ }
}
 


export const toggleMusic = () =>
  status === 'playing' ? stopMusic() : startMusic()