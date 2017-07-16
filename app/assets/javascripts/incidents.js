// // Place all the behaviors and hooks related to the matching controller here.
// // All this logic will automatically be available in application.js.
// (function () {
// 'use strict';
//
// var app_id = "DemoAppId01082013GAL";
// var app_code = "AJKnXv84fjrb0KIHawS0Tg";
// var host = "cit.datalens.api.here.com";
// var queries = {"query":{"fileName":"query.json","dataset":"57b42548635b42cab517d62db91ee954","id":"567f23e2902542619d849ecf0544f117"}};
//
// const {query} = queries;
//
// //initialize communication with the platform
// const platform = new H.service.Platform({
//     app_id,
//     app_code,
//     useCIT: Boolean(host.match('cit')),
//     useHTTPS: true
// });
//
// //initialize a map
// const pixelRatio = devicePixelRatio > 1 ? 2 : 1;
// const defaultLayers = platform.createDefaultLayers({tileSize: 256 * pixelRatio});
// const map = new H.Map(
//     document.getElementsByClassName('dl-map')[0],
//     defaultLayers.normal.basenight,
//     {pixelRatio}
// );
//
// window.addEventListener('resize', function() {
//     map.getViewPort().resize();
// });
//
// //make the map interactive
// new H.mapevents.Behavior(new H.mapevents.MapEvents(map));
// const ui = H.ui.UI.createDefault(map, defaultLayers);
//
// //instantiate Geo-visualization service
// const service = platform.configure(new H.datalens.Service());
//
// //set map position
// map.setCenter(new H.geo.Point(40.018338, -102.060158));
// map.setZoom(11, false);
//
// let provider = new H.datalens.QueryTileProvider(
//     service,
//     {
//         queryId: query.id,
//         tileParamNames: {x: 'x', y: 'y', z: 'z'},
//         queryParams: {
//             cluster_size: 128
//         }
//     }
// );
//
// let countScale = d3.scaleLinear()
//     .domain([0, 100])
//     .range([25, 55])
//     .clamp(true);
//
// let layer = new H.datalens.ObjectLayer(
//     provider,
//     {
//         rowToMapObject: function(row) {
//             return new H.map.Marker(
//                 {lat: row.latitude, lng: row.longitude}
//             );
//         },
//         rowToStyle: function(row) {
//             let size = countScale(row.count) * pixelRatio;
//             //Icon takes path and fit it icon size
//             let icon = H.datalens.ObjectLayer.createIcon([
//                 'svg',
//                 {
//                     viewBox: [-size, -size, size * 2, size * 2]
//                 },
//                 ['path', {
//                     d: d3.arc()({ //fill
//                         startAngle: 0,
//                         endAngle: 360,
//                         outerRadius: size
//                     }),
//                     fill: '#0092b3',
//                     fillOpacity: 0.8
//                 }],
//                 ['text', {
//                     x: 0,
//                     y: 10 * pixelRatio,
//                     fontFamily: 'sans-serif',
//                     fontWeight: 100,
//                     fontSize: 22 * pixelRatio,
//                     textAnchor: 'middle',
//                     fill: 'white'
//                 },
//                 String(row.count)]
//             ], {size: size});
//             return {icon: icon};
//         }
//     }
// );
//
// //add layer on map
// map.addLayer(layer);
//
// }());
