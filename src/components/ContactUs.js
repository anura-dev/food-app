import React from 'react'

const ContactUs = () => {
  return (
    <div>
    <h2 className='font-bold text-center text-3xl m-4 p-4 '>Contact Us</h2>
    <form>
        <input type='text' className='border border-black p-2 m-2' placeholder='name'/>
        <input type='text' className='border border-black p-2 m-2' placeholder='message'/>
        <button className='border border-black p-2 m-2 rounded-lg bg-green-100'>Submit</button>
    </form>

        
    </div>
  )
}

export default ContactUs;