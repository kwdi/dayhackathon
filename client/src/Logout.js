import React from 'react';


const Logout = ({logout, name}) => {
  return (
    <form className="card card--pending">
    <input type='button' className='card__btn' value={'Logout User: '.concat(name)} onClick={() => logout()}></input>
  </form>
  )
}

export default Logout;
