import './App.css';
import HomePage from './components/HomePage/HomePage';
import ProfilePage from './components/ProfilePage/ProfilePage';
import {
  Route,
  Switch
} from 'react-router-dom';

function App() {

  return (
    <Switch>
      <Route path={'/users/:vkUser'} render={({match}) => <ProfilePage user={match.params.vkUser} />} />
      <Route path={'/'} component={HomePage} />
    </Switch>

  );

}

export default App;
