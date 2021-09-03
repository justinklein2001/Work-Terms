import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import './style/Section3.css';
import {Container, Row, Card, CardGroup, Button } from 'react-bootstrap';
import song from '../audio/song.mp3';
function Section4(props) {
    
    
return (

    <Container fluid className="term-main">
        <Row>
            <h1>{props.data.title}</h1>
        </Row>
        <Row>
            <CardGroup>
                {/*Gryphhacks*/}
                <Card>
                    <Card.Img variant="top"  src={props.img1} />
                    <Card.Body>
                    <Card.Title>{props.data.ec1Title}</Card.Title>
                    <br/>
                    <Card.Text>
                        {props.data.ec1Desc}
                    </Card.Text>
                    </Card.Body>
                    <Card.Footer>
                    <Button variant="outline-secondary">Learn More</Button>
                    </Card.Footer>
                </Card>
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
                    <Button variant="outline-secondary">Learn More</Button>
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
                    <Button variant="outline-secondary">Learn More</Button>
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
                        <br/>
                        <br/>
                        <i>Here's a <b>work in progress</b> preview of the title track; "Place you Oughta Be"</i>
                    </Card.Text>
                    </Card.Body>
                    <Card.Footer>
                        <audio controls>
                            <source src={song} type="audio/mpeg"/>
                            Your browser does not support the audio element.
                        </audio>
                    </Card.Footer>
                </Card>

            </CardGroup>
            
      
        </Row>
    </Container>
);
}
export default Section4;