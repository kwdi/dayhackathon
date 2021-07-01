import React from 'react';
import Mail from './Mail'

const EmailList = ({ emailList }) => (
    <>
      {emailList.map((mail, index) => (
        <Mail key={index} mail={mail}/>
      ))}
    </>
);

export default EmailList;