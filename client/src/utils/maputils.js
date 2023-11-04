
export const fetchOverlappingTiles = async (aoi)=>{
    const aoiPolygon = aoi.layer? aoi.layer.toGeoJSON()
                                : aoi.layers.toGeoJSON().features[0];

    return fetch('/getTiles',{
            method: 'POST',
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(aoiPolygon)
        })
        .then(res => res.json())
        .catch(err=> console.log("err",err))

}