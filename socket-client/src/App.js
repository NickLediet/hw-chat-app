import React, { Component } from 'react';
import socketIOClient from 'socket.io-client'

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
      <div style={{ textAlign: "center" }}>
      <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ducimus deleniti quia perspiciatis recusandae obcaecati dolor animi quasi praesentium? Quis consequatur cupiditate facere quasi? Debitis, at. Sed accusamus officiis corporis beatae in, quod ipsa ea cumque nam hic? Blanditiis recusandae molestiae, numquam quam, ipsum quasi animi earum autem sunt libero pariatur.</p>
        <button onClick={() => this.send()}>Change Color</button>

        <button id="blue" onClick={() => this.setColor('blue')}>Blue</button>
        <button id="red" onClick={() => this.setColor('red')}>Red</button>
      </div>  
    );
  }
}

export default App;
