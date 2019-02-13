import React, { Component } from 'react';
import { Switch, Route, HashRouter } from "react-router-dom";
import Home from './Screens/HomeScreen/HomeScreen'
import UserScreen from './Screens/UserScreen/UserScreen'
import Header from './Components/Header/Header'
import './App.css';
import SubHeader from './Components/SubHeader/SubHeader';

class App extends Component {
  render() {
    return (
        <React.Fragment>
        <HashRouter>
        <Switch>
        <Route path="/">
        {props => <div>
        <Header></Header>
        <SubHeader {...props}></SubHeader>
        <Route exact path="/" component={Home}></Route>
        <Route exact path="/adduser" component={UserScreen}></Route>
        </div>}
        </Route>
        </Switch>
        </HashRouter>
        </React.Fragment>

  );
  }
}

export default App;
