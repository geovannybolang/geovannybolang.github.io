$(document).ready(function() {
  setInterval(function() {
      $.get("https://skripsi-e4a2a-default-rtdb.firebaseio.com/Hasil_Pembacaan/suhu1.json", function(data) {
          var suhu = "";
          for (var i = 0; i < data.length; i++) {
              suhu += data[i];
          }
          $("#suhu").text(suhu);
      });
  }, 1000);
    setInterval(function() {
      $.get("https://skripsi-e4a2a-default-rtdb.firebaseio.com/Hasil_Pembacaan/gas1.json", function(data) {
          var gas = "";
          for (var i = 0; i < data.length; i++) {
              gas += data[i];
          }
          $("#gas").text(gas);
      });
    }, 1000); // Set interval 1 detik
  });
  