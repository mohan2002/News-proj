import React , {useRef,useState}from 'react'
import { Form,Button,Card, Alert } from 'react-bootstrap'
import { useAuth } from '../Context/AuthContext'
import {Link} from 'react-router-dom'


function ForgotPassword() {
    const emailRef = useRef()
    const {resetPassword} = useAuth()
    const [error,setError] = useState('')
    const[loading,setLoading] = useState('')
    const[message,setMessage] = useState('')
    async function handleSubmit(e){
        e.preventDefault()

        try {
            setMessage('')
            setError('')
            setLoading(true)
            await resetPassword(emailRef.current.value)
            setMessage('Check your inbox for further Instructions')
        }
        catch{
            setError('Failed to reset')
        }
        setLoading(false)
        
    }


    return (
        <>
            <Card>
                <Card.Body>
                    <h2 className="text-center mb-4">Forgot password</h2>
                    {error && <Alert variant="danger">{error}</Alert>}
                    {message && <Alert variant="success">{message}</Alert>}
                    <Form onSubmit={handleSubmit}>
                        <Form.Group id="email">
                            <Form.Label>Email</Form.Label>
                            <Form.Control type="email" ref={emailRef} required />
                        </Form.Group>
                        
                        <Button disabled={loading} className="w-100 mt-3 " type="submit">
                        Reset Password
                        </Button>
                        <div className="w-100 text-center mt-3">
                            <Link to="/login">Login</Link>
                        </div>
                    </Form>
                </Card.Body>
            </Card>
            <div className="w-100 text-center mt-2">
               Need an account?<Link to='/signup'>Signup</Link>
            </div>
        </>
    )
}

export default ForgotPassword
