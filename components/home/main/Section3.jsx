'use client'

import { useState, useEffect } from 'react'
import section3_data from 'public/data/home/section3'

// import { GrCaretNext, GrCaretPrevious } from 'public/icons/icons'
const Section3 = () => {
  // set up state for current image index
  const [currentImage, setCurrentImage] = useState(0)

  // set up effect to update current image every 5 seconds
  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentImage(currentImage === 4 ? 0 : currentImage + 1)
    }, 3000)
    return () => clearInterval(intervalId)
  }, [currentImage])

  // event handlers for previous/next buttons
  // const handlePrev = () => {
  //   setCurrentImage(currentImage === 0 ? 3 : currentImage - 1)
  // }

  // const handleNext = () => {
  //   setCurrentImage(currentImage === 4 ? 0 : currentImage + 1)
  // }

  return (
    <section className='section3-container'>
      <article className='section3-children'>
        {/* <button className='section3-btn prev text-3xl' onClick={handleNext}>
          <GrCaretNext />
        </button>
        <button className='section3-btn next text-3xl' onClick={handlePrev}>
          <GrCaretPrevious />
        </button> */}
        <img src={section3_data[currentImage].url} alt={section3_data[currentImage].title} />
        <div className='section3-info'>
          <h4 className='font-bold text-white md:text-3xl'>
            {section3_data[currentImage].title}
          </h4>
          <h5 className='text-end text-slate-400'>
            {section3_data[currentImage].description}
          </h5>
        </div>
      </article>
      {/* <div className="d  p-4"></div> */}
    </section>
  )
}

export default Section3
