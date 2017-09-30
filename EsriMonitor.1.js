'use strict'
// Ctrl + K + C is for comment code block



// Introduce 3rd-party libs
let request = require('then-request');
let ArcGIS = require('arcgis');
let rp = require('request-promise');
let rq = require('request');

let url_spk = "https://tiles.arcgis.com/tiles/gSP83wC6PGs7J2Yu/arcgis/rest/services/building_huayuanfang_outdoor_3d/SceneServer/layers/0";
let options = {
  uri: url_spk,
  json: true
};

rp(options)
    .then(function (response) {
        debugger;
        let resp = JSON.stringify(response);
        console.log(resp);
    })
    .catch(function (err) {
        console.log(err);
    });


