import type { esriJSON, GeoJsonFeatureCollection } from '../types/api';




export function geoJsonToEsriJson(geoJson: GeoJsonFeatureCollection) {

  if (geoJson.type !== "FeatureCollection") {
    throw new Error("Le GeoJSON doit être une FeatureCollection.");
  }

  const esriJson: esriJSON = {
    spatialReference: { wkid: 4326 }, 
    features: []
  };

  geoJson.features.forEach(feature => {
    if (feature.geometry.type !== "Point") {
      throw new Error("Seuls les points sont supportés par cette fonction.");
    }

    const esriFeature = {
      geometry: {
        x: feature.geometry.coordinates[0], 
        y: feature.geometry.coordinates[1], 
      },
      attributes: feature.properties
    };

    esriJson.features.push(esriFeature);
  });

  return esriJson;
}