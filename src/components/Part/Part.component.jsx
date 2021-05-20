import React, {useState,useEffect} from 'react';

// react quill
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.bubble.css';

// React bootstrap
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';

// react router
import {Link,useParams,Redirect} from "react-router-dom";

// redux
import {useDispatch,useSelector} from 'react-redux';
import {WritePartContent,DeletePart} from '../../redux/Actions';

// React toastify
import {ToastContainer,toast} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';



function Part() {

  // params
  const {pid,lid} = useParams();

  // notify
  const notify = () => toast.success("Save Done 🎉");

  const [part,setPart] = useState(null);
  const [c,setC] = useState('<p>Edit me : D</p>');

  // redux
  const dispatch = useDispatch();
  const reducer = useSelector(state => state.reducer);

  // inside functions
  const writeContent = () => {
      // dispatch it
      dispatch(WritePartContent(
        reducer.lessons,lid,pid,c
      ));
      notify();
  };

  // inside functions
  const deletePart = () => {
      window.history.back()
      // dispatch it
      dispatch(DeletePart(
        reducer.lessons,lid,pid
      ));
  };


  // Get Part details
  useEffect(() => {

    // Search for lesson first
    let lesson = reducer.lessons.find(element => element._id === parseInt(lid));

    // find part
    let part = lesson.parts.find(element => element._id === parseInt(pid));

    // set part to access it name
    setPart(part);

    // set part content if exist to state
    if (part?.content?.length) {
        // Check that we have content already
        setC(part.content);
    };

  }, [reducer.lessons,lid,pid]);


  const modules = {
    toolbar: [
      [{ 'header': [1, 2, 3, false] }],
      ['bold', 'italic', 'underline','strike', 'blockquote'],
      [{'block': ['code-block']}],
      [{'list': 'ordered'}, {'list': 'bullet'}, {'indent': '-1'}, {'indent': '+1'}],
      ['link', 'image','video','code-block'],
      ['clean']
    ],
  };

  const formats = [
    'header',
    'bold', 'italic', 'underline', 'strike', 'blockquote',
    'list', 'bullet', 'indent',
    'link', 'image', 'code-block'
  ];

  if (part?.content || c) {
    return (
      <Container>

        <Link to={`/l/${lid}`}>
          <h5 className="text-center mt-4">Go Back</h5>
        </Link>

        <h2 className="text-center mt-5 mb-1">
          {part?.title}
        </h2>

        <div className="mt-3 text-center columns align-items-center justify-content-center mb-1">
          <Button onClick={writeContent} variant="dark">Save changes 💾</Button>
        </div>

        <div className="mt-2 text-center columns align-items-center justify-content-center mb-5">
          <Button onClick={deletePart} variant="outline-danger">Delete</Button>
        </div>

        <hr className="mb-5 mt-5" />

        <>
          <ReactQuill
            modules={modules}
            formats={formats}
            value={c}
            theme='bubble'
            onChange={(e) => setC(e)}
          />
        </>

        <ToastContainer />

      </Container>
    );
  };

};

export default Part;
