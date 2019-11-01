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
     return(
      <React.Fragment>
         <Header>Practises</Header>
         <Accordion styled>
            <Accordion.Title
               active={this.state.activeIndex === 0}
               index={0}
               onClick={this.handleClick}
            >
               <Icon name='dropdown' />
               What is a dog?
            </Accordion.Title>
            <Accordion.Content active={this.state.activeIndex === 0}>
               <p>
               A dog is a type of domesticated animal. Known for its loyalty and
               faithfulness, it can be found as a welcome guest in many households
               across the world.
               </p>
               <ModalPopup id={this.state.id} />
               <Button>Delete practise</Button>
            </Accordion.Content>

            <Accordion.Title
               active={this.state.activeIndex === 1}
               index={1}
               onClick={this.handleClick}
            >
               <Icon name='dropdown' />
               What kinds of dogs are there?
            </Accordion.Title>
            <Accordion.Content active={this.state.activeIndex === 1}>
               <p>
               There are many breeds of dogs. Each breed varies in size and
               temperament. Owners often select a breed of dog that they find to be
               compatible with their own lifestyle and desires from a companion.
               </p>
            </Accordion.Content>

            <Accordion.Title
               active={this.state.activeIndex === 2}
               index={2}
               onClick={this.handleClick}
            >
               <Icon name='dropdown' />
               How do you acquire a dog?
            </Accordion.Title>
            <Accordion.Content active={this.state.activeIndex === 2}>
               <p>
               Three common ways for a prospective owner to acquire a dog is from
               pet shops, private owners, or shelters.
               </p>
               <p>
               A pet shop may be the most convenient way to buy a dog. Buying a dog
               from a private owner allows you to assess the pedigree and
               upbringing of your dog before choosing to take it home. Lastly,
               finding your dog from a shelter, helps give a good home to a dog who
               may not find one so readily.
               </p>
            </Accordion.Content>
         </Accordion>
      </React.Fragment>
     )
   }
}

export default ShowPractises;