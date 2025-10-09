let nama = "Tegar Kusuma",
mataKuliah = "Pemrograman",
nilai = 100,
hasil;

if (nilai >= 95 && nilai <= 100) {
  hasil = "A"
} else if (nilai >= 90 && nilai <= 94) {
  hasil = "AB"
} else if (nilai >= 85 && nilai <= 89) {
  hasil = "B"
} else if (nilai >= 80 && nilai <= 84) {
  hasil = "BC"
} else if (nilai >= 75 && nilai <= 79) {
  hasil = "C"
} else if (nilai >= 70 && nilai <= 74) {
  hasil = "D"
} else {
  hasil = "E"
}
console.log(`Nama ${nama} dengan Matakuliah ${mataKuliah} mendapatkan Nilai ${nilai} Keterangan ${hasil}`)