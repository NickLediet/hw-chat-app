/**
 * Show individual chat rooms
 */

import React, { Component } from 'react';
import socketIOClient from 'socket.io-client'
import {Route, matchPath} from 'react-router'
import {connect} from 'react-redux'

import '../Chat.css'
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
    socket.emit('chat message', this.message.value) // Send message to socket
    this.message.value = "" // reset chatbox
  }

  setColor = color => this.setState({color})

  render() {
    // SOCKET INIT
    const socket = socketIOClient(this.state.endpoint)
    socket.on('chat message', message => this.props.addMessage(message))
    return (
    <div className="container">
      <div className="row chat-window col-10 mt-4">
          <div className="col-xs-12 col-md-12">
            <div className="panel panel-default">
                  <div className="panel-heading top-bar">
                      <div className="col-md-8 col-xs-8">
                          <h3 className="panel-title"><span className="fa fa-comments"></span> Chatting!</h3>
                      </div>
                  </div>
                  <div className="panel-body msg_container_base">
                      <div className="row msg_container base_sent">
                      {          
                        this.props.messages.length > 0 ? 
                        this.props.messages.map((el, i) => 
                              <div className={`col-md-10 col-xs-10 ${i % 2 == 0 ? 'offset-2' : ''}`}>
                                  <div className="messages msg_sent">
                                      {el}
                                      <time datetime={new Date()}>Timothy</time>
                                  </div>
                              </div>
                        ) : 
                        <div className="no-msg col-10 offset-1">
                          <h3>There doesn't seem to be any conversation going on here!</h3>
                          <h4 >Why don't you break the ice ⛏️</h4>
                        </div>
                      }
                  </div>
                  </div>
                  <div className="panel-footer">
                      <div className="input-group">
                          <input ref={(message) => this.message = message} id="btn-input" type="text" className="form-control input-sm chat_input" placeholder="Write your message here..." />
                          <span className="input-group-btn">
                          <button onClick={() => this.sendMessage(socket)}className="btn btn-primary" id="btn-chat">Send</button>
                          </span>
                      </div>
                  </div>
          </div>
          </div>
      </div>
    </div>
    );
  }
}

export default connect(state => state, mapActionsToDispatch)(Chat)
