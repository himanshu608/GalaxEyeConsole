const express = require('express');
const cors = require('cors');
const satData = require('./data/satData.json')
const app = express();
const {intersect} = require('@turf/turf')

app.use(cors());
app.use(express.json());

const getOverLapingTiles = (aoiPolygon)=>{
    let overlapingData = [];

    satData.features.forEach((poly)=>{
        const doesInterSect = intersect(aoiPolygon,poly);
        if(doesInterSect) {
            overlapingData.push(poly);
        }
    });

    return overlapingData;
}

app.post('/getTiles', (req, res) => {
    const overlapingTiles = getOverLapingTiles(req.body);
    res.json({ tiles: overlapingTiles });
});

app.listen(8000, () => {
    console.log(`Server is running on port 8000.`);
});