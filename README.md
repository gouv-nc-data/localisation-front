# Localisation front

Ce dépôt contient les codes sources nécessaires au déploiement du front API Localisation. Il permet aux utilisateurs d'effectuer des recherches/localisations d'adresses, de POI et de lots cadastraux dont les résultats sont issus de l'api loc https://localisation.gouv.nc/api/.


## Spécificités techniques

### Générales
Ce front est essentiellement développé en React v19.2.0 avec une surcouche Typescript v5.9.3 ES11. Le build se fait à l'aide de Vite Js.

### Cartographie
La partie cartographie utilise les fonctionnalités de l'API ArcGIS Maps SDK for JavaScript JS v4.34.8 (https://developers.arcgis.com/javascript/latest/). Les fonds de plan sont directement issus de l'argis online du gouvernement (https://dtsi-sgt.maps.arcgis.com).

### UI
Des composants React Bootstrap v2.10.10 (https://react-bootstrap.netlify.app/), ainsi que react-bootstrap-typeahead v6.4.1 (https://ericgio.github.io/react-bootstrap-typeahead/) pour l'autocompletion ont été utilisés pour leur simplicité d'utilisation, d'interfaçage et leur rendu ergonomique.

## Déploiement
L'application est buildée et servie dans un container via une image node + nginx.



