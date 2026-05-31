import React, { useState } from "react";
import { Button } from "../../components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle, CardFooter } from "../../components/ui/card";
import { Badge } from "../../components/ui/badge";

// 🚀 PENERAPAN 3 KOMPONEN UI CRM BARU (Sesuai isi folder src/components Anda)
import CoffeeInput from "../../components/CoffeeInput";
import CoffeeSelect from "../../components/CoffeeSelect";
import CoffeeAvatar from "../../components/CoffeeAvatar";

export default function FiturXYZ() {
  // State CRM untuk mensimulasikan interaktivitas data pelanggan
  const [customerName, setCustomerName] = useState("Zami");
  const [crmStatus, setCrmStatus] = useState("Leads");

  const handleSimpan = () => {
    alert(`Data CRM Pelanggan "${customerName}" dengan status "${crmStatus}" berhasil disimpan!`);
  };

  const handleBatal = () => {
    setCustomerName("");
    setCrmStatus("Leads");
  };

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold tracking-tight text-stone-900">Sistem Manajemen CRM</h1>
        <p className="text-stone-500">Kelola interaksi dan data prospek pelanggan Coffee & Bakery secara real-time.</p>
      </div>

      <Card className="max-w-xl border-stone-200 shadow-sm bg-white">
        <CardHeader className="border-b border-stone-100 pb-4">
          <div className="flex items-center justify-between">
            <div>
              <CardTitle className="text-xl font-bold text-stone-800">Detail Profil Pelanggan</CardTitle>
              <CardDescription>Perbarui data prospek penjualan CRM Anda di bawah ini.</CardDescription>
            </div>
            {/* 1. KOMPONEN UI CRM 1: AVATAR (Menampilkan Foto Profil Pelanggan) */}
            <CoffeeAvatar name={customerName || "User"} className="h-12 w-12 border border-amber-600/20" />
          </div>
        </CardHeader>

        <CardContent className="space-y-5 pt-6">
          {/* 2. KOMPONEN UI CRM 2: INPUT FORM (Untuk mengisi nama pelanggan CRM) */}
          <div className="space-y-2">
            <label className="text-sm font-semibold text-stone-700">Nama Pelanggan / Perusahaan</label>
            <CoffeeInput 
              type="text" 
              placeholder="Masukkan nama pelanggan..." 
              value={customerName}
              onChange={(e) => setCustomerName(e.target.value)}
              className="w-full"
            />
          </div>

          {/* 3. KOMPONEN UI CRM 3: SELECT / DROPDOWN (Untuk menentukan status pipeline CRM) */}
          <div className="space-y-2">
            <label className="text-sm font-semibold text-stone-700">Status Pipeline CRM</label>
            <CoffeeSelect
              value={crmStatus}
              onChange={(e) => setCrmStatus(e.target.value)}
              options={[
                { value: "Leads", label: "Leads (Prospek Baru)" },
                { value: "Contacted", label: "Contacted (Sudah Dihubungi)" },
                { value: "Negotiation", label: "Negotiation (Negosiasi)" },
                { value: "Deal", label: "Deal (Selesai/Membeli)" },
              ]}
              className="w-full"
            />
          </div>

          <div className="pt-2">
            <span className="text-xs font-medium text-stone-500 mr-2">Live Preview Status:</span>
            <Badge variant={crmStatus === "Deal" ? "default" : "secondary"}>
              {crmStatus}
            </Badge>
          </div>
        </CardContent>

        <CardFooter className="bg-stone-50/50 border-t border-stone-100 px-6 py-4 flex justify-end gap-3 rounded-b-xl">
          <Button variant="outline" onClick={handleBatal} className="border-stone-200 text-stone-700 hover:bg-stone-100">
            Batal
          </Button>
          <Button onClick={handleSimpan} className="bg-[#6F3414] hover:bg-[#59290f] text-white">
            Simpan Perubahan
          </Button>
        </CardFooter>
      </Card>
    </div>
  );
}