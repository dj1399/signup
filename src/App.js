import logo from './logo.svg';
import './App.css';
import SignIn from "./Sign_in/SignIn";
import SignUp from "./SignUp/SignUp";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import homepage from "./homepage/homepage";

function App() {
  return (
    <div className="App">
      {/* <SignIn/> */}
      {/* <SignUp/> */}
      <BrowserRouter>
        <Switch>
          <Route path="/registration" component={homepage} exact />
          <Route path="/" component={homepage} exact />
          <Route path="/SignUp" component={SignUp} exact />
          <Route path="/SignIn" component={SignIn} exact />
          </Switch>
          </BrowserRouter>
    </div>
  );
}

export default App;
