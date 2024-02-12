'use client'
import 'bootstrap/dist/css/bootstrap.css';
import { Col, Row } from 'react-bootstrap';
import Image from 'react-bootstrap/Image';
import { useParams, useSearchParams } from 'next/navigation';
import Badge from 'react-bootstrap/Badge';
import Stack from 'react-bootstrap/Stack';

// Define styles
const rowStyle = {
  marginTop: '20px',
};

const colStyle = {
  marginBottom: '20px',
};

const textStyle = {
  fontWeight: 'bold',
};

export const fetchDeviceInfo = (id) => {
  const deviceData = { "id": id, "flow_rate": 0.1, "volume": 100, "timeout": 20 };
  return deviceData;
};

export default function Post() {
  const searchParams = useSearchParams();
  const param = useParams();
  const deviceName = searchParams.get('device');
  const data = fetchDeviceInfo(param.device);

  return (
    <>
    <Row style={rowStyle}>
      <Col xs={6} md={4} style={colStyle}>
        <Image variant="top" src={`/${deviceName}.png`} thumbnail />
      </Col>
      <Col style={colStyle}>
      <Stack gap={3}>
        <h2 style={textStyle}>{deviceName} {param.device}</h2>
        <div className="p-2" >Volume: {data.volume}</div>
        <div className="p-2" >Time: {data.timeout} sec</div>
        <div className="p-2" >Flow rate: {data.flow_rate}</div>
        </Stack>
      </Col>
    </Row>
    <div className="p-2" ms-auto><Badge bg="success">On</Badge></div>
    </>
  );
}