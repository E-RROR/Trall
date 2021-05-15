// react bootstrap
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';



function LessonsHome(props) {

  return (
      <Container className="row m-auto">

        {props.lessons.map((i) =>
          <Card style={{ width: '30%',margin:10,marginTop:40 }} className="card-clickable">
            <Card.Body>
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
