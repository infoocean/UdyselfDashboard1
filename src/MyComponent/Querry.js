import React from 'react';
import {Row,Col,Collapse,Form } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash, faEdit } from '@fortawesome/free-solid-svg-icons';
import { useState } from 'react';

export default function Querry() {
    
    const [open, setOpen] = useState(false);
    
    return (
        <div className="query-table">
            <Row style={{padding:"20px"}}>
                <Col md={6}>
                <h4 align="left">General Query </h4> 
                </Col>
                <Col md={6} align="right">
                <button className="btn btn-outline-primary" onClick={() => setOpen(!open)}
                    aria-controls="example-collapse-text"
                    aria-expanded={open} >Add New Query</button>
                </Col>     
            </Row>
            <Collapse in={open}>
            <div id="QueryForm">
            <Form>
                <Row>
                <Col md={12}>
                <Form.Group as={Row} controlId="formPlaintextEmail">
                    <Form.Label className='add-labels' column sm="12">
                    Enter Your Subject
                    </Form.Label>
                    <Col sm="12">
                    <Form.Control type="text" placeholder="Enter Subject"/>
                    </Col>
                </Form.Group>
                </Col>
                <Col md={12}>
                <Form.Group as={Row} controlId="formPlaintextEmail">
                    <Form.Label className='add-labels' column sm="12">
                    Enter Your Message
                    </Form.Label>
                    <Col sm="12">
                    <Form.Control type="text-area" placeholder="Enter Message" />
                    </Col>
                </Form.Group>
                </Col>
                </Row>
                <Form.Group as={Row} className="mb-3 mt-3" controlId="formPlaintextEmail">
                    <Col md={4}></Col>
                    <Col md="3" align="center">
                    <Form.Control className="btn" type="submit" value="Add Details" onClick={(e)=>{
                        e.preventDefault();
                    }}/>
                    </Col>
                </Form.Group>
            </Form>
            </div>
            </Collapse>

        <div id="deletebox">       
            <h4>Are You Sure To Delete!</h4>
            <button className="btn" onClick={(e) =>{
                document.querySelector("#deletebox").classList.remove('click')
                }}>YES</button>
          <button className="btn" onClick={(e) =>{
                document.querySelector("#deletebox").classList.remove('click')
                }}>No</button>
        </div>

        <table class=' mt-4 table table-bordered table-condensed table-striped table-hover'>
            <thead>
                <tr>
                   <th>SE NO</th>
                   <th>Querry Id</th>
                   <th>Name</th>
                   <th>Email</th>
                   <th>Number</th>
                   <th>Subject</th>
                   <th>Message</th>
                   <th>Date / Time</th>
                   <th>Status</th>
                   <th>Action</th>
                </tr>
            </thead>
            <tbody>
                <tr class="table-row" data-href="http://tutorialsplane.com">
                    <td>1</td>
                    <td>0186CS171099</td>
                    <td>Shubham</td>
                    <td>sj2585097@gmail.com</td>
                    <td>7089413024</td>
                    <td>Money Related</td>
                    <td>Hello....</td>
                    <td>02-11-1999 / 10:45</td>
                    <td></td>
                    <td>
                    <button className="btn btn-warning"><FontAwesomeIcon icon={faEdit}/></button>
                    <button className="btn btn-danger" onClick={(e) =>{
                    document.querySelector("#deletebox").classList.add('click');
                        }}><FontAwesomeIcon icon={faTrash}/></button>
                    </td>
                </tr>
                <tr class="table-row" data-href="http://tutorialsplane.com">
                    <td>2</td>
                    <td>0186CS171089</td>
                    <td>Shubham</td>
                    <td>sj2585097@gmail.com</td>
                    <td>7089413024</td>
                    <td>Money Related</td>
                    <td>Hello hii....</td>
                    <td>02-11-1999 / 10:45</td>
                    <td></td>
                    <td>
                    <button className="btn btn-warning"><FontAwesomeIcon icon={faEdit}/></button>
                    <button className="btn btn-danger" onClick={(e) =>{
                    document.querySelector("#deletebox").classList.add('click');
                        }}><FontAwesomeIcon icon={faTrash}/></button>
                    </td>
                </tr>
                <tr class="table-row" data-href="http://tutorialsplane.com">
                    <td>3</td>
                    <td>0186CS171089</td>
                    <td>Shubham</td>
                    <td>sj2585097@gmail.com</td>
                    <td>7089413024</td>
                    <td>Money Related</td>
                    <td>Hello hii....</td>
                    <td>02-11-1999 / 10:45</td>
                    <td></td>
                    <td>
                    <button className="btn btn-warning"><FontAwesomeIcon icon={faEdit}/></button>
                    <button className="btn btn-danger" onClick={(e) =>{
                    document.querySelector("#deletebox").classList.add('click');
                        }}><FontAwesomeIcon icon={faTrash}/></button>
                    </td>
                </tr>
                <tr class="table-row" data-href="http://tutorialsplane.com">
                    <td>4</td>
                    <td>0186CS171089</td>
                    <td>Shubham</td>
                    <td>sj2585097@gmail.com</td>
                    <td>7089413024</td>
                    <td>Money Related</td>
                    <td>Hello hii....</td>
                    <td>02-11-1999 / 10:45</td>
                    <td></td>
                    <td>
                    <button className="btn btn-warning"><FontAwesomeIcon icon={faEdit}/></button>
                    <button className="btn btn-danger" onClick={(e) =>{
                    document.querySelector("#deletebox").classList.add('click');
                        }}><FontAwesomeIcon icon={faTrash}/></button>
                    </td>
                </tr>
                <tr class="table-row" data-href="http://tutorialsplane.com">
                    <td>5</td>
                    <td>0186CS171089</td>
                    <td>Shubham</td>
                    <td>sj2585097@gmail.com</td>
                    <td>7089413024</td>
                    <td>Money Related</td>
                    <td>Hello hii....</td>
                    <td>02-11-1999 / 10:45</td>
                    <td></td>
                    <td>
                    <button className="btn btn-warning"><FontAwesomeIcon icon={faEdit}/></button>
                    <button className="btn btn-danger" onClick={(e) =>{
                    document.querySelector("#deletebox").classList.add('click');
                        }}><FontAwesomeIcon icon={faTrash}/></button>
                    </td>
                </tr>
                <tr class="table-row" data-href="http://tutorialsplane.com">
                    <td>6</td>
                    <td>0186CS171089</td>
                    <td>Shubham</td>
                    <td>sj2585097@gmail.com</td>
                    <td>7089413024</td>
                    <td>Money Related</td>
                    <td>Hello hii....</td>
                    <td>02-11-1999 / 10:45</td>
                    <td></td>
                    <td>
                    <button className="btn btn-warning"><FontAwesomeIcon icon={faEdit}/></button>
                    <button className="btn btn-danger" onClick={(e) =>{
                    document.querySelector("#deletebox").classList.add('click');
                        }}><FontAwesomeIcon icon={faTrash}/></button>
                    </td>
                </tr>
            </tbody>
        </table>
    </div>

    )
}