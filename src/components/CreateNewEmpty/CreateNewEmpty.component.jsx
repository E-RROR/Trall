import React,{useState} from 'react';

// redux
import {useDispatch} from 'react-redux';
import {CreateLesson} from '../../redux/Actions';

// react bootstrap
import Card from 'react-bootstrap/Card';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';


function CreateNewEmpty() {

  // states
  const [show, setShow] = useState(false);
  const [name, setName] = useState('');

  // triggers
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  // redux
  const dispatch = useDispatch();


  // inside functions
  const createLesson = () => {

      if (name) {

        // dispatch action to create new lesson
        dispatch(CreateLesson(name));
        // then we should close modal
        handleClose();

      } else {
        alert('Name is empty!')
      };

  };


  return (
    <>

      <Card className="columns align-items-center p-5 card-add" onClick={handleShow}>
        <Card.Body>
          <a>
            +
          </a>
        </Card.Body>
      </Card>

      <Modal
        show={show}
        onHide={handleClose}
        keyboard={false}
      >
        <Modal.Body>
          <h3>Choose a name</h3>
          <Form.Control value={name} onChange={(val) => setName(val.target.value)} type="text" className="mt-3" placeholder="Learning Bootstrap ..." />
          <Button variant="primary" className="mt-3" onClick={createLesson}>
            Create 🚀
          </Button>
        </Modal.Body>
      </Modal>

    </>
  );

};

export default CreateNewEmpty;
