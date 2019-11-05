import React from 'react';
import { Button, Header } from 'semantic-ui-react'
import {withRouter} from 'react-router-dom';
import { logout } from '../../actions'
import { connect } from 'react-redux'

class AppHeader extends React.Component {

   login = () => {
      this.props.history.push('/login');
   }

   logout = () => {
      this.props.dispatch(logout());
      this.props.history.push('/logout');
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

export default withRouter(connect()(AppHeader));