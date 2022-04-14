import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
import '../App.css';

export default function Home () {
    return(
        <div className="homepage">
            <Container>
                <Card border="info" >
                    <Card.Body>
                        <Card.Text style={{ fontSize: "2.5em" }}>
                            Welcome!
                        </Card.Text>
                        <Card.Img src="morningFishing.jpg" alt="morning fishing" style={{ maxHeight: "90%", maxWidth: "90%" }} />
                    </Card.Body>
                </Card>
            </Container>
        </div>
    )

}
