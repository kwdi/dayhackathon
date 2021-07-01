import React from 'react';


const Mail = ({ mail }) => (
  <article className='card--mail' >
  <h2>{mail.from}</h2>
  <h3>{mail.msg}</h3>
  <h3>{mail.date}</h3>
  </article>
)

export default Mail;
