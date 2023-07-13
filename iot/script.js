$(document).ready(function() {
  fetchDataFromFirebase();
  setInterval(fetchDataFromFirebase, 5000);
});

function fetchDataFromFirebase() {
  $.ajax({
    url: "https://skripsi-e4a2a-default-rtdb.firebaseio.com/Result.json",
    method: "GET",
    success: function(response) {
      $("#suhu").text(response.temperature);
      $("#humidity").text(response.humidity);
    },
    error: function(error) {
      console.log("Error fetching data from Firebase:", error);
    }
  });
}
