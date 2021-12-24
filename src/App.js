import './App.css';

import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import { Navbar } from './components/Navbar';
import { Homepage } from './components/pages/Homepage';

import { profilePage } from './components/pages/profilePage';
import { LoginPage } from './components/pages/LoginPage';
import { newPostPage } from './components/pages/newPostPage';

function App() {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route exact path="/">
          <Homepage />
        </Route>
        <Route path="/profile">
           <profilePage />
        </Route>
        <Route path="/login">
          <LoginPage />
        </Route>
        <Route path="/newPost">
          <newPostPage />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;