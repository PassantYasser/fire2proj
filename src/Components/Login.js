import React from 'react';
import {Card ,Form,Button} from 'react-bootstrap'
import {Link} from 'react-router-dom'

export default function Login() {
  return (<>
    <Card className='bg-dark'>
      <Card.Body>
          <h2 className='text-center mb-4 text-light'>Login</h2>
        <Form>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label className='text-light'>Email</Form.Label>
        <Form.Control type="email" placeholder="Enter email" id="Email" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label className='text-light'>Password</Form.Label>
        <Form.Control type="password" placeholder="Password" id="Password" />
      </Form.Group>
      
      <Button variant="primary" type="submit" className='w-100 mt-3'>
      Login
      </Button>
    </Form>
    <div className='w-100 text-center mt-3'>
      <Link to="/forgot-password" >ForgotPassword</Link>
    </div>
      </Card.Body>

    </Card>
  <div className='w-100 text-center mt-2'>
     Need an account? <Link to="/Signup">Signup</Link>
  </div>
  
  
  
  
  </>
  )
}
