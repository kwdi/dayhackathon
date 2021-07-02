import React from 'react';

const Mail = ({ mail }) => (
  <article className='card--mail' >
  <h2>Sender: {mail.from}</h2>
  <p><u>Message:</u> <br></br> {mail.msg}</p>
  <h4>Date: {mail.date}</h4>
  </article>
);

export default Mail;
