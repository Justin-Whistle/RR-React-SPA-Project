import { BrowserRouter as Router, Link, Routes, Route } from 'react-router-dom';
import Home from './home.js';
import About from './about.js';
import Links from './links';
import Nav from 'react-bootstrap/Nav';
import Container from 'react-bootstrap/Container';
import '../App.css';


const TopBar = () => {
    return ( 
        <Router>
            <Container>
                <Nav defaultActiveKey="/" variant="tabs" fill>
                    <Nav.Item>
                        <Nav.Link href="/"> 
                            <Link to="/">Home</Link>
                        </Nav.Link>
                    </Nav.Item>
                    <Nav.Item >
                        <Nav.Link eventKey={"aboutpage"}> 
                            <Link to="/about">About Me</Link>
                        </Nav.Link>
                    </Nav.Item>
                    <Nav.Item >
                        <Nav.Link eventKey={"github"}> 
                            <Link to="/links">Links</Link> 
                        </Nav.Link>
                    </Nav.Item>
                </Nav>
            </Container>
            <div className="Display">
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/about" element={<About />} />
                    <Route path="/links" element={<Links />} />
                </Routes>
            </div>
        </Router>
    )
}

export default TopBar
