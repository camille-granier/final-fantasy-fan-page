import React from 'react';

const Contact = () => {
    return (
        <div className='contact-form'>
          <div className='container'>
              <form id='contact-form'>
                  <div className='form-line-1'>
                      <input
                        type='text'
                         name='name'
                         placeholder='Name'>
                      </input>
                      <input
                        type='email'
                        name='email'
                        placeholder='Email address'>
                      </input>
                  </div>
                  <div className='form-line-2'>
                      <input
                        type='text'
                        name='subject'
                        placeholder='Subject'>
                      </input>
                  </div>
                  <div className='form-line-3'>
                      <textarea
                        rows={3}
                        name="message"
                        placeholder='Leave your message here'>
                      </textarea>
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