/**
 * Show individual chat rooms
 */

import React, { Component } from 'react';
import socketIOClient from 'socket.io-client'
import {Route, matchPath} from 'react-router'
import {connect} from 'react-redux'

import {addMessage} from "../actions/chatActions"

const mapActionsToDispatch = (dispatch) => 
  ({
    addMessage: (message) => dispatch(addMessage(message))
  })

class Chat extends Component {
  constructor() {
    super()
    this.state = {
      endpoint: "http://localhost:4001",
      color: 'white'
    }
  }

  sendMessage = (socket) => {
    this.props.addMessage(this.message.value)
  }

  setColor = color => this.setState({color})

  render() {
    const socket = socketIOClient(this.state.endpoint)

    socket.on('change color', color => {
      document.body.style.color = color
    })
    return (
      <div>
        {
          // TODO: set a uuid for each message
          this.props.messages.map((el, i) => <li key={i}>{el}</li>)
        }
        <input ref={(message) => this.message = message} type="text" placeholder="Your message"/>
        <button onClick={() => this.sendMessage()}>Send</button>
      </div>
    );
  }
}

export default connect(state => state, mapActionsToDispatch)(Chat)
