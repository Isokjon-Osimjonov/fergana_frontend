import React from 'react';
import './Home.css';
import Logo from '../../assets/HalalFoods.png';
import { Link, NavLink } from 'react-router-dom';

const Home = () => {
  return (
    <div className='main_wrapper'>
      <img className='logo' src={Logo} alt='' />
      <div className='contents_container'>
        <div className='category1'>
          <Link className='link' to='/fmeals'>
            Birinchi Taomlar
          </Link>
        </div>
        <div className='category2'>
          <NavLink className='link' to='/smeals'>
            Ikkinchi Taomlar
          </NavLink>
        </div>
        <div className='category3'>
          <Link className='link' to='/salads'>
            Saladlar
          </Link>
        </div>
        <div className='category4'>
          <Link className='link' to='/desserts'>
            Ichimliklar va Shirinliklar
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Home;
