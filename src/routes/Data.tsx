import { Container, Row, Col, ListGroup } from "react-bootstrap";


const Data: React.FC = () => {
   
    return(
        <>
           <Container className="my-5 py-5">
                <Row className="justify-content-center">
                    <Col xs={12} lg={10} className="d-flex justify-content-between align-items-center gap-4">
                    <article className="flex-column gap-4">
                        <div className="mb-4">
                            <h1 className="display-4">Données personnelles</h1>
                        </div>

                        <div className="mb-4">
                            <h2 className="h3">Protection des données personnelles</h2>
                            <p className="lead">
                                L’annuaire des entreprises est un traitement de données personnelles géré par le Gouvernement de la Nouvelle-Calédonie, visant à mettre à disposition des usagers un service numérique regroupant et diffusant les informations légales publiques des entreprises et des travailleurs indépendants.
                                Le Gouvernement de la Nouvelle-Calédonie s'engage à ce que le présent traitement soit conforme au Règlement Général sur la Protection des Données (RGPD) et à la loi Informatique et Libertés, tels que rendus applicables en Nouvelle-Calédonie.
                            </p>
                        </div>

                        <div className="mb-4">
                            <h2 className="h3">Objet du traitement de données</h2>
                            <p className="lead">
                                Le présent traitement a pour finalité d’agréger et diffuser les informations légales publiques des entreprises en Nouvelle-Calédonie.
                            </p>
                        </div>

                        <div className="mb-4">
                            <h2 className="h3">Données traitées</h2>
                            <p className="lead">
                                Catégories de données traitées :
                            </p>
                            <ListGroup variant="flush" as="ul" className="ms-3">
                                <ListGroup.Item as="li" className="border-0 p-0 pb-2">
                                <p className="lead">
                                    Données relatives aux dirigeants des entreprises et des travailleurs indépendants : nom, prénom, adresse personnelle.
                                </p>
                                </ListGroup.Item>
                            </ListGroup>
                        </div>

                        <div className="mb-4">
                            <h2 className="h3">Source des données</h2>
                            <p className="lead">
                               Les données sont collectées via les services suivants : ISEE, DAE, xx.
                            </p>
                        </div>

                        <div className="mb-4">
                            <h2 className="h3">Base légale</h2>
                            <p className="lead">
                                L’annuaire des entreprises traite des données à caractère personnel en se basant sur :
                            </p>
                            <ListGroup variant="flush" as="ul" className="ms-3">
                                <ListGroup.Item as="li" className="border-0 p-0 pb-2">
                                <p className="lead">
                                    L’exécution d’une mission d’intérêt public ou relevant de l’exercice de l’autorité publique dont est investi le responsable de traitement, au sens de l’article 6-1 e) du RGPD.
                                </p>
                                </ListGroup.Item>
                            </ListGroup>
                            <p className="lead">
                                Cette mission d’intérêt public se traduit en pratique par le V. de l’article 4 de l’arrêté n° 2020-2245/GNC portant organisation et fonctionnement de la direction du numérique et de la modernisation (DINUM).
                            </p>
                        </div>

                        <div className="mb-4">
                            <h2 className="h3">Durée de conservation des données</h2>
                            <p className="lead">
                               Données relatives aux dirigeants des entreprises et des travailleurs indépendants : jusqu’à 10 ans suivant la cessation de l’activité de l’entreprise.
                            </p>
                        </div>

                        <div className="mb-4">
                            <h2 className="h3">Comment garantissons-nous la sécurité de vos données ?</h2>
                            <p className="lead">
                               Compte tenu de l’évolution des technologies, des coûts de mise en œuvre, de la nature des données à protéger ainsi que des risques pour les droits et libertés des personnes, le Gouvernement de la Nouvelle-Calédonie met en œuvre les mesures techniques et organisationnelles appropriées afin de garantir la confidentialité des données personnelles avec un niveau de sécurité adapté au risque.
                            </p>
                        </div>

                        <div className="mb-4">
                            <h2 className="h3">Droits sur les données vous concernant</h2>
                            <p className="lead">
                               Vous disposez d’un droit d’information et d’un droit d’accès à vos données, d’un droit de rectification, d’un droit d’opposition et d’un droit à la limitation du traitement.
                               Pour exercer vos droits, vous pouvez contacter le délégué à la protection des données (DPO) du Gouvernement de la Nouvelle-Calédonie :
                            </p>
                            <p className="lead">
                                Par voie postale : Délégué à la protection des données (DPO) Immeuble le Lys Rouge, angle des rues Galliéni et Anatole France BP M2 - 98849 Nouméa CEDEX
                            </p>
                            <p className="lead">
                                Par mail : <a href="donneespersonnelles@gouv.nc">donneespersonnelles@gouv.nc</a>
                            </p>
                            <p className="lead">
                                Conformément au RGPD, vous disposez également du droit d’introduire une réclamation auprès de la CNIL (3 place de Fontenoy – TSA 80715 – 75334 PARIS CEDEX 07). Les modalités de réclamation sont précisées sur le site de la CNIL : <a href="www.cnil.fr">www.cnil.fr</a>.
                            </p>
                        </div>
                    </article>
                    </Col>
                </Row>
            </Container>
        </>
    )
};


export default Data;