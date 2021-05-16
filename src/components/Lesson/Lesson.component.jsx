import {useEffect,useState} from 'react';

// react bootstrap
import Container from 'react-bootstrap/Container';

// react router
import {Link,useParams} from "react-router-dom";

// redux
import {useSelector} from 'react-redux';

// create part function
import CreatePart from '../CreatePart/CreatePart.component';




function Lesson() {

  // Get lesson id
  let { id } = useParams();

  // states
  // object of lesson while get here
  // when find throgh useEffect
  const [lesson, setLesson] = useState(null);

  // redux
  const reducer = useSelector(state => state.reducer);

  // inside functions
  const findlesson = inpt => reducer.lessons.find(element => element._id == inpt);

  // effects
  useEffect(() => {
      let lesson_obj = findlesson(id);
      setLesson(lesson_obj);
  }, []);

  return (
      <Container>

          <Link to="/">
            <h5 className="text-center mt-4">Get Home</h5>
          </Link>

          { lesson &&
            <>

              <h1 className="text-center mt-5">
                {lesson.title}
              </h1>

              <CreatePart id={id} />

              <br />
              <div className="m-auto w70">
                {lesson.parts.map(i =>
                  <Link to={`/p/${id}/${i._id}`} className="tblack">
                    <h2 className="m-5">{i.title}</h2>
                  </Link>
                )}
              </div>

            </>
          }

          { !lesson &&
            <>
              <h1>Not found : (</h1>
            </>
          }

      </Container>
  );

};

export default Lesson;
