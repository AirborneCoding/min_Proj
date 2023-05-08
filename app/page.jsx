// import React from 'react'
import Section1 from '@/components/home/Section1'
import Section2 from '@/components/home/Section2'
import Section3 from '@/components/home/Section3'
import Section4 from '@/components/home/Section4'
import Section5 from '@/components/home/Section5'


const Home = () => {
  return (
    <>
      <Section1 />
      <Section2 />
      <Section3 />
      <div className='er'>
        <Section4 />
      </div>
      <Section5 />
    </>
  )
}

export default Home

// const Home = () => {
//   return (
//     <section className='w-full flex-center flex-col'>
//       <h1 className='head_text text-center'>
//         Discover & sheare
//         <br className='max-md:hidden' />
//         <span className='orange_gradient text-center'>AI-powred promtes</span>
//         <p className='desc text-center'>
//           Lorem ipsum dolor, sit amet consectetur adipisicing elit. Hic quod
//           aperiam aliquam doloremque. Explicabo repellendus recusandae maxime,
//           modi nulla a
//         </p>
//       </h1>
//     </section>
//   )
// }

// export default Home
