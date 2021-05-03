import React from "react";

// ===============================================
// =================== leaflet ===================
import "leaflet/dist/leaflet.css";
import "leaflet-draw/dist/leaflet.draw.css";

import { FeatureGroup, LayersControl, Map as MapContainer, Polygon, TileLayer} from 'react-leaflet';
import { EditControl } from "react-leaflet-draw";

// ===============================================
// ================== map tiles ================= 
import { mapTiles } from './mapTiles';
// =============================================== 



const LeafLetMap = (props) => {
  const { position, responseCoordinates, setMapMarkings, zoom } = props;

  const mapRef = React.useRef()

  const onCreateHandler = (event) => {
    const { layerType, layer } = event;
    if (layerType === 'polygon') {
      const { _leaflet_id } = layer;

      setMapMarkings(layers => [ 
        ...layers,
        { id: _leaflet_id, latlngs: layer.getLatLngs()[0] }
      ])
    }
  };
  const onEditHandler = (event) => {
    const { layers: { _layers } } = event;
    Object.values( _layers).map( ({_leaflet_id, editing}) => 
      setMapMarkings( layers => 
        layers.map( layer => 
          layer.id === _leaflet_id ? { ...layer, latlngs: { ...editing.latlngs[0] } } : layer ) )
    );

  };
  const onDeleteHandler = (event) => {
    const { layers: { _layers } } = event;
    Object.values( _layers).map( ({_leaflet_id }) => setMapMarkings( layers => layers.filter( layer => layer.id !== _leaflet_id)));
  };


  return (
      <MapContainer id='mapContainer' center={ position } zoom={ zoom } ref={ mapRef }>
        <FeatureGroup>
          <EditControl
            position="topright"
            onCreated={ onCreateHandler }
            onEdited={ onEditHandler }
            onDeleted={ onDeleteHandler }
            draw={{
              rectangle: false,
              polyline: false,
              circle: false,
              circlemarker: false,
              marker: false,
            }}
          />
        </FeatureGroup>          
        <LayersControl position="topleft">
          {
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
          }
          {
            responseCoordinates.map((feature) => 
              <LayersControl.Overlay key={feature.id} name={`${feature.polygonName}`}>
                    <Polygon positions={ feature.coordinates } color={ feature.landCover }/>
              </LayersControl.Overlay>
            )
          }
        </LayersControl>
      </MapContainer>
  );
};

export default LeafLetMap;
