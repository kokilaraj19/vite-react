import { Button, Container } from "react-bootstrap"

import '../styles/home.css'
export const Home = () => {
  return (
    <Container>
        <h1>WELCOME TO OUR WEBSITE</h1>
        <p>WE are here to serve you</p>
        <Button variant="primary">GET STARTED</Button>
    </Container>
  )
}
