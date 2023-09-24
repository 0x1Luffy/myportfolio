"use client"

import React, { useState } from 'react';
import "./Portfolio.css";
import Menu from './Menu';

const Portfolio = () => {

  const [Items,setItems] = useState(Menu)

  const filterItem = (categoryItem) => {
    const updatedItems = Menu.filter((curElem) => {
      return curElem.category === categoryItem;
    })

    setItems(updatedItems);
  }
  return (
    <section className='work container section' id='work'>
      <h2 className='section__title'>Recent Works</h2>
      <div className='work__filters'>
        <span className='work__item' onClick={() => setItems(Menu)}>Everthing</span>
        <span className='work__item' onClick={() => filterItem ("Applications")}>Applications</span>
        <span className='work__item' onClick={() => filterItem ("Case Study")}>Case Study</span>
        <span className='work__item' onClick={() => filterItem ("Design")}>Design</span>
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
            <a href='https://github.com/0x1Luffy' className='work__button'></a>
             <i className='icon-link work__button-icon'></i>
          </div>
        )
      })}

      </div>
    </section>
  )
}

export default Portfolio