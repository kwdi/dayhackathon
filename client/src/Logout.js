import React from 'react';

const Logout = ({ logout, name }) => (
  <form className="card card--logout">
    <div className="card-username">Welcome {name}!🧍</div>
    <input type='button' className='card__btn card__btn--logout' value='Logout' onClick={() => logout()}></input>
  </form>
);

export default Logout;
