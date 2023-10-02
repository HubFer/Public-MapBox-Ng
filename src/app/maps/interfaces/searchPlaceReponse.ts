// Generated by https://quicktype.io

export interface IMapBoxResult {
    type:        string;
    query:       string[];
    features:    Feature[];
    attribution: string;
}

export interface Feature {
    id:         string;
    type:       string;
    place_type: string[];
    relevance:  number;
    properties: Properties;
    text:       string;
    place_name: string;
    bbox?:      number[];
    center:     number[];
    geometry:   Geometry;
    context:    Context[];
    price:      number;
}

export interface Context {
    id:          string;
    mapbox_id:   string;
    wikidata?:   string;
    short_code?: string;
    text:        string;
}

export interface Geometry {
    type:        string;
    coordinates: number[];
}

export interface Properties {
    mapbox_id?:  string;
    wikidata?:   string;
    short_code?: string;
    foursquare?: string;
    landmark?:   boolean;
    address?:    string;
    category?:   string;
}
