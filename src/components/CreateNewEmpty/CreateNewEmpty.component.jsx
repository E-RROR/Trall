// redux
import {useDispatch} from 'react-redux';

// react bootstrap
import Card from 'react-bootstrap/Card';


function CreateNewEmpty() {

  return (
    <Card className="columns align-items-center p-5 card-add">
      <Card.Body>
        <a>
          +
        </a>
      </Card.Body>
    </Card>
  );

};

export default CreateNewEmpty;
