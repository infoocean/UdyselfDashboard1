import React from 'react';
import { Navbar, Row} from 'react-bootstrap';
import {BrowserRouter as Router, Link, Route, Switch} from 'react-router-dom';
import './Style.css';
import HomePage from './Home';
import Assignride from "./Assignride";
import Rejectedride from './Rejectedride';
import Completedride from './Completedride';
import Subscription from './Subscription';
import Querry from './Querry';
import Myprofile from './Myprofile';
import Contactagency from './Contactagency';
import Link1 from './link1';
import Link2 from './link2';
import Link3 from './link3';
import Billing from './Billing';

export default function NavSidebarf() {
  return (
    <Row>
    <div className="container-fluid">
    <Router>
    <div id="dashmenu" className="sidebar">
      <Navbar className="sidebar">
        <ul style={{margin:"0px",padding: "0px"}}>
          <li ><Link to="/" className="nav-link active">Dashboard</Link></li>
          <li className="nav-item"><Link to="/Assignride" className="nav-link">Assign Ride</Link></li>
          <li className="nav-item"><Link to="/Completedride" className="nav-link">Completed Ride</Link></li>
          <li className="nav-item"><Link to="/Rejectedride" className="nav-link">Rejected Ride</Link></li>
          <li className="nav-item"><Link to="/Billing" className="nav-link">Billing</Link></li>
          <li className="nav-item"><Link to="/Querry" className="nav-link">Querry</Link></li>
          <li className="nav-item"><Link to="/Subscription" className="nav-link">Subscription</Link></li>
          <li className="nav-item"><Link to="/Myprofile" className="nav-link">My Profile</Link></li>
          <li className="nav-item"><Link to="/Contactagency" className="nav-link">Contact Trevel Agency</Link></li>
          <li className="nav-item"><Link to="/Link1" className="nav-link">Link1</Link></li>
          <li className="nav-item"><Link to="/Link2" className="nav-link">Link2</Link></li>
          <li className="nav-item"><Link to="/Link3" className="nav-link">Link3</Link></li>
        </ul>
      </Navbar>
    </div>
    <div className="outsideOfMenu">
      <Switch>
          <Route path="/" exact={true}>
            <HomePage/>
          </Route>
          <Route path="/Assignride">
            <Assignride/>
          </Route>
          <Route path="/Completedride">
            <Completedride/>
          </Route>
          <Route path="/Rejectedride">
            <Rejectedride/>
          </Route>
          <Route path='/Billing'>
            <Billing/>
          </Route>
          <Route path="/Querry">
            <Querry/>
          </Route>
          <Route path="/Subscription">
            <Subscription/>
          </Route>
          <Route path="/Contactagency">
            <Contactagency/>
          </Route>
          <Route path="/Myprofile">
            <Myprofile/>
          </Route>
          <Route path="/link1">
            <Link1/>
          </Route>
          <Route path="/link2">
            <Link2/>
          </Route>
          <Route path="/link3">
            <Link3/>
          </Route>
        </Switch>
    </div>
    </Router>
    </div>
    </Row>
  )
}
