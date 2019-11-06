import React from 'react';
import { Accordion, Header, Icon, Button } from 'semantic-ui-react'
import ModalPopup from '../Modals/ModalPopup';

class ShowPractises extends React.Component {

   constructor(props) {
      super(props);
      this.state = {
         activeIndex: 0 
      }
   }

   handleClick = (e, titleProps) => {
      console.log(titleProps);
      const { index } = titleProps
      const { activeIndex } = this.state
      const newIndex = activeIndex === index ? -1 : index

      this.setState({ activeIndex: newIndex })
   }

  render() {
     const testi = [{
                     id: 1,
                     title: "testi",
                     description: "ökjfgölkdölk",
                     date: "2019-02-03"
                  },
                  {
                     id: 2,
                     title: "testi2",
                     description: "gfökdfgödhgl",
                     date: "2018-02-01"
                  }];
      let items = testi.map((item, index) => {
         return <React.Fragment key={index}><Accordion.Title key={index} active={this.state.activeIndex === index}
         index={index}
         onClick={this.handleClick}>
         <Icon name='dropdown' />
         {item.title} {item.date}
         </Accordion.Title>
         <Accordion.Content active={this.state.activeIndex === index}>
         {item.description}
         <ModalPopup id={item.id} />
         <Button>Delete practise</Button>
         </Accordion.Content></React.Fragment>
      });
     return(
      <React.Fragment>
         <Header>Practises</Header>
         <Accordion styled>
            {items}
         </Accordion>
      </React.Fragment>
     )
   }
}

export default ShowPractises;