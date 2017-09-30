# esri-problem

I am trying to use node 'request-promise' package to get JSON format response from the following endpoint:
``````
https://tiles.arcgis.com/tiles/gSP83wC6PGs7J2Yu/arcgis/rest/services/building_huayuanfang_outdoor_3d/SceneServer/layers/0
``````
However I couldn't get the meaningful response with the code in EsriMonitor.1.js. All I got was garbled text.

If I change the url to the following:
``````
https://services7.arcgis.com/gSP83wC6PGs7J2Yu/ArcGIS/rest/services/building_indoor_2D_uofc/FeatureServer/0/query?f=json&where=1%3D1&returnGeometry=true&spatialRel=esriSpatialRelIntersects&geometry=%7B%22xmin%22%3A-12705413.412494373%2C%22ymin%22%3A6636267.890582352%2C%22xmax%22%3A-12705413.131858781%2C%22ymax%22%3A6636268.171217942%2C%22spatialReference%22%3A%7B%22latestWkid%22%3A3857%2C%22wkid%22%3A102100%7D%7D&geometryType=esriGeometryEnvelope&inSR=102100&outFields=*&outSR=102100
``````
The response will be correct JSON.
