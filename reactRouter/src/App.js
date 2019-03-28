import React, { Component } from "react";

import "./App.css";

import Posts from "./components/posts";

import About from "./components/about";

import Error from "./components/error";

import PostPage from "./components/postpage";

import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <nav>
            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/about/">About</Link>
              </li>
            </ul>
          </nav>

          {/* Switch komponenta za razliku od Routera nam renderuje samo prvi Route koji ispunjava path uslov */}
          <Switch>
            {/* Rout komponenta iscrtava svoju komponentu (ovde Posts), ukoliko URL odgovara path-u */}
            {/* exact koristimo kada zelimo da putanja bude bas takva "/" (ne recimo /asd/a) */}
            <Route path="/" exact component={Posts} />

            <Route path="/about" exact component={About} />

            {/* prefiks ":" nam sluzi da definisemo parametar. Njega mozemo prosledjivati pomocu linka /post/2, recimo, gde ce vrednost parametra u komponenti PostPage biti 2. Pogledati postpage.js */}
            <Route path="/post/:postId" component={PostPage} />

            <Route component={Error} />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
