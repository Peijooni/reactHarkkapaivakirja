import { combineReducers } from 'redux'
import practises from './practises'
import login from './login'
import loading from './loading'

export default combineReducers({
    practises,
    login,
    loading
})