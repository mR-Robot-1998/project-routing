import { useParams } from "react-router-dom"
import CoursesData from './CoursesData';
import { Container,Row,Col } from "react-bootstrap";
export default function MainCourse() {

    let params=useParams();

    let mainCourseData=CoursesData.find(course => course.id == params.courseId);
    return (
    <>
    <Container className="mt-5">
        <Row>
            <Col>
                <img src={mainCourseData.img} style={{width:'80%',height:300}}/>
            </Col>
            <Col>
                <h1>Title : {mainCourseData.title}</h1>
                <p>Desc : {mainCourseData.desc}</p>
                <h4>Price : {mainCourseData.price}</h4>
            </Col>
        </Row>
    </Container>
    </>
    )
}
