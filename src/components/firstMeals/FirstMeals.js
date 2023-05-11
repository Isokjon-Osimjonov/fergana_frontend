import React from "react";
import "./FirstMeals.css";
import Logo from "../../assets/Halal Foods.png";
// import { FIRST_MEALS_STATIC } from "../../static/FirstMeals";
import {Link} from 'react-router-dom'
const FirstMeals = () => {
  return (
    <div className='main__container_fMeals'>
      <div className='content_wrapper'>
        <img className='logo' src={Logo} alt='' />
        <h1 className='title'>Birinchi Taomlar</h1>
        <Link className="go_back" to="/">Menu</Link>
        <div className='meals_container'>
          <div className='img_div'>
            <img src='' alt='' />
          </div>
          <div className='name_price'>
            <h1 className='name'>Qovurma Lagmon</h1>
            <h2 className='price'>12 000</h2>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FirstMeals;
