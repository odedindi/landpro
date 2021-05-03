import React, { useRef, useState } from "react";

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
// =================  temp stuff ================= 

import { temporalPolygon } from './experimetalPolygon';
import AnalysisTable from "./analysisTable";

// ===============================================

import { MapWrapper, SubmitPolygons } from '../../styles/mapComponent';
import { postCoordinates } from '../../helpers/fetches';

let polyColor = landCover => {
  if (landCover === 'Built-up') return "gray"; 
  if (landCover === 'Crop 1') return "yellow";
  if (landCover === 'Crop 2') return "lightblue";
  if (landCover === 'Crop 3') return "lightgreen";
  if (landCover === 'Fallow') return "lightbrown";
  if (landCover === 'Forest') return "darkgreen";
}


const LeafLetMap = () => {
  const [ position ] = useState([47.07, 8.325]);
  const [ mapMarkings, setMapMarkings ] = useState([]);
  const [ results, setResults ] = useState({});
  const [ tempCoordinates, setTempCoordinates ] = useState([])
  let zoom = 12;
  const mapRef = useRef()


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

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(mapMarkings);
    postCoordinates(mapMarkings)
    .then((response) => response.json())
      .then((data) => {
        console.log(data)
        // setResults(data)
        // let inverted = []
        // const tempFeatures = data.data.features
        // tempFeatures.forEach(feature =>{ 
        //   const tempFeature = {id: feature.properties.id, polygonName: feature.properties.land_cover, landCover: polyColor(feature.properties.land_cover) ,coordinates: feature.geometry.coordinates[0][0]};
        //   tempFeature.coordinates.forEach(coordinates => {
        //     let tempLat = coordinates[0];
        //     coordinates[0] = coordinates[1];
        //     coordinates[1] = tempLat
        //   })
        //   inverted.push(tempFeature)  
        // })
        // setTempCoordinates(inverted)
        })
  };



  return (
    <MapWrapper>
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
          <LayersControl.Overlay name="tempLayer">
          <Polygon positions={ temporalPolygon } color='black'/>
            </LayersControl.Overlay>
              {
                tempCoordinates.map(feature => 
                  <LayersControl.Overlay name={`${feature.polygonName}`}>
                        <Polygon key={feature.id} positions={ feature.coordinates } color={ feature.landCover }/>
                  </LayersControl.Overlay>
                )
              }
        </LayersControl>
      </MapContainer>

          {/* <Box elevation='medium' width='40vw' height='100%' border>
            {
              Object.entries(results).length === 0 ? 
              null
              : <AnalysisTable results={results.data}/>
            } */}
            <SubmitPolygons onClick={ handleSubmit }>Submit Polygon</SubmitPolygons>



    </MapWrapper>
  );
};

export default LeafLetMap;