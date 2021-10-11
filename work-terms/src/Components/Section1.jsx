import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import './style/Section1.css';
import { Col, Container, Row } from 'react-bootstrap';


function Section1(props) {

    
return (

    <Container fluid className="main-container">
       <Row className="main-row">
            {/*left side of section*/}
            <Col xs={12} md={7}className="col-section">
                
                {/*section title*/}
                <Row className="row-border">
                    <div className=" text-center mx-auto red-box">
                        <h1 className="display-2">{props.data.title}</h1>
                    </div>
                        <h4 className="lead copy"><i><b>"{props.data.copy}"</b></i></h4>
              
                        
                    
                </Row>
                <Row>
                    <div className="mx-auto paragraph-box">
                        <p className="lead">{props.data.paragraph}</p>
                    </div>
                </Row>
            </Col>
            {/*right side of section*/}
            <Col xs={12} md={5} className="col-section">
                <div className="mx-auto offset">
                    <img src={props.img} className="my-pic" alt="me" height="450px" width="300px"></img>
                </div>
            </Col>
        </Row> 
    </Container>
);
}
export default Section1;