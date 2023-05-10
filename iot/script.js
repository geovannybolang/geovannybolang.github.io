$(document).ready(function() {
    setInterval(function() {
      $.get("https://skripsi-e4a2a-default-rtdb.firebaseio.com/Hasil_Pembacaan/suhu1.json", function(data) {
        var suhu = data[0];
        $("#suhu").text(suhu);
      });
    }, 1000); // Set interval 1 detik
  
    setInterval(function() {
      $.get("http://iot.serangkota.go.id:8080/HTDXmVIHWa2bw_JvErBjzbwKiE9tqilB/get/V3", function(data) {
        var kelembaban = data[0];
        $("#kelembaban").text(kelembaban);
      });
    }, 1000); // Set interval 1 detik
  });
  