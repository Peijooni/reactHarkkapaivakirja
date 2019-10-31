import React from 'react';
import { Button, Header } from 'semantic-ui-react'
import { Login, Logout } from '../../actions'
import { connect } from 'react-redux'

class AppHeader extends React.Component {

   login = () => {
      this.props.dispatch(Login("abcdefg"));
   }

   logout = () => {
      this.props.dispatch(Logout());
   }

  render() {
     return (
      <React.Fragment>
         <Header>Harjoituspäiväkirja</Header>         
            <Button type='submit' onClick={this.login}>Login</Button>
            <Button type='submit' onClick={this.logout}>Logout</Button>
      </React.Fragment>
     )
   }
}

export default connect()(AppHeader);