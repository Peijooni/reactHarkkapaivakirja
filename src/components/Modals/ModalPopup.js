import React, { useState, useEffect } from 'react';
import { Button, Modal, Form } from 'semantic-ui-react';
import { connect } from 'react-redux';
import { loading, getPractise, editPractise } from '../../actions/index';
import useForm  from 'react-hook-form';
import './modalPopup.css';

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
    props.dispatch(editPractise(props.access_token, practise, props.id))
    .then(id => window.location.reload());
    close();
 }  

  useEffect(() => {
    props.dispatch(loading());
    if(!practise) {
      console.log("init");
      initPractise();
    }
  });

  const close = () => setOpen(false);

  const openModal = () => setOpen(true);

  const initPractise = () => {
    props.dispatch(getPractise(props.access_token, props.id)).then(practise => {
      setPractise(practise[0]);
      setDataReady(true);
    }, error => console.error(error));
  }

  
  if (dataReady) {
    return (
      <Modal trigger={<Button onClick={openModal}>Edit practise</Button>} centered={false} open={open} closeIcon>
        <Modal.Header>Edit practise</Modal.Header>

        <Modal.Content image>
          <Modal.Description>
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
              <Button onClick={close} negative className="modal-button">Cancel</Button>
              <Button type='submit' positive className="modal-button">Save</Button>
            </Form>
          </Modal.Description>          
        </Modal.Content>
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