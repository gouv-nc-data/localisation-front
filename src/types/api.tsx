
// API Responses

interface PointGeometry {
  type: "Point";
  coordinates: [number, number]; 
}

interface GeoJsonFeature {
  type: "Feature";
  geometry: PointGeometry;
  properties: AddressAttributes | PoiAttributes | CadastreAttributes;
}


export interface GeoJsonFeatureCollection {
  type: "FeatureCollection";
  features: GeoJsonFeature[];
}


//To esriJSON

interface Geometry {
  x: number;
  y: number;
}

interface AddressAttributes {
  [key: string]: string | number;
  label: string; //ok dessus
  score: number;
  housenumber: string; //ok attente
  id: string; //ok dessous
  banId: string; //ok dessous
  name: string; // commun dessus attente
  postcode: string; // ok dessus
  citycode: string; // commun dessus
  x: number;
  y: number;
  city: string; // commun dessus
  context: string; // ok attente
  type: string; // ok attente
  importance: number;
  street: string; // ok attente
  _type: string;
}

interface PoiAttributes{
  [key: string]: string | number;
  id: string, //ok dessous
  name: string, // commun dessus
  category: string, //ok attente
  type: string, //ok dessous
  citycode: string, // commun dessus
  city: string, // commun dessus
  score: number,
  _type: string
}

interface CadastreAttributes{
    [key: string]: string | number;
    id: string, //ok attente
    name: string, // commun dessus
    toponym: string, //ok attente
    category: string, //ok attente
    citycode: string, // commun dessus
    city: string, // commun dessus
    nic: string, //ok dessous
    lot: string, //ok attente
    lotissement: string,
    section: string, //ok attente
    typologie: string, // ok dessous
    surf_cad: string, //ok dessous
    score: number,
    _type: string
}

export interface Feature {
  geometry: Geometry;
  attributes: AddressAttributes | CadastreAttributes | PoiAttributes;
}

interface SpatialReference {
  wkid: number;
}

export interface esriJSON {
  spatialReference: SpatialReference;
  features: Feature[];
}

// Réponses completion


interface AddressCompletion {
  x: number;
  y: number;
  country: string;
  city: string;
  kind: string;
  zipcode?: string; 
  street?: string;  
  fulltext: string;
  classification?: number; 
}

interface PointOfInterestCompletion {
  x: number;
  y: number;
  country: string;
  names: string;
  city: string;
  poiType: string;
  kind: string;
  fulltext: string;
}

interface CadastreCompletion {
  x: number;
  y: number;
  country: string; 
  names: string;   
  city: string;    
  poiType: string; 
  street: string;  
  kind: string;    
  fulltext: string; 
}


export type Completion = AddressCompletion | PointOfInterestCompletion | CadastreCompletion