$(document).ready(function(){
  var title = $("#faktaboks").text();
  $("#faktaboks").click(function(){
      $("#fakta").slideToggle();
      if($("#faktaboks").text() == title){
        $("#faktaboks").text("Skjul");
      } else {
        $("#faktaboks").text(title);
      };
  });
});

//Maps

function myMap() {
  var myLatLng = {lat: 51.0708381, lng: 20.4369631};

  var map = new google.maps.Map(document.getElementById('map'), {
    zoom: 3,
    center: myLatLng,
    styles:
    [
        {
            "featureType": "all",
            "elementType": "geometry.fill",
            "stylers": [
                {
                    "weight": "2.00"
                }
            ]
        },
        {
            "featureType": "all",
            "elementType": "geometry.stroke",
            "stylers": [
                {
                    "color": "#9c9c9c"
                }
            ]
        },
        {
            "featureType": "all",
            "elementType": "labels.text",
            "stylers": [
                {
                    "visibility": "on"
                }
            ]
        },
        {
            "featureType": "landscape",
            "elementType": "all",
            "stylers": [
                {
                    "color": "#f2f2f2"
                }
            ]
        },
        {
            "featureType": "landscape",
            "elementType": "geometry.fill",
            "stylers": [
                {
                    "color": "#ffffff"
                }
            ]
        },
        {
            "featureType": "landscape.man_made",
            "elementType": "geometry.fill",
            "stylers": [
                {
                    "color": "#ffffff"
                }
            ]
        },
        {
            "featureType": "poi",
            "elementType": "all",
            "stylers": [
                {
                    "visibility": "off"
                }
            ]
        },
        {
            "featureType": "road",
            "elementType": "all",
            "stylers": [
                {
                    "saturation": -100
                },
                {
                    "lightness": 45
                }
            ]
        },
        {
            "featureType": "road",
            "elementType": "geometry.fill",
            "stylers": [
                {
                    "color": "#eeeeee"
                }
            ]
        },
        {
            "featureType": "road",
            "elementType": "labels.text.fill",
            "stylers": [
                {
                    "color": "#7b7b7b"
                }
            ]
        },
        {
            "featureType": "road",
            "elementType": "labels.text.stroke",
            "stylers": [
                {
                    "color": "#ffffff"
                }
            ]
        },
        {
            "featureType": "road.highway",
            "elementType": "all",
            "stylers": [
                {
                    "visibility": "simplified"
                }
            ]
        },
        {
            "featureType": "road.arterial",
            "elementType": "labels.icon",
            "stylers": [
                {
                    "visibility": "off"
                }
            ]
        },
        {
            "featureType": "transit",
            "elementType": "all",
            "stylers": [
                {
                    "visibility": "off"
                }
            ]
        },
        {
            "featureType": "water",
            "elementType": "all",
            "stylers": [
                {
                    "color": "#46bcec"
                },
                {
                    "visibility": "on"
                }
            ]
        },
        {
            "featureType": "water",
            "elementType": "geometry.fill",
            "stylers": [
                {
                    "color": "#749EE3"
                }
            ]
        },
        {
            "featureType": "water",
            "elementType": "labels.text.fill",
            "stylers": [
                {
                    "color": "#070707"
                }
            ]
        },
        {
            "featureType": "water",
            "elementType": "labels.text.stroke",
            "stylers": [
                {
                    "color": "#ffffff"
                }
            ]
        }
    ]

  });

  var marker = new google.maps.Marker({
    position: {lat: 34.802075, lng: 38.996815},
    map: map,
    title: 'Starten av reisen',
    icon: {
      path: google.maps.SymbolPath.FORWARD_OPEN_ARROW,
      scale: 4
    },
    draggable: true
  });

  var marker1 = new google.maps.Marker({
    position: {lat: 60.128161, lng: 18.643501},
    map: map,
    title: 'Slutten av reisen'
  });

  var flightPlanCoordinates = [
    {lat: 34.802075, lng: 38.996815},
    {lat: 38.963745, lng: 35.243322},
    {lat: 39.074208, lng: 21.824312},
    {lat: 41.608635, lng: 21.745275},
    {lat: 44.016521, lng: 21.005859},
    {lat: 47.162494, lng: 19.503304},
    {lat: 47.497913, lng: 19.040236},
    {lat: 47.516231, lng: 14.550072},
    {lat: 51.165691, lng: 10.451526},
    {lat: 60.128161, lng: 18.643501}
  ];

  var flightPath = new google.maps.Polyline({
    path: flightPlanCoordinates,
    geodesic: true,
    strokeColor: 'green',
    strokeOpacity: 1.0,
    strokeWeight: 2
  });

  flightPath.setMap(map);
}



$(function(){  // $(document).ready shorthand
  $('#ingress').fadeIn('slow');
});

$(document).ready(function() {

  /* Every time the window is scrolled ... */
  $(window).scroll( function(){
    /* Check the location of each desired element */
    $('#ingress').each( function(i){
      var bottom_of_object = $(this).position().top + $(this).outerHeight();
      var bottom_of_window = $(window).scrollTop() + $(window).height();
      /* If the object is completely visible in the window, fade it it */
      if( bottom_of_window > bottom_of_object ){
        $(this).animate({'opacity':'1'},500);
      }
    });
  });
});

var btn = $('.btn');
btn.addEventListener("click", function(){
  btn.click(function(){
    window.location.replace('index.html');
    console.log('click');
  });
});
