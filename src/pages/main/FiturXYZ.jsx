import React from 'react';

// Mengubah @/ menjadi jalur manual ../../ keluar folder
import { Button } from "../../components/ui/button";
import { Badge } from "../../components/ui/badge";
import { 
  Card, 
  CardHeader, 
  CardTitle, 
  CardDescription, 
  CardContent, 
  CardFooter 
} from "../../components/ui/card";

export default function FiturXYZ() {
  return (
    <div className="p-6 flex flex-col items-start gap-6 min-h-screen text-slate-800">
      <div>
        <h1 className="text-3xl font-extrabold tracking-tight">Fitur XYZ</h1>
        <p className="text-slate-500 mt-1">Halaman pengujian komponen UI baru.</p>
      </div>
      
      {/* Tombol Klik Di Sini */}
      <Button variant="default">Klik disini</Button>

      {/* Komponen Card Sesuai Gambar Modul */}
      <Card className="w-[380px] shadow-sm border border-slate-200 bg-white rounded-xl overflow-hidden">
        <CardHeader className="p-6 pb-4">
          <div className="flex items-center justify-between">
            <CardTitle className="text-xl font-bold text-slate-900">Belajar shadcn/ui</CardTitle>
            <Badge variant="secondary" className="font-semibold bg-slate-100 text-slate-800 px-2 py-0.5 rounded">Baru</Badge>
          </div>
          <CardDescription className="text-sm text-slate-500 mt-1">
            Contoh penggunaan komponen shadcn/ui di React
          </CardDescription>
        </CardHeader>

        <CardContent className="p-6 pt-0 pb-4 text-slate-600">
          <p className="text-sm">
            Komponen ini dibuat di branch <strong>komponen-shadcnui</strong> lalu di-merge ke main.
          </p>
        </CardContent>

        <CardFooter className="p-6 pt-0 flex gap-2">
          <Button size="sm" className="bg-slate-900 text-white hover:bg-slate-800 px-4 py-2 rounded-md text-sm font-medium">Simpan</Button>
          <Button variant="outline" size="sm" className="border border-slate-300 hover:bg-slate-50 px-4 py-2 rounded-md text-sm font-medium">Batal</Button>
        </CardFooter>
      </Card>
    </div>
  );
}