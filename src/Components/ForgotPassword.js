import React from 'react';
import {Card ,Form,Button} from 'react-bootstrap'
import {Link} from 'react-router-dom'

export default function ForgotPassword() {
  return (<>
    <Card className='bg-dark'>
      <Card.Body>
          <h2 className='text-center mb-4 text-light'>Reset Password</h2>
        <Form>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label className='text-light'>Email</Form.Label>
        <Form.Control type="email" placeholder="Enter email" id="Email" />
      </Form.Group>
      
      
      <Button variant="primary" type="submit" className='w-100 mt-3'>
        Reset Password
      </Button>
    </Form>
    <div className='w-100 text-center mt-3'>
      <Link to="/Login" >Login</Link>
    </div>
      </Card.Body>

    </Card>
  <div className='w-100 text-center mt-2'>
     Need an account? <Link to="/Signup">Signup</Link>
  </div>
  
  
  
  
  </>
  )
}

