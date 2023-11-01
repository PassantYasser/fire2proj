import React, { useState,useRef } from 'react';
import {Card ,Form,Button,Alert} from 'react-bootstrap';
import {Link} from 'react-router-dom';
import {useAuth} from '../Context/AuthContext';
import { useNavigate } from 'react-router-dom';

export default function Signup() {
  const {signup}= useAuth();
  const[Error , setError]=useState("")
  const[Loading , setLoading]=useState(false);
  const emailRef = useRef();
  const passwordRef = useRef();
  const passwordconfirmationRef = useRef();
  const navigate = useNavigate();

    const handleSubmit = async(e)=>{
      e.preventDefault();
      if(passwordRef.current.value !== passwordconfirmationRef.current.value){
        return setError("password do not match")
      }
    try{
      setError("");
      setLoading(true);
      await signup(emailRef.current.value ,passwordRef.current.value )
      navigate('/');
    }catch{
      setError('faild to create an account');

    }
    setLoading(false)
    
  }
  return (<>
    <Card className='bg-dark'>
      <Card.Body>
          <h2 className='text-center mb-4 text-light'>Signup</h2>
          {Error && <Alert variant="warning">{Error}</Alert>}
        <Form onSubmit={handleSubmit}>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label className='text-light'>Email</Form.Label>
        <Form.Control type="email" placeholder="Enter email" id="Email" ref={emailRef}/>
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label className='text-light'>Password</Form.Label>
        <Form.Control type="password" placeholder="Password" id="Password"ref={passwordRef} />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label className='text-light'>ConfirmPassword</Form.Label>
        <Form.Control type="password" placeholder="ConfirmPassword" id="ConfirmPassword" ref={passwordconfirmationRef} />
      </Form.Group>
      
      <Button variant="primary" type="submit" className='w-100 mt-3'disabled={Loading} >
        Signup
      </Button>
    </Form>
      </Card.Body>

    </Card>
  <div className='w-100 text-center mt-2'>
    Already have an account <Link to="/Login">Login</Link>
  </div>
  
  
  
  
  </>
  )
}

