"use client"
import 'bootstrap/dist/css/bootstrap.css'
import DeviceCard from "../DeviceCard";
import { CardGroup, Col, Row } from "react-bootstrap";
import '../globals.css'
// export const next: revalidate = 10

export default function DevicesPage() {
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


  const cardColStyle = {
    marginBottom: '20px',

  };

  const cardStyle = {
    height: '100%', // Set a fixed height for each card
  };

  const dividingIndex = 4

  const extraArray = []
  for (let i=0; i< array1.length; i+=dividingIndex) 
  {
    extraArray.push(array1.slice(i, i+dividingIndex));
  }
  return (

      extraArray.map((row, index) => (
        <Row key={index}>
          {row.map((item, idx) => (
            <Col key={idx} style={cardColStyle}> 
              <DeviceCard deviceName={Object.keys(item)[0]} id={index*3 + idx +1} description={Object.values(item)[0]} style={cardStyle}/>
            </Col>
          ))}
        </Row>
      ))
  )
}