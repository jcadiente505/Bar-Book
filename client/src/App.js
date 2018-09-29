import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { MuiThemeProvider } from '@material-ui/core/styles';
import Navbar from "./components/navbar";
import Home from "./pages/home";

class App extends Component {
  render() {
    return (
      <MuiThemeProvider>
        <Router>
          <div>
            <Navbar />
            <Switch>
              <Route exact path="/" component={Home} />
            </Switch>
          </div>
        </Router>
      </MuiThemeProvider>
    );
  };
};



export default App;
