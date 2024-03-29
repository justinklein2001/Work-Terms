import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import './style/Section4.css';
import {Container, Row, Card, CardGroup, Button } from 'react-bootstrap';
function Section4(props) {
    
    
return (

    <Container fluid className="term-main">
        <Row>
        <div className=" text-center mx-auto ec-underline">
            <h1 className="display-2">{props.data.title}</h1>
        </div>
            <h4 className="lead copy"><i><b>"What I do when I'm not solving seg faults"</b></i></h4>  
            
        </Row>
        <Row>
            <CardGroup>
                {/*Young Writer*/}
                <Card>
                    <br/>
                    <br/>
                    <Card.Img variant="top" src={props.img2} />
                    <br/>
                    <br/>
                    <br/>
                    <Card.Body className="pad-card-bd">
                    <Card.Title>{props.data.ec2Title}</Card.Title>
                    <br/>
                    <Card.Text>
                        {props.data.ec2Desc}
                    </Card.Text>
                    </Card.Body>
                    <Card.Footer>
                    <Button 
                        variant="outline-secondary"
                        href="https://www.wizardacademy.org/product/young-writers-workshop-july-18-19/"
                    >
                        Learn More</Button>
                    </Card.Footer>
                </Card>
                {/*Young Entrepreneur*/}
                <Card>
                    <Card.Img variant="top" src={props.img3} />
                    <Card.Body>
                    <Card.Title>{props.data.ec3Title}</Card.Title>
                    <br/>
                    <Card.Text>
                        {props.data.ec3Desc}
                    </Card.Text>
                    </Card.Body>
                    <Card.Footer>
                    <Button 
                        variant="outline-secondary"
                        href="https://www.prweb.com/releases/2017/02/prweb14063679.htm"
                    >Learn More</Button>
                    </Card.Footer>
                </Card>
                {/*Music Writing*/}
                <Card>
                    <Card.Img variant="top" src={props.img4} />
                    <Card.Body>
                    <Card.Title>{props.data.ec4Title}</Card.Title>
                    <br/>
                    <Card.Text>
                        {props.data.ec4Desc}
                    </Card.Text>
                    </Card.Body>
                    <Card.Footer>
                    <Button 
                        variant="outline-secondary"
                        href="https://distrokid.com/hyperfollow/justinklein1/place-you-oughta-be"
                    >Learn More</Button>
                    </Card.Footer>
                </Card>

            </CardGroup>
            
      
        </Row>
    </Container>
);
}
export default Section4;