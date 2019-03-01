
'use strict'        // let the browser know we're serious

// debug statement letting us know the file is loaded
console.log('Loaded map.js')

// your mapbox token
mapboxgl.accessToken = 'pk.eyJ1IjoiYWVzdGVmYW0iLCJhIjoiY2pza214NHVsMmJtbzQ0czdzazQ3OTUzayJ9.aN7d8MlCodcKoa4mXDc-aw'
let map = new mapboxgl.Map({
    container: 'map',
    style: 'mapbox://styles/mapbox/satellite-v9',
    center: [-46.656736,-23.605342],
    zoom: 12


    })

// create an instance of NavigationControl
let navigation = new mapboxgl.NavigationControl({
    showCompass: false
})

// add the navigation to your map
map.addControl(navigation, 'top-left')

// create an instance of ScaleControl
let scale = new mapboxgl.ScaleControl({
    maxWidth: 80,
    unit: 'imperial'
})

// add the scale to your map
map.addControl(scale, 'bottom-right')
let geolocate = new mapboxgl.GeolocateControl({
    positionOptions: {
        enableHighAccuracy: true
    },
    trackUserLocation: true,
    showUserLocation: true,
    fitBoundsOptions: {
    }
})

map.addControl(geolocate, 'top-left')
geolocate.on('geolocate', function(event) {
   console.log(event.coords)
    // create new variables to store the attributes we're interested in from the event
    let lng = event.coords.longitude
    let lat = event.coords.latitude


    // debug
    console.log('geolocated:', lng, lat)

    // format lng lat values and display them on our 'info' element
    document.getElementById('info').innerHTML = lng.toFixed(5) + "," + lat.toFixed(5)
})

// Marcador0
// this is an event handler
let marker = new mapboxgl.Marker()
marker.setLngLat([ -46.65673,-23.60534])
marker.addTo(map)
    
let popup = new mapboxgl.Popup()
popup.setHTML('This is the apartment I lived from 1992 to 2018<br /><img src="http://www.imovelguide.com.br/images/fachada-lateral-grand-palais-moema-condominio-edificio.jpeg" />')
marker.setPopup(popup)

// Marcador1 - First Apartment
let marker1 = new mapboxgl.Marker()
marker1.setLngLat( [-46.69185,-23.63451])
marker1.addTo(map)

let popup1 = new mapboxgl.Popup()
popup1.setHTML('This is the fisrt apartment I lived (1988 to 1991) <br /><img src="https://cdn.123i.com.br/photo/catalog/large/frontphoto/09/50/0950ba6872d02c349a2d51a63ce4a929/0950ba6872d02c349a2d51a63ce4a929.jpg" />')
marker1.setPopup(popup1)

// Marcador2 - Hospital I was born
let marker2 = new mapboxgl.Marker()
marker2.setLngLat( [-46.71522,-23.60006])
marker2.addTo(map)

let popup2 = new mapboxgl.Popup()
popup2.setHTML('This is the Hospital I was born in 1988<br /><img src="https://s3.amazonaws.com/assets.medtrip.com/media/institutions/5695f363d0a4d.jpg" />')
marker2.setPopup(popup2)

// Marcador3 - School I went
let marker3 = new mapboxgl.Marker()
marker3.setLngLat( [-46.64371,-23.57746])
marker3.addTo(map)

let popup3 = new mapboxgl.Popup()
popup3.setHTML('This is the school I went from 1999 to 2005<br /><img src="https://abrilveja.files.wordpress.com/2018/04/brasil-colegio-bandeirantes-sp-20070607-001.jpg" />')
marker3.setPopup(popup3)

// Marcador4 - Undergrad
let marker4 = new mapboxgl.Marker()
marker4.setLngLat( [-46.73016,-23.56008])
marker4.addTo(map)

let popup4 = new mapboxgl.Popup()
popup4.setHTML('This is my Alma Mater (2006 to 2011) <br /><img src="https://i.ytimg.com/vi/8CYPOiJp2_I/maxresdefault.jpg" />')
marker4.setPopup(popup4)

})
