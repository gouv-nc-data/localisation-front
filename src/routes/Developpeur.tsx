import { Container, Row, Col, ListGroup } from "react-bootstrap";


const Developpeur: React.FC = () => {
   
    return(
           <Container className="my-5 py-5">
                <Row className="justify-content-center">
                    <Col xs={12} lg={10} className="d-flex justify-content-between align-items-center gap-4">
                    <article className="d-flex flex-column gap-4">
                        <div className="mb-4">
                            <h1 className="display-4">Espace développeurs</h1>
                            <p className="lead">
                                Le référentiel de localisation de la Nouvelle-Calédonie est conçu comme une infrastructure ouverte. Nous mettons à disposition une API et des ressources documentaires pour faciliter l'intégration de ces données souveraines dans vos applications et services.
                            </p>
                        </div>

                        <div className="mb-4">
                            <h2 className="h3">Accès à l’API</h2>
                            <p className="lead">
                                L'API de localisation est le point d'entrée unique pour interroger le référentiel (recherche d'adresse, auto-complétion, géocodage, etc.). 
                            </p>
                            <p className="lead">
                                URL de l’API : <a href="https://localisation.gouv.nc/api/openapi">https://localisation.gouv.nc/api/openapi</a>
                            </p>
                        </div>

                        <div className="mb-4">
                            <h2 className="h3">Documentation technique</h2>
                            <p className="lead">
                                Pour vous accompagner dans l'implémentation, deux guides sont à votre disposition :
                            </p>
                            <ListGroup variant="flush" as="ul" className="ms-3">
                                <ListGroup.Item as="li" className="border-0 p-0 pb-2">
                                    <p className="lead">
                                        <strong>Guide du développeur :</strong> tout ce qu'il faut savoir sur les paramètres d'appel, les formats de réponse et les exemples de requêtes.
                                    </p>
                                </ListGroup.Item>
                                <ListGroup.Item as="li" className="border-0 p-0 pb-2">
                                    <p className="lead">
                                        <strong>Comprendre le référentiel de localisation :</strong> une documentation métier pour comprendre les subtilités autour des notions d’adresse, de parcelle cadastrale, et de points d’intérêts.
                                    </p>
                                </ListGroup.Item>
                            </ListGroup>
                        </div>
                    </article>
                    </Col>
                </Row>
            </Container>
    )
};


export default Developpeur;