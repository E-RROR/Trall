import {useState,useEffect,useCallback} from 'react';

// react bootstrap
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';

// react router
import {Link,useParams} from "react-router-dom";

// redux
import {useSelector,useDispatch} from 'react-redux';
import {DeleteLesson} from '../../redux/Actions';

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
  const dispatch = useDispatch();

  // inside functions

  const remove = (i) => {window.history.back();dispatch(DeleteLesson(i,reducer.lessons))};

  const getlesson = useCallback(() => {
    let inpt = reducer.lessons.find(element => element._id === parseInt(id))
    setLesson(inpt);
  }, [reducer.lessons,id]);


  // effects
  useEffect(() => {
      getlesson();
  });

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

              <div className="mt-2 text-center columns align-items-center justify-content-center">
                <Button variant="light" onClick={() => remove(lesson)}>Delete</Button>
              </div>

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
