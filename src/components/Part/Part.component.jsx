import React, {useState,useEffect} from 'react';

// react drafs and wysgi
import Draft,{EditorState,convertFromHTML,ContentState,RichUtils} from 'draft-js';
import { Editor } from 'react-draft-wysiwyg';
import 'react-draft-wysiwyg/dist/react-draft-wysiwyg.css';
import { convertToHTML } from 'draft-convert';
import parse from 'html-react-parser';
import CodeUtils from 'draft-js-code';


// React bootstrap
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';

// react router
import {Link,useParams} from "react-router-dom";

// redux
import {useDispatch,useSelector} from 'react-redux';
import {WritePartContent} from '../../redux/Actions';

// React toastify
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';



function Part() {

  // params
  const {pid,lid} = useParams();

  // notify
  const notify = () => toast.success("Save Done 🎉");

  // states
  const [editorState, setEditorState] = useState(
    () => EditorState.createEmpty(),
  );
  const [part,setPart] = useState(null);
  const [c,setC] = useState(false);
  const [edit,setEdit] = useState(false);

  // redux
  const dispatch = useDispatch();
  const reducer = useSelector(state => state.reducer);

  // inside functions
  const writeContent = () => {
      // dispatch it
      dispatch(WritePartContent(
        reducer.lessons,lid,pid,convertToHTML(editorState.getCurrentContent())
      ));
      notify();
  };

  // plugin functions for code support
  const handleKeyCommand = (command) => {
    let newState;
    if (CodeUtils.hasSelectionInBlock(editorState)) {
      newState = CodeUtils.handleKeyCommand(editorState, command);
    };
    if (!newState) {
      newState = RichUtils.handleKeyCommand(editorState, command);
    };
    if (newState) {
      setEditorState(newState);
      return 'handled';
    }
    return 'not-handled';
  }

  const keyBindingFn = (evt) => {
    if (!CodeUtils.hasSelectionInBlock(editorState)) return Draft.getDefaultKeyBinding(evt);
    const command = CodeUtils.getKeyBinding(evt);
    return command || Draft.getDefaultKeyBinding(evt);
  }

  const handleReturn = (evt) => {
    if (!CodeUtils.hasSelectionInBlock(editorState)) return 'not-handled';
    setEditorState(CodeUtils.handleReturn(evt, editorState));
    return 'handled';
  }

  const onTab = (evt) => {
    if (!CodeUtils.hasSelectionInBlock(editorState)) return 'not-handled';
    setEditorState(CodeUtils.onTab(evt, editorState));
    return 'handled';
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
    if (part.content?.length) {
        // Check that we have content already
        setC(part.content);
        // set editor content to current html
        const blocksFromHTML = convertFromHTML(part.content);
        const state = ContentState.createFromBlockArray(
          blocksFromHTML.contentBlocks,
          blocksFromHTML.entityMap,
        );
        setEditorState(EditorState.createWithContent(state));

    } else {
      setEdit(true);
    };

  }, [reducer.lessons,lid,pid]);


  return (
    <Container>

      <Link to={`/l/${lid}`}>
        <h5 className="text-center mt-4">Go Back</h5>
      </Link>

      <h2 className="text-center mt-5 mb-1">
        {part?.title}
      </h2>

      <div className="mt-3 text-center columns align-items-center justify-content-center mb-2">
        <Button onClick={() => setEdit(!edit)} variant="light">
          {edit ? 'Exit editor' : 'Edit'}
        </Button>
      </div>

      <hr className="mb-5" />

      { edit &&
        <>
          <Editor
              defaultEditorState={editorState}
              editorState={editorState}
              onEditorStateChange={setEditorState}
              wrapperClassName="wrapper-class"
              editorClassName="editor-class"
              toolbarClassName="toolbar-class"
              toolbar={{
               options: ['inline','blockType','list','emoji','image'],
              }}
              keyBindingFn={keyBindingFn}
              handleKeyCommand={handleKeyCommand}
              handleReturn={handleReturn}
              onTab={onTab}
          />
          <div className="mt-3 text-center columns align-items-center justify-content-center mb-5">
            <Button onClick={writeContent} variant="dark">Save & write changes 💾</Button>
          </div>
        </>
      }

      { c && !edit &&
        parse(c)
      }

      <ToastContainer />

    </Container>
  );

};

export default Part;
