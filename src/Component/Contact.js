import React from 'react'

export default function Contact() {
  return (<  >
      
    <div className='border-4 rounded  border-black-600 w-3/6  ml-8 text-center m-2' >
    <p className='font-bold text-3xl py-3' >Contact</p>
    <div className='flex justify-around'>
       <p className='p-2 font-bold ' >First Name</p> 
   <input placeholder='First Name' type='text' className='p-1 m-1 border-2 rounded' ></input>
   <p className='p-2 font-bold '>Last Name</p>
   <input placeholder='Last Name' type='text' className='p-1 m-1 border-2 rounded '></input>
    </div>
    <div className='flex justify-around'>
       <p className='p-2 font-bold ' >E-mail</p> 
   <input placeholder='Email' type='Email' className='p-1 m-1 border-2 rounded' ></input>
   <p className='p-2 font-bold '>Password</p>
   <input placeholder='Password' type='Password' className='p-1 m-1 border-2 rounded '></input>
    </div>
    <p className='p-1 font-bold '>Bio</p>
    <input className='ps-8  m-1 border-2 rounded'></input>
</div>
</>
  )
}
