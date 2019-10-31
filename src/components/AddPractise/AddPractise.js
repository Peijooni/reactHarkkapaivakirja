import React from 'react';
import { Form, Button, Header } from 'semantic-ui-react'
import useForm  from 'react-hook-form';

const AddPractise = () => {
   const { register, handleSubmit, errors } = useForm()
   const onSubmit = data => { console.log(data);}  
   
     return (
      <React.Fragment>
         <Header>Add Practises</Header>
         <Form onSubmit={handleSubmit(onSubmit)}>
            <Form.Field>
               <label htmlFor="title">Practise name</label>
               <input name="title" placeholder='First Name' 
                     ref={register({ required: "Practise name is required", minLength: 
                     {value: 3, message: "This field must be at least 3 characters long"} 
               })} />          
               {errors.title && <p>{errors.title.message}</p>}       
            </Form.Field>
            <Form.Field>
               <label htmlFor="description">Practise description</label>
               <input name="description" placeholder='Last Name'
                     ref={register({ required: "Practise description is required", minLength: 
                     {value: 5, message: "This field must be at least 5 characters long"} 
               })} />          
               {errors.description && <p>{errors.description.message}</p>}    
            </Form.Field>
            <Form.Field>
               <label htmlFor="date">Date</label>
               <input name="date" type="date" placeholder='Last Name'
                     ref={register({ required: "Date is required" })} />                     
               {errors.date && <p>{errors.date.message}</p>}  
            </Form.Field>
            <Button type='submit'>Submit</Button>
         </Form>
      </React.Fragment>
     )
}

export default AddPractise;
