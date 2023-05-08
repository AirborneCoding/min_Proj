import React from 'react'
import  submenuHome from '/public/data/home/submenu'
// redux/toolikt
import { useDispatch, useSelector } from 'react-redux'

const Submenu = () => {
  const dispatch = useDispatch()
  const { page2 } = useSelector((store) => store.navbar)
  console.log(page2)
  return (
    <>
      {submenuHome.map((item) => {
        if (item.title === page2) {
          return (
            <article key={item.id} className='flex items-center'>
              {item.items.map((i) => {
                return (
                  <ul key={i.id} className=''>
                    <li className='underline underline-offset-8 decoration-yellow-300 '>
                      <h4>{i.title}</h4>
                    </li>
                    <li className='flex flex-col'>
                      {i.info.map((r, index) => {
                        return (
                          <a href={r.url} key={index}>
                            {r.text}
                          </a>
                        )
                      })}
                    </li>
                  </ul>
                )
              })}
            </article>
          )
        }
      })}
    </>
  )
}

export default Submenu
