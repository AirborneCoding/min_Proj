"use client"
import React from 'react'

import { useRouter } from 'next/navigation'

import Image from 'next/image'
import { BsList } from 'public/icons/icons'
import links from '../../public/data/home/navbar.js'

const Navbar = () => {
  const router = useRouter()
  function handleClick() {
    router.push('/')
  }
  return (
    <nav className='flex justify-between items-center bg-slate-200 p-3 px-5'>
      {/* 1 */}
      <Image
        onClick={handleClick}
        src='/images/logo2.png'
        className='cursor-pointer'
        width={60}
        height={40}
        alt='logo-home'
      />
      {/* 2 */}
      <div className='flex space-x-8'>
        <img src='/images/adala.svg' alt='' />
        <img src='/images/mahakim.svg' alt='' />
      </div>
      {/* 3 */}
      <ul className='hidden lg:flex space-x-3'>
        {links?.map((link, index) => (
          <li key={index}>
            <a href={link.path} className='cursor-pointer'>
              {link.text}
            </a>
          </li>
        ))}
      </ul>
      <div className='flex items-center space-x-3'>
        <select
          className='hidden md:inline options rounded h-6 cursor-pointer'
          name=''
          id=''
        >
          <option value=''>arabic</option>
          <option value=''>english</option>
          <option value=''>frensh</option>
        </select>
        <BsList className='text-4xl cursor-pointer md:hidden' />
      </div>
    </nav>
  )
}

export default Navbar
