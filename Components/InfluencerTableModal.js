import React, { useState } from 'react'
import { Button, Form, Modal } from 'react-bootstrap'
import { Typeahead } from 'react-bootstrap-typeahead'
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

export default function InfluencerTableModal(props) {
    const [startDate, setStartDate] = useState(new Date());
    const options =["A","B","C","D","EE","FFF","GGG"]
    ///handleActionClose

    function popupClose (){
      props.handleActionClose(false)

    }
  return (
    <Modal show={props.actionShow} onHide={props.handleActionClose} className="global-modal">
      
      { props.action === "Contact" && 
      <Modal.Body className='actdionModal'>
        <div className='modal-head d-flex justify-content-between align-items-center'>
      <h2>Contact Influencer</h2>
      <button type="button" className='close' onClick={popupClose} data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
        </div>
      <Form.Label>Way 1</Form.Label>
      <Form.Select onChange={(e) => props.setActionContChoose(e.target.value)} defaultValue="Choose...">
           <option>Please Select</option>
           <option>DM</option>
           <option>Email</option>
       </Form.Select>
       {props.actionContChoose === "DM" && 
       <div className='actionDm'>
         <Form.Group className="mb-3" controlId="formGroupEmail">
           <Form.Label>Message</Form.Label>
           {/* <Form.Control type="text" placeholder="Enter message" style={{backgroundColor: "#fff"}}/> */}
           <Form.Control as="textarea" placeholder="Enter message"  style={{backgroundColor: "#fff"}} rows={3} />
       </Form.Group>
       <div className='btnRightCont'>
         <Button className="primBtn cmmBtn sendBtn">Send</Button>
       </div>
       </div>}
       {(props.actionContChoose === "Default" || props.actionContChoose === "Email") && 
        <div className='actionDm'>
         <Form.Group className="mb-3" controlId="formGroupEmail">
           <Form.Label>Subject</Form.Label>
           <Form.Control type="text" placeholder="Enter message" style={{backgroundColor: "#fff"}}/>
       </Form.Group>
       <Form.Group className="mb-3" controlId="formGroupEmail">
           <Form.Label>Recipient</Form.Label>
           <Form.Control type="text" placeholder="Enter message" style={{backgroundColor: "#fff"}}/>
       </Form.Group>
       <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
         <Form.Label>Message</Form.Label>
         <Form.Control as="textarea" rows={3} style={{backgroundColor: "#fff"}}/>
       </Form.Group>
       <div className='btnRightCont'>
         <Button className="primBtn cmmBtn sendBtn">Send</Button>
       </div>
       </div>}
     </Modal.Body> }
      
      { props.action === "Note" && 
      <Modal.Body className='actdionModal'>
         <div className='modal-head d-flex justify-content-between align-items-center'>
         <h2>{props.actionContChoose === "Comment" ? 'Comment' :'Note' } </h2>
      <button type="button" className='close' onClick={popupClose} data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
        </div>
        
       
       <Form.Label>Type</Form.Label>
       <Form.Select onChange={(e) => props.setActionContChoose(e.target.value)} defaultValue="Choose...">
            <option>Please Select</option>
            <option>Comment</option>
            <option>Label</option>
        </Form.Select>
        {(props.actionContChoose === "Default" || props.actionContChoose === "Comment") && 
        <div className='actionDm'>
          <Form.Group className="mb-3" controlId="formGroupEmail">
          <Form.Label>Comment</Form.Label>
            <Form.Control as="textarea" rows={5} style={{backgroundColor: "#fff"}}/>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formGroupEmail">
          <Form.Label>Previous Comments</Form.Label>
          <Form.Control disabled={true} as="textarea" value={'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum .'} rows={3} style={{backgroundColor: "#fff"}}/>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formGroupEmail">
          <Form.Control disabled={true} value={'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum .'} as="textarea" rows={1} style={{backgroundColor: "#fff"}}/>
        </Form.Group>
        <div className='btnRightCont'>
          <Button className="primBtn cmmBtn sendBtn">Save</Button>
        </div>
        </div>}
        {props.actionContChoose === "Label" && 
         <div className='actionLabel'>
           <Form.Group className="mb-3" controlId="formGridState">
            <span>Exiting lales: <a href='#'>Label #2</a>, <a href='#'>Label #3</a></span>
           </Form.Group>
          <Form.Group className="mb-3" controlId="formGridState">
            {/* <Form.Label>Add Label</Form.Label> */}
            <Typeahead
              defaultSelected={props.optionLabel.slice(0, 1)}
              id="public-methods-example"
              labelKey="name"
              multiple
              options={props.optionLabel}
              placeholder="Add Label"
              ref={props.ref}
          />
        </Form.Group>
        <div className='btnRightCont'>
          <Button className="primBtn cmmBtn sendBtn">Save</Button>
        </div>
        </div>}
      </Modal.Body> }
     
      { props.action === "Schedule" && 
      <Modal.Body className='actdionModal'>
          <div className='modal-head d-flex justify-content-between align-items-center'>
          <h2>Schedule</h2>
      <button type="button" className='close' onClick={popupClose} data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
        </div>
       

       <Form.Group className="mb-3" controlId="formGroupEmail">
            <Form.Label>Title</Form.Label>
            <Form.Control type="text" placeholder="Enter Title" style={{backgroundColor: "#fff"}}/>
        </Form.Group>
        <Form.Group className="mb-3" controlId="formGroupEmail">
            <Form.Label>Type</Form.Label>
        <Form.Select defaultValue="Choose...">
            <option>Please Select</option>
            <option>Meeting</option>
            <option>Task</option>
            <option>Reminder</option>
        </Form.Select>
        </Form.Group>
       <Form.Group className="mb-3" controlId="formGroupEmail">
       <Form.Label>Date & Time</Form.Label>
       <DatePicker
          selected={startDate}
          onChange={(date) => setStartDate(date)}
          locale="pt-BR"
          showTimeSelect
          timeFormat="p"
          timeIntervals={15}
          dateFormat="Pp"
        />
       </Form.Group>
       <Form.Group className="mb-3" controlId="formGroupEmail">
       <Form.Label>Influencer</Form.Label>
       <Typeahead
          id="basic-typeahead-multiple"
          labelKey="name"
          multiple
          onChange={props.setMultiSelections}
          options={options}
          placeholder="Please Select"
          selected={props.multiSelections}
        />
       </Form.Group>
       <Form.Group className="mb-3" controlId="formGroupEmail">
            <Form.Label>Description</Form.Label>
            <Form.Control as="textarea" rows={5} style={{backgroundColor: "#fff"}}/>
        </Form.Group>
        <div className='btnRightCont'>
          <Button className="primBtn cmmBtn sendBtn">Save</Button>
        </div>
      </Modal.Body> }
      
      { props.action === "Remove" && 
      <Modal.Body className='actdionModal sure-modal'>
     
       <div className='modal-head d-flex justify-content-between align-items-center'>
       <h2>Are You Sure?</h2>
      <button type="button" className='close' onClick={popupClose} data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
        </div>
      
      <p>Are you sure you went to delete Michael Operation cannot be undone.</p>
        
        <div className='btnRightCont'>
        <Button className="primBtn cmmBtn sendBtn light-btn-sec">No </Button>
          <Button className="primBtn cmmBtn sendBtn">Yes</Button>
        </div>
      </Modal.Body> }
      </Modal>
  )
}
