//function to start the Leaflet map
function createMap(){

    //Varibles needed for running the funcation
     var mbAttr = '<a href="http://openstreetmap.org">OpenStreetMap</a> |' +' <a href="http://mapbox.com">Mapbox</a>';
    
    var apitoken = 'pk.eyJ1IjoicWF6YmVydDEiLCJhIjoiY2s4eHp2dzRmMHVtZjNubWNtd2c2NDlhNyJ9.XRQv7d8z2ciqueZ_t0m9RA' //Enter your API Token - go to 'https://www.mapbox.com/install/' to yours */
    
    var mbUrl = 'https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={token}'; //URL used for Stanard MaxBox Styles
    
    var mbStyleUrl = 'https://api.mapbox.com/styles/v1/{id}/tiles/256/{z}/{x}/{y}?access_token={token}'; //URL used for Custom MapBox Styles
    
    
    //Variables for the different basemaps
    var High_Contrast = L.tileLayer(mbStyleUrl, {id: 'qazbert1/ck8y0cdzt40781inqsiy1rghz', token: apitoken,  attribution: mbAttr});
    
    var grayscale   = L.tileLayer(mbUrl, {id: 'mapbox.light', token: apitoken, attribution: mbAttr});
    
    var dark  = L.tileLayer(mbUrl, {id: 'mapbox.dark', token: apitoken,  attribution: mbAttr});
    
    var outdoors = L.tileLayer(mbUrl, {id: 'mapbox.outdoors', token: apitoken,  attribution: mbAttr});
    
   
    
    //create the map*/
    var map = L.map('map', {
        center: [25.92, -80.25],//Coordinated to center the map
        zoom: 11, //zoom level
        layers:High_Contrast//default base
    });
   L.marker([26.011, -80.16]).addTo(map) // EDIT latitude, longitude to re-position marker
.bindPopup("Hollywood, Fl </br> My Hometown"); // EDIT pop-up text message
    //create the basemap control layer*/
    var baseLayers = {
		"Outdoors": outdoors,
        "Grayscale": grayscale,
		"Darkscale": dark,
        "High_Contrast": High_Contrast
    };
    
    L.control.layers(baseLayers).addTo(map);
}

//calling the funcation
$(document).ready(createMap);