import React from 'react'
import ReactDOM from 'react-dom'

export default new class {
  say(element) {
    ReactDOM.render(<span>{this.message()}: {React.version}</span>, element)
  }

  message() {
    return 'Hello React'
  }
}
