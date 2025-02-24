const x = document.getElementById("yourlocation");

function getLocation() {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(showPosition);
  } else {
    x.innerHTML = "Geolocation is not supported by this browser.";
  }
}

function showPosition(position) {
  x.innerHTML = "Latitude: " + position.coords.latitude +
  "<br>Longitude: " + position.coords.longitude;
}

function makeCall(){
  window.open('tel:+918604821964'); 
}

    // Function to fetch and load popup content dynamically
    document.addEventListener("DOMContentLoaded", function() {
      fetch("popup.html")
      .then(response => response.text())
      .then(data => {
          document.getElementById("popup-container").innerHTML = data;
      });
  });
  
  function openPopup() {
    document.getElementById("popup").style.display = "block";
    document.getElementById("overlay").style.display = "block";
}

function closePopup() {
    document.getElementById("popup").style.display = "none";
    document.getElementById("overlay").style.display = "none";
}
