/**
 * TODO: Build basic sign in screen that will ask for a user name
 */

import React, { Compent, Component } from 'react'
import { connect } from 'react-redux'
import {Redirect} from 'react-router'
import {
  addMessage, setUsername
} from '../actions/chatActions'

const mapDispatchToProps = (dispatch) => 
  ({
    setUserName: (username) => dispatch(setUsername(username))
  })

  
class Home extends Component {
  constructor() {
    super()
  }
  /**
   * Panel
   *  Form
   */

  sendUserName = (e) => {
    e.preventDefault()
    this.props.setUserName(this.input.value)
  }

  render() {
    return this.props.username != "" ?
     <Redirect to="/chat" /> :
       (
      <div className="container">
      {this.props.username != "" ? <h1>{this.props.username}</h1> : ""}
        <div className="col-6 offset-3 mt-5"> 
        <div className="card bg-light mt-3">
          <div className="card-body bg-light"> 
            <h1 className="text-center">Set a username!</h1>
            <form>
              <div className="form-group">
                <label htmlFor="username">Username</label>
                <input ref={(input) => this.input = input } type="text" className="form-control" id="username" aria-describedby="emailHelp" placeholder="Enter Username"/>
              </div>
              <button onClick={(e) => this.sendUserName(e)} type="submit" className="btn btn-primary btn-large">Submit</button>
            </form>
          </div>
          </div>
        </div>
      </div>
    )
  }
}

export default connect(state => state, mapDispatchToProps)(Home)