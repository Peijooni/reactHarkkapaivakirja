import React from 'react';
import { connect } from 'react-redux'
import {withRouter} from 'react-router-dom';
import {login, loaded} from '../../actions/index';
import { Dimmer, Loader } from 'semantic-ui-react';
import axios from 'axios';
import environment from '../../environments/env';

class Login extends React.Component {

    getToken = async (code) => {
        console.log("id:", environment.clientId)
        const body = {
            client_id: environment.clientId,
            client_secret: environment.clientSecret,
            code: code
          }
              
          let res = await axios.post('https://cors-anywhere.herokuapp.com/https://github.com/login/oauth/access_token', body);
          let splitted = res.data.split("&");
          splitted = splitted[0].split("=");
          if(splitted[0] === "access_token") {
            return splitted[1];
          }    
          return null;
    }

    userExists = async (access_token) => {
        return await axios.get(environment.apiURL+'/userExists?token='+access_token, {withCredentials: true});
    }

    createUser = async (token) => {
          return await axios.get(environment.apiURL+'/createUser?token=' + token, {withCredentials: true});
    }

    componentDidMount() {
        
        const query = new URLSearchParams(window.location.search);
        const code = query.get('code');
        const securityState = query.get('state');
        if(code && securityState) {
            if(securityState === "abcddcba12344321") {
                const access_token = this.getToken(code);
                access_token.then(token => {
                    this.userExists(token)
                    .then(exists => {
                        if(exists) {
                            this.props.dispatch(login(token));
                            this.props.dispatch(loaded());
                            this.props.history.push('/app');
                        } else {
                            this.createUser(token)
                            .then(id => { 
                                console.log("created new user")
                                this.props.dispatch(login(token));
                                this.props.dispatch(loaded());
                                this.props.history.push('/app');
                            },
                                error => console.log(error));
                        }
                    })                     
                })
                .catch(error => console.error(error));
            } else {
                this.props.history.push('/logout');
            }
        } else {
            this.props.history.push('/logout');
        }

    }
    
    render() {
        if(this.props.loading === null) {
        return (
            <React.Fragment>
            </React.Fragment>
        )   
        } else {
            return (
                <Dimmer active inverted>
                    <Loader inverted size='big'>Logging in</Loader>
                </Dimmer>
            )   
        }
    }
}

const mapStateToProps = (state) => {
    return {
        access_token: state,
        loading: state.loading
    }
}

export default withRouter(connect(mapStateToProps)(Login));
