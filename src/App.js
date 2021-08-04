import './App.css';
import Header from './Header';
import Footer from './Footer'
import Poker from './Poker/Poker';
import LandingPage from './LandingPage';
import {Route, Switch} from "react-router-dom"; 

function App() {
  return (
    <div className="App">
      <Header />
      <div className="container">
        <Switch>
          <Route exact path="/">
            <LandingPage />
          </Route>
          <Route exact path="/play">
            <Poker />
          </Route>
        </Switch>
      </div>
      <Footer />
    </div>
  );
}

export default App;
