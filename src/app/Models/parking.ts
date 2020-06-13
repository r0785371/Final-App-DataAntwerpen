export interface FieldAliases {
  OBJECTID: string;
  Naam: string;
  Gemeente: string;
  Postcode: string;
  Tramlijnen: string;
  Buslijnen: string;
  Longitude: string;
  Latitude: string;
}

export interface SpatialReference {
  wkid: number;
  latestWkid: number;
}

export interface Field {
  name: string;
  type: string;
  alias: string;
  length?: number;
}

export interface Attributes {
  OBJECTID: number;
  Naam: string;
  Gemeente: string;
  Postcode: number;
  Tramlijnen: string;
  Buslijnen: string;
  Longitude: number;
  Latitude: number;
}

export interface Geometry {
  x: number;
  y: number;
}

export interface Feature {
  attributes: Attributes;
  geometry: Geometry;
}

export interface RootObject {
  displayFieldName: string;
  fieldAliases: FieldAliases;
  geometryType: string;
  spatialReference: SpatialReference;
  fields: Field[];
  features: Feature[];
}
