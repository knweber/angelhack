


var url = "https://datalens.api.here.com/v1/sign_in?" +
      $.param({"app_id": app_id, "app_code": app_code});

// Send a request and define a success callback to retrieve
// the access token:
var email = 'kris.weber.1994@gmail.com'
var password = 'Brewers2016'
$.ajax({
  type: "POST",
  url: url,
  data: {'email': email, 'password': password},
  success: function (data) {
    access_token = "oS-X_7rwLnsnXRDuZAXmaT9y3hA2GnDktSTjMmtVlhCBGfL4b8x4KCqZRqOW5t7UD_ua1J909hxEsPG5etYABr3X9_c41a0Rn2RVg64U4mLRfJD3FQEIhuPnDDr4eTP4Rfh47iAOlHPmnA1E6pJSxswV5VFU7UCTKfvhgCqejotbLmI_34RdoLsjYHpY4j71yQyhXJBlFUoIei33ufHJ1Xh4u1bR4B2BI8FnSS9jD9CT2grm7yX8RwgFiuyDbJ38TVNCA3wT28c68YjgCMiSLUdBUegQ4qaP4GwdlVkOyNO_5LgDMVthXZ0y7k6fKOdndwp8z-wmrmweEdFP6BvqE1frlcoTmcVdiwSdHUFs2h4nOu5ggPBaciJv5Ioe7nQcwc9wKuSf5CCafrabFwl-xdHXC3OKiwDdFQcRnpe1WgiU4nY4GqfcOkh0NTf7Y4AtCi0rw5XkMn5qKCsWwBU_RPz6nLbqtXgadgVYdh9lVtSmfVewaX4xAYHTDdSkh_LUIi87bROs0Gh3KYtpaFEducL3BgaanvHMGl12mfbW5qPizpiTASKX1HZ9rAKpkoKigBkYgN_Qf84bjkC8etBaXhkOvNKfWl6ieFM3VPjHxMZQinxaRfOguoXZVDe7xABZ8ZEh-V67HuQPnQE8eIl609-LToe8_OtP9KCOIap8pLkfbsCyhz7CmX1LCwoN-t0nsJsauY8MyMUfrEVtuD7u-jHDH-VM7foDQk4_zq1Ug6TQXkGEFKPDlDhb2SxbWdoWUgFPbZN_InQ0bG9frcXrkDLXRavXMCBMOXINkmdzu0Bqy2D-hKOnZ3i5z4GFT498GjRhLfxYoMtvg6tt8pBgxhmTdFvGg9Jwhn6j5GWltIakvJKDNZqmw3plV8y_8cwvGyL46tzT-YXXFJ5cDg0nO6zkBNk71H2T6kgtLzw7BStnmibGPwW96eZ06FeP53w_m8uRKiVW7PfoC3grYRTO5Vr7pPZsYudiHyhBWh9AObb3wbjeP5EHyV94TQuR51jL35jiC-F58wQQCnUZbwrS_Ufvesu0XsmUWHGYbACRZG1oKxt8SxasAiX39PXnPrNudlx3O91Bdxx7uNAekenDWCNdalHv2bhbbPhgLqJHOVqW4lMOLK70e29C1m035OIW";
    $.ajax({
      type: "GET",
      url: url,
      beforeSend: function (xhr, settings) {
        xhr.setRequestHeader('Authorization', 'Bearer ' + access_token);
      },
      success: function (data) {
        data
      }
    });
  }
});




var app_id = 'qOZLRAqisXS2lkh5Qa1x';
var app_code = 'A4O8jBu38pcEi5vsqwr9vA';
var host = "cit.datalens.api.here.com";

var platform = new H.service.Platform({
  app_id,
  app_code,
  useCIT: Boolean(host.match('cit')),
  useHTTPS: true
});
var baseLayer = platform.getMapTileService({type: 'base'}).createTileLayer(
  'maptile',
  'reduced.night',
  256,
  'png'
);

const pixelRatio = devicePixelRatio > 1 ? 2 : 1;
const defaultLayers = platform.createDefaultLayers({tileSize: 256 * pixelRatio});
var map = new H.Map(
  document.getElementsByClassName('dl-map')[0],
  defaultLayers.normal.basenight,
    {pixelRatio}
);

window.addEventListener('resize', function() {
    map.getViewPort().resize();
});

new H.mapevents.Behavior(new H.mapevents.MapEvents(map));
const ui = H.ui.UI.createDefault(map, defaultLayers);

const service = platform.configure(new H.datalens.Service());

map.setCenter(new H.geo.Point(40.018338, -98.060158));
map.setZoom(11, false);

var provider = new H.datalens.RawDataProvider({
  dataUrl: 'https://datalens.here.com/datasets/02ee643a5dce451a9a6fea86684fd546'
});

dataToFeatures: (data) => {
  let parsed = helpers.parseCSV(data);
  let features = [];
  let row = null;
  let feature = null;

  for (let i = 1, l = parsed.length; i < l; i++) {
    row = parsed[i];
    feature = {
      'type': 'Feature',
      'geometry': {
        'type': 'Point',
        'coordinates': [Number(row[14]), Number(row[15])]
      },
      'properties': {
        'name': row[1],
        'age': row[2],
        'sex': row[3],
        'race': row[4],
        'cause': row[11]
      }
    };
    features.push(feature)
  }
  return features;
},
function featuresToRows(features) {
        let rows = [], feature;
        for (let i = 0, l = features.length; i < l; i++) {
            feature = features[i];
            rows.push([{
                    lat: feature.geometry.coordinates[1],
                    lng: feature.geometry.coordinates[0]
                },
                feature.properties.name,
                feature.properties.age,
                feature.properties.sex,
                feature.properties.race,
                feature.properties.cause
            ]);
        }
        return rows;
    }

let countScale = d3.scaleLinear()
    .domain([0, 100])
    .range([25, 55])
    .clamp(true);

let layer = new H.datalens.ObjectLayer(
    provider,
    {
      rowToMapObject: function(row) {
            return new H.map.Marker(
                {lat: row.latitude, lng: row.longitude}
            );
        },
        rowToStyle: function(row) {
            let size = countScale(row.count) * pixelRatio;
            //Icon takes path and fit it icon size
            let icon = H.datalens.ObjectLayer.createIcon([
                'svg',
                {
                    viewBox: [-size, -size, size * 2, size * 2]
                },
                ['path', {
                    d: d3.arc()({ //fill
                        startAngle: 0,
                        endAngle: 360,
                        outerRadius: size
                    }),
                    fill: '#0092b3',
                    fillOpacity: 0.8
                }],
                ['text', {
                    x: 0,
                    y: 10 * pixelRatio,
                    fontFamily: 'sans-serif',
                    fontWeight: 100,
                    fontSize: 22 * pixelRatio,
                    textAnchor: 'middle',
                    fill: 'white'
                },
                String(row.count)]
            ], {size: size});
            return {icon: icon};
        }
    }
);

//add layer on map
map.addLayer(layer);

const format = d3.format('.2f');
let hoveredObject;
let infoBubble = new H.ui.InfoBubble({lat: 0, lng: 0}, {});
infoBubble.addClass('info-bubble');
infoBubble.close();
ui.addBubble(infoBubble);

map.addEventListener('pointermove', (e) => {
    if (hoveredObject && hoveredObject !== e.target) {
        infoBubble.close();
    }

    hoveredObject = e.target;
    if (hoveredObject.icon) {
        let row = hoveredObject.getData();
        if (row) {
            let name = row[1];
            let age = row[2];
            let sex = row[3];
            let race = row[4];
            let cause = row[11];

            let pos = map.screenToGeo(
                e.currentPointer.viewportX,
                e.currentPointer.viewportY);
            infoBubble.setPosition(pos);
            infoBubble.setContent(`
                <div class="info-bubble-title">${name}</div>
                <div class="info-bubble-label">
                    ${age} <br />
                    ${sex} <br />
                    ${race} <br />
                    ${cause}
                </div>`);
            infoBubble.open();
        }
    }
});
