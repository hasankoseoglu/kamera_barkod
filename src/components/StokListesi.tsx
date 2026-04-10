import { useMemo, useState } from "react";
import { Urun } from "../data/mockDatabase";

interface StokListesiProps {
  urunler: Urun[];
}

export default function StokListesi({ urunler }: StokListesiProps) {
  const [arama, setArama] = useState("");

  const filtreliUrunler = useMemo(() => {
    const q = arama.trim().toLocaleLowerCase("tr-TR");
    if (!q) return urunler;

    return urunler.filter((u) => {
      const ad = u.urunAdi.toLocaleLowerCase("tr-TR");
      const barkod = u.barkod.toLocaleLowerCase("tr-TR");
      const stokId = String(u.stokId ?? "").toLocaleLowerCase("tr-TR");
      return ad.includes(q) || barkod.includes(q) || stokId.includes(q);
    });
  }, [urunler, arama]);

  return (
    <div className="bg-white rounded-2xl shadow-lg border border-gray-100 overflow-hidden">
      <div className="px-5 py-4 border-b border-gray-100 flex items-center justify-between">
        <h3 className="font-bold text-gray-700 text-sm uppercase tracking-wider">📦 Tüm Ürünler</h3>
        <span className="text-xs text-gray-400 bg-gray-100 px-2 py-1 rounded-full">{filtreliUrunler.length} ürün</span>
      </div>
      <div className="px-5 py-3 border-b border-gray-100">
        <input
          type="text"
          value={arama}
          onChange={(e) => setArama(e.target.value)}
          placeholder="Ürün adı, barkod veya stok kodu ara..."
          className="w-full border border-gray-200 rounded-xl px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-400 bg-gray-50"
        />
      </div>
      <div className="divide-y divide-gray-50">
        {filtreliUrunler.map((u) => (
          <div
            key={u.barkod}
            className="flex items-center gap-3 px-5 py-3 hover:bg-gray-50 transition-colors"
          >
            <span className="text-2xl w-8 text-center flex-shrink-0">{u.resim ?? "📦"}</span>
            <div className="flex-1 min-w-0">
              <p className="text-sm font-semibold text-gray-800 truncate">{u.urunAdi}</p>
              <p className="text-xs text-gray-400 font-mono">{u.barkod}</p>
            </div>
            <div className="text-right flex-shrink-0">
              <p className="text-sm font-bold text-blue-600">
                {u.fiyat.toFixed(2)} {u.paraBirimi}
              </p>
              <p
                className={`text-xs font-semibold ${
                  u.stok === 0
                    ? "text-red-500"
                    : u.stok <= 5
                    ? "text-orange-500"
                    : "text-green-500"
                }`}
              >
                {u.stok === 0 ? "Tükendi" : `${u.stok} adet`}
              </p>
            </div>
          </div>
        ))}
        {filtreliUrunler.length === 0 && (
          <div className="px-5 py-6 text-center text-sm text-gray-400">Aramanla eşleşen ürün bulunamadı.</div>
        )}
      </div>
    </div>
  );
}
