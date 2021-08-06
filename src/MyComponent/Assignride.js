import React, {useState} from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash} from '@fortawesome/free-solid-svg-icons';
import {Collapse, Nav, NavLink} from 'react-bootstrap';
import {BrowserRouter as Router, Link, Route, Switch} from 'react-router-dom';
import Time from './Innernavbar/Timedetails';
import Empdetails from './Innernavbar/Empdetails';
import Cancel from './Innernavbar/Cancel';
import Notification from './Innernavbar/Notifications';
import Control from './Innernavbar/Controls';

export default function Assignride() {

    const [open, setOpen] = useState(false);
    
    return (
      <>
        <div className="Assignedrideinformation">
        <Collapse in={open}>
            <div id="rideinformation">
            <Router>
                <Nav className=" innernav justify-content-center">
                    <Link  className="link" to="/">Timing</Link>
                    <Link  className="link" to="/Empdetails">Employ Details</Link>
                    <Link  className="link" to="/Notification">Notifications</Link>
                    <Link  className="link" to='/Control'>Controls</Link>
                    <Link  className="link" to='/Cancel'>Canclation</Link>
                </Nav>
                <Switch>
                <div className="data">
                    <Route exact path='/' component={Time}/>
                    <Route path='/Empdetails' component={Empdetails}/>
                    <Route path='/Notification' component={Notification} />
                    <Route path='/Control' component={Control} />
                    <Route path='/Cancel' component={Cancel} />
                </div>
                </Switch>
            </Router>
            </div>
        </Collapse>
           <h4 className="mt-5">Assigned all Rides</h4>
           <table class='mt-4 table table-bordered table-condensed table-striped table-hover'>
                <thead>
                <tr>
                   <th>SE NO</th>
                   <th>Assigned Id</th>
                   <th>Pickup Location</th>
                   <th>Pickup Time</th>
                   <th>Drop Location</th>
                   <th>Drop Time</th>
                   <th>Date</th>
                   <th>Status</th>
                   <th>Action</th>
                </tr>
                </thead>
                <tbody>
                <tr class="table-row" data-href="http://tutorialsplane.com">
                    <td>1</td>
                    <td onClick={() => setOpen(!open)}
                    aria-controls="example-collapse-text"
                    aria-expanded={open}>0186CS171099</td>
                    <td>Indore</td>
                    <td>30:20</td>
                    <td>Bhopal</td>
                    <td>7:45</td>
                    <td>12-06-2021</td>
                    <td></td>
                    <td>
                    <button className="btn btn-danger" onClick={(e) =>{
                    document.querySelector("#deletebox").classList.add('click');
                        }}><FontAwesomeIcon icon={faTrash}/></button>
                    </td>
                </tr>
                <tr class="table-row"data-href="http://tutorialsplane.com">
                    <td>2</td>
                    <td  onClick={() => setOpen(!open)}
                    aria-controls="example-collapse-text"
                    aria-expanded={open}>0186CS171098</td>
                    <td>bhopal</td>
                    <td>7:00</td>
                    <td>pune</td>
                    <td>8:00</td>
                    <td>12-06-2021</td>
                    <td></td>
                    <td>
                    <button className="btn btn-danger" onClick={(e) =>{
                    document.querySelector("#deletebox").classList.add('click');
                        }}><FontAwesomeIcon icon={faTrash}/></button>
                    </td>
                </tr>
                <tr class="table-row"data-href="http://tutorialsplane.com">
                    <td>3</td>
                    <td  onClick={() => setOpen(!open)}
                    aria-controls="example-collapse-text"
                    aria-expanded={open}>0186CS17106</td>
                    <td>Indore</td>
                    <td>13:56</td>
                    <td>Mumbai</td>
                    <td>14:00</td>
                    <td>12-06-2021</td>
                    <td></td>
                    <td>
                    <button className="btn btn-danger" onClick={(e) =>{
                    document.querySelector("#deletebox").classList.add('click');
                        }}><FontAwesomeIcon icon={faTrash}/></button>
                    </td>
                </tr>
                
                </tbody>
            </table>
            
                <div id="deletebox">       
                <h4>Are You Sure To Delete!</h4>
                    <button className="btn" onClick={(e) =>{
                        document.querySelector("#deletebox").classList.remove('click')
                         }}>YES
                    </button>
                    <button className="btn" onClick={(e) =>{
                        document.querySelector("#deletebox").classList.remove('click')
                        }}>No
                    </button>
                </div>
        </div>
    </>
    )
}
