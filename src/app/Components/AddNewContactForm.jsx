import React from "react";
import Logo from "./Logo";

const AddNewContactForm = () => {
     return (
          <div className='flex justify-center w-full'>
               <div className='w-96'>
                    <form className='form_container'>
                         <div className='logo_container'>
                              <Logo />
                         </div>
                         <div className='title_container'>
                              <p className='title'>Add New Contact</p>
                         </div>
                         <br />
                         <div className='input_container'>
                              <label className='input_label' htmlFor='name_field'>
                                   Name
                              </label>
                              <input
                                   placeholder='Will Smith'
                                   title='Inpit title'
                                   name='input-name'
                                   type='text'
                                   className='input_field'
                                   id='name_field'
                              />
                         </div>
                         <div className='input_container'>
                              <label className='input_label' htmlFor='phone_field'>
                                   Contact No.
                              </label>
                              <input
                                   placeholder='9845660000'
                                   title='Inpit title'
                                   name='input-name'
                                   type='number'
                                   className='input_field'
                                   id='phone_field'
                              />
                         </div>

                         <button title='Sign In' type='submit' className='sign-in_btn'>
                              <span>Add Contact</span>
                         </button>
                    </form>
               </div>
          </div>
     );
};

export default AddNewContactForm;
