import React from 'react';
import "./Home.css";
import HeaderSocials from './HeaderSocials';

const Home = () => {
  return (
   <section className='home container' id='home'>
   <div className='intro'>
    <img src= "https://i.ibb.co/zS38BWV/9434621.png" height={145} width={160} alt='' className='home__img'/>
    <h1 className='home__name'>Chetan Kesare</h1>
    <span className='home__education'>
    I'm a Full-Stack UX Designer
    </span>

    <HeaderSocials/>
   </div>

   </section>
  )
}

export default Home

