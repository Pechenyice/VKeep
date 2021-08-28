import './App.css';
import HomePage from './components/HomePage/HomePage';
import ProfilePage from './components/ProfilePage/ProfilePage';

// TODO:
// 1. New profile image in profile activity and profile info
// 2. Adaptive
// 3. transition to resize and remove paddingRight from activity block
// 4. Refactor Promise.all in api requests to Promise.then

function App() {
  return (

    // <HomePage /> 

    <ProfilePage user={'bobby'}/>

  );
}

export default App;
