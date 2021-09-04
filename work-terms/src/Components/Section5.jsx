import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import './style/Section5.css';
import { Col, Container, Form, Row, Button } from 'react-bootstrap';
import { useState } from 'react';
import { EnvelopeFill } from 'react-bootstrap-icons';

function Section5() {

    const [validated, setValidated] = useState(false);

    const handleSubmit = (event) => {
        const form = event.currentTarget;
        if (form.checkValidity() === false) {
        event.preventDefault();
        event.stopPropagation();
        } else {

        }
        setValidated(true);
    };

    //sets the values of the from, in adherence to the values in the dm form
    const [values, setValues] = useState({
        fullName: "",
        subject: "",
        message: "",

    });

    /** change handler, grabs the previous state's values
     *  and overides them with the new state
     */
        const handleChange = event => {
        const { name, value } = event.target;
        setValues({
            ...values,
            [name]: value
        });
    };

return (

    <Container fluid className="term-main">
       <Row className="main-row">
            {/*left side of section*/}
            <Col xs={12} md={6} className="col-section">
                
                {/*section title*/}
                <Row className="row-border-contact">
                    <div className=" text-center mx-auto red-box">
                        <h1 className="display-2">CONTACT ME</h1>
                    </div>
                        <h4 className="lead copy"><i><b>Any Inquiries Welcomed.</b></i></h4>    
                </Row>
                <Row className="offset-mail">
                    <EnvelopeFill color="brown" size={70}/>
                </Row>
            </Col>

            {/*contact form*/}
            <Col xs={12} md={6} className="contact-form">
                <Form noValidate validated={validated} onSubmit={handleSubmit}>
                    <Form.Group className="mb-3" controlId="formBasicText">
                        <Form.Label>Full Name:</Form.Label>
                        <Form.Control 
                            type="text"
                            required
                            onChange={handleChange}
                            value={values.fullName}     
                        />
                        <Form.Control.Feedback type="invalid">
                            Please provide a name.
                        </Form.Control.Feedback>
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Subject</Form.Label>
                        <Form.Control 
                            type="text"
                            required
                            onChange={handleChange}
                            value={values.subject}
                        />
                        <Form.Control.Feedback type="invalid">
                            Please provide a subject.
                        </Form.Control.Feedback>
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                        <Form.Label>Message</Form.Label>
                        <Form.Control 
                            as="textarea" 
                            rows={5}
                            required 
                            onChange={handleChange}
                            value={values.message}
                        />
                        <Form.Control.Feedback type="invalid">
                            Please provide a message.
                        </Form.Control.Feedback>
                    </Form.Group>
                    <Button className="bg-my-red-btn" type="submit">
                        Submit
                    </Button>
                </Form>
            </Col>

        </Row> 
    </Container>
);
}
export default Section5;