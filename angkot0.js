// ini adalah pengulangan while
//  var jumlAngkot = 10
// var noAngkot = 1
// while (noAngkot <= jumlAngkot) {
//   console.log("Angkot No. " + noAngkot + "beroperasi dengan baik")
//   noAngkot++
// }

// pengulangan for
// for (var nilaiAwal = 1; nilaiAwal <= 10; nilaiAwal++) {
//   console.log("Halo" + nilaiAwal + "pengunjung")
// }

var jumlAngkot = 10
var angkotBeroperasi = 6

for (var noAngkot = 1; noAngkot <= jumlAngkot; noAngkot++) {
  if (noAngkot <= 6 && noAngkot !== 5) {
    console.log("Angkot No. " + noAngkot + " sedang beroperasi")
  } else if (noAngkot === 8 || noAngkot === 10 || noAngkot === 5) {
    console.log("Angkot No. " + noAngkot + " sedang lembur")
  } else {
    console.log("Angkot No. " + noAngkot + " sedang tidak beroperasi")
  }
}
