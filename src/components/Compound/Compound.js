import React from 'react';
import AddPractise from '../AddPractise/AddPractise';
import ShowPractises from '../ShowPractises/ShowPractises';
import { Grid } from 'semantic-ui-react'

class Compound extends React.Component {
  render() {
     return (
         
        <React.Fragment>
            <Grid columns={2} divided>
                <Grid.Column><AddPractise /></Grid.Column>
                <Grid.Column><ShowPractises /></Grid.Column>    
            </Grid>
            
        </React.Fragment>
     )
    }
}

export default Compound;