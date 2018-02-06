
/*
  Set username
  Set messages
*/

export const SET_USERNAME = "SET_USERNAME"
export const ADD_MESSAGE = "ADD_MESSAGE"

export const setUsername = (username) => ({ type: SET_USERNAME, username})

export const addMessage = (message) => ({ type: ADD_MESSAGE, message })

// {
//   message: "",
//   from: ""
// }
