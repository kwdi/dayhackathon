import React, { useState } from 'react';

const AddCard = ({ getLogin }) => {
  const [name, setName] = useState('');
  const [pass, setPass] = useState('');
  const onSubmit = e => {
    e.preventDefault();
    if (!name || !pass) {
      alert('Please add a Name and Pass')
      return;
    }
    getLogin({ name, pass });

    setName('');
    setPass('');
    return false;
  };

  return (
      <form className="card card--register" onSubmit={onSubmit}>
        <h1 className='card__register-title'>Login / Create User</h1>
        <label>Name</label>
        <input className='card__input' type="text" id="title"
        placeholder='Add title'
        value={name}
        onChange={e => setName(e.target.value)}></input>
        <label>Password</label>
        <input className='card__input' type="text" id="description"
        placeholder='Add Description'
        value={pass}
        onChange={e => setPass(e.target.value)}></input>
        <input type="submit" className="card__btn" value="Login"></input>
      </form>
  );
};

export default AddCard;
