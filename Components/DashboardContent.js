import React, { useEffect, useRef, useState } from 'react'
import { Button, Col, Dropdown, DropdownButton, Form, Modal, Pagination, Row } from 'react-bootstrap'
import filter from "../public/Images/SlidersHorizontal.png"
import profilePic from "../public/Images/new-profile.png"
import { BsInstagram, BsThreeDotsVertical } from 'react-icons/bs'
import { HiLocationMarker } from "react-icons/hi";
import DiscoverInfluencerFilterDetail from './DiscoverInfluencerFilterDetail'
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";
import { FiFilter } from "react-icons/fi";
import { Typeahead } from 'react-bootstrap-typeahead'
import moment from 'moment'
import USAFlag from "../public/Images/usaFlag.png";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import Image from 'next/image'

import Cardsec from "../public/Images/card.png";
import Removesec from "../public/Images/remove.png";
import Editsec from "../public/Images/edit.png";
import Datesec from "../public/Images/date.png";

export default function DashboardContent() {

  const ref = useRef();

  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [editShow, setEditShow] = useState(false);
  const handleEditClose = () => setEditShow(false);
  const handleEditShow = () => setEditShow(true);

  const options =["A","B","C","D","EE","FFF","GGG"]

  const [showFilter, setShowFilter] = useState(false);

  const [action, setAction] = useState();

  const [actionShow, setActionShow] = useState(false);
  const handleActionClose = () => setActionShow(false);
  const handleActionShow = () => setActionShow(true);

  const [exportShow, setExportShow] = useState(false);
  const handleExportClose = () => setExportShow(false);
  const handleExportShow = () => setExportShow(true);

  const [actionContChoose, setActionContChoose] = useState("Default");
  const [switchNav, setSwitchNav] = useState();

  const optionLabel = ["Product Designer", "UI", "App Design", "UX"]
  const [multiSelections, setMultiSelections] = useState([]);

  const data = [{
    headingInner: "Identified",
    num: "89670"
  },
  {
    headingInner: "Contacted",
    num: "79660"
  },
  {
    headingInner: "Registered",
    num: "29670"
  },{
    headingInner:"To Be Approved",
    num: "63670"
  },{
    headingInner:"Call Scheduled",
    num: "56570"
  }
]

const [startDate, setStartDate] = useState(new Date());
const [dateRange, setDateRange] = useState([new Date(), new Date()]);
useEffect(() => {
  const draggables = document.querySelectorAll('.draggable')
  const containers = document.querySelectorAll('.dataCard')
  draggables.forEach(draggable => {
    draggable.addEventListener('dragstart', () => {
      draggable.classList.add('dragging')
    })
  
    draggable.addEventListener('dragend', () => {
      draggable.classList.remove('dragging')
    })
  })
  
  containers.forEach(container => {
    container.addEventListener('dragover', e => {
      e.preventDefault()
      const afterElement = getDragAfterElement(container, e.clientY)
      const draggable = document.querySelector('.dragging')
      if (afterElement == null) {
        container.appendChild(draggable)
      } else {
        container.insertBefore(draggable, afterElement)
      }
    })
  },[])
  
  function getDragAfterElement(container, y) {
    const draggableElements = [...container.querySelectorAll('.draggable:not(.dragging)')]
  
    return draggableElements.reduce((closest, child) => {
      const box = child.getBoundingClientRect()
      const offset = y - box.top - box.height / 2
      if (offset < 0 && offset > closest.offset) {
        return { offset: offset, element: child }
      } else {
        return closest
      }
    }, { offset: Number.NEGATIVE_INFINITY }).element
  }
}, [])




const [editDisable, setEditDisable] = useState(true);
function popupClose2() {
  setExportShow(false);
}

function addpopupClose2() {
  setShow(false);
}

function handleEdit(){
  setEditDisable(prevState => !prevState)
}

const [singleSelections, setSingleSelections] = useState([]);

const [formData, setFormData] = useState({
  firstName: "", lastName: "", userName: "", platform: "", email:"",diseaseArea: "", location: "",comments: "",labels: "",
  meeting: "",reminders: "",tasks: "", status: "",dateAdded: "", dateStatusChanged: "",
})

const [newFormData, setNewFormData] = useState({
  socialMedia: "", followers: "", userName: "", platform: "", email:"",diseaseArea: [], location: "",
})

const [filterData, setFilterData] = useState({
  platform: "", diseaseArea: "", location: "", followers: "", ageMin: "",  ageMax: "", statusMin: "", statusMax: "",
  addLabel: "", thoseWithTask: "", 
})
function handleChange(e){
  const {name,value} = e.target;
  setFormData(prevData => {
   return {
    ...prevData,
    [name] : value,
   }
  })
}

function handleNewInfluencer(e){
  const {name,value} = e.target;
  console.log(name)
  setNewFormData(prevData => {
   return {
    ...prevData,
    [name] : value,
   }
  })

  // if(singleSelections){
  //   setNewFormData(prevData => {
  //     return {
  //      ...prevData,
  //      diseaseArea: singleSelections,
  //     }
  //    })
  // }
}

function handleFilter(e){
  const {type, name, checked, value} = e.target;
  setFilterData(prevData => {
    return {
      ...prevData,
      [name]:type === "checkbox" ? checked : value,
    }
  })
}

function handleAction(actionType){
  handleActionShow()
  setAction(actionType)
}

function handleTypehead(selected,name){
  setNewFormData(prevData => {
    return {
     ...prevData,
     diseaseArea: selected,
    }
   })
 
}

useEffect(() => {
  setSwitchNav("Default");
}, []);

  return (
    <div className='mainContent'>
      <div className='contentNav'>
        <div className='heading'>
          <h2>All Influencers</h2>
          <span>More than 290+ new Influencers</span>
        </div>
        <div>
        <Button className={showFilter ? "outlinedBtn cmmBtn active" : "outlinedBtn cmmBtn" } onClick={() => setShowFilter(prevState => !prevState)}>
            <FiFilter size={16} /> Filters 
            {!showFilter && <IoIosArrowDown style={{marginLeft: "10px"}}size={16}/>}
            {showFilter && <IoIosArrowUp style={{marginLeft: "10px"}}size={16}/>}
           </Button>
          <Button className="ligBtn cmmBtn"  onClick={handleExportShow}>Export Report</Button>
          <Button className="primBtn cmmBtn" onClick={handleShow}>Add Influencer</Button>
        </div>
      </div>
      {showFilter && <DiscoverInfluencerFilterDetail />}
      <Row className='dataCardSlider'>
        { data.map((d , index) => {
          return (
        <Col lg={4} key={index}>
          <div className='dataCard'>
            <span className='s1'>{d.headingInner}: <span className='s2'>{d.num}</span></span>
         { [1,2,3,4].map((a, index) => {
          return (
            <div key={index} draggable="false" className='singleData' >
            <Image src={profilePic} width="50px" onClick={handleEditShow}/>
            <div className='innerDataCard'>
              <div className='user' onClick={handleEditShow}>
                <span>
                  {/* <BsInstagram color="#2D3779" size={14}/> */}
                   Username{a}</span>
                <span style={{color: "#B5B5C3", display: 'flex', alignItems: "center" }}>
                  {/* <Image src={USAFlag} width="15px" height="15px"/>  */}
                  Heart Disease</span>
              </div>
              <div className='info' onClick={handleEditClose} style={{flexDirection: "row",alignItems: "center"}}>
              <DropdownButton variant="link"id="dropdown-basic-button" title={<BsThreeDotsVertical />}>
               
                {/* <Dropdown.Item onClick={() => handleAction('Contact')}>Contact</Dropdown.Item>
                <Dropdown.Item onClick={() => handleAction('Note')}>Note</Dropdown.Item>
                <Dropdown.Item onClick={() => handleAction('Schedule')}>Schedule</Dropdown.Item> */}



                <Dropdown.Item onClick={() => handleAction('Contact')}><Image src={Cardsec}/> Contact</Dropdown.Item>
                  <Dropdown.Item onClick={() => handleAction('Note')}><Image src={Editsec}/>  Note</Dropdown.Item>
                  <Dropdown.Item onClick={() => handleAction('Schedule')}><Image src={Datesec}/> Schedule</Dropdown.Item>
                  <Dropdown.Item onClick={() => handleAction('Remove')}> <Image src={Removesec}/> Remove</Dropdown.Item>
            </DropdownButton>
              </div>
            </div>
          </div>
          )
         }) }
          </div>
         <Pagination>
          <Pagination.First />
          <Pagination.Item>{1}</Pagination.Item>
          <Pagination.Item>{2}</Pagination.Item>
          <Pagination.Item active>{3}</Pagination.Item>
          <Pagination.Ellipsis />
          <Pagination.Item>{32}</Pagination.Item>
          <Pagination.Last />
        </Pagination>
        </Col>
          )
        })
        }
      </Row>

      <Modal show={show} onHide={handleClose}>
        
      <Modal.Body className='campModal'>
        <button
        type="button"
        className="close"
        onClick={addpopupClose2}
        data-dismiss="modal"
        aria-label="Close"
        >
        <span aria-hidden="true">&times;</span>
        </button>
        <h2>Add Influencer</h2>
        
        <Form>
        <Form.Group className="mb-3" controlId="formGroupEmail">
            <Form.Label>Username</Form.Label>
            <Form.Control onChange={handleNewInfluencer}  name="userName" value={newFormData.userName} type="text" placeholder="Enter username" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formGroupEmail">
        <Form.Label>Social Media</Form.Label>
          <Form.Select  onChange={handleNewInfluencer} name="platform" value={newFormData.platform} defaultValue="Choose...">
            <option>Select Social Media</option>
            <option>Instagram</option>
            <option>Tiktok</option>
            <option>Youtube</option>
          </Form.Select>
        </Form.Group>
        <Form.Group className="mb-3" controlId="formGroupEmail">
            <Form.Label>Followers</Form.Label>
            <Form.Control  onChange={handleNewInfluencer} name="followers" value={newFormData.followers} type="text" placeholder="Enter followers" />
        </Form.Group>
        <Form.Group as={Col} controlId="formGridState">
         
        </Form.Group>
        <br />
        <Form.Group className="mb-3" controlId="formGroupEmail">
            <Form.Label>Disease area</Form.Label>
            <Typeahead
              id="basic-typeahead-single"
              labelKey="diseaseArea"
              options={options}
              placeholder="Please Select" 
              onChange={(selected) => setNewFormData(prevData => ({...prevData,diseaseArea: selected,})
               )}
              selected={newFormData.diseaseArea}
              name="diseaseArea"
            />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formGroupEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control  onChange={handleNewInfluencer} name="email" value={newFormData.email} type="email" placeholder="Enter Email" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formGroupEmail">
            <Form.Label>Location</Form.Label>
            <Typeahead
              id="basic-typeahead-single"
              labelKey="name"
              options={options}
              placeholder="Select location" 
            />
        </Form.Group>
        </Form>
        <Button className='primBtn cmmBtn' style={{width: "100%"}}>Add Influencer</Button>
      </Modal.Body>
    </Modal>
    {/* Edit Modal */}
    <Modal
              className="campaginModalAdd modal-field"
              show={editShow} onHide={handleEditClose}
            >
              <div className="campagin-sec d-flex justify-content-between">
                <div className="modal-head d-flex justify-content-between align-items-center">
                <h2>Edit Influencer</h2>
                  <button
                    type="button"
                    className="close"
                    onClick={handleEditClose}
                    data-dismiss="modal"
                    aria-label="Close"
                  >
                    <span aria-hidden="true">&times;</span>
                  </button>
                </div>
                <div className="campModalNav">
                  <Button
                    style={{
                      backgroundColor:
                        (switchNav === "Info" || switchNav === "Default") &&
                        "#2D3779",
                    }}
                    onClick={() => setSwitchNav("Info")}
                    className={
                      switchNav === "Info" || switchNav === "Default"
                        ? "active"
                        : ""
                    }
                  >
                    Info
                  </Button>
                  <Button
                    style={{
                      backgroundColor: switchNav === "Management" && "#2D3779",
                    }}
                    onClick={() => setSwitchNav("Management")}
                    className={switchNav === "Management" ? "active" : ""}
                  >
                    Management
                  </Button>
                </div>
              </div>
              {(switchNav === "Info" || switchNav === "Default") && (
                <Modal.Body>
            {editDisable && <Button className='primBtn cmmBtn' onClick={handleEdit}style={{width: "100%"}}>Edit</Button>}

<Form.Group className="mb-3" controlId="formGroupEmail">
        <Form.Label>First Name</Form.Label>
        <Form.Control  name="firstName" value={formData.firstName} onChange={handleChange} type="text" placeholder="Enter First Name" />
    </Form.Group>
    <Form.Group className="mb-3" controlId="formGroupEmail">
        <Form.Label>Last Name</Form.Label>
        <Form.Control name="lastName" value={formData.lastName} onChange={handleChange} type="text" placeholder="Enter Last Name" />
    </Form.Group>
    <Form.Group className="mb-3" controlId="formGroupEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control disabled={editDisable} name="email" value={formData.email}  onChange={handleChange} type="email" placeholder="Enter Email address" style={{backgroundColor: "#fff"}}/>
    </Form.Group>
    <Form.Group className="mb-3" controlId="formGroupEmail">
        <Form.Label>Username</Form.Label>
        <Form.Control  name="userName" value={formData.userName} onChange={handleChange} type="text" placeholder="Enter Username" />
    </Form.Group>
    <Form.Group className="mb-3" controlId="formGridState">
      <Form.Label>Soical Media</Form.Label>
      <Form.Select  name="platform" value={formData.platform} onChange={handleChange} defaultValue="Choose...">
        <option>Please Select </option>
        <option>Instagram</option>
        <option>Tiktok</option>
        <option>Youtube</option>
      </Form.Select>
    </Form.Group>
  
    <Form.Group className="mb-0" controlId="formGroupEmail">
        <Form.Label>Disease area</Form.Label>
        <Typeahead
          id="basic-typeahead-single"
          labelKey="name"
          options={options}
          placeholder="Please Select"
          //disabled={editDisable} 
          name="diseaseArea" 
          value={formData.diseaseArea} 
          //onChange={handleChange} 
        />
    </Form.Group>
   
    <Form.Group className="mb-3" controlId="formGroupEmail">
        <Form.Label>Location</Form.Label>
        <Typeahead
          id="basic-typeahead-single"
          labelKey="name"
          options={options}
          placeholder="Please Select"
          ///disabled={editDisable}
           name="location" 
          value={formData.location}
         // onChange={handleChange} 
        />
    </Form.Group>



                  
                  <Button className="primBtn cmmBtn" style={{ width: "100%" }}>
                    Add new Campagin
                  </Button>
                </Modal.Body>
              )}
              {switchNav === "Management" && (
              <Modal.Body>

                
              {editDisable && <Button className='primBtn cmmBtn' onClick={handleEdit}style={{width: "100%"}}>Confirm</Button>}
              {/* {!editDisable && <Button className='primBtn cmmBtn' style={{width: "100%"}}>Save</Button>} */}




              <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
              <Form.Label>Comments</Form.Label>
              <Form.Control  name="comments" value={formData.comments}  onChange={handleChange} as="textarea" rows={2} />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formGroupEmail">
              
              <Form.Label>Labels</Form.Label>
             
              <Typeahead
              defaultSelected={optionLabel.slice(0, 1)}
              id="public-methods-example"
              labelKey="name"
              multiple
              options={optionLabel}
              placeholder="Add Label"
              />
              </Form.Group>


              <Form.Group className="mb-3" controlId="formGroupEmail">
              <Form.Label>Meetings</Form.Label>
              <Typeahead
              defaultSelected={optionLabel.slice(0, 1)}
              id="public-methods-example"
              labelKey="name"
              multiple
              options={optionLabel}
              placeholder="Add Label"
              />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formGroupEmail">
              <Form.Label>Reminders</Form.Label>
              {/* <Form.Control  name="reminders" value={formData.reminders}  onChange={handleChange} type="text" placeholder="Enter Reminders" /> */}
             
              <Typeahead
              defaultSelected={optionLabel.slice(0, 1)}
              id="public-methods-example"
              labelKey="name"
              multiple
              options={optionLabel}
              placeholder="Add Label"
              name="reminders"
              />
           
             
              </Form.Group>
              <Form.Group className="mb-3" controlId="formGroupEmail">
              <Form.Label>Tasks </Form.Label>
              {/* <Form.Control  name="tasks" value={formData.tasks}  onChange={handleChange} type="text" placeholder="Enter Tasks" /> */}
             
                
              <Typeahead
              defaultSelected={optionLabel.slice(0, 1)}
              id="public-methods-example"
              labelKey="name"
              multiple
              options={optionLabel}
              placeholder="Add Label"
              name="tasks"
              />
             
             
              </Form.Group>
              <Form.Group className="mb-3" controlId="formGridState">
              <Form.Label>Status </Form.Label>
              <Form.Select  name="dateAdded" value={formData.status}  onChange={handleChange} defaultValue="Choose...">
              <option>Please Select </option>
              <option>Ongoing</option>
              <option>Done</option>
              </Form.Select>
              </Form.Group>

              <Form.Group className="mb-3" controlId="formGridState">
              <Form.Label>Added </Form.Label>
              <Form.Control disabled readOnly name="tasks" value={moment(dateRange[0]).format('LL')} type="text" style={{backgroundColor: "#F8FAFB"}} />
              </Form.Group>

              <Form.Group className="mb-3" controlId="formGridState">
              <Form.Label>Status Changed </Form.Label>
              <Form.Control disabled readOnly name="tasks" value={moment(dateRange[1]).format('LL')} type="text" style={{backgroundColor: "#F8FAFB"}} />
              </Form.Group>


              </Modal.Body>
              )}
            </Modal>


    {/* actionModal */}

    <Modal show={actionShow} onHide={handleActionClose}>
      
      { action === "Contact" && 
      <Modal.Body className='actdionModal'>
       <h2>Contact</h2>

          <button
          type="button"
          className="close"
          onClick={handleActionClose}
          data-dismiss="modal"
          aria-label="Close"
          >
          <span aria-hidden="true">&times;</span>
          </button>
       <Form.Select onChange={(e) => setActionContChoose(e.target.value)} defaultValue="Choose...">
            <option> Please Select</option>
            <option>Email</option>
            <option>Direct Message</option>
        </Form.Select>
        {actionContChoose === "Direct Message" && 
        <div className='actionDm'>
          <Form.Group className="mb-3" controlId="formGroupEmail">
            <Form.Label>Message</Form.Label>
            <Form.Control type="text" placeholder="Enter message" style={{backgroundColor: "#fff"}}/>
        </Form.Group>
        <div className='btnRightCont'>
          <Button className="primBtn cmmBtn sendBtn">Send</Button>
        </div>
        </div>}
        {(actionContChoose === "Default" || actionContChoose === "Email") && 
         <div className='actionDm'>
          <Form.Group className="mb-3" controlId="formGroupEmail">
            <Form.Label>Subject</Form.Label>
            <Form.Control type="text" placeholder="Enter message" style={{backgroundColor: "#fff"}}/>
        </Form.Group>
        <Form.Group className="mb-3" controlId="formGroupEmail">
            <Form.Label>Receiver</Form.Label>
            <Form.Control type="text" placeholder="Enter message" style={{backgroundColor: "#fff"}}/>
        </Form.Group>
        <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
          <Form.Label>Message</Form.Label>
          <Form.Control as="textarea" rows={4} style={{backgroundColor: "#fff"}}/>
        </Form.Group>
        <div className='btnRightCont'>
          <Button className="primBtn cmmBtn sendBtn">Send</Button>
        </div>
        </div>}
      </Modal.Body> }
      
      { action === "Note" && 
      
    
      <Modal.Body className='actdionModal'>
         <div className='modal-head d-flex justify-content-between align-items-center'>
         <h2>{actionContChoose === "Comment" ? 'Comment' :'Note' } </h2>
      <button type="button"  onClick={handleActionClose} className='close'  data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
        </div>
        
       
       <Form.Label>Type</Form.Label>
       <Form.Select onChange={(e) => setActionContChoose(e.target.value)} defaultValue="Choose...">
            <option >Please Select</option>
            <option>Comment</option>
            <option>Label</option>
        </Form.Select>
        {(actionContChoose === "Default" || actionContChoose === "Comment") && 
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
          <Button className="primBtn cmmBtn sendBtn">Add Comment</Button>
        </div>
        </div>}
        {actionContChoose === "Label" && 
         <div className='actionLabel'>
           <Form.Group className="mb-3" controlId="formGridState">
            <span>Exiting lales: <a href='#'>Label #2</a>, <a href='#'>Label #3</a></span>
           </Form.Group>
          <Form.Group className="mb-3" controlId="formGridState">
            {/* <Form.Label>Add Label</Form.Label> */}
            <Typeahead
              defaultSelected={optionLabel.slice(0, 1)}
              id="public-methods-example"
              labelKey="name"
              multiple
              options={optionLabel}
              placeholder="Add Label"
              ///ref={props.ref}
          />
        </Form.Group>
        <div className='btnRightCont'>
          <Button className="primBtn cmmBtn sendBtn">Save</Button>
        </div>
        </div>}
      </Modal.Body>
      
      
      
      }
     
      { action === "Schedule" && 
      <Modal.Body className='actdionModal'>
       <h2>Schedule</h2>
       <button type="button"  onClick={handleActionClose} className='close'  data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
       <Form.Group className="mb-3" controlId="formGroupEmail">
            <Form.Label>Title</Form.Label>
            <Form.Control type="text" placeholder="Add Title" style={{backgroundColor: "#fff"}}/>
        </Form.Group>
        <Form.Group className="mb-3" controlId="formGroupEmail">
            <Form.Label>Type</Form.Label>
        <Form.Select defaultValue="Choose...">
            <option> Please Select </option>
            <option>Meeting</option>
            <option>Task</option>
            <option>Reminder</option>
        </Form.Select>
        </Form.Group>
       <Form.Group className="mb-3" controlId="formGroupEmail">
       <Form.Label>Time</Form.Label>
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
       <Form.Label>Add Influencers</Form.Label>
       <Typeahead
          id="basic-typeahead-multiple"
          labelKey="name"
          multiple
          onChange={setMultiSelections}
          options={options}
          placeholder="Please Select"
          selected={multiSelections}
        />
       </Form.Group>
       <Form.Group className="mb-3" controlId="formGroupEmail">
            <Form.Label>Add Description</Form.Label>
            <Form.Control as="textarea" rows={3} style={{backgroundColor: "#fff"}}/>
        </Form.Group>
        <div className='btnRightCont'>
          <Button className="primBtn cmmBtn sendBtn">Schedule</Button>
        </div>
      </Modal.Body> }

      { action === "Remove" && 
      <Modal.Body className='actdionModal sure-modal'>
     
       <div className='modal-head d-flex justify-content-between align-items-center'>
       <h2>Are You Sure?</h2>
      <button type="button" className='close' onClick={handleActionClose} data-dismiss="modal" aria-label="Close">
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

      <Modal show={exportShow} onHide={handleExportClose}>
        {/* <Modal.Body>
           <b>Do you want to export:</b><br />
          <div className='expoModalCOnt'>
           <Form.Check type="checkbox" label="All" />
           <Form.Check type="checkbox" label="Identified" />
           <Form.Check type="checkbox" label="Contacted" />
           <Form.Check type="checkbox" label="Registered" />
          </div>
          <div className='btnCenCont'>
            <Button className="primBtn cmmBtn expoBtn">Export</Button>
          </div>
        </Modal.Body>  */}

<Modal.Body>
                <div className="modal-head d-flex justify-content-between align-items-center">
                  <h3 className="mb-0">Do you want to export:</h3>
                  <button
                    type="button"
                    className="close"
                    onClick={popupClose2}
                    data-dismiss="modal"
                    aria-label="Close"
                  >
                    <span aria-hidden="true">&times;</span>
                  </button>
                </div>

                <div
                  className="expoModalCOnt d-unset"
                  style={{ justifyContent: "flex-start" }}
                >
                  <div class>
                    <Form.Check
                      type="checkbox"
                      label="All"
                      style={{ marginRight: "10px" }}
                    />
                  </div>
                  <div>
                    <Form.Check type="checkbox" label="Identified" />
                  </div>
                  <div>
                    <Form.Check type="checkbox" label="Contacted" />
                  </div>
                  <div>
                    <Form.Check type="checkbox" label="Registered" />
                  </div>
                  <div>
                    <Form.Check type="checkbox" label="To be approved" />
                  </div>
                </div>
                <div className="btnCenCont">
                  <Button className="primBtn cmmBtn expoBtn">Export</Button>
                </div>
              </Modal.Body>
      </Modal>
    </div>
  )
}
