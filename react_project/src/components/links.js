import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';
import '../App.css'

export default function Links () {
    return(
        <div className="links">
            <Container>
                <Card border="info" >
                    <Card.Body>
                        <Card.Text style={{ fontSize: "2.5em" }}>
                            Links
                        </Card.Text>
                        <Button href="https://github.com/Justin-Whistle" variant="primary" size="lg" >
                            Github
                        </Button>
                        <br></br>
                        <br></br>
                        <Button href="https://www.linkedin.com/in/justin-whistle/" variant="primary" size="lg" >
                            LinkedIn
                        </Button>
                    </Card.Body>
                </Card>
            </Container>
        </div>
    )

}

