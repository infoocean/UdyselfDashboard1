import React from 'react';
import {Row,Col,Form } from 'react-bootstrap';

function Cancel(){
    return<>
         <div className="cancelform">
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
              Enter Your Message :
              </Form.Label>
              <Col sm="12">
              <textarea  placeholder="Enter message here"></textarea>
              </Col>
          </Form.Group>
          </Col>
          </Row>
          <Form.Group as={Row} className="mb-2 mt-2" controlId="formPlaintextEmail">
              <Col md={4}></Col>
              <Col md="3" align="center">
              <Form.Control className="btn" type="submit" value="Cancel" onClick={(e)=>{
                  e.preventDefault();
              }}/>
              </Col>
          </Form.Group>
      </Form>
        </div>
    </>
}
export default Cancel;