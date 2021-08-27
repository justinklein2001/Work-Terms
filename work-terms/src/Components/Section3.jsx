import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import './style/Section3.css';
import { Col, Container, Row } from 'react-bootstrap';
import {Cpu, Bookshelf} from 'react-bootstrap-icons';

function Section3(props) {

    
return (

    <Container fluid className="term-main">
        <Row>
            <Col xs={12} md={6}className="col-section">
                <Row>
                    <div className="text-left mx-auto red-box">
                        <h1 className="display-2">{props.data.title}</h1>
                    </div>
                </Row>
                <Row>
                <ul className="list-group">
                    <li className="list-group-item"><b>Major:</b> <i>{props.data.major}</i></li>
                    <li className="list-group-item"><b>Minor:</b> <i>{props.data.minor}</i></li>
                    <li className="list-group-item"><b>School:</b> <i>{props.data.school}</i></li>
                    <li className="list-group-item"><b>Current Year:</b> <i>{props.data.year}</i></li>
                    <li className="list-group-item"><b>Cumulative GPA:</b> <i>{props.data.gpa}</i></li>
                </ul>
                </Row>
            </Col>
            <Col xs={12} md={6}className="col-section">
            </Col>
        </Row>
    </Container>
);
}
export default Section3;