import { Container, Row, Col, ListGroup } from "react-bootstrap";


const Contact: React.FC = () => {
   
    return(
           <Container className="my-5 py-5">
                <Row className="justify-content-center">
                    <Col xs={12} lg={10} className="d-flex justify-content-between align-items-center gap-4">
                    <article className="d-flex flex-column gap-4">
                        <div className="mb-4">
                            <h1 className="display-4">Contact</h1>
                            <p className="lead">
                                Une question, une suggestion ou une anomalie à nous signaler ? Vos retours sont essentiels pour nous améliorer.
                            </p>
                            <p className="lead">
                                Vous pouvez nous écrire directement à l'adresse suivante : <a href="data@gouv.nc">data@gouv.nc</a>                                
                            </p>
                        </div>

                        <div className="mb-4">
                            <h2 className="h3">Pourquoi nous contacter ?</h2>
                            <p className="lead">
                                Afin de traiter au mieux votre demande, n'hésitez pas à préciser l'objet de votre démarche :
                            </p>
                            <ListGroup variant="flush" as="ul" className="ms-3">
                                <ListGroup.Item as="li" className="border-0 p-0 pb-2">
                                    <p className="lead">
                                        <strong>Signaler une anomalie :</strong> une adresse est mal positionnée, un nom de rue est incorrect ou une voie est manquante sur la carte.
                                    </p>
                                </ListGroup.Item>
                                <ListGroup.Item as="li" className="border-0 p-0 pb-2">
                                    <p className="lead">
                                        <strong>Améliorer l'outil :</strong> vous avez une suggestion pour rendre l'interface plus simple ou plus ergonomique.
                                    </p>
                                </ListGroup.Item>
                                <ListGroup.Item as="li" className="border-0 p-0 pb-2">
                                    <p className="lead">
                                        <strong>Usage professionnel :</strong> vous êtes un développeur ou une entreprise et vous avez besoin d'aide pour intégrer ces données dans vos applications.
                                    </p>
                                </ListGroup.Item>
                                <ListGroup.Item as="li" className="border-0 p-0 pb-2">
                                    <p className="lead">
                                        <strong>Partage de données :</strong> vous produisez des données géographiques et souhaitez contribuer à l'enrichissement du référentiel territorial.
                                    </p>
                                </ListGroup.Item>
                            </ListGroup>
                            <p className="lead">
                                💡 <strong>Conseil pour le signalement :</strong> si votre message concerne une erreur sur la carte, n'oubliez pas de nous joindre une capture d'écran ou les coordonnées géographiques (latitude, longitude) pour nous aider à localiser précisément le point concerné.
                            </p>


                        </div>
                    </article>
                    </Col>
                </Row>
            </Container>
    )
};


export default Contact;