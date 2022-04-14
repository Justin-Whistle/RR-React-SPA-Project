import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
import '../App.css'

const About = () => {
    return (
        <Container className="about">
            <Card border="info">
                <Card.Body>
                    <Card.Text style={{ fontSize: "2.5em" }}>
                        Justin Whistle
                    </Card.Text>
                    <Card.Img src="walleye.jpg" alt="big fish" style={{ maxHeight: "65%", maxWidth: "65%" }} />
                    <Card.Text style={{ fontSize: "1em" }}>
                        I have a passion for the outdoors and technology. Would love to be in a position to combine the two someday.
                    </Card.Text>
                </Card.Body>
            </Card>
        </Container>
    )
}

export default About;



