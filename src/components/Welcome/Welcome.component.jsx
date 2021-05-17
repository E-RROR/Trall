import {useState} from 'react';
import Logo from '../../assets/images/logo512.png';

// redux
import {useSelector} from 'react-redux';

// components
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';

// redux
import {useDispatch} from 'react-redux';
import {ShowWelcome} from '../../redux/Actions';


function Welcome() {

  // redux
  const dispatch = useDispatch();

  const [show, setShow] = useState(true);

  const handleClose = () => {
      dispatch(ShowWelcome());
      setShow(false);
  };
  const handleShow = () => setShow(true);

  return (
        <Modal
          show={show}
          onHide={handleClose}
          backdrop="static"
          keyboard={false}
          size='lg'
        >
          <div className="columns text-center justify-content-center align-items-center">
            <img src={Logo} width="25%" className="img mt-5 mb-2" />
            <Modal.Body>
              <h1 className="mt-4 mb-1">Welcome to Trall 🎉</h1>
              <h5 className="p-5">
                Thanks for using Trall, we try to keep improve and update Trall for
                community use cases but remember that Trall is just an open-source and
                self hobby project and will not guarantee any type of you'r data!
                also we will make some options for backup you'r data and keep it in safe
                place and ability to restore it as well.
              </h5>
              <Button size='lg' variant="dark" onClick={handleClose}>
                Let's Go 😮
              </Button>
            </Modal.Body>
          </div>
      </Modal>
  );
};

export default Welcome;
