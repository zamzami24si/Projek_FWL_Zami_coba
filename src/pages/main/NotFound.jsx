import { Link } from "react-router-dom";

export default function NotFounds({ 
  code = "404", 
  message = "Oops! It Seems You Follow Backlink", 
  description = "The page you are looking for might have been removed, had its name changed, or is temporarily unavailable."
}) {
  return (
    /* Latar belakang diubah ke warna ungu gelap sesuai gambar */
    <div className="flex flex-col items-center justify-center min-h-[75vh] text-center p-6 bg-[#2d133a] rounded-3xl shadow-sm border border-gray-100 overflow-hidden relative">
      
      {/* Container Gambar/Ilustrasi Ghost */}
      <div className="mb-4">
        {/* Pastikan file gambar ada di public/img/404.jpg sesuai assetmu */}
        <img 
          src="/public/Img/eror.png" 
          alt="404 Ghost Illustration" 
          className="w-full max-w-lg h-auto object-contain mx-auto"
        />
      </div>

      {/* Teks Pesan sesuai gambar */}
      <h2 className="text-white text-lg font-medium mb-10 opacity-90">
        {message}
      </h2>

      {/* Tombol Back to Home bergaya Outline sesuai gambar */}
      <Link 
        to="/" 
        className="flex items-center gap-2 border border-white/50 text-white px-8 py-2 rounded-full font-medium hover:bg-white hover:text-[#2d133a] transition-all active:scale-95"
      >
        <span>&larr;</span> Back To Home
      </Link>
      
      {/* Info tambahan (Opsional, diletakkan tipis di bawah) */}
      <div className="absolute bottom-4 text-white/20 font-mono text-[10px] tracking-widest">
        SYSTEM RESPONSE: {code} ERROR
      </div>
    </div>
  );
}