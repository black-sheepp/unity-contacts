import React from "react";
import Logo from "./Logo";

const AddNewContactForm = () => {
     return (
          <div className='flex justify-center w-full'>
               <div className='w-1/4'>
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
                         <div className='input_container'>
                              <label className='input_label' htmlFor='email_field'>
                                   Email
                              </label>
                              <input
                                   placeholder='WillSmith@abc.com'
                                   title='Inpit title'
                                   name='input-name'
                                   type='email'
                                   className='input_field'
                                   id='email_field'
                              />
                         </div>
                         <div className='input_container'>
                              <label className='input_label' htmlFor='gender_field'>
                                   Gender
                              </label>
                              <select id='gender_field' className='input_field'>
                                   <option value='male'>Male</option>
                                   <option value='female'>Female</option>
                              </select>
                         </div>
                         <div className='input_container'>
                              <label className='input_label' htmlFor='category_field'>
                                   Groups or Category
                              </label>
                              <select name="" id="category_field" className='input_field'>
                                    <option value="office">Office</option>
                                    <option value="office">Home</option>
                                    <option value="office">College</option>
                              </select>
                         </div>
                         <div className='input_container'>
                              <label className='input_label' htmlFor='address_field'>
                                   Address
                              </label>
                              <input
                                   placeholder='New York'
                                   title='Inpit title'
                                   name='input-name'
                                   type='text'
                                   className='input_field'
                                   id='address_field'
                              />
                         </div>
                         <div className='input_container'>
                              <label className='input_label' htmlFor='socialmedia_field'>
                                   Social Media Profiles
                              </label>
                              <input
                                   placeholder='www.instagram.com/WillSmith'
                                   title='Inpit title'
                                   name='input-name'
                                   type='text'
                                   className='input_field'
                                   id='socialmedia_field'
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
