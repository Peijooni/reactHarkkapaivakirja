const login = (state = [], action) => {
    switch (action.type) {
      case 'LOGIN':
          // Add database logic?
        return [
          {
            access_token: action.access_token
          }
        ]
      case 'LOGOUT':
        return [{
            access_token: null
          }]
      default:
        return state
    }
  }
  
  export default login;