import React from 'react'

const AboutBox = () => {
  return (
     <div className='about__boxes grid'>

        <div className='about__box'>
            <i className='about__icon icon-fire'></i>
            <div>
                <h3 className='about__title'>Hardworking</h3>
                <span className='about__subtitle'></span>
            </div>
        </div>


        <div className='about__box'>
            <i className='about__icon icon-trophy'></i>
            <div>
                <h3 className='about__title'>Resilient</h3>
                <span className='about__subtitle'></span>
            </div>
        </div>
        <div className='about__box'>
            <i className='about__icon icon-badge'></i>
            <div>
                <h3 className='about__title'>Problem Solver</h3>
                <span className='about__subtitle'></span>
            </div>
        </div>
     </div>
  )
}

export default AboutBox