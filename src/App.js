import React from 'react';
import AddPractise from './components/AddPractise/AddPractise';
import {ShowPractises} from './components/ShowPractises/ShowPractises';
import ModalPopup from './components/Modals/ModalPopup';
import AppHeader from './components/Header/AppHeader';
import { Grid, Button } from 'semantic-ui-react'

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
        <AppHeader dispatch={this.props.store}/>
        <Grid columns={2} divided>
          <Grid.Column><AddPractise /></Grid.Column>
          <Grid.Column><ShowPractises /></Grid.Column>    
        </Grid>
        <ModalPopup id={this.state.id} />
        <Button onClick={() => {console.log(this.state.id)}}>Log ID</Button>
      </React.Fragment>
     )

     }
}

export default App;
