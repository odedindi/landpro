import React, { useState } from 'react';

// ============= styles & components =============
import 'bootstrap/dist/css/bootstrap.min.css';
import { HomePageWrapper, MapWrapper, SubmitPolygons } from '../styles/homePage';

import LeafLetMap from '../components/mapComponent/leafletMap';
import AnalysisTable from "../components/mapComponent/analysisTable";
// ===============================================
// ================== backend ====================
import { postCoordinates } from '../helpers/fetches';
import { DataTable } from '../components/dataTable';
import { data } from '../components/dataTable/tempData';
// ===============================================


const HomePage = () => {

  const [ position ] = useState([47.07, 8.325]);
  const [ zoom ] = useState(12);
  const [ mapMarkings, setMapMarkings ] = useState([]);
  const [ results, setResults ] = useState({});
  const [ responseCoordinates, setResponseCoordinates ] = useState([])

  const polyColor = (landCover) => {
    switch(landCover) {
      case 'Build-up': return 'darkgray';
      case 'Crop 1': return 'yellow';
      case 'Crop 2': return 'lightblue';
      case 'Crop 3': return 'lightgreen';
      case 'Fallow': return 'lightbrown';
      case 'Forest': return 'darkgreen';
      default: return 'lightgray';
    };
  };
  
  const prepareData = (data) => {
    let inverted = [];
    data.data.features.forEach((feature) =>{ 
      const tempFeature = { 
        id: feature.properties.id, 
        polygonName: feature.properties.land_cover, 
        landCover: polyColor(feature.properties.land_cover),
        coordinates: feature.geometry.coordinates[0][0]
      };
      tempFeature.coordinates.forEach((coordinates) => {
        let tempLat = coordinates[0];
        coordinates[0] = coordinates[1];
        coordinates[1] = tempLat;
      });
      inverted.push(tempFeature);
    });
    setResponseCoordinates(inverted);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(mapMarkings);
    postCoordinates(mapMarkings)
    .then((response) => response.json())
    .then((data) => {
      // console.log(data);
      setResults(data);
      prepareData(data);
    });
  };

  return (
    <>
        <HomePageWrapper>
          
          <MapWrapper>
            <LeafLetMap 
              position={ position } 
              zoom={ zoom }
              setMapMarkings={ setMapMarkings }
              responseCoordinates={ responseCoordinates }
            />
            <SubmitPolygons onClick={ handleSubmit }>Submit Polygon</SubmitPolygons>
          </MapWrapper>

          {
            Object.entries(results).length === 0 ? null
            : <AnalysisTable results={ results.data }/>
          }

          {/* <div style={{ height: '30em', width: '100%', alignSelf: 'center'}}>
            <DataTable data={data} />
          </div> */}
        </HomePageWrapper>
    </>
  );
};

export default HomePage;
