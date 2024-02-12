"use client"
import { Container } from "react-bootstrap";
import NavBar from "./NavBar"
import './globals.css'

const gridContainerStyle = {
  backgroundColor: '#f0f0f0', // Set the background color
  padding: '20px', // Add some padding for spacing
  maxWidth: '900px', // Set a maximum width for the container
  margin: '20px auto',
  width: 'auto'
};


const Layout = ({ children }) => (
  <>
    <NavBar />
    <main>
    <Container fluid style={gridContainerStyle}>
        {children}
    </Container>
    </main>
  </>
)

export default Layout