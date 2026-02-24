import { Container, Row, Col } from "react-bootstrap";


const Mentions: React.FC = () => {
   
    return(
            <Container className="my-5 py-5">
                <Row className="justify-content-center">
                    <Col xs={12} lg={10} className="d-flex justify-content-between align-items-center gap-4">
                            <article className="d-flex flex-column gap-4">

                                {/* Titre principal */}
                                <div className="mb-4">
                                <h1 className="display-4">Mentions légales</h1>
                                </div>

                                {/* Informations éditeur */}
                                <div className="mb-4">
                                <h2 className="h3">Informations éditeur</h2>
                                <p className="lead">
                                    Éditeur : Gouvernement de la Nouvelle-Calédonie - Direction du Numérique et de la Modernisation (DINUM)
                                </p>
                                <p className="lead">
                                    Adresse : 127, rue Arnold Daly - BP M2 - 98 849 Nouméa CEDEX
                                </p>
                                <p className="lead">
                                    Adresse de courrier électronique : <a href="mailto:dinum@gouv.nc" className="fw-bold text-decoration-none">dinum@gouv.nc</a>
                                </p>
                                <p className="lead">
                                    Téléphone : +687 27 58 88 - Fax : +687 28 19 19
                                </p>
                                </div>

                                {/* Informations publication */}
                                <div className="mb-4">
                                <h2 className="h3">Informations publication</h2>
                                <p className="lead">
                                    Directeur de la publication : Monsieur Alcide Ponga, président du gouvernement de la Nouvelle-Calédonie
                                </p>
                                <p className="lead">
                                    Adresse : « Immeuble le Lys Rouge », angle des rues Galliéni et Anatole France - BP M2 - 98 849 Nouméa CEDEX
                                </p>
                                <p className="lead">
                                    Adresse de courrier électronique : <a href="mailto:pole.communication@gouv.nc" className="fw-bold text-decoration-none">pole.communication@gouv.nc</a>
                                </p>
                                <p className="lead">
                                    Téléphone : +687 24 65 65
                                </p>
                                </div>

                                {/* Réalisation, maintenance et hébergement */}
                                <div className="mb-4">
                                <h2 className="h3">Réalisation, maintenance et hébergement</h2>
                                <p className="lead">
                                    Ce site est hébergé par la Direction du Numérique et de la Modernisation (DINUM) du Gouvernement de la Nouvelle-Calédonie.
                                </p>
                                <p className="lead">
                                    127, rue Arnold Daly - BP 15101 - 98 804 NOUMEA CEDEX
                                </p>
                                <p className="lead">
                                    Téléphone : +687 27 58 88
                                </p>
                                </div>

                                {/* Propriété intellectuelle */}
                                <div className="mb-4">
                                <h2 className="h3">Propriété intellectuelle</h2>
                                <p className="lead">
                                    Sauf mention contraire, les contenus présents sur le site sont mis à disposition sous licence ouverte.
                                </p>
                                </div>

                                {/* Responsabilité */}
                                <div className="mb-4">
                                <h2 className="h3">Responsabilité</h2>
                                <p className="lead">
                                    Le Gouvernement de la Nouvelle-Calédonie s'efforce de garantir l'exactitude et l'actualisation des informations diffusées sur le site.
                                    Toutefois, certaines erreurs ou omissions peuvent subsister. <br />
                                    Les données affichées proviennent directement des organismes partenaires (ISEE, DAE, etc.). Elles sont fournies à titre indicatif et n'ont pas de valeur contractuelle.
                                </p>
                                </div>

                                {/* Liens hypertextes */}
                                <div className="mb-4">
                                <h2 className="h3">Liens hypertextes</h2>
                                <p className="lead">
                                    La présence de liens hypertextes vers d'autres sites ne saurait engager la responsabilité du Gouvernement de la Nouvelle-Calédonie quant à leur contenu.
                                </p>
                                </div>

                                {/* Données personnelles */}
                                <div className="mb-4">
                                <h2 className="h3">Protection des données personnelles</h2>
                                <p className="lead">
                                    Pour plus d’informations sur le traitement des données personnelles, veuillez consulter la page dédiée :
                                    <a href="/donnees-personnelles" className="fw-bold text-decoration-none"> Protection des données personnelles</a>.
                                </p>
                                </div>

                            </article>
                    </Col>
                </Row>
            </Container>
    )
};


export default Mentions;