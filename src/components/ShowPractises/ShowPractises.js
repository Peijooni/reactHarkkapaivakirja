import React from 'react';
import { Accordion, Header, Icon, Button, Dimmer, Loader } from 'semantic-ui-react'
import ModalPopup from '../Modals/ModalPopup';
import { connect } from 'react-redux'
import { getPractises, loaded, loading, deletePractise } from '../../actions/index';

class ShowPractises extends React.Component {

   constructor(props) {
      super(props);
      this.state = {
         dataReady: false,
         items:null,
         activeIndex: -1,
         practises: []
      }
   }
   componentDidMount () {
      this.props.dispatch(loading());
      this.createItems();
   }

   deletePractise = (id) => {
      this.props.dispatch(loading());
      this.props.dispatch(deletePractise(this.props.access_token, id))
      .then(id => { 
         this.props.dispatch(loaded())          
         window.location.reload();
      }, error => console.error(error))
      .catch(error => console.error(error));
   }

   handleClick = (e, titleProps) => {
      const { index } = titleProps
      const { activeIndex } = this.state
      const newIndex = activeIndex === index ? -1 : index

      this.setState({ activeIndex: newIndex })
   }

   createItems = () => {
      this.props.dispatch(getPractises(this.props.access_token)).then(practises => {
         this.setState({
            dataReady: true,
            practises: practises
         })
      }, error => console.error(error))
      .catch(error => console.error(error));
   }

  render() {
      if (this.state.dataReady) {
         let items = this.state.practises.map((item, index) => {
            return <React.Fragment key={index}>
               <Accordion.Title active={this.state.activeIndex === index}
               index={index}
               onClick={this.handleClick}>
               <Icon name='dropdown' />
               {item.date} {item.title} 
               </Accordion.Title>
               <Accordion.Content active={this.state.activeIndex === index}>
               {item.description}
               <br />
               <ModalPopup id={item.id} />
               <Button onClick={() => this.deletePractise(item.id)}>Delete practise</Button>
               </Accordion.Content>
            </React.Fragment>
         });
         this.props.dispatch(loaded());
         return(  <React.Fragment>
                     <Header>Practises</Header>
                     <Accordion styled>
                        {items}
                     </Accordion>
                  </React.Fragment>
               )
      } else {
         this.props.dispatch(loading());
         return (
                <Dimmer active inverted>
                    <Loader inverted size='big'>Loading</Loader>
                </Dimmer>
         )
      }     
   }
}
const mapStateToProps = (state) => {
   return {
       access_token: state.login
   }
}
export default connect(mapStateToProps)(ShowPractises);