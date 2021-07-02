const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const { DateTime } = require('luxon');

const app = express();
const port = process.env.PORT || 5000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());

const usersDB = { end: { pass: '123' }, user: { pass: '123' } };
const usersMsg = {
  end: [{ from: 'kostas', msg: 'hello friend', date: '1999' },
    { from: 'kostas', msg: 'bye friend', date: '2000' }],
  user: [],
};

app.get('/api/hello', (req, res) => {
  res.send({ express: 'Hello From Express' });
});

app.post('/api/adduser', (req, res) => {
  const { name } = req.body;
  const { pass } = req.body;
  if (!Object.prototype.hasOwnProperty.call(usersDB, name)) {
    usersDB[`${name}`] = { pass };
    usersMsg[`${name}`] = [];
    return res.json({ success: `hello ${name}` });
  }
  if (Object.prototype.hasOwnProperty.call(usersDB, name) && usersDB[`${name}`].pass === pass) {
    return res.json({ success: `hello ${name}` });
  }
  return res.json({ error: 'error wrong pass' });
});

app.get('/api/readmail', (req, res) => {
  const { name } = req.headers;
  const { pass } = req.headers;
  if (Object.prototype.hasOwnProperty.call(usersDB, name) && usersDB[`${name}`].pass === pass) {
    return res.json(usersMsg[`${name}`]);
  }
  return res.json({ error: 'error wrong name or pass' });
});

app.post('/api/sendmail', (req, res) => {
  const { name } = req.headers;
  const { pass } = req.headers;
  const { receiver } = req.body;
  const { msg } = req.body;
  if (Object.prototype.hasOwnProperty.call(usersDB, name) && usersDB[`${name}`].pass === pass) {
    const dateF = DateTime.now().toFormat('f');
    if (Object.prototype.hasOwnProperty.call(usersDB, receiver)) {
      usersMsg[`${req.body.receiver}`].push({ from: name, msg, date: dateF });
      return res.json({ success: 'email send' });
    }
  }
  return res.json({ error: 'error no such user' });
});

app.listen(port);
