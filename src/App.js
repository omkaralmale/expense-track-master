import "bootstrap/dist/css/bootstrap.min.css";
import { Route, BrowserRouter, Switch } from "react-router-dom";
import LogInPage from "./auth/LogInPage";
import SignUpPage from "./auth/SignUpPage";
import HeaderBar from "./components/layout/HeaderBar";
import Home from "./components/layout/Home/Home";
import UpdateProfile from "./components/layout/Home/UpdateProfile";
function App() {
  return (
    <>
      <HeaderBar />
      <BrowserRouter>
        <Switch>
          <Route path="/" component={LogInPage} exact></Route>
          <Route path="/login" component={LogInPage} exact></Route>
          <Route path="/signup" component={SignUpPage} exact></Route>
          <Route path="/home" component={Home} exact></Route>
          <Route path="/update-profile" component={UpdateProfile} exact></Route>
        </Switch>
      </BrowserRouter>
    </>
  );
}

export default App;
