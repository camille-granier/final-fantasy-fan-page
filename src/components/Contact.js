import React from 'react';
import { useForm } from 'react-hook-form';

const Contact = () => {

  const { 
    register,
    handleSubmit,
    reset,
    formState: { errors }
  } = useForm();

  const onSubmit = async (data) => {
    const { name, email, subject, message } = data;

    console.log('Name: ', name);
    console.log('Email: ', email);
    console.log('Subject: ', subject);
    console.log('Message: ', message);
  }


    return (
        <div className='contact-form'>
          <div className='container'>
              <form id='contact-form' onSubmit={handleSubmit(onSubmit)} noValidate>
                  <div className='form-line-1'>
                      <input
                        type='text'
                        name='name'
                        {...register('name', {
                          required: { 
                            value: true, 
                            message: 'Please enter your name' },
                          maxLength: {
                            value: 30,
                            message: 'Please use 30 characters or less'
                          }
                        })}
                        placeholder='Name'>
                      </input>
                      {errors.name && (<span className='error-message'>{errors.name.message}</span>)}
                      <input
                        type='email'
                        name='email'
                        {...register('email', {
                          required: true,
                          pattern: /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/
                        })}
                        placeholder='Email address'>
                      </input>
                      {errors.email && (<span className='error-message'>Please enter a valid email address</span>)}
                  </div>
                  <div className='form-line-2'>
                      <input
                        type='text'
                        name='subject'
                        {...register('subject', {
                          required: {
                            value: true,
                            message: 'Please enter a subject' },
                          maxLength: {
                            value: 75,
                            message: 'Subject can not exceed 75 characters'
                          }
                        })}
                        placeholder='Subject'>
                      </input>
                      {errors.subject && (<span className='error-message'>{errors.subject.message}</span>)}
                  </div>
                  <div className='form-line-3'>
                      <textarea
                        rows={3}
                        name="message"
                        {...register('message', {
                          required: true
                        })}
                        placeholder='Leave your message here'>
                      </textarea>
                      {errors.message && (<span className='error-message'>Please enter a message</span>)}
                  </div>
                  <button 
                    className='form-button'
                    type='submit'
                    >Submit
                  </button>
              </form>
          </div>
        </div>
    );
};

export default Contact;