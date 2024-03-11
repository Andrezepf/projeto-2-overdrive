import { useState } from 'react';
import Alert from 'react-bootstrap/Alert';

function Message({color, text}) {
  const [show, setShow] = useState(true);

  if (show) {
    return (
      <Alert variant={color} onClose={() => setShow(false)} dismissible>
        <p>{text}</p>
      </Alert>
    );
  }

}

export default Message;