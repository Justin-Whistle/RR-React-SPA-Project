import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';

const About = () => {
    return (
        <Container>
            <Card border="info" >
                {/* <Card.Header className="blockquote mb-0 card-body">About Me</Card.Header> */}
                <Card.Body>
                    <Card.Text style={{ fontSize: "2.5em" }}>
                        Justin-Whistle
                    </Card.Text>
                    <Card.Img src="JustinSpoonBill.jpg" alt="big fish" />
                    <Card.Text style={{ fontSize: "1em" }}>
                        I have a passion for the outdoors and technology. Would love to be in a position to combine the two someday.
                    </Card.Text>
                </Card.Body>
            </Card>
        </Container>
    )
}

export default About;



