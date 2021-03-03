import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route } from "react-router-dom";
import Navbar from "../src/components/navbar";
import home from "../src/components/Pages/home";
import portfolio

function App() {
  return (
    <Router>
      <div>
        <Navbar />
        <Route exact path={["/", "home"]} component={Home} />
        <Route exact path={[/portfolio]} component= {Portfolio}/ >
          <Route exact path={[/contact]} component= {Contact}/ >
     </div>
   </Router>
 )

 
}

export default App;
