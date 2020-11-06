import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useLocation
} from "react-router-dom";
import Home from './components/Home/Home.jsx';
import About from './components/About/About.jsx';
import Questionnaire from "./components/Questionnaire/Questionnaire.jsx";

function Navigation() {
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark mb-4">
            <Link to="/" className="navbar-brand">Guru</Link>
            <ul className="navbar-nav mr-auto">
                <li className="nav-item active">
                    <Link to="/" className="nav-link">Home</Link>
                </li>
                <li className="nav-item">
                    <Link to="/about" className="nav-link">About</Link>
                </li>
            </ul>
            <form className="form-inline my-2 my-lg-0">
                <input className="form-control mr-sm-2" type="text" placeholder="Search" />
                <button className="btn btn-secondary my-2 my-sm-0" type="submit">Search</button>
            </form>
        </nav>
    )
}

function Footer() {
    return (
        <footer className="mt-4">
            <p>©2020 - home cinema guru</p>
        </footer>
    )
}

export default function App() {
    return (
        <Router>
            <div className="container">
                <Navigation />
                
                <Switch>
                    <Route path="/about">
                        <About />
                    </Route>
                    <Route path="/questionnaire">
                        <Questionnaire />
                    </Route>
                    <Route path="/" exact>
                        <Home />
                    </Route>
                </Switch>

                <Footer />
            </div>
        </Router>
    );
}