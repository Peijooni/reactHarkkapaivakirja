import React from 'react';
import { Button, Header } from 'semantic-ui-react'
import { login, logout } from '../../actions'
import { connect } from 'react-redux'

class AppHeader extends React.Component {

   login = () => {
      this.props.dispatch(login("abcdefg"));
   }

   logout = () => {
      this.props.dispatch(logout());
   }

  render() {
     return (
      <React.Fragment>
         <Header>Harjoituspäiväkirja</Header>         
            <Button type='submit' onClick={this.login}>Login</Button>
            <Button type='submit' onClick={this.logout}>Logout</Button>
            <Button type='submit' onClick={() => console.log(this.props.access_token)}>testi</Button>
      </React.Fragment>
     )
   }
}
const mapStateToProps = (state) => {
   return {
       access_token: state.login
   }
 }
export default connect(mapStateToProps)(AppHeader);