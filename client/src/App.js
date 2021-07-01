import { useState, useEffect } from 'react'
import './App.css';
import Login from './Login';
import Logout from './Logout';
import Send from './Send';
import GetMail from './GetMail'
import EmailList from './EmailList'




const App = () => { 

   const [loggedIn, setLoggedIn] = useState(false);
   const [name, setName] = useState('');
   const [pass, setPass] = useState('');
   const [emailList, setemailList] = useState([]);

const getLogin = loginDetails => {
  callApi(loginDetails.name, loginDetails.pass)
}

const email = email => {
  sendEmail(email.receiver, email.msg)
}

const refressButton = refress =>{
  console.log('refressButton')
  getEmails(name, pass);
}

const getEmails = async (name, pass) => {
  const response = await fetch('http://localhost:5000/api/readmail', {
        method: 'GET',
        headers: {
          name: name,
          pass, pass,
        },
      });
      const body = await response.json();
      console.log(body)
      setemailList(body);
};


const sendEmail = async (receiver, msg) => {
  const response = await fetch('http://localhost:5000/api/sendmail', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          name: name,
          pass, pass,
        },
        body: JSON.stringify({ receiver, msg }),
      });
      await response.json();
      //const body = await response.json();
      //console.log(body)
};



const logout = logout => {
    setName('');
    setPass('');
    setLoggedIn(false);
    setemailList([]);
}


const callApi = async (name, pass) => {
      const response = await fetch('http://localhost:5000/api/adduser', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({ name: name, pass: pass }),
          });
          const body = await response.json();
          if(body.hasOwnProperty('success')){
            setName(name);
            setPass(pass);
            setLoggedIn(true);
          } else{console.log("fail")}
          //console.log(body.hasOwnProperty('success'))
          console.log(name, pass, loggedIn)
};

  return(
      <div className="App">
        {loggedIn === false ? <Login getLogin={getLogin} /> : <Logout logout={logout} name={name} />}
        {loggedIn === false ? <></> :<Send email={email}/>}
        {loggedIn === false ? <></> : <GetMail refressButton={refressButton} />}
        {emailList.length !== 0 ? <EmailList emailList={emailList} /> : <></>}
      </div>
      
  )
}

export default App
