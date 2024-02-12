import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

const truncateText = (text, maxLength) => {
  if (text.length <= maxLength) return text;
  return text.substr(0, maxLength) + '...';
};


export default function DeviceCard({deviceName, id, description}) {
  const truncatedDescription = truncateText(description, 30);
  return (
    <Card style={{ width: '10rem'}}>
      <Card.Img variant="top" src={`/${deviceName}.png`} />
      <Card.Body>
        <Card.Title>{deviceName}</Card.Title>
        <Card.Subtitle>Identifier: {id}</Card.Subtitle>
        <Card.Text style={{ maxHeight: '3rem', overflow: 'hidden', textOverflow: 'ellipsis'}}> {truncatedDescription}
        </Card.Text>
        <Button variant="dark" href={`/devices/${id}?device=${deviceName}`}>Go to {id}</Button>
      </Card.Body>
    </Card>
  );
}