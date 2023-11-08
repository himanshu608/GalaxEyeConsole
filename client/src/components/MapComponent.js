import { MapContainer, TileLayer, GeoJSON, FeatureGroup } from 'react-leaflet'
import 'leaflet/dist/leaflet.css';
import 'leaflet-draw/dist/leaflet.draw.css'
import {EditControl} from 'react-leaflet-draw'
import { useRef, useState } from 'react';
import { fetchOverlappingTiles } from '../utils/maputils';


const MapComponent = () => {
    const [overlapingTilesData,setOverlapingTilesData] = useState({type: "FeatureCollection",
    features: [
        
    ]})
    const map = useRef();

    // loading state to update interSecting Tiles
    const [isLoading,setIsloading] = useState(true);

    // function to show Intersecting Tiles
    const handleCreated = async (aoi)=>{
        setIsloading(true);
        fetchOverlappingTiles(aoi)
        .then(data=>{
            setOverlapingTilesData((prev)=>({
                ...overlapingTilesData,
                ...overlapingTilesData.features = [
                    ...prev.features,
                    ...data.tile
                ]
                
            }))
            setIsloading(false);
        })
        .catch(err => console.log("error occured: ",err))
    }
    const editControlDrawProps = {
        circle: false,
        circlemarker: false,
        marker: false,
        polyline: false
    }

  return (
    <MapContainer center={[15,78]} zoom={6} scrollWheelZoom={true} ref={map} >
        <TileLayer 
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <FeatureGroup >
            <EditControl 
                position='topright' 
                onCreated={handleCreated} 
                onEdited={handleCreated}
                onDrawStart={()=>setIsloading(true)}
                draw={editControlDrawProps}
                onDeleted={()=>{setOverlapingTilesData({}); setIsloading(true)}}
            />
        </FeatureGroup>
        {!isLoading && <GeoJSON  data={overlapingTilesData.features} style={{color:'red'}} />}
    </MapContainer>
  )
}

export default MapComponent;