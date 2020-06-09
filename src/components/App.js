import React from 'react'
import { hot } from 'react-hot-loader'

class App extends React.Component {
  render() {
    return (
      <div>
        <h1>Hello world</h1>
        <img src="assets/img/hello.png" alt="hello"></img>
      </div>
    )
  }
}

export default hot(module)(App)
