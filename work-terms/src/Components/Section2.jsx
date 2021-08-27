import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import './style/Section2.css';
import { Col, Container, Row } from 'react-bootstrap';
import { ProgressBar } from 'react-bootstrap';


function Section2(props) {

    
return (

    <Container fluid className="term-main">
       <Row className="main-row">
            {/*left side of section*/}
            <Col xs={12} md={6}className="col-section">
                
                {/*section title*/}
                <Row className="row-border">
                    <div className=" text-left mx-auto red-box">
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
            <Col xs={12} md={3} className="stack-divs">
                
                        <h4>Tech Stack:</h4>
                        <p><b>C:</b> <i>[Extremely Proficient]</i></p>
                        <ProgressBar animated variant="danger" now={90}/>
                        <p><b>React:</b> <i>[Proficient]</i></p>
                        <ProgressBar animated variant="danger" now={80}/>
                        <p><b>Node.js:</b> <i>[Proficient]</i></p>
                        <ProgressBar animated variant="danger" now={80}/>
                        <p><b>Java:</b> <i>[Intermediate]</i></p>
                        <ProgressBar animated variant="danger" now={70}/>
                        <p><b>SQL:</b> <i>[Novice]</i></p>
                        <ProgressBar animated variant="danger" now={50}/>
            </Col>
            {/*right side of section*/}
            <Col xs={12} md={3} className="stack-divs">
        
                        <h4>Interpersonal Stack:</h4>
                        <p><b>Time Management:</b> <i>[Extremely Proficient]</i></p>
                        <ProgressBar animated variant="danger" now={100}/>
                        <p><b>Communication:</b> <i>[Extremely Proficient]</i></p>
                        <ProgressBar animated variant="danger" now={100}/>
                        <p><b>Presentation:</b> <i>[Proficient]</i></p>
                        <ProgressBar animated variant="danger" now={85}/>
                        <p><b>Responsibility:</b> <i>[Proficient]</i></p>
                        <ProgressBar animated variant="danger" now={85}/>
                        <p><b>Adaptability:</b> <i>[Proficient]</i></p>
                        <ProgressBar animated variant="danger" now={80}/>
               
            </Col>
        </Row> 
    </Container>
);
}
export default Section2;