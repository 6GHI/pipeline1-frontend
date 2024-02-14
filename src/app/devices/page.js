"use client"
import 'bootstrap/dist/css/bootstrap.css'
import DeviceCard from "../DeviceCard";
import { CardGroup, Col, Row } from "react-bootstrap";
import axios from 'axios';

export const getAllDevices = async() => {
  // Fetch data from FHIR server
  const response =  await axios.get('http://localhost:8080/fhir/Device', 
    {headers: {
      'Accept': 'application/json',
      // Add any other necessary headers here
    }
    }
  );
  const devices = response.data; // Assuming the response contains device data

  return {
    devices
  };
}

export default async function DevicesPage() {
  const array1 = [
    {'fresenius': 'This is a pump1'},
    {'monitor': 'this is a phillips monitor1 with a huge descriptio wwhich exceed all the place please stop'},
    {'fresenius': 'This is a truncatedDescriptiontruncatedDescriptiontruncatedDescriptiontruncatedDescription'},
    {'monitor': 'this is a phillips monitor2'},
    {'fresenius': 'This is a pump3'},
    {'monitor': 'this is a phillips monitor3'},
    {'fresenius': 'This is a pump4'},
    {'fresenius': 'This is a pump4'}
  ]
  const devicesArray =  await (await getAllDevices()).devices.entry
  console.log('111')
  console.log(devicesArray)
  const cardColStyle = {
    marginBottom: '20px',

  };

  const cardStyle = {
    height: '100%', // Set a fixed height for each card
  };

  const dividingIndex = 4

  const extraArray = []
  for (let i=0; i< devicesArray.length; i+=dividingIndex) 
  {
    extraArray.push(devicesArray.slice(i, i+dividingIndex));
  }
  console.log(extraArray)
  return (

      extraArray.map((row, index) => (
        <Row key={index}>
          {row.map((item, idx) => (
            <Col key={idx} style={cardColStyle}> 
            {console.log("nested loop el")}
            {console.log(item)}
            {console.log(item.resource.manufacturer)}
              <DeviceCard deviceName={item.resource.manufacturer} id={item.resource.id} description={item.resource.resourceType} style={cardStyle}/>
            </Col>
          ))}
        </Row>
      ))
  )
}