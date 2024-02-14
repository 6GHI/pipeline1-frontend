import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.css';
import { Col, Row } from 'react-bootstrap';
import Image from 'react-bootstrap/Image';
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

export const fetchMedicationByDeviceID = async (id) => {
  const response =  await axios.get(`http://localhost:8080/fhir/MedicationAdministration/?_device=${id}`, 
  {headers: {
    'Accept': 'application/json',
  }
  }

);
  const medicationAdministration = response.data
  const medicationAdministrationEntry = medicationAdministration.entry[medicationAdministration.entry.length - 1].resource

  return { "id": id, 
          "status": medicationAdministrationEntry.status, 
          "flow_rate": 0, 
          "volume": medicationAdministrationEntry.dosage.dose.value,
          "unit": medicationAdministrationEntry.dosage.dose.unit, 
          "timeout": Math.floor((new Date(medicationAdministrationEntry.effectivePeriod.end) - 
          new Date(medicationAdministrationEntry.effectivePeriod.start)) / 1000) }
};

export default async function Post(searchParams) {
  const data = await fetchMedicationByDeviceID(searchParams.params.device);
  return (
    <>
    <Row style={rowStyle}>
      <Col xs={6} md={4} style={colStyle}>
        <Image variant="top" src={`/${searchParams.searchParams.device}.png`} thumbnail />
      </Col>
      <Col style={colStyle}>
      <Stack gap={3}>
        <h2 style={textStyle}>{searchParams.searchParams.device} {searchParams.params.device}</h2>
        <div className="p-2" >Flow rate: {data.flow_rate} sec</div>
        <div className="p-2" >Injected volume: {data.volume} {data.unit}</div>
        <div className="p-2" >Timeout: {data.timeout}</div>
        </Stack>
      </Col>
    </Row>
    <div className="p-2" ms-auto>

        <Badge
          className="btn"
          variant={data.status ? 'success' : 'danger'}
        >
          {data.status}
        </Badge>
        </div>
    </>
  );
}