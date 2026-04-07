import { Urun } from "../data/mockDatabase";

interface StokListesiProps {
  urunler: Urun[];
}

export default function StokListesi({ urunler }: StokListesiProps) {
  return (
    <div className="bg-white rounded-2xl shadow-lg border border-gray-100 overflow-hidden">
      <div className="px-5 py-4 border-b border-gray-100 flex items-center justify-between">
        <h3 className="font-bold text-gray-700 text-sm uppercase tracking-wider">📦 Tüm Ürünler (MSSQL)</h3>
        <span className="text-xs text-gray-400 bg-gray-100 px-2 py-1 rounded-full">{urunler.length} ürün</span>
      </div>
      <div className="divide-y divide-gray-50">
        {urunler.map((u) => (
          <div
            key={u.urunId}
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
      </div>
    </div>
  );
}
