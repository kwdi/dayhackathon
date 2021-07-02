import React from 'react';

const GetMail = ({ refressButton }) => (
    <form className="card card--fetch">
    <input type='button' className='card__btn card__btn--fetch' value='Fetch Emails' onClick={() => refressButton()}></input>
  </form>
);

export default GetMail;
