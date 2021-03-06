import React,{useState,useRef} from 'react'
import {Form,Button,Card,Alert} from 'react-bootstrap'
import {Link,useHistory} from 'react-router-dom'
import { useAuth } from '../Context/AuthContext'
import { Container } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'


function Signup() {
    const emailRef = useRef()
    const passwordRef = useRef()
    const passwordConfirmRef = useRef()
    const myname = useRef()
    const { signup,updateName } = useAuth()
    const [error,setError] = useState('')
    const[loading,setLoading] = useState(false)
    const history = useHistory()
    async function handleSubmit(e){
        e.preventDefault()

        if(passwordRef.current.value !== 
            passwordConfirmRef.current.value){
                return setError('Passwords do no match')
            }

        try {
            setError('')
            setLoading(true)
            await signup(emailRef.current.value,passwordRef.current.value)
            await updateName(emailRef.current.value,myname.current.value)
            history.push('/homepage')
        }
        catch{
            setError('Failed to create an account')
        }

        
        setLoading(false)
        
    }


    return (
        <Container className="d-flex align-items-center justify-content-center"
    style={{minHeight : "100vh"}}>
        <div 
        className="w-100" style={{maxWidth : "400px"}}>
          <Card>
          <Card.Body>
                    <h2 className="text-center mb-4">Sign Up</h2>
                    {error && <Alert variant="danger">{error}</Alert>}
                    <Form onSubmit={handleSubmit}>
                        <Form.Group id="email">
                            <Form.Label>Email</Form.Label>
                            <Form.Control type="email" ref={emailRef} required />
                        </Form.Group>
                        <Form.Group id="password">
                            <Form.Label>Password</Form.Label>
                            <Form.Control type="password" ref={passwordRef} required />
                        </Form.Group>
                        <Form.Group id="password.confirm">
                            <Form.Label>Password Confirmation</Form.Label>
                            <Form.Control type="password" ref={passwordConfirmRef} required />
                        </Form.Group>
                        <Form.Group id="text">
                            <Form.Label>Your Name</Form.Label>
                            <Form.Control type="text" ref ={myname} required/>
                        </Form.Group>
                        <Button disabled={loading} className="w-100 mt-3"type="submit">Sign Up</Button>
                    
                        
                    </Form>
                </Card.Body>
          </Card>  
          <div className="w-100 text-center mt-2">
                Already have an account? <Link to='/'>Log in</Link>
            </div>
        </div>
        </Container>
    )
}

export default Signup
