import React from 'react';
import {BrowserRouter, Switch, Route, Redirect} from 'react-router-dom';
import { connect } from 'react-redux'
import Compund from './components/Compound/Compound';
import AppHeader from './components/Header/AppHeader';
import Login from './components/Login/Login';
import Logout from './components/Logout/Logout';
import { loading } from './actions/index';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      id: 1
    }
  }

  LogID = () => {
    console.log(this.state.id)
  }


  render() {
     return (
      <React.Fragment>
        <BrowserRouter>        
          <AppHeader />
          <Switch>
            <Route exact path="/" render= {
              () => (this.props.access_token !== null) ?
              (<Redirect to="/app"/>) :
              (<Redirect to="/logout"/>)
              }/>
              <Route path="/app" render={
              () => (this.props.access_token !== null) ? 
              (<Compund />) :
                (<Redirect to="/logout"/>)
              }/>
              <Route path='/login' component={() => {
                this.props.dispatch(loading());
                window.location.replace('http://github.com/login/oauth/authorize?client_id=1159e004bdfd8fd0d590' +
                '&redirect_uri=http://localhost:4200/log&state=abcddcba12344321'); 
                return null;
              }}/>
              <Route path="/log" render={() => <Login />}/>
              <Route path="/logout" render={() => <Logout />}/>                
              <Route render={() => <Redirect to="/"/>}/>
          </Switch>
        </BrowserRouter>        
      </React.Fragment>
     )

     }
}

const mapStateToProps = (state) => {
  return {
      access_token: state.login
  }
}

export default connect(mapStateToProps)(App);
