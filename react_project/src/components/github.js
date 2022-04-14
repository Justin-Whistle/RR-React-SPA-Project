import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';

export default function GitHub () {
    return(
        <div className="github">
            <Container>
                <Card border="info" >
                    <Card.Body>
                        <Card.Text style={{ fontSize: "2.5em" }}>
                            Github
                        </Card.Text>
                    </Card.Body>
                </Card>
            </Container>
        </div>
    )

}
