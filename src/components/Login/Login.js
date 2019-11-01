import React from 'react';
import { connect } from 'react-redux'

class Login extends React.Component {    

    render() { 
        console.log("props: ",this.props);
        return (
        <React.Fragment>
            
        </React.Fragment>
        )   
    }
}

const mapStateToProps = (state) => {
    return {
        a: 42,
        access_token: state.login,
    }
}

export default connect(mapStateToProps)(Login);
