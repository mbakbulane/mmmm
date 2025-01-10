document.getElementById('formTransaksi').addEventListener('submit', function(e) {
    e.preventDefault();

    const namaTransaksi = document.getElementById('namaTransaksi').value;
    const jumlah = document.getElementById('jumlah').value;
    const kategori = document.getElementById('kategori').value;

    if (!namaTransaksi || !jumlah || !kategori) {
        alert('Semua input harus diisi!');
        return;
    }

    const tbody = document.getElementById('daftarTransaksi');
    const row = `<tr><td>${namaTransaksi}</td><td>${jumlah}</td><td>${kategori}</td></tr>`;
    tbody.innerHTML += row;

    this.reset();
});
// Ambil elemen
const formTransaksi = document.getElementById('formTransaksi');
const daftarTransaksi = document.getElementById('dataTransaksi');

// Ambil data dari localStorage
let transaksiList = JSON.parse(localStorage.getItem('transaksiList')) || [];

// Fungsi untuk menambahkan transaksi ke tabel
function tambahKeTabel(transaksi) {
    const row = `<tr>
                    <td>${transaksi.namaTransaksi}</td>
                    <td>${transaksi.jumlah}</td>
                    <td>${transaksi.kategori}</td>
                 </tr>`;
    daftarTransaksi.innerHTML += row;
}

// Muat data awal ke tabel
transaksiList.forEach(tambahKeTabel);

// Simpan transaksi baru
formTransaksi.addEventListener('submit', function(e) {
    e.preventDefault();

    const namaTransaksi = document.getElementById('namaTransaksi').value;
    const jumlah = document.getElementById('jumlah').value;
    const kategori = document.getElementById('kategori').value;

    if (!namaTransaksi || !jumlah || !kategori) {
        alert('Semua input harus diisi!');
        return;
    }

    const transaksiBaru = { namaTransaksi, jumlah, kategori };
    transaksiList.push(transaksiBaru);
    localStorage.setItem('transaksiList', JSON.stringify(transaksiList));

    tambahKeTabel(transaksiBaru);
    formTransaksi.reset();
});
// Daftar barang
const barangList = [
    { nama: "Meja", kategori: "Perabotan" },
    { nama: "Kursi", kategori: "Perabotan" },
    { nama: "Nasi Goreng", kategori: "Makanan" },
    { nama: "Teh Botol", kategori: "Minuman" },
    { nama: "Lemari", kategori: "Perabotan" }
];

// Ambil elemen list barang
const listBarang = document.getElementById('listBarang');

// Tambahkan barang ke dalam daftar
barangList.forEach(barang => {
    const listItem = document.createElement('li');
    listItem.textContent = `${barang.nama} - ${barang.kategori}`;
    listBarang.appendChild(listItem);
});
barangList.forEach(barang => {
    const listItem = document.createElement('li');
    listItem.innerHTML = `<a href="transaksi.html" style="text-decoration: none; color: #4CAF50;">${barang.nama} - ${barang.kategori}</a>`;
    listBarang.appendChild(listItem);
});

