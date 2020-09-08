
import React, {useState} from 'react';
import { Form, Input, TextArea, Button, Select } from 'semantic-ui-react'


const ContactForm = () => {
  const [emailError, setEmailError] = useState(false)

  return (
  <div className="w-full h-halfScreen flex items-center justify-center">
  <div className="flex flex-col w-1/3">
  <Form>
    <Form.Group>
      <Form.Field
        id='form-input-control-first-name'
        control={Input}
        label='First name'
        placeholder='First name'
      />
      <Form.Field
        id='form-input-control-last-name'
        control={Input}
        label='Last name'
        placeholder='Last name'
      />
    </Form.Group>
    <Form.Field
      id='form-input-control-error-email'
      control={Input}
      label='Email'
      placeholder='joe@schmoe.com'
      error={emailError}
      // {
      //   {
      //   content: 'Please enter a valid email address',
      //   pointing: 'below',
      // }}
    />
    <Form.Field
      id='form-textarea-control-opinion'
      control={TextArea}
      label='message'
      placeholder='Opinion'

    />
   
    <Form.Field
      id='form-button-control-public'
      control={Button}
      content='Confirm'
    />
  </Form>
  </div>
  </div>
  )
}

export default ContactForm
