import React, { useRef, useState } from 'react'
import { Button, Col, Dropdown, DropdownButton, Form, Modal, Row, Table,Pagination } from 'react-bootstrap'
import moment from 'moment/moment';
import ProfilePic from "../public/Images/profile-circle-2 1profil.png";
import { MdOutlineDateRange } from "react-icons/md";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";
import Image from 'next/image';
import { BsThreeDotsVertical } from 'react-icons/bs';
import DateNoti from '../Components/DateNoti';
import { Typeahead } from 'react-bootstrap-typeahead';
import 'react-bootstrap-typeahead/css/Typeahead.css';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

export default function SingleReportTable() {

    const ref = useRef();
  const [dateRange, setDateRange] = useState([new Date(), new Date()]);
  
  const [action, setAction] = useState();

  const [actionShow, setActionShow] = useState(false);
  const handleActionClose = () => setActionShow(false);
  const handleActionShow = () => setActionShow(true);

  const optionLabel = ["Product Designer", "UI", "App Design", "UX"]
  const options =["A","B","C","D","EE","FFF","GGG"]

  const data = [
    {
      Influencer: "Total",
      Size: "352",
      Reach: " 400",
      Likes: "54",
      Comments:'20',
      Clicks:'5%',
      Engagement:'5.32%',
      CPT:'3.2',
      CPC:'11.12',
      Overlap:'12%'
    },{
      Influencer: "Total",
      Size: "352",
      Reach: " 400",
      Likes: "54",
      Comments:'20',
      Clicks:'5%',
      Engagement:'5.32%',
      CPT:'3.2',
      CPC:'11.12',
      Overlap:'12%'
    },{
      Influencer: "Total",
      Size: "352",
      Reach: " 400",
      Likes: "54",
      Comments:'20',
      Clicks:'5%',
      Engagement:'5.32%',
      CPT:'3.2',
      CPC:'11.12',
      Overlap:'12%'
    },{
      Influencer: "Total",
      Size: "352",
      Reach: " 400",
      Likes: "54",
      Comments:'20',
      Clicks:'5%',
      Engagement:'5.32%',
      CPT:'3.2',
      CPC:'11.12',
      Overlap:'12%'
    }
  ];

  const [actionContChoose, setActionContChoose] = useState("Default");
  const [multiSelections, setMultiSelections] = useState([]);
  const selectAll='';
  const [startDate, setStartDate] = useState(new Date());
  const [peopleInfo, setPeopleInfo] = useState({});
  function handleAction(actionType){
    handleActionShow()
    setAction(actionType)
  }


  const toggleHandler = (item) => () => {
    setPeopleInfo((state) => ({
      ...state,
      [item.id]: state[item.id]
        ? null
        : {
            id: item.id,
            first: item.name,
            last: item.lastName,
            age: item.age
          }
    }));
  };

  return (
    <Row>
    <Col lg={9} className="TableCol">
      <h2 className='heading'>Influencer</h2>
    <Table className='singleCampTable'>
    <thead className='custTableHead'>
      <tr>
      <th>
      <Form>
      <Form.Check type="checkbox" />
      </Form>
      </th>
        <th>Influencer</th>
        <th>Size</th>
        <th>Reach </th>
        <th>Likes</th>
        <th>Comments</th>
        <th>Clicks</th>
        <th>Engagement</th>
        <th>CPT</th>
        <th>CPC</th>
        <th>Overlap</th>
      </tr>
    </thead>
      <tbody>
      {data.map((d, index) => {
        console.log(d)
        return (
          <tr key={index}>
            <td>
            
            <Form>
            <Form.Check type="checkbox"    onChange={toggleHandler(index)}   checked={selectAll ?props.selectAll:peopleInfo[index]}  />
            </Form>

            </td>
            <td>{d.Influencer}</td>
            <td>{d.Size}</td>
            <td>{d.Reach}</td>
            <td>{d.Likes}</td>
            <td>{d.Comments}</td>
            <td>{d.Clicks}</td>
            <td>{d.Engagement}</td>
            <td className="center">{d.CPT}</td>
            <td className="center">{d.CPC}</td>
            <td className="center">{d.Overlap}</td>
          </tr>
        );
      })}
      </tbody>
  </Table>

  
  <div style={{ float: "right", marginTop: "0px" }}>
        <Pagination>
          <Pagination.First />
          <Pagination.Item>{1}</Pagination.Item>
          <Pagination.Item>{2}</Pagination.Item>
          <Pagination.Item active>{3}</Pagination.Item>
          <Pagination.Ellipsis />
          <Pagination.Item>{32}</Pagination.Item>
          <Pagination.Last />
        </Pagination>
      </div>
    </Col>
  <Col lg={3}>
      <DateNoti />
  </Col>
  </Row>
  )
}
