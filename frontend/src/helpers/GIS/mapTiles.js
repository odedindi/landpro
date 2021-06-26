import { LayersControl, TileLayer } from 'react-leaflet';

export const mapTiles = [
  {
    name: 'OpenStreetMap',
    attribution: '&copy <a href="http://osm.org/copyright">OpenStreetMap</a> contributors',
    url: 'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png'
  },
  {
    name: 'ESRI - World Topo Map',
    attribution: '&copy <a href="https://services.arcgisonline.com/ArcGIS/rest/services/World_Topo_Map/MapServer">Esri</a>',
    url: 'https://server.arcgisonline.com/ArcGIS/rest/services/World_Topo_Map/MapServer/tile/{z}/{y}/{x}'
  },
  {
    name: 'ESRI - World Imagery',
    attribution: '&copy <a href="https://services.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer">Esri</a>',
    url: 'https://services.arcgisonline.com/arcgis/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}'
  },
  {
    name: 'OpenTopoMap',
    attribution: '&copy <a href="https://opentopomap.org">OpenTopoMap</a>',
    url: 'https://tile.opentopomap.org/{z}/{x}/{y}.png'
  },
  {
    name: 'GoogleMaps Terrain',
    attribution: '&copy <a href="https://about.google/brand-resource-center/products-and-services/geo-guidelines/#google-earth">GoogleMaps</a> Data 2021',
    url: 'http://mt0.google.com/vt/lyrs=p&hl=en&x={x}&y={y}&z={z}'
  },
  {
    name: 'GoogleMaps Sattelite',
    attribution: '&copy <a href="https://about.google/brand-resource-center/products-and-services/geo-guidelines/#google-earth">GoogleMaps</a> Data 2021',
    url: 'http://mt0.google.com/vt/lyrs=s&hl=en&x={x}&y={y}&z={z}'
  },
];

const MapTiles = () => (
  mapTiles.map((tile, index) => {
    return (
      !index ? 
        <LayersControl.BaseLayer key={ index } checked name={`${ tile.name }`}>
          <TileLayer attribution={`${ tile.attribution }`} url={`${ tile.url }`}/>
        </LayersControl.BaseLayer>
      : <LayersControl.BaseLayer key={ index } name={`${ tile.name }`}>
          <TileLayer attribution={`${ tile.attribution }`} url={`${ tile.url }`}/>
        </LayersControl.BaseLayer>
    )
  })
);
export default MapTiles;
