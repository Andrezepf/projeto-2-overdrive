import { useState } from 'react';
import Alert from 'react-bootstrap/Alert';

function Message({color, text}) {
  const [show, setShow] = useState(true);

  if(color == "success"){

    setTimeout(() => {
      setShow(false)
  }, 4000)
  }

  if (show) {
    return (
      <Alert variant={color} onClose={() => setShow(false)} dismissible>
        <p className='message'>{text}</p>
      </Alert>
    );
  }

}

export default Message;