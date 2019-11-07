import React from 'react';
import { Accordion, Header, Icon, Button } from 'semantic-ui-react'
import ModalPopup from '../Modals/ModalPopup';
import { connect } from 'react-redux'
import { getPractises } from '../../actions/index';
import { create } from 'domain';

class ShowPractises extends React.Component {

   constructor(props) {
      super(props);
      this.state = {
         dataReady: false,
         items:null,
         activeIndex: 0,
         practises: []
      }
   }
   componentDidMount () {
      this.createItems();
   }

   handleClick = (e, titleProps) => {
      console.log(titleProps);
      console.log(this.state.activeIndex);
      const { index } = titleProps
      const { activeIndex } = this.state
      const newIndex = activeIndex === index ? -1 : index

      this.setState({ activeIndex: newIndex })
      console.log(this.state.activeIndex);
   }

   createItems = () => {
      this.props.dispatch(getPractises(this.props.access_token)).then(practises => {
         this.setState({ 
            dataReady: true,
            practises: practises
         });
      }).catch(error => console.error(error));
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
               <Button>Delete practise</Button>
               </Accordion.Content>
            </React.Fragment>
         });
      return(  <React.Fragment>
                  <Header>Practises</Header>
                  <Accordion styled>
                     {items}
                  </Accordion>
               </React.Fragment>
            )
      } else {
         return (<div> spinner! </div>)
      }     
   }
}
const mapStateToProps = (state) => {
   return {
       access_token: state.login
   }
}
export default connect(mapStateToProps)(ShowPractises);