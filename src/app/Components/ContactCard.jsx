import React from "react";

const ContactCard = () => {
     return (
          <div className='flex justify-center'>
               <div className='flex flex-col w-1/2 bg-[#d0f4de] rounded-2xl p-5'>
                    <div className="flex justify-center">
                         <h3 className="text-black text-lg font-bold mb-2">View Contact</h3>
                    </div>
                    <div className="flex">
                    <div className="mr-6 text-end text-lg font-semibold text-black" >
                         <p>Name: </p>
                         <p>Phone Number: </p>
                         <p>Email Address: </p>
                         <p>Gender: </p>
                         <p>Groups or Categories: </p>
                         <p>Address: </p>
                         <p>Social Media Profiles: </p>
                    </div>
                    <div className=" text-lg">
                         <p>Shivam Gupta </p>
                         <p>9845888500 </p>
                         <p>shivamguptanitw@gmail.com </p>
                         <p>Male </p>
                         <p>Colleage </p>
                         <p>New Delhi </p>
                         <p>facebook.com/shivam </p>
                    </div>
                    </div>
               </div>
          </div>
     );
};

export default ContactCard;
