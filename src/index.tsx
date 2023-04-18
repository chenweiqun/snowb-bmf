import React from 'react'
import ReactDOM from 'react-dom'

import App from './app/App'

// import * as serviceWorkerRegistration from './serviceWorkerRegistration'

ReactDOM.render(<App />, document.getElementById('root'))

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://cra.link/PWA
// serviceWorkerRegistration.register({
//   onUpdate(registration) {
//     const worker = registration.waiting
//     if (!worker) return

//     const channel = new MessageChannel()

//     channel.port1.onmessage = () => {
//       window.dispatchEvent(new CustomEvent('updateVerion', { detail: worker }))
//     }

//     worker.postMessage({ type: 'SKIP_WAITING' }, [channel.port2])
//   },
// })
