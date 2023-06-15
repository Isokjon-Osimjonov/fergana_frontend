import React from 'react';
import Logo from '../../assets/HalalFoods.png';
import { FIRST_MEALS_STATIC } from '../../static/FirstMeals';
import { Link } from 'react-router-dom';
const FirstMeals = () => {
  return (
    <div className='main__container_fMeals'>
      <div className='content_wrapper'>
        <img className='logo' src={Logo} alt='' />
        <h1 className='title'>Birinchi Taomlar</h1>
        <Link className='go_back' to='/'>
          Menu
        </Link>

        <div className='meals_container'>
          {FIRST_MEALS_STATIC?.map((meal) => (
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
};

export default FirstMeals;
