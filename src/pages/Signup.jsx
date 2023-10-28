import { useState } from 'react'
import '../styles/signup.css'
import {Form,Button, Container} from 'react-bootstrap'
// import { useNavigate } from 'react-router-dom'
import {Link} from 'react-router-dom'

export const Signup = ()=>{
    // const [Fname,setFname]= useState("")

    const [formData,setFormData] = useState({fname: "",email: "",password: ""})
    // const navigate = useNavigate();
    const handleSubmit= (e)=>{
        e.preventDefault()
        console.log(formData);
    }
    return (
        <Container>
            <h1>REGISTRATION FORM</h1>
            <Form onSubmit={(e)=>handleSubmit(e)}>
                <Form.Group>
                    <Form.Label>First Name</Form.Label>
                    <Form.Control type="text" name='fname' value={formData.fname} onChange={(e) => setFormData({...formData,fname: e.target.value})} required />
                </Form.Group>
                <Form.Group>
                    <Form.Label>Email</Form.Label>
                    <Form.Control type="email" name='email' value={formData.email} onChange={(e) => setFormData({...formData,email: e.target.value})} required />
                </Form.Group>
                <Form.Group>
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" name='password' value={formData.password} onChange={(e) => setFormData({...formData,password: e.target.value})} required />
                </Form.Group>
                <Button variant='primary' type='Submit'>Submit</Button>
                <p>Already have an account? <Link to="/login">Login</Link></p>
            </Form>
        </Container>
    )
}