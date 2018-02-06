import React, { Component } from 'react';
import socketIOClient from 'socket.io-client'
import {Route} from 'react-router'
import Home from './pages/Home'
import Chat from './pages/Chat'

class App extends Component {
  constructor() {
    super()
    this.state = {
      endpoint: "http://localhost:4001",
      color: 'white'
    }
  }

  send = () => {
    const socket = socketIOClient(this.state.endpoint)
    socket.emit('change color', this.state.color)
  }

  setColor = color => this.setState({color})

  render() {
    const socket = socketIOClient(this.state.endpoint)

    socket.on('change color', color => {
      document.body.style.color = color
    })
    return (
      <div>
        <Route path="/home" component={Home} />
        <Route path="/chat" component={Chat} />
      </div>
    );
  }
}

export default App;
