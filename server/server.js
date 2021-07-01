const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors'); 
const { DateTime } = require("luxon");

const app = express();
const port = process.env.PORT || 5000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());


const usersDB = {  end: { pass: '123' }, user: { pass: '123' }  };
const usersMsg = { 
  end: [{from: 'kostas' , msg: 'hello friend', date : '1999'}, 
  {from: 'kostas' , msg: 'bye friend', date : '2000'}] ,
  user: []
};

app.get('/api/hello', (req, res) => {
  res.send({ express: 'Hello From Express' });
});

app.post('/api/adduser', (req, res) => {
  if(!usersDB.hasOwnProperty(req.body.name)){
    usersDB[`${req.body.name}`]= {pass: req.body.pass}
    usersMsg[`${req.body.name}`] = [];
    return res.json({ success: `hello ${req.body.name}`});
  }
  return res.json({ error: "error user exists"});
});

app.get('/api/readmail', (req, res) => {
  const name = req.headers.name;
  const pass = req.headers.pass;
  if(usersDB.hasOwnProperty(name) && usersDB[`${name}`].pass === pass){
    return res.json(usersMsg[`${name}`])
  }
    return res.json({ error: "error wrong name or pass"});
})

app.post('/api/sendmail', (req, res) => {
  const name = req.headers.name;
  const pass = req.headers.pass;
  const receiver = req.body.receiver;
  const msg = req.body.msg;
  if(usersDB.hasOwnProperty(name) && usersDB[`${name}`].pass === pass){
    const dateF = DateTime.now().toFormat('f');;;
    if(usersDB.hasOwnProperty(receiver)){
      usersMsg[`${req.body.receiver}`].push({from: name, msg: msg, date: dateF})
      return res.json({ success: 'email send'})
    }

  }
    return res.json({ error: "error no such user"});

})

app.get('/', (req, res) => {
  console.log(req.query)
})

app.post('/api/world', (req, res) => {
  console.log(req.body);
  res.send(
    `I received your POST request. This is what you sent me: ${req.body.post}`,
  );
});

app.listen(port, () => console.log(`Listening on port ${port}`));
