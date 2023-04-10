import {Card,Button} from 'react-bootstrap';
import { Link } from 'react-router-dom';

export default function Course(props) {
  
    let {id,title,desc,img} =props
  
    return (    
    <Link to={`/course/${id}`}>
      <Card style={{ width: '18rem' }}>
        <Card.Img variant="top" src={img} />
        <Card.Body>
          <Card.Title>{title}</Card.Title>
          <Card.Text>
            {desc}
          </Card.Text>
          <Button variant="primary">Go Courses</Button>
        </Card.Body>
      </Card>
    </Link>
    )
}
