import React from 'react';
import { Header, Menu } from 'semantic-ui-react'
import {withRouter} from 'react-router-dom';
import { logout, loading } from '../../actions'
import { connect } from 'react-redux'
import './AppHeader.css';

class AppHeader extends React.Component {

   login = () => {
      this.props.dispatch(loading());
      this.props.history.push('/login');
   }

   logout = () => {
      this.props.dispatch(loading());
      this.props.dispatch(logout());
      this.props.history.push('/logout');
   }

  render() {
     if(this.props.access_token === null) {
      return (
         <React.Fragment>
            <Header className="header" as='h1'>Harjoituspäiväkirja</Header>  
            <Menu pointing secondary>               
               <Menu.Menu position='right'>
                  <Menu.Item
                  name='Login'
                  onClick={this.login}
                  />
               </Menu.Menu>
            </Menu>

         </React.Fragment>
      )
     } else {
        return (
         <React.Fragment>
            <Header className="header" as='h1'>Harjoituspäiväkirja</Header>
            <Menu pointing secondary>               
               <Menu.Menu position='right'>
                  <Menu.Item
                  name='Logout'
                  onClick={this.logout}
                  />
               </Menu.Menu>
            </Menu>      
         </React.Fragment>
        )
     }
   }
}
const mapStateToProps = (state) => {
   return {
       access_token: state.login
   }
 }
export default withRouter(connect(mapStateToProps)(AppHeader));