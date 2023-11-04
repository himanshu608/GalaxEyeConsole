# Console to show satellite image for a specific region.
- This is a console where User can draw the area of interest where he/she can get satellite captured image of that aoi.

# To start the console
- Clone this repo using : 
`git clone https://github.com/himanshu608/GalaxEyeConsole.git`
- Either spin up the full application using docker :
`docker-compose up --build`
- Or run the front-end and back-end indivisually
- front-end: 
  `cd client && npm i && npm run start`
- back-end
  `cd server && npm i && npm run start`

- ### Go to console pick up the shape [rectangle / polygon] from map draw options in top right corner. 
- ### Start drawing your area of interest and corresponding satellite tiles will be shown to the map.
# The console is accessible  on port: 8080


