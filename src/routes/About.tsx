import { Container, Row, Col, Image } from "react-bootstrap";


const About: React.FC = () => {
   
    return(
        <>
           <Container className="my-5 py-5">
                <Row className="justify-content-center">
                    <Col xs={12} lg={10} className="d-flex justify-content-between align-items-center gap-4">
                    <article className="d-flex flex-column gap-4">
                        <div className="mb-4">
                            <h1 className="display-4">A propos</h1>
                        </div>

                        <div className="mb-4">
                            <h2 className="h3">Qu'est-ce que ce portail ?</h2>
                            <p className="lead">
                                Ce site est l’outil officiel de visualisation et d’exploration du référentiel de localisation de la Nouvelle-Calédonie.
                            </p>
                            <p className="lead">
                            Nous mettons à disposition cette interface pour permettre à tous — citoyens, entreprises et acteurs publics — de consulter la donnée géographique de référence sur l'ensemble du territoire.
                            </p>
                            <p className="lead">
                            Toutes les données du référentiel de localisation proviennent des partenaires, et sont centralisées pour garantir une source de vérité unique et cohérente pour toute la Nouvelle-Calédonie. 
                            </p>
                        </div>

                        <div className="mb-4">
                            <h2 className="h3">Qui sommes-nous ?</h2>
                            <p className="lead">
                            Ce service est porté par le gouvernement de la Nouvelle-Calédonie (Direction du Numérique et de la Modernisation). Il s'inscrit dans une volonté de modernisation de l'action publique.
                            </p>
                        </div>

                        <div className="mb-4">
                            <h2 className="h3">Partenaires</h2>
                            <Row className="align-items-center justify-content-center">
                                <Col xs={4} md={2} className="text-center">
                                <Image src="logo_dittt.svg" fluid />
                                </Col>
                                <Col xs={4} md={2} className="text-center">
                                <Image src="logo-georep.png" fluid />
                                </Col>
                                <Col xs={4} md={2} className="text-center">
                                <Image src="logo-serail.png" fluid />
                                </Col>
                            </Row>
                        </div>
                    </article>
                    </Col>
                </Row>
            </Container>
        </>
    )
};


export default About;