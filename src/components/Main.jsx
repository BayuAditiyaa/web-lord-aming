import { Link } from "react-router";

export default function Main() {
  return (
    <main className="flex flex-col p-4">
      <div className="flex-col justify-items-center p-10">
        <h1 className="text-3xl font-bold">Sistem Klasifikasi Batik</h1>
        <p className="p-4">
          Mesin klasifikasi batik oleh lord Aming dari poencoel
        </p>
      </div>
      <div className="flex flex-row py-10 w-full">
        <div className="flex-col w-full justify-items-center bg-blue-500 p-8 mx-4">
          <h2 className="text-xl font-bold">Pengertian</h2>
          <p className="text-center">Asal muasal batik</p>
          <Link to="/pengertian">
            <button className="p-2 bg-red-500 rounded-xl">
              Pelajari lebih lanjut
            </button>
          </Link>
        </div>
        <div className="flex-col w-full justify-items-center bg-blue-500 p-8 mx-4">
          <h2 className="text-xl font-bold">Klasifikasi Batik</h2>
          <p className="text-center">
            Upload gambar batik untuk mendapatkan hasil yang akurat
          </p>
          <button className="p-2 bg-red-500 rounded-xl">
            Pelajari lebih lanjut
          </button>
        </div>
      </div>
      <div className="flex flex-col p-10 w-full bg-blue-500 items-center">
        <h2 className="text-xl font-bold">Tentang Kami</h2>
        <p className="text-center">
          Sistem Klasifikasi Buah apel adalah sebuah sistem yang membantu
          membedakn jenis batik berdasarkan gambarnya. dengan begitu sistem ini
          bisa memprediksi apakah batik yang diupload adalah batik kawung,
          megamendung atau parang.
        </p>
      </div>
    </main>
  );
}
