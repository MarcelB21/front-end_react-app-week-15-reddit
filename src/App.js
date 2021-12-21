import {Route, NavLink, Switch} from "react-router-dom";
import './App.css';
import Homepage from "./pages/Homepage";
import Subreddit from "./pages/Subreddit";

function App() {
  return (
      <div >
        <NavLink to="/"/>
        <NavLink to="/subreddit/:id"/>

        <Switch>
          <Route exact path="/">
            <Homepage/>
          </Route>

          <Route path="/subreddit/:id">
            <Subreddit/>
          </Route>

        </Switch>
      </div>
  );
}

export default App;
