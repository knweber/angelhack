
// $.ajax({
//   method: 'GET',
//   url: 'https://firebasestorage.googleapis.com/v0/b/policewatch-109e6.appspot.com/o/policewatchdata.json?alt=media&token=7b428c5c-e1a2-48a2-b1f8-a24344d11a39',
// }).done(function(response){
//   var crimes = JSON.parse(response);
//   for (var i = 0; i < crimes.length; i++) {
//     var incident = crimes[i];
//     addMarker(incident.lat, incident.lon)
//   }
// })
//
// function addMarker(lat, lng) {
//     var marker = new google.maps.Marker({
//       position: {lat: lat, lng: lng},
//       map: map
//     })
//   };
//
// google.maps.event.addDomListener(window, 'load', initMap);
