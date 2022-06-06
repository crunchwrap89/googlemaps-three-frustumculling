const initialZoom = 18;

export const API_SETTINGS: APITYPE = {
  apiKey: "AIzaSyA6oWKb68bZZGsSCDQFLe9x0YRKEAxPhTM",
  mapIds: ["1ff166c90cc8691d", "5e99dea3f92c1f0d"],
  libraries: ["drawing"],
  region: "US",
  language: "EN",
};

export const MAP_SETTINGS = {
  tilt: 45,
  heading: 0,
  zoom: initialZoom,
  center: {
    lat: 40.776676,
    lng: -73.971321,
  },
  mapId: "5e99dea3f92c1f0d",
  disableDefaultUI: true,
  draggable: true,
  zoomControl: false,
  isFractionalZoomEnabled: false,
};

export const INITIAL_VIEWPORT = {
  center: {
    lat: 40.776676,
    lng: -73.971321,
  },
  zoom: initialZoom,
  heading: 0,
  tilt: 0,
};

export const ORIGIN = {
  lat: 40.776676,
  lng: -73.971321,
  altitude: 120,
};
