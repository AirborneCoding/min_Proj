'use client'

import { useState, useEffect } from 'react'
import { GrCaretNext, GrCaretPrevious } from '../../assets/icons/icons'
const Section3 = () => {
  // set up state for current image index
  const [currentImage, setCurrentImage] = useState(0)

  // array of images to display
  const images = [
    {
      title:
        'وزير العدل يعطي انطلاقة “الملتقى العلمي الأول لعمداء المعاهد القضائية وعمداء كليات الشرطة والحقوق في الدول العربية gg“',
      description:
        'تحت الرعاية السامية لصاحب الجلالة الملك محمد السادس نصره الله ، انطلقت ....مه الأربعاء 03 ماي 2023 بمدينة طنجة فعاليات “الملتقىلمعاهد',
      url: '/images/img1.jpeg',
    },
    {
      title:
        'وزير العدل يعطي انطلاقة “الملتقى العلمي الأول لعمداء المعاهد القضائية وعمداء كليات الشرطة والحقوق في الدول العربية “',
      description:
        'تحت الرعاية السامية لصاحب الجلالة الملك محمد السادس نصره الله ، انطلقت ....مه الأربعاء 03 ماي 2023 بمدينة طنجة فعاليات “الملتقىلمعاهد',
      url: '/images/img2.jpeg',
    },
    {
      title:
        'وزير العدل يعطي انطلاقة “الملتقى العلمي الأول لعمداء المعاهد القضائية وعمداء كليات الشرطة والحقوق في الدول العربية “',
      description:
        'تحت الرعاية السامية لصاحب الجلالة الملك محمد السادس نصره الله ، انطلقت ....مه الأربعاء 03 ماي 2023 بمدينة طنجة فعاليات “الملتقىلمعاهد',
      url: '/images/img3.jpeg',
    },
    {
      title:
        'وزير العدل يعطي انطلاقة “الملتقى العلمي الأول لعمداء المعاهد القضائية وعمداء كليات الشرطة والحقوق في الدول العربية “',
      description:
        'تحت الرعاية السامية لصاحب الجلالة الملك محمد السادس نصره الله ، انطلقت ....مه الأربعاء 03 ماي 2023 بمدينة طنجة فعاليات “الملتقىلمعاهد',
      url: '/images/img4.png',
    },
    {
      title:
        'وزير العدل يعطي انطلاقة “الملتقى العلمي الأول لعمداء المعاهد القضائية وعمداء كليات الشرطة والحقوق في الدول العربية “',
      description:
        'تحت الرعاية السامية لصاحب الجلالة الملك محمد السادس نصره الله ، انطلقت ....مه الأربعاء 03 ماي 2023 بمدينة طنجة فعاليات “الملتقىلمعاهد',
      url: '/images/img5.jpeg',
    },
  ]

  // set up effect to update current image every 5 seconds
  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentImage(currentImage === 4 ? 0 : currentImage + 1)
    }, 3000)
    return () => clearInterval(intervalId)
  }, [currentImage])

  // event handlers for previous/next buttons
  const handlePrev = () => {
    setCurrentImage(currentImage === 0 ? 3 : currentImage - 1)
  }

  const handleNext = () => {
    setCurrentImage(currentImage === 4 ? 0 : currentImage + 1)
  }

  return (
    <section className='section3-container'>
      <article className='section3-children'>
        {/* <button className='section3-btn prev text-3xl' onClick={handleNext}>
          <GrCaretNext />
        </button>
        <button className='section3-btn next text-3xl' onClick={handlePrev}>
          <GrCaretPrevious />
        </button> */}
        <img src={images[currentImage].url} alt={images[currentImage].title} />
        <div className='section3-info'>
          <h4 className='font-bold text-white md:text-3xl'>
            {images[currentImage].title}
          </h4>
          <h5 className='text-end text-slate-400'>
            {images[currentImage].description}
          </h5>
        </div>
      </article>
      {/* <div className="d  p-4"></div> */}
    </section>
  )
}

export default Section3
