export const addPractise = (practise) => ({
    type: 'ADD_PRACTISE',
    practise

})

export const deletePractise = (id) => ({
    type: 'DELETE_PRACTISE',
    id
    
})

export const Login = (access_token) => ({
    type: 'LOGIN',
    access_token
    
})

export const Logout = () => ({
    type: 'LOGOUT'
    
})