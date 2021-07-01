import React, {useState} from 'react';


const Send = ({email}) => {
  const [receiver, setReceiver] = useState('');
  const [msg, setMsg] = useState('');
  const onSubmit = e => {
    e.preventDefault();
    if (!receiver || !msg) {
      alert('Please add a Receiver and Message')
      return;
    }
    email({receiver, msg });

    setReceiver('');
    setMsg('');
    return false;
  };


  return (
    <form className="card card--send" onSubmit={onSubmit}>
        <h1 className='card__register-title'>Send email</h1>
        <label>Receiver</label>
        <input className='card__input' type="text" id="title"
        placeholder='Receiver'
        value={receiver}
        onChange={e => setReceiver(e.target.value)}></input>
        <label>Message</label>
        <input className='card__input' type="text" id="Message"
        placeholder='Message'
        value={msg}
        onChange={e => setMsg(e.target.value)}></input>
        <input type="submit" className="card__btn" value="Send"></input>
      </form>
  )
}

export default Send;