var mymap = L.map('mapid').setView([51.505, -0.09], 13);

var geojsonFeature = {
    "type" : "FeatureCollection",
    "crs" : {
      "type" : "name",
      "properties" : {
        "name" : "EPSG:4326"
      }
    },
    "features" : [
      {
        "type" : "Feature",
        "id" : 0,
        "geometry" : {
          "type" : "Point",
          "coordinates" : [
            -81.886014416973211,
            35.365065314637675
          ]
        },
        "properties" : {
          "FID" : 0,
          "FID_1" : 1,
          "Basin" : "BRD",
          "Sq_Miles" : 1513.8948122300001,
          "Acres" : 968892.679825,
          "Name" : "Broad",
          "ORIG_FID" : 0
        }
      },
      {
        "type" : "Feature",
        "id" : 1,
        "geometry" : {
          "type" : "Point",
          "coordinates" : [
            -81.362870960814789,
            35.588186765056804
          ]
        },
        "properties" : {
          "FID" : 1,
          "FID_1" : 2,
          "Basin" : "CAT",
          "Sq_Miles" : 3285.4051448800001,
          "Acres" : 2102659.2927199998,
          "Name" : "Catawba",
          "ORIG_FID" : 1
        }
      },
      {
        "type" : "Feature",
        "id" : 2,
        "geometry" : {
          "type" : "Point",
          "coordinates" : [
            -76.983153857114303,
            36.352910483780981
          ]
        },
        "properties" : {
          "FID" : 2,
          "FID_1" : 3,
          "Basin" : "CHO",
          "Sq_Miles" : 1298.2831911200001,
          "Acres" : 830901.24231899995,
          "Name" : "Chowan",
          "ORIG_FID" : 2
        }
      },
      {
        "type" : "Feature",
        "id" : 3,
        "geometry" : {
          "type" : "Point",
          "coordinates" : [
            -78.778311149864905,
            35.209781601021909
          ]
        },
        "properties" : {
          "FID" : 3,
          "FID_1" : 4,
          "Basin" : "CPF",
          "Sq_Miles" : 9163.5949759699997,
          "Acres" : 5864700.78462,
          "Name" : "Cape Fear",
          "ORIG_FID" : 3
        }
      },
      {
        "type" : "Feature",
        "id" : 4,
        "geometry" : {
          "type" : "Point",
          "coordinates" : [
            -82.603299921844467,
            35.653142331270047
          ]
        },
        "properties" : {
          "FID" : 4,
          "FID_1" : 5,
          "Basin" : "FBR",
          "Sq_Miles" : 2828.80611649,
          "Acres" : 1810435.9145599999,
          "Name" : "French Broad",
          "ORIG_FID" : 4
        }
      },
      {
        "type" : "Feature",
        "id" : 5,
        "geometry" : {
          "type" : "Point",
          "coordinates" : [
            -83.980094113704496,
            35.10885359650311
          ]
        },
        "properties" : {
          "FID" : 5,
          "FID_1" : 6,
          "Basin" : "HIW",
          "Sq_Miles" : 644.33604328399997,
          "Acres" : 412375.06770199997,
          "Name" : "Hiwassee",
          "ORIG_FID" : 5
        }
      },
      {
        "type" : "Feature",
        "id" : 6,
        "geometry" : {
          "type" : "Point",
          "coordinates" : [
            -78.942288710222357,
            34.520328345658292
          ]
        },
        "properties" : {
          "FID" : 6,
          "FID_1" : 7,
          "Basin" : "LBR",
          "Sq_Miles" : 3329.3733686999999,
          "Acres" : 2130798.95597,
          "Name" : "Lumber",
          "ORIG_FID" : 6
        }
      },
      {
        "type" : "Feature",
        "id" : 7,
        "geometry" : {
          "type" : "Point",
          "coordinates" : [
            -83.456538671940436,
            35.327384853259069
          ]
        },
        "properties" : {
          "FID" : 7,
          "FID_1" : 8,
          "Basin" : "LTN",
          "Sq_Miles" : 1797.11209082,
          "Acres" : 1150151.73813,
          "Name" : "Little Tennessee",
          "ORIG_FID" : 7
        }
      },
      {
        "type" : "Feature",
        "id" : 8,
        "geometry" : {
          "type" : "Point",
          "coordinates" : [
            -77.822241724492102,
            35.471350741404649
          ]
        },
        "properties" : {
          "FID" : 8,
          "FID_1" : 9,
          "Basin" : "NEU",
          "Sq_Miles" : 6062.1185777500004,
          "Acres" : 3879755.8897600002,
          "Name" : "Neuse",
          "ORIG_FID" : 8
        }
      },
      {
        "type" : "Feature",
        "id" : 9,
        "geometry" : {
          "type" : "Point",
          "coordinates" : [
            -81.421204270188838,
            36.424923217613191
          ]
        },
        "properties" : {
          "FID" : 9,
          "FID_1" : 10,
          "Basin" : "NEW",
          "Sq_Miles" : 754.36068009799999,
          "Acres" : 482790.83526299999,
          "Name" : "New",
          "ORIG_FID" : 9
        }
      },
      {
        "type" : "Feature",
        "id" : 10,
        "geometry" : {
          "type" : "Point",
          "coordinates" : [
            -76.11681376948188,
            36.040901995699109
          ]
        },
        "properties" : {
          "FID" : 10,
          "FID_1" : 11,
          "Basin" : "PAS",
          "Sq_Miles" : 3366.4597307600002,
          "Acres" : 2154534.2276900001,
          "Name" : "Pasquotank",
          "ORIG_FID" : 10
        }
      },
      {
        "type" : "Feature",
        "id" : 11,
        "geometry" : {
          "type" : "Point",
          "coordinates" : [
            -78.511213876614249,
            36.285659873720959
          ]
        },
        "properties" : {
          "FID" : 11,
          "FID_1" : 12,
          "Basin" : "ROA",
          "Sq_Miles" : 3492.8599835099999,
          "Acres" : 2235430.3894400001,
          "Name" : "Roanoke",
          "ORIG_FID" : 11
        }
      },
      {
        "type" : "Feature",
        "id" : 12,
        "geometry" : {
          "type" : "Point",
          "coordinates" : [
            -83.075072448996679,
            35.071223425549604
          ]
        },
        "properties" : {
          "FID" : 12,
          "FID_1" : 13,
          "Basin" : "SAV",
          "Sq_Miles" : 171.28646239400001,
          "Acres" : 109611.03126600001,
          "Name" : "Savannah",
          "ORIG_FID" : 12
        }
      },
      {
        "type" : "Feature",
        "id" : 13,
        "geometry" : {
          "type" : "Point",
          "coordinates" : [
            -77.113794620889706,
            35.728014640599049
          ]
        },
        "properties" : {
          "FID" : 13,
          "FID_1" : 14,
          "Basin" : "TAR",
          "Sq_Miles" : 6147.5707159200001,
          "Acres" : 3934445.25819,
          "Name" : "Tar Pamlico",
          "ORIG_FID" : 13
        }
      },
      {
        "type" : "Feature",
        "id" : 14,
        "geometry" : {
          "type" : "Point",
          "coordinates" : [
            -81.835989005365434,
            36.218380409834715
          ]
        },
        "properties" : {
          "FID" : 14,
          "FID_1" : 15,
          "Basin" : "WAT",
          "Sq_Miles" : 204.77446828199999,
          "Acres" : 131055.659701,
          "Name" : "Watauga",
          "ORIG_FID" : 14
        }
      },
      {
        "type" : "Feature",
        "id" : 15,
        "geometry" : {
          "type" : "Point",
          "coordinates" : [
            -77.189530267766855,
            34.716578678529181
          ]
        },
        "properties" : {
          "FID" : 15,
          "FID_1" : 16,
          "Basin" : "WOK",
          "Sq_Miles" : 1381.5199395499999,
          "Acres" : 884172.76131099998,
          "Name" : "White Oak",
          "ORIG_FID" : 15
        }
      },
      {
        "type" : "Feature",
        "id" : 16,
        "geometry" : {
          "type" : "Point",
          "coordinates" : [
            -80.478910114450585,
            35.682404311218455
          ]
        },
        "properties" : {
          "FID" : 16,
          "FID_1" : 17,
          "Basin" : "YAD",
          "Sq_Miles" : 7220.8593455700002,
          "Acres" : 4621349.98116,
          "Name" : "Yadkin Pee Dee",
          "ORIG_FID" : 16
        }
      }
    ]
  };






L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}', {
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    id: 'mapbox/streets-v11',
    accessToken: 'pk.eyJ1IjoiY2hlcnJ5NWFubmEiLCJhIjoiY2s2bDMxeG01MGF2MjNlcGIxcmxmMjdmNCJ9.3QbLpnnphtF6QIfRLvdyeg'
}).addTo(mymap); 
L.geoJSON(geojsonFeature).addTo(mymap);


//var nc_river_points = L.map('map').setView([0, 0], 1); 
  //              L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {attribution: '&copy; <ahref="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'}).addTo(map);
    //            var CH = L.marker([35.911271, -79.049807]).addTo(map)
      //          .bindPopup('Chapel Hill')
        //        .openPopup();
          //      $.getJSON('map.geojson', function (data) {
            //        var river_points = L.geoJSON(basin).addTo(map)
              //  });
                //var myLayer = L.geoJSON().addTo(map);
                //myLayer.addData(basin);

