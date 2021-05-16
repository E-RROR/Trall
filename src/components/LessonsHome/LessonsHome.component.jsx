// react bootstrap
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';

// react router
import {Link} from 'react-router-dom';

// redux
import {useDispatch} from 'react-redux';
import {DeleteLesson} from '../../redux/Actions';


function LessonsHome(props) {

  // redux
  const dispatch = useDispatch();

  // inside functions
  const remove = (i) => dispatch(DeleteLesson(i,props.lessons));

  return (
      <Container className="row m-auto">

        {props.lessons.slice(0).reverse().map((i) =>
          <Card
            style={{ width: '30%',margin:10,marginTop:40 }}
            className="card-clickable"
          >
            <Card.Body onClick={() => window.location.href = `/l/${i._id}`}>
              <Card.Title>
                <h3>{i.title}</h3>
              </Card.Title>
            </Card.Body>
            <Button variant="outline-danger" onClick={() => remove(i)}>Delete</Button>
          </Card>
        )}

      </Container>
  );

};

export default LessonsHome;
