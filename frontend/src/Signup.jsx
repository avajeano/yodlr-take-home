import { useState } from 'react';
import API from './api';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import { Link } from 'react-router-dom';

function Signup() {
    const [email, setEmail] = useState('');
    const [status, setStatus] = useState({ type: '', message: '' });
  
    const handleSubmit = async (e) => {
      e.preventDefault();
      try {
        const response = await API.createUser({ email });
        setStatus({ type: 'success', message: 'Registration successful!' });
        setEmail('');
      } catch (error) {
        setStatus({ type: 'error', message: 'Registration failed. Please try again.' });
      }
    };
  
    return (
      <>
        <Card bg="dark" text="light" style={{ width: '50rem' }}>
            <Card.Title>Yodlr Registration Portal</Card.Title>
            <Form onSubmit={handleSubmit}>
                <Row className="mb-3">
                    <Form.Group>
                        <Form.Label>Email</Form.Label>
                        <Form.Control 
                            id="email"
                            type="text"
                            name="email"
                            placeholder="email"
                            value={FormData.email}
                            onChange={handleSubmit}
                            required
                            />
                    </Form.Group>
                </Row>
                <Button variant="success" type="submit">Submit</Button>
            </Form>
            <div>
            <Link to="/">Back</Link>
            </div>
        </Card>
      </>
    );
}

export default Signup;