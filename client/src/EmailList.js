import React from 'react';
import Mail from './Mail';

const EmailList = ({ emailList }) => (
    <>
      {emailList.slice(0).reverse().map((mail, index) => (
        <Mail key={index} mail={mail}/>
      ))}
    </>
);

export default EmailList;
