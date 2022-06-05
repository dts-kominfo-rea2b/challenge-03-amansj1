// ! JANGAN DIMOFIDIKASI
const dataBelanjaan = [
  {
    id: "D-10001",
    nama: "Minyak Goreng Delima",
    harga: 25000,
    kuantitas: 2,
  },
  {
    id: "D-10020",
    nama: "Beras Mamos",
    harga: 48000,
    kuantitas: 1,
  },
  {
    id: "F-00010",
    nama: "Larutan Cap Kaki Empat",
    harga: 7500,
    kuantitas: 8,
  },
];

// boleh dimodifikasi bila ingin menggunakan deklarasi fungsi yang normal
const listBelanjaan = (data) =>
{
  let brg = [];
  let qty = [];
  let length = data.length;
  let list1 = [];

  for (i =0; i<length; i++){
    brg[i] = data[i]['nama'];
    qty[i] = data[i]['kuantitas'];
    list1[i] = "- "+brg[i]+" x "+qty[i];  
  }
  return list1;

}



// boleh dimodifikasi bila ingin menggunakan deklarasi fungsi yang normal
const totalBelanjaan = (data) =>
{
  let price = [];
  let qty = [];
  let subtotal = [];
  let gtotal = 0;
  let length = data.length;

  for (i=0; i<length;i++){
    price[i] = data[i]['harga'];
    qty[i] = data[i]['kuantitas'];
    subtotal[i]=price[i]*qty[i];
    gtotal += subtotal[i];

  }
  return gtotal;
}





// ! JANGAN DIMODIFIKASI
const main = () => {
  console.log("Selamat datang customer");

  console.log("Belanjaan Anda adalah:");
  console.log(listBelanjaan?.(dataBelanjaan)?.join("\n"));
  console.log(
    "\nTotal Belanjaan Anda adalah Rp. " + totalBelanjaan?.(dataBelanjaan)
  );
};

main();

module.exports = {
  dataBelanjaan,
  listBelanjaan,
  totalBelanjaan,
};
