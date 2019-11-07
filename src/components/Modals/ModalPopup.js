import React from 'react';
import { Button, Header, Modal } from 'semantic-ui-react';
import { connect } from 'react-redux';
import { loading, getPractise } from '../../actions/index';

class ModalPopup extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      open: false,
      dataReady: false,
      practise: null
    }
  }

  componentDidMount () {
    this.props.dispatch(loading());
    this.getPractise();
  }

  close = () => this.setState({ open: false })

  changeValue = (value) => {
    console.log("props.id: ", this.props.id);
    console.log("testi");
    console.log(value);
    console.log(this.props.id);
  }

  getPractise = () => {
    this.props.dispatch(getPractise(this.props.access_token, this.props.id)).then(practise => {
      this.setState({
        practise: practise,
        dataReady: true
      });
    });
  }

  render() {
    if (this.state.dataReady) {
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
    } else {
      return (<div> spinner! </div>)
    }

    /*
     
      */
   }
}
const mapStateToProps = (state) => {
  return {
      access_token: state.login
  }
}
export default connect(mapStateToProps)(ModalPopup);