// Initialize and add the map
function initMap() {
  // The location of Uluru
  const uluru = { lat: 14.7110153, lng: 121.0559219 };
  // The map, centered at Uluru
  const map = new google.maps.Map(document.getElementById("id-map"), {
    zoom: 17,
    center: uluru,
  });
  // The marker, positioned at Uluru
  const marker = new google.maps.Marker({
    position: uluru,
    map: map,
  });
}