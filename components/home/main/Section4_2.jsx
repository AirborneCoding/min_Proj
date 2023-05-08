import data from 'public/data/home/section4'
const Section4_2 = () => {
  return (
    <article className='f section4-content grid gap-4 md:grid-cols-3 lg:grid-cols-4 mt-5'>
      {data.map((item) => {
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
