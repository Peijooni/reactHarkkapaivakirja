import React from 'react';
import { Button, Header, Modal } from 'semantic-ui-react'

export default class ModalPopup extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      open: false
    }
  }


  close = () => this.setState({ open: false })

  changeValue = (value) => {
    console.log("props.id: ", this.props.id);
    console.log("testi");
    console.log(value);
    console.log(this.props.id);
  }

  render() {
     return (
        <Modal trigger={<Button>Edit practise</Button>} centered={false}>
          <Modal.Header>Edit practise</Modal.Header>
          <Modal.Content image><Modal.Description>
              <Header>Default Profile Image</Header>
              <p>
                We've found the following gravatar image associated with your e-mail
                address.
              </p>
              <p>Is it okay to use this photo?</p>
            </Modal.Description>
            
          </Modal.Content>
          <Modal.Actions>
            <Button onClick={() => this.changeValue(3)}>Testi</Button>
            <Button onClick={this.close} negative>
                No
              </Button>
              <Button
                onClick={this.close}
                positive
                labelPosition='right'
                icon='checkmark'
                content='Yes'
              />
            </Modal.Actions>
        </Modal>
      )
   }
}