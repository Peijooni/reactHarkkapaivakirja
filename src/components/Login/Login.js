import React from 'react';
import { connect } from 'react-redux'
import {getPractises, login, loaded} from '../../actions/index';

class Login extends React.Component {

    componentDidMount() { 
        
        const query = new URLSearchParams(window.location.search);
        const code = query.get('code');
        const securityState = query.get('state');
        if(code && securityState) {
            console.log("code",code);
            console.log("state",securityState);
            this.props.dispatch(login(code));
            this.props.dispatch(loaded());
            //window.location.replace('http://localhost:4200/app');
        } 
              
        //window.location.replace('http://localhost:4200/logout');
        
      }
    
    render() {

        
        
        /*
        console.log("props: ",this.props);
        this.props.dispatch(getPractises("dfgdgh"));
        */
        return (
        <React.Fragment>
            <p>gdfg</p>
        </React.Fragment>
        )   
    }
}

const mapStateToProps = (state) => {
    console.log("stateToProps",state);
    return {
        a: 42,
        access_token: state,
    }
}

export default connect(mapStateToProps)(Login);
