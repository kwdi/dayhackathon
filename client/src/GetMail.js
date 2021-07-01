import React from 'react';

const GetMail = ({ refressButton }) => {
  return (
    <form className="card card--done">
    <input type='button' className='card__btn' value='Fetch Emails' onClick={() => refressButton()}></input>
  </form>
  )
};

export default GetMail;
