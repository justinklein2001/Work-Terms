import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import './style/workTerm.css';
import { Container, Row, Col } from 'react-bootstrap';
import {Check} from 'react-bootstrap-icons';

function WorkTerm(props) {



return (
 <Container className="co-op-main">
     <Row>
        {/*Col 1*/}
        <Col xs={12} md={4}>
            {/*Title*/}
            <Row>
                <h2>{props.data.title}</h2>
                <span className="red-underline"></span>
                <p><b>{props.data.company}</b> · <i>{props.data.termDate}</i></p>
            </Row>
            {/*About Company*/}
            <Row>
                <h5>About {props.data.company}</h5>
                <span className="sub-underline"></span>
                <p>{props.data.about}</p>    
            </Row>
            {/*Goals*/}
            <Row>
            <h5>Work-Term Goals</h5>
                <ul className="list-group">
                    <li className="list-group-item">My goals for this work terms were to:</li>
                    <li className="list-group-item"><Check color="brown" size={40}/>{props.data.goal1}</li>
                    <li className="list-group-item"><Check color="brown" size={40}/>{props.data.goal2}</li>
                    <li className="list-group-item"><Check color="brown" size={40}/>{props.data.goal3}</li>
                    <li className="list-group-item"><Check color="brown" size={40}/>{props.data.goal4}</li>
                    <li className="list-group-item">{props.data.goalParagraph}</li>
                </ul>
            </Row>
        </Col>
        {/*Col 2*/}
        <Col xs={12} md={5}>
            {/*Description*/}
            <Row>
                <h5>Job Description</h5>
                <p>{props.data.description}</p>
            </Row>
            {/*Main project*/}
            <Row>
                <h5>{props.data.projectTitle}</h5>
                <p>{props.data.project1}</p>
            </Row>
            {/*Main project continued*/}
            <Row>
                <p>{props.data.project2}</p>
            </Row>
        </Col>
        {/*Col 3*/}
        <Col xs={12} md={3}>
            {/*Main project continued*/}
            <Row>
                <p>{props.data.project3}</p>
            </Row>
            {/*Main project visual*/}
            <Row>
                <img src={props.img} height="200px" width="420px"  className="img-pad" alt="DM Form"></img>
            </Row>
            {/*Conclusions*/}
            <Row>
                <h5>Conclusions</h5>
                <p>{props.data.conclusions}</p>
            </Row>
        </Col>
     </Row>
 </Container>
);
}
export default WorkTerm;