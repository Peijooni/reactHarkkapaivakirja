const loading = (state =  null, action) => {
    switch (action.type) {
      case 'LOADING':
          // Add database logic?
        return "Loading"
          
      case 'LOADED':
        return null
      default:
        return state
    }
  }
  
  export default loading;