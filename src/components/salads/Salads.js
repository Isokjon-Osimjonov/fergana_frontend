import React from 'react';
import './Salads.css';
import Logo from '../../assets/HalalFoods.png';
import { SALADS_STATIC } from '../../static/Salads';
import { Link } from 'react-router-dom';
const FirstMeals = () => {
  return (
    <div className='main__container_fMeals'>
      <div className='content_wrapper'>
        <img className='logo' src={Logo} alt='' />
        <h1 className='title'>Saladlar</h1>

        <div className='meals_container'>
          <Link className='go_back' to='/'>
            Menu
          </Link>
          {SALADS_STATIC?.map((meal) => (
            <div className='container'>
              <img className='meal_img' src={meal.image} alt='' />
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
