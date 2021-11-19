import axios from 'axios';

export const loading = () => ({
    type: 'LOADING'
})

export const loaded = () => ({
    type: 'LOADED'
})

export const login = (access_token) => ({
    type: 'LOGIN',
    access_token:access_token
    
})

export const logout = () => ({
    type: 'LOGOUT',
    access_token: null
    
})

const practiseAdded = (practise) => ({
    type: 'ADD_PRACTISE',
    practise: practise

})

const practiseEdited = (practise, id) => ({
    type: 'EDIT_PRACTISE',
    practise: practise,
    id: id
})

const initPractises = (practises) => ({
    type: 'INIT_PRACTISES',
    practises: practises
})

const practiseDeleted = (id) => ({
    type: 'DELETE_PRACTISE',
    id: id    
})


export const addPractise = (access_token, practise) => {
    return (dispatch) => {
        dispatch(loading());
        axios.post('api/practises?token=' + access_token, practise, {withCredentials: true})
                .then(
                    response => {
                        dispatch(practiseAdded(practise));
                        dispatch(loaded());
                        window.location.reload();
                    },
                    error => {
                        dispatch(loaded()); 
                        console.error("An error occured", error);
                     }
                );
    }
}

export const getPractises = (access_token) => {
    return (dispatch) => {
        dispatch(loading());
        return axios.get('api/practises?token=' + access_token, {withCredentials: true})
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

export const getPractise = (access_token, id) => {
    return (dispatch) => {
        dispatch(loading());
        return axios.get('api/practises/' + id + '?token=' + access_token, {withCredentials: true})
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

export const editPractise = (access_token, practise, id) => {
    return (dispatch) => {
        dispatch(loading());
        return axios.put('api/practises/' + id + '?token=' + access_token, practise, {withCredentials: true})
                .then(
                    response => {
                        dispatch(practiseEdited(practise, id));
                        dispatch(loaded());
                    },
                    error => {
                        dispatch(loaded()); 
                        console.error("An error occured", error);
                     }
                );
    }
}

export const deletePractise = (access_token, id) => {
    return (dispatch) => {
        dispatch(loading());
        return axios.delete('api/practises/' + id + '?token=' + access_token, {withCredentials: true})
                .then(
                    response => {
                        dispatch(practiseDeleted(id));
                        dispatch(loaded());
                    },
                    error => {
                        dispatch(loaded()); 
                        console.error("An error occured", error);
                     }
                );
    }
}

