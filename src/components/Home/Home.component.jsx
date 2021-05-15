// redux
import {useSelector} from 'react-redux';

// components
import CreateNewEmpty from '../CreateNewEmpty/CreateNewEmpty.component';


function Home() {

  // redux
  const reducer = useSelector(state => state.reducer);

  // Check for that user already defines
  // learning path
  if (reducer.lessons?.[0]) {
    return (
        <>
          <h1>We have lessons</h1>
        </>
    );
  } else {
    return (
        <>

          <h1 className="text-center mt-5">
            🙂
          </h1>

          <h2 className="text-center mt-2">
            You'r learning path is empty
          </h2>

          <h6 className="text-center mt-2">
            Start by creating new one from below ➕
          </h6>

          <CreateNewEmpty />

        </>
    );
  };

};

export default Home;
