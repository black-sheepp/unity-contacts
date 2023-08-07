import React from 'react'

const EditProfile = () => {
  return (
    <div>
      <div className='flex justify-center'>
               <div className='flex flex-col w-1/2 bg-[#e9ff70] rounded-xl p-5'>
                <div className='flex justify-center'>
                <h3 className='text-lg font-bold mb-2'>Edit Contact</h3>
                </div>
                    <div className='flex'>
                    <div className="mr-6 text-end text-lg font-semibold text-[#000814]" >
                         <p>Name: </p>
                         <p>Phone Number: </p>
                         <p>Email Address: </p>
                         <p>Gender: </p>
                         <p>Groups or Categories: </p>
                         <p>Address: </p>
                         <p>Social Media Profiles: </p>
                    </div>
                    <div className=" text-lg flex flex-col" >
                        <input className='bg-[#e9ff70] w-96 text-[#000814]' type="text" placeholder='Shivam Gupta'/>
                        <input className='bg-[#e9ff70] w-96 text-[#000814]' type="number" placeholder='9845888500'/>
                        <input className='bg-[#e9ff70] w-96 text-[#000814]' type="email" placeholder='shivamguptanitw@gmail.com'/>
                        <input className='bg-[#e9ff70] w-96 text-[#000814]' type="text" placeholder='Male'/>
                        <input className='bg-[#e9ff70] w-96 text-[#000814]' type="text" placeholder='Colleage'/>
                        <input className='bg-[#e9ff70] w-96 text-[#000814]' type="text" placeholder='New Delhi'/>
                        <input className='bg-[#e9ff70] w-96 text-[#000814]' type="text" placeholder='facebook.com/shivam'/>
                    </div>
                    </div>
               </div>
          </div>
    </div>
  )
}

export default EditProfile
