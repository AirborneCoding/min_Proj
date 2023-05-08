import Section4_2 from "./Section4_2"

const Section4 = () => {
  // px-4 py-8
  return (
    <section className='section4-container px-4 py-8'>
      {/* <img src='/images/justice.webp' className='i w-screen ' /> */}
      <article className='q md:grid gap-y-7 grid-cols-2'>
        <h2 className='text-2xl font-bold underline underline-offset-8 decoration-yellow-400 md:text-4xl  text-white'>
          electronic services
        </h2>
        <button className='my-5 section4-btns space-x-5 md:space-x-10 md:my-0 text-white '>
          <button className='w-32 md:w-40 border border-slate-500 p-2 rounded cursor-pointer hover:bg-slate-700'>
            mahakim
          </button>
          <button className='w-32 md:w-40 border border-slate-500 p-2 rounded cursor-pointer hover:bg-slate-700'>
            kada
          </button>
          <button className='w-32 md:w-40 border border-slate-500 p-2 rounded cursor-pointer hover:bg-slate-700'>
            other services
          </button>
        </button>
      </article>
      <Section4_2 />
    </section>
  )
}

export default Section4
