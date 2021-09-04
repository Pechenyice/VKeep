import './App.css';
import HomePage from './components/HomePage/HomePage';
import ProfilePage from './components/ProfilePage/ProfilePage';
import {
  BrowserRouter as Router,
  Route,
  Link,
  Redirect,
  Switch
} from 'react-router-dom';
import { useState } from 'react';

function App() {

  let [user, setUser] = useState('');

  function handleUserSelected(vkUser) {
    setUser(vkUser);
    // location.pathname = [location.pathname, vkUser].join('/');
  }

  return (
    <Router>
      <Switch>
        <Route path={'/users'} render={() => <ProfilePage user={user} />} />
        <Route path={'/'} render={() => <HomePage onUserSelected={handleUserSelected} />} />
      </Switch>
    </Router>
  );

}

export default App;
