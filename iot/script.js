$(document).ready(function() {
  setInterval(function() {
      $.get("https://skripsi-e4a2a-default-rtdb.firebaseio.com/Hasil_Pembacaan/temperature.json", function(data) {
          var suhu = "";
          for (var i = 0; i < data.length; i++) {
              suhu += data[i];
          }
          $("#suhu").text(suhu);
      });
  }, 1000);
    }, 1000); // Set interval 1 detik
    setInterval(function() {
      $.get("https://skripsi-e4a2a-default-rtdb.firebaseio.com/Result/humidity.json", function(data) {
          var humidity = "";
          for (var i = 0; i < data.length; i++) {
              gas += data[i];
          }
          $("#humidity").text(humidity);
      });
    }, 1000); // Set interval 1 detik
  });
  