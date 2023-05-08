import { BsList, AiFillHome } from '../../assets/icons/icons'

const links = [
  {
    id: 1,
    text: 'contact',
    path: '#',
  },
  {
    id: 2,
    text: 'useful content',
    path: '#',
  },
  {
    id: 3,
    text: 'jobs',
    path: '#',
  },
  {
    id: 4,
    text: 'judicial advertisement',
    path: '#',
  },
  {
    id: 5,
    text: 'updates',
    path: '#',
  },
]

const Navbar = () => {
  return (
    <nav className='flex justify-between items-center bg-slate-200 p-3 px-5'>
      {/* 1 */}
      <AiFillHome className='hidden md:inline text-4xl cursor-pointer' />

      {/* 2 */}
      <div className='flex space-x-4'>
        <img src='/public/images/adala.svg' alt='' />
        <img src='/public/images/mahakim.svg' alt='' />
      </div>
      {/* 3 */}
      <ul className='hidden  lg:flex space-x-3'>
        {links.map((link, index) => (
          <li key={index}>
            <a href={link.path} className='cursor-pointer'>
              {link.text}
            </a>
          </li>
        ))}
      </ul>
      <div className='flex items-center space-x-3'>
        {/* <AiFillHome className='hidden md:inline text-4xl cursor-pointer' /> */}
      <select className='options rounded h-6 cursor-pointer' name='' id=''>
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
