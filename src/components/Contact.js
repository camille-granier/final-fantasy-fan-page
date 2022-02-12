import React from 'react';
import { useForm } from 'react-hook-form';
import emailjs from 'emailjs-com';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.min.css';

const Contact = () => {

  const { 
    register,
    handleSubmit,
    reset,
    formState: { errors }
  } = useForm();

  //Notify user onsubmit
  const toastifySuccess = () => {
    toast('Form sent!', {
      position: 'bottom-right',
      autoClose: 5000,
      hideProgressBar: true,
      closeOnClick: true,
      pauseOnHover: true,  
      draggable: false,
      className: 'submit-feedback success',
      toastId: 'notifyToast'
    });
  };
  

  const onSubmit = async (data) => {
    const { name, email, subject, message } = data;

    try{
      const templateParams = {
        name,
        email,
        subject,
        message
      };

      await emailjs.send(
        process.env.REACT_APP_SERVICE_ID,
        process.env.REACT_APP_TEMPLATE_ID,
        templateParams,
        process.env.REACT_APP_USER_ID
      );
      reset();
      toastifySuccess();
    } catch(e) {
      console.log(e);
    }
  };


    return (
        <div className='contact-form'>
          <div className='form-container'>
              <h1>Get in touch</h1>
              <form id='contact-form' onSubmit={handleSubmit(onSubmit)} noValidate>
                  <div className='form-line-1'>
                    <div className='input-container'>
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
                    </div>
                    <div className='input-container'>
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
                  </div>
                  <div className='form-line-2 input-container'>
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
                        placeholder='Subject'
                        className='subject'>
                      </input>
                      {errors.subject && (<span className='error-message'>{errors.subject.message}</span>)}
                  </div>
                  <div className='form-line-3 input-container'>
                      <textarea
                        rows={4}
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
          <ToastContainer />
        </div>
    );
};

export default Contact;