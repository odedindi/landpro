// ======================== react =========================
import React, { lazy, useEffect, useState } from 'react';
// ======================== styles ========================
import * as S from '../styles/mapPage';
import 'leaflet/dist/leaflet.css';
import "leaflet-draw/dist/leaflet.draw.css";
import "leaflet-geosearch/dist/geosearch.css";
import { Col, Row } from 'antd';
// ===================== translations =====================
import { useTranslation } from 'react-i18next';
// ========================= GIS ==========================
import { FeatureGroup, LayersControl, MapContainer, Polygon } from 'react-leaflet';
import { EditControl } from "react-leaflet-draw";
import MapTiles from '../helpers/GIS/mapTiles';
import { MapLoadSearchSettings, onCreateHandler, onEditHandler, onDeleteHandler } from '../helpers/GIS/drawOnMap'
import DisplayPosition from '../helpers/GIS/displayPosition';
import { calcArea } from '../helpers/GIS/polygonAreaCalculation';

// ====================== components ======================
import { postCoordinates } from '../helpers/fetches';

const Button = lazy(() => import('../components/Button'));
// =========================================================


const MapPage = () => {
  const { t } = useTranslation();

  // map settings
  const [ zoom ] = useState(12);
  const [ position ] = useState([47.0227, 8.303]);
  const [ mapCenter, setMapCenter ] = useState(null);
  
  // go to user location
  const flyTo = () => {
    navigator.geolocation.getCurrentPosition(position => {
        const { latitude, longitude } = position.coords;        
        // console.log(latitude, longitude)
        mapCenter.flyTo([latitude, longitude], 16)
      });
}

  // user marked poylgons
  const [ mapMarkings, setMapMarkings ] = useState([]);
  const [ canSubmit, setCanSubmit ] = useState(false);
  useEffect(() => {
    mapMarkings.length > 0 ? setCanSubmit(true) : setCanSubmit(false);
  },[mapMarkings])
  // server's response
  const [ results, setResults ] = useState({ 
    originalPolygon: [], 
    responseMultiPolygon: [], 
    soil_co_estimates: [], 
    veg_co_estimates: [] 
  });
  const [ responseCoordinates, setResponseCoordinates ] = useState([])


  
  const colorByVegCO2Estimation = (vegCO2Value) => {
    if (vegCO2Value > 8) return 'darkgreen';
    if (vegCO2Value > 6) return 'lightgreen';
    if (vegCO2Value > 3) return 'darkgoldrod';
    if (vegCO2Value > 0) return 'yellow';
    if (vegCO2Value === 0) return 'lightgray';
  }
  
  const prepareResponseDataAndAddToShowList = (data) => {
    // console.log('data from the start of prepareData: ', data);
    let inverted = [];
    const flipTheCoor = (coorArray) => {
      // console.log('coorArray: ', coorArray)
      const tempArray = [];
      coorArray.forEach(set => {
        const tempSet = [];
        set.forEach((pair) => {
          // console.log('pair: ', pair, "index", index)
          tempSet.push([pair[1], pair[0]]);
        })
        tempArray.push(tempSet);
      })
      // console.log('tempArray: ', tempArray)
      return tempArray;
    }
    data.data.coordinates.forEach((set, index) =>{ 
      // console.log(set)

      const tempFeature = { 
        id: `${data.id}/${index + 1}`, 
        polygonName: colorByVegCO2Estimation(data.data.veg_co_estimates[index]), 
        landCover: colorByVegCO2Estimation(data.data.veg_co_estimates[index]),
        coordinates: flipTheCoor(set)
      };
      // console.log('tempFeature: ', tempFeature);
      inverted.push(tempFeature);
    });
    // console.log('corrected array: ', inverted)
    setResponseCoordinates(inverted);
  };

  const preparePolygonForCalcArea = (array) => {
    let temp = [];
    array.map((arr) => temp.push({latitude: arr[1], longitude: arr[0]}))
    return temp;
  }
  const prepareMultiPolygonForCalcArea = (array) => {
    let temp = [];
    array.map((arr) => temp.push(preparePolygonForCalcArea(arr[0])))
    return temp;
  }
  const handleSubmit = (event) => {
    event.preventDefault();
    // console.log(mapMarkings);
    mapMarkings.map(markings =>
      postCoordinates(markings)
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setResults({
          originalPolygon: preparePolygonForCalcArea(data.coordinates.features[0].geometry.coordinates[0]),
          responseMultiPolygon: prepareMultiPolygonForCalcArea(data.data.coordinates),
          soil_co_estimates: data.data.soil_co_estimates,
          veg_co_estimates :data.data.veg_co_estimates,
        });
        prepareResponseDataAndAddToShowList(data);
      })
    )
  };


  
  return (
      <>  

        <Row type='flex' justify='space-around' align='middle'>
          <Col lg={4} md={6} sm={8} xs={6}>
            <Button onClick={ flyTo }>{ t('demo.mapPage.toUser') }</Button>
          </Col>
          <Col lg={8} md={6} sm={8} xs={6}>
            <S.SubmitPolygons active={ canSubmit } onClick={ handleSubmit }>
              { t(`demo.mapPage.${ mapMarkings.length === 0 ? 'submitNotActive' : mapMarkings.length === 1 ? 'submitPolygon' : 'submitPolygons' }`) }
            </S.SubmitPolygons>
          </Col>
          <Col lg={10} md={8} sm={0} xs={0}>
            { 
              mapCenter && <DisplayPosition map={ mapCenter } center={ position } zoom={ zoom } /> 
            }
          </Col>
        </Row>
          <S.MapWrapper>
            <MapContainer id='map' center={ position } zoom={ zoom } whenCreated={ setMapCenter } scrollWheelZoom={ false }>
              <MapLoadSearchSettings />
              <FeatureGroup> 
                <EditControl
                  position="topright"
                  onCreated={ (event) => onCreateHandler(event, setMapMarkings) }
                  onEdited={ (event) => onEditHandler(event, setMapMarkings) }
                  onDeleted={ (event) => onDeleteHandler(event, setMapMarkings) }
                  draw={{ rectangle: false, polyline: false, circle: false, circlemarker: false, marker: false }}
                  />
              </FeatureGroup>  
              <LayersControl position="topleft">

                <MapTiles/>
              { responseCoordinates.length && responseCoordinates.map((feature) => 
                  <LayersControl.Overlay key={feature.id} name={`${feature.polygonName}`}>
                        <Polygon positions={ feature.coordinates } color={ feature.landCover }/>
                  </LayersControl.Overlay>
                )
              }
              </LayersControl>

            </MapContainer>
          </S.MapWrapper>
          { 
            results.originalPolygon.length > 0 && 
            <>
              <p> 
                <strong>Original Polygon Area:</strong>
                {
                  calcArea(results.originalPolygon)/1000000 > 0.01 ? 
                    <li>{ (calcArea(results.originalPolygon)/1000000).toFixed(3) } km^2</li>
                    : <li>{ calcArea(results.originalPolygon)/1000000 } m^2</li>
                }
              </p>               
              <p><strong>Response Multipolygon:</strong></p> 
              {
                results.responseMultiPolygon.map((subPolygon, index) => 
                  <div key={ index }>
                  
                        <li><strong>Sub-Polygon Area: </strong></li> 
                        {
                          (calcArea(subPolygon)/1000000).toFixed(3) > 0.01 ?
                          <p>{ (calcArea(subPolygon)/1000000).toFixed(3) } km^2</p>
                          : <p>{ calcArea(subPolygon)/1000000 } m^2</p>
                        }

                        Soil <strong>C</strong> Estimation: { results.soil_co_estimates[index] }
                        <br/>
                        Vegetation <strong>C</strong> Estimation: { results.veg_co_estimates[index] }
                  </div>
                )
              }
            </>
          }
    </>
  );
};

export default MapPage;
