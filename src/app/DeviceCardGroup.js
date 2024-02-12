import CardGroup from 'react-bootstrap/CardGroup';
import DeviceCard from './DeviceCard';
import { Container, Row } from 'react-bootstrap';

export default function DeviceCardGroup(map1) {
  return (
    <CardGroup>
    {
      Object.entries(map1).map(([key, value]) => 
      <DeviceCard deviceName={Object.keys(map1[key])} id={key} description={Object.values(map1[key])}/>)
    }
  </CardGroup>
)
}
