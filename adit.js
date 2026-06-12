document.addEventListener("DOMContentLoaded", () => {

    const form = document.getElementById("dataForm");

    form.addEventListener("submit", function(e) {
        e.preventDefault();

        const nama = document.getElementById("nama").value;
        const umur = document.getElementById("umur").value;
        const agama = document.getElementById("agama").value;
        const kelas = document.getElementById("kelas").value;
        const jurusan = document.getElementById("jurusan").value;
        const email = document.getElementById("email").value;
        const hobi = document.getElementById("hobi").value;
        const alamat = document.getElementById("alamat").value;

        alert(`
Data Berhasil Dikirim!

Nama: ${nama}
Umur: ${umur}
Agama: ${agama}
Kelas: ${kelas}
Jurusan: ${jurusan}
Email: ${email}
Hobi: ${hobi}
Alamat: ${alamat}
        `);

        form.reset();
    });

});