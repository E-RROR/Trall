import React,{useState} from 'react';

// redux
import {useDispatch,useSelector} from 'react-redux';
import {CreatePartAction} from '../../redux/Actions';

// react bootstrap
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';


function CreatePart(props) {

  // states
  const [show, setShow] = useState(false);
  const [name, setName] = useState('');

  // triggers
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  // redux
  const dispatch = useDispatch();
  const reducer = useSelector(state => state.reducer);

  // inside functions
  const createPart = () => {

      if (name) {
        // dispatch action to create new lesson
        dispatch(CreatePartAction(reducer.lessons,props.id,name));
        // then we should close modal
        handleClose();
      } else {
        alert('Name is empty!')
      };

  };

  return (
    <>
      <div className="mt-3 text-center columns align-items-center justify-content-center" onClick={handleShow}>
        <Button variant="outline-dark">New part ➕</Button>
      </div>

      <Modal
        show={show}
        onHide={handleClose}
        keyboard={false}
      >
        <Modal.Body>
          <h3>Choose a name</h3>
          <Form.Control value={name} onChange={(val) => setName(val.target.value)} type="text" className="mt-3" placeholder="#1 - Intro ..." />
          <Button variant="primary" className="mt-3" onClick={createPart}>
            Create 🚀
          </Button>
        </Modal.Body>
      </Modal>

    </>
  );

};

export default CreatePart;
