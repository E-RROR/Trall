// Router
import {
 BrowserRouter as Router,
 Route,
 Switch
} from "react-router-dom";

// components
import Home from './components/Home/Home.component';
import Lesson from './components/Lesson/Lesson.component';


function App() {
  return (
      <Router>
          <Switch>

            <Route exact path="/">
              <Home />
            </Route>

            <Route path="/l/:id">
              <Lesson />
            </Route>

          </Switch>
      </Router>
  );
}

export default App;
