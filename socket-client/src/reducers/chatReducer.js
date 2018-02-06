
import {
  ADD_MESSAGE, SET_USERNAME
} from '../actions/chatActions'

const initialState = {
  messages: [],
  username: "unknown"
}
const chatReducer = (state=initialState, action) => {
  switch (action.type) {
    case ADD_MESSAGE : {
      return {
        ...state, 
        messages: [
          ...state.messages,
          action.message
        ]
      }
    }
    case SET_USERNAME : {
      return {
        ...state, 
        username: action.username
      }
    }
    default : {
      return state
    } 
  }
}

export default chatReducer