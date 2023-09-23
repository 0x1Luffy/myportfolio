import React, { useState } from 'react';
import "./Portfolio.css";
import Menu from './Menu';

const Portfolio = () => {

  const [Items,setItems] = useState(Menu)
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

      {Items.map((elem) => {
        const{id,Image, title, category} = elem;
        return (
          <div className='work__card' key={id}>
            <div className='work__thumbnail'>
              <img src={Image} alt="" className='work__img'/>
              <div className='work__mask'></div>
            </div>

            <span className='work__category'>{category}</span>
            <h3 className='work__title'>{title}</h3>
            <a href='#' className='work__button'></a>
             <i className='icon-link work__button-icon'></i>
          </div>
        )
      })}

      </div>
    </section>
  )
}

export default Portfolio