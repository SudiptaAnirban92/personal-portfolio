import React from 'react'

const Contact = () => {
  return (
    <div name='contact' className='w-full h-screen bg-[#003333] flex justify-center items-center p-4'>
        <form action="https://getform.io/f/raeqzera" method='POST' className='flex flex-col max-w-[600px] w-full'>
            <div className='pb-8'>
                <p className='text-4xl font-bold inline border-b-4 border-[#8C1919] text-[#b2c9c9]'>Contact</p>
                <p className='text-[#b2c9c9] py-4'>Submit the form below or shoot me an email - <span className='text-[#ffb3b3]'>sudiptaanirban@gmail.com</span></p>
            </div>
            <input className='bg-[#fff5ee] p-2 text-[#8C1919]' type="text" placeholder='Name' name='name'/>
            <input className='my-4 p-2 bg-[#fff5ee] text-[#8C1919]' type="email" placeholder='Email' name='email'/>
            <textarea className='bg-[#fff5ee] p-2 text-[#8C1919]' placeholder='Message' name="message" rows="10"></textarea>
            <button className='text-[#fff5ee] border-2 px-4 py-3 my-8 flex items-center mx-auto hover:bg-[#8C1919] hover:border-[#8C1919]'>Let's Collaborate</button>
        </form>
    </div>
  )
}

export default Contact