import React from 'react';
import "./Portfolio.css";
import Menu from './Menu';

const Portfolio = () => {
  return (
    <section className='work container section' id='work'>
      <h2 className='section__title'>Recent Works</h2>
      <div className='work__filters'>
        <span className='work__item'>Everthing</span>
        <span className='work__item'>Creative</span>
        <span className='work__item'>Art</span>
        <span className='work__item'>Design</span>
      </div>

      <div className='work__container grid'>

      </div>
    </section>
  )
}

export default Portfolio