
import React, { useEffect, useState } from "react";


import {
  Button,
  Nav,
  Col,
  Pagination,
  Row,
  Form,
  Container,
  Modal,
} from "react-bootstrap";
import filter from "../public/Images/SlidersHorizontal.png";
import { AiOutlineInstagram } from "react-icons/ai";
import { BsPlay } from "react-icons/bs";
import { FaTiktok } from "react-icons/fa";
import graph from "../public/Images/Vector 3.2.png";
import socialuser from "../public/Images/user.png";
import negativegraph from "../public/Images/negtive-chart.png";
import InfluencerOneForm from "../Components/InfluencerFormOne";
import InfluencerFormTwo from "../Components/InfluencerFormTwo";
import InfluencerFormThree from "../Components/InfluencerFormThree";
import InfluencerFormFour from "../Components/InfluencerFormFour";
import InfluencerTable from "../Components/InfluencerTable";
import { FiFilter } from "react-icons/fi";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";
import Image from "next/image";
import DateNoti from "../Components/DateNoti"
import { Typeahead } from 'react-bootstrap-typeahead';
import DatePicker from "react-datepicker";
export default function Influencer(props) {
    const options =["A","B","C","D","EE","FFF","GGG"]
    const [open, setOpen] = React.useState(0);
    const [switchNav, setSwitchNav] = useState();
    const [multiSelections, setMultiSelections] = useState([]);
    const [dateRange, setDateRange] = useState([new Date(), new Date()]);
  const [startDate, endDate] = dateRange;
  function handleSwitch(camp) {
    setIsActive((isActive = camp));
  }
  let [isActive, setIsActive] = React.useState("Preparation");
  const scoialData = [
    {
      socialName: "Instagram",
      imgSocial: <AiOutlineInstagram size={30} />,
      bg: "instaBg",
      data: "9,89670",
      desc: "since last month",
      img:graph,
      class:'postivegraph'
    },
    {
      socialName: "Youtube",
      imgSocial: <BsPlay size={30} />,
      bg: "ytBg",
      data: "9,89670",
      desc: "since last month",
      img:graph,
      class:'postivegraph'
    },
    {
      socialName: "Tiktok",
      imgSocial: <FaTiktok size={30} />,
      bg: "tikBg",
      data: "9,89670",
      desc: "since last month",
      img:negativegraph,
      class:'negativegraph'
    },
  ];


const [selectAll, setSelectAll] = useState(false);
const [showFilter, setShowFilter] = useState(false);

function handleCheckAll(){
  setSelectAll(prevState => !prevState)
}


console.log(selectAll)
const [show, setShow] = useState(false);

const handleClose = () => setShow(false);
const handleShow = () => setShow(true);

const [campShow, setCampShow] = useState(false);

const handleCampClose = () => setCampShow(false);
const handleCampShow = () => setCampShow(true);

const [exportShow, setExportShow] = useState(false);
const handleExportClose = () => setExportShow(false);
const handleExportShow = () => setExportShow(true);

const [campModalSwitch, setCampModalSwitch] = useState()

function handleCampModal(inputText){
    handleCampShow()
    handleClose()
    setCampModalSwitch(inputText)
}

useEffect(() => {
    props.setHead("Influencers")
},[props.setHead])

useEffect(() => {
    setSwitchNav("Default")
},[])

function popupClose (){
  setShow(false);
}

function popupClose1 (){
  setCampShow(false);
}
function popupClose2 (){
  setExportShow(false);
}




  return (
    <div className='bg'>
    <Row>
    <Col lg={9}>
    <Row>
    {scoialData.map((data, index) => {
        return (
        <Col lg={4} key={index}>
            <div className="socialCard">
            <div className="scoialNa">
            <div className="cardupper">
                <span className={data.bg}>{data.imgSocial}</span>
                <span className="socialname">{data.socialName}</span>
            </div>
              <div className="social-data">
                <p className={'growth-rate '+  data.class}>2%</p>
               <span className="desc">{data.desc}</span>
               </div>
            </div>
            <div className="socialData">
                <span><Image src={socialuser}/> {data.data}</span>
              
            </div>
            <span className="chartimg">
             <Image src={data.img} />
             </span>
            </div>
            
        </Col>
        );
    })}
    <Col>
    <div className="influencer-main">
        <div className="contentNav">
        <div className="heading">
            <h2>All Influencers</h2>
            <span>More than 290+ new Influencers</span>
        </div>
        <div>
        <Button className={showFilter ? "outlinedBtn cmmBtn active" : "outlinedBtn cmmBtn" } onClick={() => setShowFilter(prevState => !prevState)}>
                <FiFilter size={16} /> Filters 
                {!showFilter && <IoIosArrowDown style={{marginLeft: "10px"}}size={16}/>}
                {showFilter && <IoIosArrowUp style={{marginLeft: "10px"}}size={16}/>}
            </Button>
            <Button className="ligBtn cmmBtn"  onClick={handleExportShow}>Export</Button>
            <Button className="primBtn cmmBtn"  onClick={handleShow}>Add to Influencer</Button>
        </div>
        </div>
        {showFilter && <div className="miniNav">
        <Button
            onClick={() => {
            setOpen(0);
            {
                handleSwitch("Preparation");
            }
            }}
            variant="link"
            className={`switchBtn1 ${
            isActive === "Preparation" ? "activeBtn" : "inactiveBtn"
            }`}
        >
            Filter by influencer 
        </Button>
        <Button
            onClick={() => {
            setOpen(1);
            {
                handleSwitch("Ongoing");
            }
            }}
            variant="link"
            className={`switchBtn1 ${
            isActive === "Ongoing" ? "activeBtn" : "inactiveBtn"
            }`}
        >
            Filter by Audience
        </Button>
        <Button
            onClick={() => {
            setOpen(2);
            {
                handleSwitch("Finished");
            }
            }}
            variant="link"
            className={`switchBtn1 ${
            isActive === "Finished" ? "activeBtn" : "inactiveBtn"
            }`}
        >
        Filter by Performance    
        </Button>
        <Button
            onClick={() => {
            setOpen(3);
            {
                handleSwitch("Report");
            }
            }}
            variant="link"
            className={`switchBtn1 ${
            isActive === "Report" ? "activeBtn" : "inactiveBtn"
            }`}
        >
            Filter by Campaign
        </Button>
    
        </div>}

        {showFilter && <div>
        {open === 0 && <InfluencerOneForm />}
        {open === 1 && <InfluencerFormTwo />}
        {open === 2 && <InfluencerFormThree />}
        {open === 3 && <InfluencerFormFour />}
        </div>}

        <div className="influencer-table-con border-unsect">
        <div className="headInfi">
            <span>Influencers</span>
            {selectAll && <Button className="primBtn cmmBtn">Donate</Button>}
        </div>
        <InfluencerTable handleCheckAll={handleCheckAll} selectAll={selectAll}/>
        </div>
    </div>
    </Col>



    <Modal show={show} onHide={handleClose}>
        <Modal.Body className='campModal'>
        <div className="addCamCont">

            <div>
            <Form.Group className="mb-0" controlId="formGridState">
            <div className='modal-head d-flex justify-content-between align-items-center'>
            <h3 className="mb-0">Do you want to add a compaign?</h3>
      <button type="button" className='close' onClick={popupClose} data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
        </div>

                <Form.Label>Add to exiting campaign</Form.Label>
                <Form.Select defaultValue="Choose...">
                    <option>Please Select</option>
                    <option>Campaign 1</option>
                    <option>Campaign 2</option>
                </Form.Select>
                <Button className="primBtn cmmBtn btn-sm" onClick={() => handleCampModal("Add")}>Add to campaign</Button>
            <Button className="primBtn modal-light-btn- cmmBtn btn-sm" onClick={() => handleCampModal("New")}>Create a new campaign</Button>
            </Form.Group>
            {/* <div class="btnRightCont"><Button className="primBtn cmmBtn">Add to campaign</Button></div> */}
            </div>
            {/* <Button className="primBtn  cmmBtn btn-sm" onClick={() => handleCampModal("Add")}>Add to campaign</Button>
            <Button className="primBtn cmmBtn btn-sm" onClick={() => handleCampModal("New")}>Create a new campaign</Button> */}
        </div>
        </Modal.Body>
    </Modal>

    {/* <Modal show={campShow} onHide={handleCampClose}>
        <Modal.Body className='campModal'>
           {campModalSwitch === "Add" && <div>
           <Form.Group className="mb-3" controlId="formGridState">
                <Form.Label>Select Campaign</Form.Label>
                <Form.Select defaultValue="Choose...">
                    <option>--- Please Select ---</option>
                    <option>Campaign 1</option>
                    <option>Campaign 2</option>
                </Form.Select>
            </Form.Group>
            <div class="btnRightCont"><Button className="primBtn cmmBtn">Add to campaign</Button></div>
            </div>}
            {campModalSwitch === "New" &&  <div>
                <span>Create New Campaign</span>
            </div>}
        </Modal.Body>
    </Modal> */}

{/* 
      <Modal show={campShow} onHide={handleCampClose}>
        <Modal.Body className='campModal'>

            {campModalSwitch === "New" &&  <div>
                <span>Create New Campaign</span>
            </div>}
        </Modal.Body>
    </Modal> */}




    <Modal className='campaginModalAdd modal-field' show={campShow} onHide={handleCampClose}>
      <div className="campagin-sec d-flex justify-content-between">
      <div className='modal-head d-flex justify-content-between align-items-center'>
      <h2>Add new Campagin</h2>
<button type="button" className='close' onClick={popupClose1} data-dismiss="modal" aria-label="Close">
    <span aria-hidden="true">&times;</span>
  </button>
  </div>
          <div className='campModalNav'>
                <Button style={{backgroundColor: (switchNav === "Info" || switchNav === "Default")  && "#2D3779"}}  onClick={() => setSwitchNav("Info")}  className={(switchNav === "Info" || switchNav === "Default") ? 'active' :''}>Info</Button>
                <Button style={{backgroundColor: switchNav === "Target" && "#2D3779"}} onClick={() => setSwitchNav("Target")} className={switchNav === "Target" ? 'active' :''}>Target</Button>
                {/* <Button style={{backgroundColor: switchNav === "Inst" && "#2D3779"}} onClick={() => setSwitchNav("Inst")}>Instructions</Button> */}
            </div>
            </div>
        { (switchNav === "Info" || switchNav === "Default")  && 
        <Modal.Body>
          <Row>
          <Col>
          <Form.Group className="mb-3" controlId="formGroupEmail">
            <Form.Label>Campaign Name 1</Form.Label>
            <Form.Control type="text" placeholder="Enter Campaign Name" style={{backgroundColor: "#fff"}}/>
          </Form.Group>
          </Col>
          </Row>
          <Row>
          <Col>
          <Form.Group className="mb-3" controlId="formGridState">
            <Form.Label>Client</Form.Label>
            <Typeahead
              id="basic-typeahead-single"
              labelKey="name"
              options={options}
              placeholder="Please Select"
            />
        </Form.Group>
        </Col>
          <Col>
        <Form.Group className="mb-3" controlId="formGridState">
            <Form.Label>Social media</Form.Label>
            <Typeahead
              id="basic-typeahead-single"
              labelKey="name"
              options={options}
              placeholder="Please Select"
            />
        </Form.Group>
        </Col>
        </Row>

        <Row>
          <Col>
        <Form.Group className="mb-3" controlId="formGroupEmail">
            <Form.Label>Product</Form.Label>
            <Form.Control type="text" placeholder="Enter Product" style={{backgroundColor: "#fff"}}/>
          </Form.Group>
          </Col>

          <Col>
          <Form.Group className="mb-3" controlId="formGroupEmail">
            <Form.Label>Product Info</Form.Label>
            <Form.Control type="text" placeholder="Enter Product" style={{backgroundColor: "#fff"}}/>
          </Form.Group>
          </Col>
          </Row>

          <Row>
            <Col>
          <Form.Group className="mb-3" controlId="formGroupEmail">
            <Form.Label>Start & Finish date</Form.Label>
            <DatePicker
              selectsRange={true}
              startDate={startDate}
              endDate={endDate}
              onChange={(update) => {
                setDateRange(update);
              }}
              isClearable={true}
              placeholderText="Select Start & Finish date"
            />
            </Form.Group>
            </Col>

            <Col>
            <Form.Group className="mb-3" controlId="formGroupEmail">
              <Form.Label>Package</Form.Label>
              <Form.Select defaultValue="Choose...">
                  <option>Please Select</option>
                  <option>Package 1</option>
                  <option>Package 2</option>
                  <option>Package 3</option>
              </Form.Select>
            </Form.Group>
            </Col>
            </Row>

            <Row>
            <Col>
            <Form.Group className="mb-3" controlId="formGroupEmail">
              <Form.Label>Report</Form.Label>
              <Form.Select defaultValue="Choose...">
                  <option>Please Select</option>
                  <option>Report 1</option>
                  <option>Report 2</option>
                  <option>Report 3</option>
              </Form.Select>
            </Form.Group>
            </Col>

            <Col>
            <Form.Group className="mb-3" controlId="formGroupEmail">
              <Form.Label>Amount</Form.Label>
              <Form.Control type="number" placeholder="Enter Amount" style={{backgroundColor: "#fff"}}/>
            </Form.Group>
            </Col>
            </Row>

            {/* <Form.Group className="mb-3" controlId="formGroupEmail">
              <Form.Label>Target Audience Info</Form.Label>
              <Form.Control type="text" placeholder="Enter Target Audience Info" style={{backgroundColor: "#fff"}}/>
            </Form.Group> */}

            <Button className="primBtn cmmBtn" style={{width: "100%"}}>Add new Campagin</Button>
        </Modal.Body>
        }
        { switchNav === "Target"  && 
        <Modal.Body>
          <Row>
            <Col>
          <Form.Group className="mb-3" controlId="formGroupEmail">
              <Form.Label>Number of Influencers</Form.Label>
              <Form.Control type="number" placeholder="Enter Number of Influencers" style={{backgroundColor: "#fff"}}/>
          </Form.Group>
          </Col>

          <Col>
          <Form.Group className="mb-3" controlId="formGroupEmail">
              <Form.Label>Influencer size</Form.Label>
              <Form.Select defaultValue="Choose...">
                  <option>Please Select</option>
                  <option>Size 1</option>
                  <option>Size 2</option>
                  <option>Size 3</option>
              </Form.Select>
          </Form.Group>
          </Col>
          </Row>

          <Row>
            <Col>
          <Form.Group style={{ marginTop: '20px' }}>
            <Form.Label>Disease area</Form.Label>
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
          </Col>

          <Col>
          <Form.Group className="mb-3" controlId="formGridState">
            <Form.Label>Location</Form.Label>
            <Typeahead
              id="basic-typeahead-single"
              labelKey="name"
              options={options}
              placeholder="Please Select"
            />
          </Form.Group>
          </Col>
          </Row>

          <Row>
           <Col>
          <Form.Group style={{ marginTop: '20px' }}>
            <Form.Label>Age range</Form.Label>
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
          </Col>

          <Col>
          <Form.Group className="mb-3" controlId="formGroupEmail">
              <Form.Label>Gender</Form.Label>
              <Form.Select defaultValue="Choose...">
                  <option>Please Select</option>
                  <option>Male</option>
                  <option>Female</option>
                  <option>Other</option>
              </Form.Select>
          </Form.Group>
          </Col>
          </Row>

          <Row>
            <Col>
          <Form.Group className="mb-3" controlId="formGroupEmail">
              <Form.Label>Target audience info</Form.Label>
              <Form.Control type="number" placeholder="Enter Target audience info" style={{backgroundColor: "#fff"}}/>
          </Form.Group>
          </Col>
          </Row>

          <Button className="primBtn cmmBtn" style={{width: "100%"}}>Add new Campagin</Button>
           
        </Modal.Body>
        }
    </Modal>



    {/* export Modal */}
    <Modal show={exportShow} onHide={handleExportClose} className="expoModalOuter">
        <Modal.Body>
        <div className='modal-head d-flex justify-content-between align-items-center'>
            <h3 className="mb-0">Do you want to export:</h3>
      <button type="button" className='close' onClick={popupClose2} data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
        </div>

          <div className='expoModalCOnt d-unset' style={{justifyContent: "flex-start"}}>
            
          <div class><Form.Check type="checkbox" label="All"  style={{ marginRight: "10px"}} /></div>
          <div><Form.Check type="checkbox" label="Identified" /></div>
          <div><Form.Check type="checkbox" label="Contacted" /></div>
          <div><Form.Check type="checkbox" label="Registered" /></div>
          <div><Form.Check type="checkbox" label="To be approved" /></div>
          </div>
          <div className='btnCenCont'>
            <Button className="primBtn cmmBtn expoBtn">Export</Button>
          </div>
        </Modal.Body> 
      </Modal>

    </Row>
    </Col>
    <Col lg={3}>
        <DateNoti />
    </Col>
    </Row>
    </div>
  )
}
