import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import './style/Section3.css';
import { Col, Container, Row, Card, CardGroup } from 'react-bootstrap';
import { BriefcaseFill } from 'react-bootstrap-icons';

function Section3(props) {
    
    
return (

    <Container className="term-main">
        <Row>
            <Col xs={12} md={6}className="col-section">
                <Row>
                    <div className="text-center mx-auto red-box">
                        <h1 className="display-2">{props.data.title}</h1>
                    </div>
                </Row>
                <Row className="offset-bc">
                    <BriefcaseFill color="brown" size={75}/>
                </Row>
                <Row className="text-left">
                <ul className="list-group mx-auto education-div">
                    <li className="list-group-item"><b>Major:</b> <i>{props.data.major}</i></li>
                    <li className="list-group-item"><b>Minor:</b> <i>{props.data.minor}</i></li>
                    <li className="list-group-item"><b>School:</b> <i>{props.data.school}</i></li>
                    <li className="list-group-item"><b>Current Year:</b> <i>{props.data.year}</i></li>
                    <li className="list-group-item"><b>Cumulative GPA:</b> <i>{props.data.gpa}</i></li>
                </ul>
                </Row>
            </Col>
            <Col xs={12} md={6}>
                <h3 className="pad-btm">Key Academic Projects</h3>
                
                <CardGroup>
                    <Card>
                        <Card.Body>
                        <Card.Title>{props.data.project1}</Card.Title>
                        <br/>
                        <Card.Text>
                            <h6>Project Stack:</h6>
                            <ul className="no-bllt">
                                <li>{props.data.stack11}</li>
                                <li>{props.data.stack12}</li>
                                <li>{props.data.stack13}</li>
                                <li>{props.data.stack14}</li>
                            </ul>
                            {props.data.desc1}
                        </Card.Text>
                        </Card.Body>
                        <Card.Footer>
                        <small className="text-muted">{props.data.footer1}</small>
                        </Card.Footer>
                    </Card>
                    <Card>
                        <Card.Body>
                        <Card.Title>{props.data.project2}</Card.Title>
                        <br/>
                        <Card.Text>
                            <h6>Project Stack:</h6>
                            <ul className="no-bllt">
                                <li>{props.data.stack21}</li>
                                <li>{props.data.stack22}</li>
                                <li>{props.data.stack23}</li>
                                <li></li>
                            </ul>
                            {props.data.desc2}
                        </Card.Text>
                        </Card.Body>
                        <Card.Footer>
                        <small className="text-muted">{props.data.footer2}</small>
                        </Card.Footer>
                    </Card>
                    <Card>
                        <Card.Body>
                        <Card.Title>{props.data.project3}</Card.Title>
                        <br/>
                        <Card.Text>
                            <h6>Project Stack:</h6>
                            <ul className="no-bllt">
                                <li>{props.data.stack31}</li>
                                <li>{props.data.stack32}</li>
                                <li></li>
                                <li></li>
                            </ul>
                            {props.data.desc3}
                        </Card.Text>
                        </Card.Body>
                        <Card.Footer>
                        <small className="text-muted">{props.data.footer3}</small>
                        </Card.Footer>
                    </Card>

                </CardGroup>
            </Col>
        </Row>
    </Container>
);
}
export default Section3;