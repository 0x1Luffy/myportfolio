import React from 'react'

const AboutBox = () => {
  return (
     <div className='about__boxes grid'>

        <div className='about__box'>
            <i className='about__icon icon-book-open'></i>
            <div>
                <h3 className='about__title'>10th CBSE </h3>
                <span className='about__subtitle'>70% (2018)</span>
            </div>
        </div>


        <div className='about__box'>
            <i className='about__icon icon-trophy'></i>
            <div>
                <h3 className='about__title'>Diploma In Computer Engineering</h3>
                <span className='about__subtitle'>91.20% (2021) </span>
            </div>
        </div>
        <div className='about__box'>
            <i className='about__icon icon-badge'></i>
            <div>
                <h3 className='about__title'>B.E In Computer Engineering </h3>
                <span className='about__subtitle'>8.3CGPA (2024)</span>
            </div>
        </div>
     </div>
  )
}

export default AboutBox