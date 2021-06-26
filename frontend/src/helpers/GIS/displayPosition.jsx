// ======================== react =========================
import React, { useCallback, useEffect, useState } from 'react';
// ======================== styles ========================
import { Col } from 'antd';
// ===================== translations =====================
import { useTranslation } from 'react-i18next';
// ========================================================

const DisplayPosition = ({ map }) => {
    const { t } = useTranslation();
    const [position, setPosition] = useState(map.getCenter())
    
    const onMove = useCallback(() => {
      setPosition(map.getCenter())
    }, [map])
  
    useEffect(() => {
      map.on('move', onMove)
      return () => {
        map.off('move', onMove)
      }
    }, [map, onMove])
  
    const divStyle = {
      display: 'flex',
      flexFlow: 'row wrap',
      justifyContent: 'space-around',
      alignItems: 'center',
      
      border: 'solid 0.5px darkgray', 
      padding: '1rem 0 0 2.5rem'

    };
    return (
      <>
        <div style={ divStyle }>
          <Col lg={10} md={10} sm={12} xs={14}>
            <p>{t('demo.mapPage.currentLocation')}</p>
          </Col>
          <Col lg={12} md={12} sm={14} xs={14}>
              <p>{ t('demo.mapPage.Latitude') }<strong>{ position.lat.toFixed(4) }</strong></p>     
              <p>{ t('demo.mapPage.Longitude') }<strong>{ position.lng.toFixed(4) }</strong></p>
          </Col>
        </div>
      </>
    );
};

export default DisplayPosition;
