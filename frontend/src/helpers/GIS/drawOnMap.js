// ======================== react =========================
import { useEffect } from 'react';
// ======================== styles ========================
import "leaflet-geosearch/dist/geosearch.css";
// ========================= GIS ==========================
import { useMap } from 'react-leaflet';
import L from 'leaflet';
import { GeoSearchControl, OpenStreetMapProvider } from "leaflet-geosearch";
// ========================================================


export const onCreateHandler = (event, setMapMarkings) => {
    const { layerType, layer } = event;
    if (layerType === 'polygon') {
        const { _leaflet_id } = layer;

        setMapMarkings(layers => [ 
            ...layers,
            { id: _leaflet_id, latlngs: layer.getLatLngs()[0] }
        ])
    }
};
export const onEditHandler = (event, setMapMarkings) => {
    const { layers: { _layers } } = event;
    Object.values( _layers).map( ({_leaflet_id, editing}) => 
        setMapMarkings( layers => 
            layers.map( layer => 
                layer.id === _leaflet_id ? { 
                    ...layer, 
                    latlngs: { ...editing.latlngs[0] } 
                } 
                : 
                layer
            ) 
        )
    );
};

export const onDeleteHandler = (event, setMapMarkings) => {
    const { layers: { _layers } } = event;
    Object.values( _layers).map( ({_leaflet_id }) => 
        setMapMarkings( layers => 
            layers.filter( layer => 
                layer.id !== _leaflet_id)));
};

const icon = L.icon({
    iconSize: [25, 41],
    iconAnchor: [10, 41],
    popupAnchor: [2, -40],
    iconUrl: "https://unpkg.com/leaflet@1.6/dist/images/marker-icon.png",
    shadowUrl: "https://unpkg.com/leaflet@1.6/dist/images/marker-shadow.png"
});
  

export const MapLoadSearchSettings = () => {
    const map = useMap();
    setTimeout(() => { map.invalidateSize(); }, 1500);
    useEffect(() => {

        const searchControl = new GeoSearchControl({
        provider: new OpenStreetMapProvider(),
        autoComplete: true,
        autoCompleteDelay: 250,
        style: 'bar',
        maxSuggestions: 5,
        marker: {
            icon
        }
        });

        map.addControl(searchControl);

        return () => map.removeControl(searchControl);
    }, [map]);
    return null;
};
