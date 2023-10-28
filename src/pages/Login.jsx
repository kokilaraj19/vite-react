import { Container,Form,Button } from "react-bootstrap"
import '../styles/login.css'
import { useState } from "react"

export const Login = () => {
  const [formData,setFormData] = useState({
    email: "",
    password: ""
  })

  const handleSubmit = (e)=>{
    e.preventDefault();
    console.log(formData)
  }
  return (
   <Container>
            <h1>Login</h1>
            <Form onSubmit={(e) => {handleSubmit(e)}}>
                <Form.Group>
                    <Form.Label>Email</Form.Label>
                    <Form.Control type="email" name='email' value={formData.email} onChange={(e) => setFormData({...formData,email: e.target.value})} required />
                </Form.Group>
                <Form.Group>
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" name='password' value={formData.password} onChange={(e) => setFormData({...formData,password: e.target.value})} required />
                </Form.Group>
                <Button variant='primary' type='Submit'>Login</Button>
                {/* <p>Already have an account?</p><Link to="/Login">Login</Link> */}
            </Form>
        </Container>
  )
}
