import axios from 'axios';

export const loading = () => ({
    type: 'LOADING'
})

export const loaded = () => ({
    type: 'LOADED'
})

export const addPractise = (practise) => ({
    type: 'ADD_PRACTISE',
    practise:practise

})

export const deletePractise = (id) => ({
    type: 'DELETE_PRACTISE',
    id:id
    
})

export const getPractises = (token) => {
    return (dispatch) => {
        dispatch(loading());
        return axios.get('https://localhost:8443/practises?token=' + token)
                .then(
                    response => { 
                        console.log(response.data); 
                        dispatch(loaded()); 
                        return response.json() 
                    },
                    error => {
                        dispatch(loaded()); 
                        console.error("An error occured", error);
                     }
                );
    }
}

export const login = (access_token) => ({
    type: 'LOGIN',
    access_token:access_token
    
})

export const logout = () => ({
    type: 'LOGOUT',
    access_token: null
    
})