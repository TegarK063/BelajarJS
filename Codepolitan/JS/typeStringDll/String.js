let namaDepan = "Tegar";
let namaBelakang = "Kusuma";

let namaLengkap = namaDepan + " " + namaBelakang;
console.log(namaLengkap); // Output: Tegar Kusuma
console.log(namaLengkap.length); // Output: 12
console.log(namaLengkap[6]);

// String Method
console.log(namaLengkap.toUpperCase()); // Output: TEGAR KUSUMA
console.log(namaLengkap.toLowerCase()); // Output: tegar kusuma

let nama = "   Tegar Kusuma   ";
console.log(nama.trim().toLowerCase()); // Output: Tegar Kusuma