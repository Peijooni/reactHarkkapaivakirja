import React from 'react';
import {BrowserRouter, Switch, Route, Redirect} from 'react-router-dom';
import Compund from './components/Compound/Compound';
import AppHeader from './components/Header/AppHeader';
import Login from './components/Login/Login';
import Logout from './components/Logout/Logout';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      id: 1,
      isLogged: true
    }
  }

  LogID = () => {
    console.log(this.state.id)
  }


  render() {
     return (
      <React.Fragment>
        <AppHeader />
        <BrowserRouter>
          <Switch>
            <Route exact path="/" render= {
              () => this.state.isLogged ?
              (<Redirect to="/app"/>) :
              (<Redirect to="/logout"/>)
              }/>
              <Route path="/app" render={
              () => this.state.isLogged ? 
              (<Compund />) :
                (<Redirect to="/logout"/>)
              }/>
              <Route path="/logout" render={() => <Logout />}/>                
              <Route render={() => <Redirect to="/"/>}/>
          </Switch>
        </BrowserRouter>
        <Login getState={this.props.store}/>

        
      </React.Fragment>
     )

     }
}

export default App;
