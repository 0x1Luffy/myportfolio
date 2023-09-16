import React from 'react';
import "./About.css"

const About = () => {
  return (
    <section className='about container section' is='about'>
      <h2 className='section__title'>
        About Me
      </h2>

    <div className='about__container grid'>
    <img src= "" alt='' className='about__img'/>

    <div className='about__data grid'>
      <div className='about__info'>
        <p className='about__description'>
          I am very enthusiastic of new technologies and looking for a
          challenging and innovative career in the IT field, which will enable
          me to utilize and enhance my skills in software development and UX
          designing.



          <a href='' className='btn'>Download Resume</a>
        </p>
      </div>

      <div className='about__skills grid'>
        <div className='skills__data'>
          <div className='skills__titles'>
            <h3 className='skills__name'>
            Development
            </h3>
            <span className='skills__number'>90%</span>
          </div>

          <div className='skills__bar'>
            <span className='skills__percentage development'></span>
          </div>
        </div>

        <div className='skills__data'>
          <div className='skills__titles'>
            <h3 className='skills__name'>UI/UX Designing</h3>
            <span className='skills__number'>80%</span>
          </div>

          <div className='skills__bar'>
            <span className='skills__percentage ui__design'></span>
          </div>
        </div>

        <div className='skills__data'>
          <div className='skills__titles'>
            <h3 className='skills__name'>Photography</h3>
            <span className='skills__number'>60%</span>
          </div>

          <div className='skills__bar'>
            <span className='skills__percentage photography'></span>
          </div>
        </div>

      </div>

    </div>
    </div>

    

    </section>
  )
}

export default About