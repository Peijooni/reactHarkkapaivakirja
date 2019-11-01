const login = (state =  null, action) => {
    switch (action.type) {
      case 'LOGIN':
          // Add database logic?
        return action.access_token
          
      case 'LOGOUT':
        return null
      default:
        return state
    }
  }
  
  export default login;