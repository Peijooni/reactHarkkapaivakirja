import React from 'react';
import { connect } from 'react-redux'
import {withRouter} from 'react-router-dom';
import {login, loaded} from '../../actions/index';
import axios from 'axios';

class Login extends React.Component {

    getToken = async (code) => {
        const body = {
            client_id: '1159e004bdfd8fd0d590',
            client_secret: 'daa9d17cefe8ca51591ae9b06601541b260c70db',
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

    componentDidMount() {
        
        const query = new URLSearchParams(window.location.search);
        const code = query.get('code');
        const securityState = query.get('state');
        if(code && securityState) {
            const access_token = this.getToken(code)
            access_token.then(token => {
                this.props.dispatch(login(token));
                this.props.dispatch(loaded());
                this.props.history.push('/app');    
            });
        } else {
            this.props.history.push('/logout');
        }

      }
    
    render() {
        return (
        <React.Fragment>
        </React.Fragment>
        )   
    }
}

const mapStateToProps = (state) => {
    console.log("stateToProps",state);
    return {
        access_token: state,
    }
}

export default withRouter(connect(mapStateToProps)(Login));
