import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { faFilePen, faTrash, faEye } from "@fortawesome/free-solid-svg-icons";

const ContactList = () => {
     return (
          <div className='flex flex-col mt-6 '>
               <div className='flex justify-center m-2'>
                    <div className='flex bg-[#0b132b] justify-center text-white text-2xl w-1/2  py-3 rounded-xl'>
                         <h2>Contact List</h2>
                    </div>
               </div>
               <div className='flex justify-center mb-1'>
                    <div className='bg-[#fefae0] w-1/2 justify-between flex px-5 py-3 rounded-xl'>
                         <p className='text-lg text-[#0a1128] font-bold'>Shivam Gupta</p>
                         <p className='text-lg text-[#0a1128] '>9845888500</p>
                         <p className=' text-[#0a1128] '>shivamguptanitw@gmail.com</p>
                         <div className='flex justify-between'>
                              <FontAwesomeIcon
                                   icon={faFilePen}
                                   size='xl'
                                   style={{ color: "#7014f2" }}
                                   className='mx-2'
                              />
                              <FontAwesomeIcon icon={faTrash} size='xl' style={{ color: "#f71735" }} className='mx-2' />
                         </div>
                    </div>
               </div>
          </div>
     );
};

export default ContactList;
