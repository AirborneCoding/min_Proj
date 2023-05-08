import React from 'react'
import { FaMapMarked, AiFillPhone, GiRotaryPhone } from 'public/icons/icons'
export const metadata = {
  title: 'contact | ministry of justice',
  description: 'gov website',
}

const Contact = () => {

  return (
    <section className='mr-8 grid grid-cols-1 space-y-10 md:space-x-20 mt-20 md:grid-cols-2 md:space-y-0 '>
      <article className='flex flex-col space-y-5 p-8 w-96 mx-auto border border-r-myBlue border-r-8  rounded shadow-black shadow-lg lg:w-full lg:mx-8'>
        <div className='text-end border border-myBlue p-4 rounded shadow-sm  shadow-black'>
          <h3 className='space-x-4 inline-flex text-base lg:font-bold lg:text-2xl'>
            وزارة العدل : ساحة المامونية، ص.ب 1015، الرباط، المغرب
            <FaMapMarked className='text-slate-700 text-4xl ml-4' />
          </h3>
        </div>
        <div className='text-end border border-myBlue  p-2 rounded shadow-sm  shadow-black'>
          <h3 className='space-x-4 inline-flex text-base lg:font-bold lg:text-2xl'>
            +212 537 21 37 37
            <AiFillPhone className='text-slate-700 text-4xl ml-4' />
          </h3>
        </div>
        <div className='text-end border border-myBlue  p-2 rounded shadow-sm  shadow-black'>
          <h3 className=' space-x-4 inline-flex text-base lg:font-bold lg:text-2xl'>
            +212 537 21 37 37
            <GiRotaryPhone className='text-slate-700 text-4xl ml-4' />
          </h3>
        </div>
      </article>
      <form
        action=''
        className=' lg:w-full form-father border border-r-myBlue border-r-8'
      >
        <div className='form-row'>
          <label htmlFor='' className='form-label'>
            Name
          </label>
          <input type='text' className='form-input' />
        </div>
        <div className='form-row'>
          <label htmlFor='' className='form-label'>
            Email
          </label>
          <input type='text' className='form-input' />
        </div>
        .
        <div className='form-row'>
          <label htmlFor='' className='form-label'>
            Message
          </label>
          <textarea className='form-input text-area'></textarea>
        </div>
      </form>
    </section>
  )
}

export default Contact
