import axios from 'axios';

export const loading = () => ({
    type: 'LOADING'
})

export const loaded = () => ({
    type: 'LOADED'
})

const practiseAdded = (practise) => ({
    type: 'ADD_PRACTISE',
    practise:practise

})

const initPractises = (practises) => ({
    type: 'INIT_PRACTISES',
    practises: practises
})

export const deletePractise = (id) => ({
    type: 'DELETE_PRACTISE',
    id:id
    
})

export const addPractise = (access_token, practise) => {
    return (dispatch) => {
        dispatch(loading());
        axios.post('https://localhost:8443/practises?token=' + access_token, practise)
                .then(
                    response => {
                        dispatch(practiseAdded(practise));
                        dispatch(loaded()); 
                    },
                    error => {
                        dispatch(loaded()); 
                        console.error("An error occured", error);
                     }
                );
    }
}

export const getPractises = (token) => {
    return (dispatch) => {
        dispatch(loading());
        return axios.get('https://localhost:8443/practises?token=' + token)
                .then(
                    response => {
                        dispatch(initPractises(response.data));
                        dispatch(loaded()); 
                        return response.data;
                    },
                    error => {
                        dispatch(loaded()); 
                        console.error("An error occured", error);
                     }
                );
    }
}

export const getPractise = (token, id) => {
    return (dispatch) => {
        dispatch(loading());
        return axios.get('https://localhost:8443/practises/' + id + '?token=' + token)
                .then(
                    response => { 
                        dispatch(loaded()); 
                        return response.data;
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