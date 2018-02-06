/**
 * TODO: Build basic sign in screen that will ask for a user name
 */

import React, { Compent, Component } from 'react'
import { connect } from 'react-redux'
import {
  addMessage, setUsername
} from '../actions/chatActions'

const mapDispatchToProps = (dispatch) => 
  ({
    setUserName: (username) => dispatch(setUsername(username))
  })


const AppStyles = {
  background: `url(https://images.pexels.com/photos/711009/pexels-photo-711009.jpeg?w=940&h=650&auto=compress&cs=tinysrgb)`,
  backgroundSize: "cover",
  height: "100vh",

}
  
class Home extends Component {
  constructor() {
    super()
  }

  render() {
    return (
      <div style={AppStyles}>
          <div style={{margin: "0 auto", width: "60vw", backgroundColor: "rgba(0,0,0,0)"}}>
            <h1 className="text-center text-light">Enter your username you would like to use</h1>
            <div class="input-group input-group-lg">
              <div class="input-group-prepend">
                <span class="input-group-text" id="inputGroup-sizing-lg">Username</span>
              </div>
              <input type="text" class="form-control" aria-label="Large" aria-describedby="inputGroup-sizing-sm"/>
            </div>
            <div class="input-group input-group-lg mt-2">
              <div class="input-group-prepend">
                <span class="input-group-text" id="inputGroup-sizing-lg">Img Url</span>
              </div>
              <input type="text" class="form-control" aria-label="Large" aria-describedby="inputGroup-sizing-sm"/>
            </div>
          </div>
          
      </div>
    )
  }
}

export default connect(state => state, mapDispatchToProps)(Home)