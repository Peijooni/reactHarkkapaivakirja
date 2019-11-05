import React from 'react';
import { connect } from 'react-redux'
import {withRouter} from 'react-router-dom';
import {login, loaded} from '../../actions/index';

class Login extends React.Component {

    componentDidMount() { 
        
        const query = new URLSearchParams(window.location.search);
        const code = query.get('code');
        const securityState = query.get('state');
        if(code && securityState) {
            this.props.dispatch(login(code));
            this.props.dispatch(loaded());
            this.props.history.push('/app');
        } else {
            console.log("fhdgh")
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
