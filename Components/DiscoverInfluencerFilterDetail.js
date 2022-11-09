import React, { useRef, useState } from 'react'
import { Button, Col, Form, Modal, Row } from 'react-bootstrap'
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import 'react-bootstrap-typeahead/css/Typeahead.css';
import { Typeahead } from 'react-bootstrap-typeahead';

export default function DiscoverInfluencerFilterDetail() {

    const [dateRange, setDateRange] = useState([null, null]);
    const [startDate, endDate] = dateRange;
    const ref = useRef();
    const options =["A","B","C","D","EE","FFF","GGG"]
    const optionLabel = ["Product Designer", "UI", "App Design", "UX"]
  return (
    <Row>

    <Col>
    <div className='filterContainer'>
    <Form>
    <Row className="mb-3">
        <Form.Group as={Col} controlId="formGridState">
            <Form.Label>Platform</Form.Label>
            <Form.Select defaultValue="Choose...">
                <option>Please Select</option>
                <option>Instagram</option>
                <option>Youtube</option>
                <option>Tiktok</option>
            </Form.Select>
        </Form.Group>
        <Form.Group as={Col} controlId="formGridState">
          <Form.Label>Disease Area</Form.Label>
          <Typeahead
            id="basic-typeahead-single"
            labelKey="name"
            options={options}
            placeholder="Please Select"
            />
          
        </Form.Group>
        <Form.Group as={Col} controlId="formGridState">
          <Form.Label>Location</Form.Label>
          <Typeahead
            id="basic-typeahead-single"
            labelKey="name"
            options={options}
            placeholder="Please Select"
            />
        </Form.Group>
        <Form.Group as={Col} controlId="formGridState">
          <Form.Label>Followers</Form.Label>
          <Row className="mb-6">
            <Form.Group as={Col} controlId="formGridState">
            <Form.Control type="number" placeholder="Min" />
            </Form.Group>
            <Form.Group as={Col} controlId="formGridState">
            <Form.Control type="number" placeholder="Max" />
            </Form.Group>
          </Row>
        </Form.Group>
      </Row>
      <Row className="mb-3">
      <Form.Group as={Col} controlId="formGridState">
          <Form.Label>Age</Form.Label>
          <Row className="mb-6">
            <Form.Group as={Col} controlId="formGridState">
            <Form.Control type="number" placeholder="Min" />
            </Form.Group>
            <Form.Group as={Col} controlId="formGridState">
            <Form.Control type="number" placeholder="Max" />
            </Form.Group>
          </Row>
        </Form.Group>
        <Form.Group as={Col} controlId="formGridState">
          <Form.Label>Status</Form.Label>
          <Row className="mb-6">
            <Form.Group as={Col} controlId="formGridState">
            <Form.Control type="text" placeholder="Min" />
            </Form.Group>
            <Form.Group as={Col} controlId="formGridState">
            <Form.Control type="text" placeholder="Max" />
            </Form.Group>
          </Row>
        </Form.Group>
        <Form.Group as={Col} controlId="formGridState">
          <Form.Label>Label</Form.Label>
          <Typeahead
            defaultSelected={optionLabel.slice(0, 1)}
            id="public-methods-example"
            labelKey="name"
            multiple
            options={optionLabel}
            placeholder="Add Label"
            ref={ref}
        />
        
        </Form.Group>


        <Form.Group as={Col} controlId="formGridState">
            <Form.Label>Task</Form.Label>
            <Form.Select defaultValue="Choose...">
                <option>Please Select</option>
                <option>Task 1</option>
                <option>Task 2</option>
                <option>Task 3</option>
            </Form.Select>
        </Form.Group>
{/*         
        <Form.Group as={Col} controlId="formGridState">
            <Form.Check type="checkbox" label="Only those with task" />
        </Form.Group> */}
      </Row>
    </Form>
    <div className='btnCont' style={{justifyContent: "space-between", }}>
    <div>
       
    </div>
    <div>
        <Button className='primBtn cmmBtn'>Filter</Button>
        <Button className='ligBtn cmmBtn'><span className='clrBtn' style={{backgroundColor: "#2D3779"}}>04</span>Clear all filter</Button>
    </div>
    </div>
    </div>

    </Col>
    </Row>
  )
}
