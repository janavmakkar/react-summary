import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import AllMeetup from "./pages/AllMeetup";
import NewMeetup from "./pages/NewMeetup";
import Favorites from "./pages/Favorites";
import Layout from './components/layouts/Layout';
import { FavouritesContextProvider } from './store/favourite-context';


function App() {
  return (
      <FavouritesContextProvider>
    <Router>
        <Layout>
          <Switch>
            <Route exact path='/'><h1>Home Page🏠</h1></Route>
            <Route exact path='/new-meetups'><NewMeetup/></Route>
            <Route exact path='/all-meets'><AllMeetup /></Route>
            <Route exact path='/favorites'><Favorites/></Route>
          </Switch>
        </Layout>
    </Router>
      </FavouritesContextProvider>
  )
}

export default App;
