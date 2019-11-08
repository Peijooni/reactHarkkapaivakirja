import React, { useState, useEffect } from 'react';
import { Button, Header, Modal, Form } from 'semantic-ui-react';
import { connect } from 'react-redux';
import { loading, getPractise, editPractise, loaded } from '../../actions/index';
import useForm  from 'react-hook-form';

const ModalPopup = (props) => {
  /*
    this.state = {
      open: false,
      dataReady: false,
      practise: null
    }
  */
  const [open, setOpen] = useState(false);
  const [dataReady, setDataReady] = useState(false);
  const [practise, setPractise] = useState(null);

  const { register, handleSubmit, errors } = useForm();

  const onSubmit = practise => {
    props.dispatch(loading());
    props.dispatch(editPractise(props.access_token, practise, props.id));
 }  

  useEffect(() => {
    props.dispatch(loading());
    if(!practise) {
      console.log("testi")
      initPractise();
    }
  });

  const close = () => setOpen(false);

  const changeValue = (value) => {
    console.log("props.id: ", props.id);
    console.log("testi");
    console.log(value);
    console.log(props.id);
    console.log(practise.date);
  }

  const initPractise = () => {
    props.dispatch(getPractise(props.access_token, props.id)).then(practise => {
      const temp = practise[0].date.split("T");
      practise[0].date = temp[0];
      setPractise(practise[0]);
      setDataReady(true);
    });
  }

  
  if (dataReady) {
    return (
      <Modal trigger={<Button>Edit practise</Button>} centered={false} closeIcon>
        <Modal.Header>Edit practise</Modal.Header>

        <Modal.Content image>
          <Modal.Description>
            <Header>Default Profile Image</Header>
            <Form onSubmit={handleSubmit(onSubmit)}>
              <Form.Field>
                <label htmlFor="title">Practise name</label>
                <input name="title" placeholder='First Name' defaultValue={practise.title}
                      ref={register({ required: "Practise name is required", minLength: 
                      {value: 3, message: "This field must be at least 3 characters long"} 
                })} />          
                {errors.title && <p>{errors.title.message}</p>}       
              </Form.Field>
              <Form.Field>
                <label htmlFor="description">Practise description</label>
                <input name="description" placeholder='Last Name' defaultValue={practise.description}
                      ref={register({ required: "Practise description is required", minLength: 
                      {value: 5, message: "This field must be at least 5 characters long"} 
                })} />          
                {errors.description && <p>{errors.description.message}</p>}    
              </Form.Field>
              <Form.Field>
                <label htmlFor="date">Date</label>
                <input name="date" type="date" placeholder='Date' defaultValue={practise.date}
                      ref={register({ required: "Date is required" })} />                     
                {errors.date && <p>{errors.date.message}</p>}  
              </Form.Field>
              <Button type='submit'>Submit</Button>
            </Form>
          </Modal.Description>          
        </Modal.Content>

        <Modal.Actions>
          <Button onClick={() => changeValue(3)}>Testi</Button>
          <Button onClick={close} negative>
              No
            </Button>
            <Button
              onClick={close}
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

  }

const mapStateToProps = (state) => {
  return {
      access_token: state.login
  }
}
export default connect(mapStateToProps)(ModalPopup);