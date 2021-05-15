// Router
import {
 BrowserRouter as Router,
 Route,
 Switch
} from "react-router-dom";

// components
import Home from './components/Home/Home.component';



function App() {
  return (
      <Router>
          <Switch>

            <Route path="/">
              <Home />
            </Route>

          </Switch>
      </Router>
  );
}

export default App;
