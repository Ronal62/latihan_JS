// Contoh Penggunaan Object
const siswa = {
  nama: "Ronald",
  kelas: "XII",
  alamat: "pesawahan",
};
// console.log(siswa.nama);
console.log(siswa);

// Menghapus di akhir
const fruits1 = ["Banana", "Orange", "Apple", "Mango"];
fruits1.pop();
console.log(fruits1);

// Menambahkan di akhrir
const fruits = ["Banana", "Orange", "Apple", "Mango"];
let length = fruits.push("Kiwi");
// console.log(fruits[1]);
console.log(fruits);

// Shift = Menghapus di awal
const fruits2 = ["Banana", "Orange", "Apple", "Mango"];
fruits2.shift();
console.log(fruits2);

// UnShift = Menambah di awal
const fruits3 = ["Banana", "Orange", "Apple", "Mango"];
fruits3.unshift("Lemon");
console.log(fruits3);

// Mengubah Element
const fruits4 = ["Banana", "Orange", "Apple", "Mango"];
fruits4[0] = "Kiwi";
console.log(fruits4);

// Panjang Array JavaScript
const fruits5 = ["Banana", "Orange", "Apple", "Mango"];
fruits5[fruits5.length] = "Kiwi";
console.log(fruits5);

// Memetakan  persatu
const array1 = ["a", "b", "c"];
array1.forEach((element) => console.log(element));

//Memetakan  persatu + Menghitung setiap nilai ke
const array2 = [1, 4, 9, 16];

// Pass a function to map
const map = array2.map((x) => x * 2);

// map.forEach(element => console.log(element));
console.log(map);
