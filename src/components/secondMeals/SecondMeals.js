import React from 'react'
import './SecondMeals.css'
import Logo from '../../assets/HalalFoods.png';
import { SECOND_MEALS_STATIC } from '../../static/SecondMeals';

import { Link } from 'react-router-dom';

const SecondMeals = () => {
  return (
    <div className='main__container_sMeals'>
      <div className='content_wrapper'>
        <img className='logo' src={Logo} alt='' />
        <h1 className='title'>Birinchi Taomlar</h1>
        <Link className='go_back' to='/'>
          Menu
        </Link>

        <div className='meals_container'>
          {SECOND_MEALS_STATIC?.map((meal) => (
            <div className='container'>
              <div className='img_div'>
                <img src='' alt='' />
              </div>
              <div className='name_price'>
                <h1 className='name'>{meal.name}</h1>
                <h2 className='price'>{meal.price}</h2>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default SecondMeals
