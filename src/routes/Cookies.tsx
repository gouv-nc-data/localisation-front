
import { Container, Row, Col, ListGroup } from "react-bootstrap";

const Cookies: React.FC = () => {
   
    return(
        <>
           <Container className="my-5 py-5">
                <Row className="justify-content-center">
                    <Col xs={12} lg={10} className="d-flex justify-content-between align-items-center gap-4">
                    <article className="flex-column gap-4">
                        <div className="mb-4">
                            <h1 className="display-4">Gestion des cookies</h1>
                        </div>

                        <div className="mb-4">
                            <h2 className="h3">Utilisation des cookies</h2>
                            <p className="lead">
                                Ce site utilise des cookies uniquement pour :
                            </p>
                            <ListGroup variant="flush" as="ul" className="ms-3">
                                <ListGroup.Item as="li" className="border-0 p-0 pb-2">
                                <p className="lead">mesurer l’audience de fréquentation de manière anonyme.</p>
                                </ListGroup.Item>
                                <ListGroup.Item as="li" className="border-0 p-0 pb-2">
                                <p className="lead">améliorer l'expérience utilisateur.</p>
                                </ListGroup.Item>
                            </ListGroup>
                        </div>

                        <div className="mb-4">
                            <h2 className="h3">Cookies utilisés</h2>
                            <p className="lead">
                                Aucun cookie publicitaire n'est installé. Les cookies techniques nécessaires au bon fonctionnement du service peuvent être déposés sans consentement préalable.
                            </p>
                        </div>

                        <div className="mb-4">
                            <h2 className="h3">Refuser les cookies</h2>
                            <p className="lead">
                                Vous pouvez configurer votre navigateur pour refuser tout ou partie des cookies. Toutefois, certaines fonctionnalités du site pourraient être altérées.
                            </p>
                        </div>
                    </article>
                    </Col>
                </Row>
            </Container>
        </>
    )
};


export default Cookies;