// react bootstrap
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';

// router
import { useHistory } from "react-router-dom";


function LessonsHome(props) {

  // router hook
  const history = useHistory();

  return (
      <Container className="row m-auto">

        {props.lessons.slice(0).reverse().map((i) =>
          <Card
            style={{ width: '30%',margin:10,marginTop:40 }}
            className="card-clickable"
          >
            <Card.Body onClick={() => history.push(`/l/${i._id}`)}>
              <Card.Title>
                <h3>{i.title}</h3>
              </Card.Title>
            </Card.Body>
          </Card>
        )}

      </Container>
  );

};

export default LessonsHome;
