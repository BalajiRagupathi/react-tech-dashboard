import React, { Component } from "react";
import { BrowserRouter as Router, Switch , Route } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar";
import Dashboard from "./views/Dashboard";
import Reports from "./views/Reports";
import TableList from "./views/TableList";

class App extends Component {
  render() {
    return (
      <div>
        <Router>
          <Navbar />
          <Switch>
            <Route path="/" exact component={Dashboard} />
            <Route path="/reports" component={Reports} />
            <Route path="/tablelist" component={TableList} />
          </Switch>
        </Router>
      </div>
    );
  }
}

export default App;
