const Section1 = () => {
  return (
    <section className='flex justify-between p-5 bg-slate-100 items-center'>
      <form action='' className='hidden md:inline'>
        <div className='form-row'>
          <input type='text' placeholder='search...' className='form-input' />
        </div>
      </form>
      <h3 className='w-74 sm:text-xl w-74 md:w-auto text-2xl'>
        {' '}
        the judiciary is at the service of the country
      </h3>
      {/* <h2 className='justice-quote'>القضاء في خدمة الوطن</h2> */}
      <img src='/images/biglogo.svg' alt='' />
    </section>
  )
}

export default Section1
