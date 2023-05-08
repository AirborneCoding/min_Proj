'use client'
import { useState } from 'react'
import { AiFillCaretDown } from '../../assets/icons/icons'
import { submenuHome } from './data'
import Submenu from './Submenu'
import { useDispatch, useSelector } from 'react-redux'
import {
  openSubmenu,
} from '@redux/slices/navbarSlice';
const Section2 = () => {
  const dispatch = useDispatch()
  const [showSubmenu, setShowSubmenu] = useState(false)

  const handleMouseEnter = () => {
    setShowSubmenu(true)
  }

  const handleMouseLeave = () => {
    setShowSubmenu(false)
  }

  return (
    <section>
      <ul className='flex justify-around  items-center bg-myBlue'>
        {submenuHome.map((link) => {
          return (
            <li
              onMouseOver={() => {
                dispatch(openSubmenu(link.title))
              }}
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
              className='text-sm hidden lg:inline transition-all text-slate-100 hover:text-blue-700 cursor-pointer self-center'
              key={link.id}
            >
              {link.title}
              {/* <h5 className='text-sm'>{link.text}</h5> */}
              {/* <AiFillCaretDown className='inline' /> */}
            </li>
          )
        })}
        <li className='p-4 cursor-pointer text-slate-100 transition  hover:bg-yellow-500 capitalize'>
          <h6>electron services</h6>
        </li>
        <li className='p-4 cursor-pointer text-slate-100 transition hover:bg-yellow-500 capitalize'>
          <h6>open data</h6>
        </li>
        <li className='p-4 cursor-pointer text-slate-100 transition hover:bg-yellow-500 capitalize'>
          <h6>judical map</h6>
        </li>
      </ul>
      {showSubmenu && (
        <section className='s  space-x-16 py-8 px-4 shadow-lg flex items-center '>
          <Submenu />
        </section>
      )}
    </section>
  )
}

export default Section2
