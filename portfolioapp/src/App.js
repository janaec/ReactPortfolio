import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route } from "react-router-dom";
import Navbar from "../src/components/navbar";
import Home from "../src/components/Pages/home";
import Portfolio from "../src/components/Pages/Portfolio";
import Contact from "../src/components/Pages/Contact";

function App() {
  return (
    <Router>
      <div>
        <Navbar />
        <Route exact path={["/", "home"]} component={Home} />
        <Route exact path={["/portfolio"]} component= {Portfolio}/ >
          <Route exact path={["/contact"]} component= {Contact}/ >
      </div>
    </Router>
 )

 
}

export default App;
