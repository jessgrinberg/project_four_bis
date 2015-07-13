$(document).ready(function() {

  console.log("hello there jess")
});


// function getLocation() {
//     if (navigator.geolocation) {
//         navigator.geolocation.getCurrentPosition(showPosition);
//     } else {
//         x.innerHTML = "Geolocation is not supported by this browser.";
//     }
// }
// function showPosition(position) {
//     x.innerHTML = "Latitude: " + position.coords.latitude + 
//     "<br>Longitude: " + position.coords.longitude; 
// }

/////////////////////////////////
////trying to the ip address of the user to zoom the map based on its IP
// var longitude, latitude;
// $.getJSON("http://ip-api.com/json/?callback=?", function(data) {
        
//     latitude = data.lat;
//     longitude = data.lon;
// });

//     console.log(latitude);
//     console.log(longitude);

/////////////////////////////////

// The init function needs to run on load
google.maps.event.addDomListener(window, 'load', initialize_my_map)
google.maps.event.addDomListener(window, 'page:load', initialize_my_map)
console.log("work?")
// Define a function that should be ran on load (yay function hoisting)
function initialize_my_map() {

    // Find the map DIV (if it exists)
    var el = document.getElementById('address-map')
console.log("work 1?")
    // Bail out if there's not an address map on the page
    if(!el) return
console.log("work 1?")
    // Get an instance of the geocoder
    var geocoder = new google.maps.Geocoder()

    // Get the page's marker data from the JSON API
    var url = window.location.origin + window.location.pathname + ".json"

    // Ajax the data URL (this retrieves the contents of that JSON url above)
    $.get(url, function(results){

        console.log("Data returned from " + url, results)

        // Wrap the data in an array if it's not one already
        if(!(results instanceof Array)) results = [results]

        // Perform geocoding for all addresses using promises to coordinate the results
        var geo_promises = []

        // Geocode each address to be displayed
        // Realistically, this should be done in the Model when data is saved
        for(var i = 0; i < results.length; i++){

            // This creates promises using the jQuery Deferred library
            var promise = $.Deferred(function(deferred){
                geocoder.geocode({'address': results[i].address}, function(geo_results, status){
                    deferred.resolve(geo_results)
                })
            })
            geo_promises.push(promise)

        }

   // Dispatch the promises
        Promise.all(geo_promises).then(function(promise_results){
            
            // Create a map
            // these are the map options
            var mapProps = {
                mapTypeId: google.maps.MapTypeId.ROADMAP,
                zoom: 10
                // center: new google.maps.LatLng(59.09,-89.3617)
                // center: { lat: -10.397, lng: 100.644}
            }
            var map = new google.maps.Map(el, mapProps)

            // Bounds are cool because they center our map for us
             var bounds = new google.maps.LatLngBounds()

            // Track an array of our markers
            var markers = []

            // Loop over the promise results
            for(var i = 0; i < promise_results.length; i++){

                var promise_result = promise_results[i][0]

                // result now represents a single geocoded address
                var coord = promise_result.geometry.location

                // Create and place a marker
                var marker = new google.maps.Marker({position: coord})
                marker.setMap(map)
                markers.push(marker)

                // Add the coordinates to the bounds (so we can center the map)
                 bounds.extend(coord)

                // Create an info window
                var infowindow = new google.maps.InfoWindow({
                    content: "<h1>" + results[i].organization + "</h1>" + promise_result.formatted_address
                })

                // Open it above the marker
                infowindow.open(map, markers[i])

            }

            // Center and fit the map using the bounds
              map.fitBounds(bounds)

        })

    })

}
