import React from "react";
import "./App.css";
import {
  Switch,
  Route
} from "react-router-dom";
import { Login } from './components/pages/Login'
import { Main } from './components/pages/Main'
import { Story } from './components/pages/Story'
import { Profile } from './components/pages/Profile'
import { CheckLoginWrapper } from './components/CheckLogInWrapper'

function App() {

  return (
    <div className="App">
      <Switch>
        <Route path="/" exact>
          <Login />
        </Route> 
        <Route path={["/main", "/main/:query"]} exact>
          <CheckLoginWrapper>
            <Main />
          </CheckLoginWrapper> 
        </Route>
        <Route path="/story/:id">
          <CheckLoginWrapper>
            <Story />
          </CheckLoginWrapper>
        </Route>
        <Route path="/profile">
          <CheckLoginWrapper>
            <Profile/>
          </CheckLoginWrapper>
        </Route>
      </Switch>
    </div>
  );

}

export default App;