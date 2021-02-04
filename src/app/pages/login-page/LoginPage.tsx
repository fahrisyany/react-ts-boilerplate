import React from 'react'
import "./LoginPage.scss"
import { Card, Button, Form } from 'react-bootstrap'
const LoginPage: React.FC = () => {


    return (
        <div id="login" className="page d-flex flex-column justify-content-center align-items-center">
            <Card className="login-container">
                    <Card.Title>
                        <h2>Login Account</h2>
                    </Card.Title>
                <Card.Body>
                    <Form className="login-form d-flex flex-column justify-content-center">
                        <Form.Group controlId="formBasicEmail">
                            <Form.Control type="email" placeholder="Enter email" />
                        </Form.Group>
                        <Form.Group controlId="formBasicPassword">
                            <Form.Control type="password" placeholder="Password" />
                        </Form.Group>
                        <Button className="justify-content-end" variant="primary" type="submit">
                            Login
                         </Button>
                    </Form>
                    {/* <Button variant="primary">Go somewhere</Button> */}
                </Card.Body>
            </Card>
        </div>
    )

}

export default LoginPage