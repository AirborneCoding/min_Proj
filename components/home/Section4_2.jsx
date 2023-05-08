const section4_2 = [
  {
    id: 1,
    img: '/images/folow_folder.svg',
    title: 'folow folders',
    desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero esse tenetur fuga porro maiores?',
    path: '#',
  },
  {
    id: 2,
    img: '/images/jalasat.svg',
    title: 'folow folders',
    desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero esse tenetur fuga porro maiores?',
    path: '#',
  },
  {
    id: 3,
    img: '/images/sijil_adli.svg',
    title: 'folow folders',
    desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero esse tenetur fuga porro maiores?',
    path: '#',
  },
  {
    id: 3,
    img: '/images/mokhalafat.svg',
    title: 'folow folders',
    desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero esse tenetur fuga porro maiores?',
    path: '#',
  },
]

const Section4_2 = () => {
  return (
    <article className='f section4-content grid gap-4 md:grid-cols-3 lg:grid-cols-4 mt-5'>
      {section4_2.map((item) => {
        return (
          <>
            <div
              key={item.id}
              className='cursor-pointer p-5  text-center bg-myBlue text-white rounded'
            >
              <img
                src={item.img}
                alt=''
                className='underline underline-offset-8 section4-2-imgs'
              />
              <h4>{item.title}</h4>
              <p className='text-slate-400 md:text-sm'>{item.desc}</p>
            </div>
          </>
        )
      })}
    </article>
  )
}

export default Section4_2
