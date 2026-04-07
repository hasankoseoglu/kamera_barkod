import { useState } from "react";
import { Urun, stokDus } from "../data/mockDatabase";

interface UrunKartiProps {
  urun: Urun;
  onStokGuncelle: (urunId: number, yeniStok: number) => void;
}

export default function UrunKarti({ urun, onStokGuncelle }: UrunKartiProps) {
  const [satisYapiliyor, setSatisYapiliyor] = useState(false);
  const [mesaj, setMesaj] = useState<{ tip: "basarili" | "hata"; metin: string } | null>(null);

  const satisYap = async () => {
    if (urun.stok <= 0) {
      setMesaj({ tip: "hata", metin: "Stok tükendi! Satış yapılamaz." });
      setTimeout(() => setMesaj(null), 3000);
      return;
    }

    setSatisYapiliyor(true);
    setMesaj(null);

    try {
      const sonuc = await stokDus(urun.urunId);
      if (sonuc.basarili) {
        onStokGuncelle(urun.urunId, sonuc.yeniStok);
        setMesaj({ tip: "basarili", metin: `✓ ${sonuc.mesaj} Kalan stok: ${sonuc.yeniStok}` });
      } else {
        setMesaj({ tip: "hata", metin: sonuc.mesaj });
      }
    } catch {
      setMesaj({ tip: "hata", metin: "Sunucu hatası! Lütfen tekrar deneyin." });
    } finally {
      setSatisYapiliyor(false);
      setTimeout(() => setMesaj(null), 4000);
    }
  };

  const stokRengi =
    urun.stok === 0
      ? "text-red-500"
      : urun.stok <= 5
      ? "text-orange-500"
      : "text-green-500";

  const stokBadge =
    urun.stok === 0
      ? "bg-red-100 text-red-700 border border-red-200"
      : urun.stok <= 5
      ? "bg-orange-100 text-orange-700 border border-orange-200"
      : "bg-green-100 text-green-700 border border-green-200";

  return (
    <div className="bg-white rounded-2xl shadow-xl border border-gray-100 overflow-hidden animate-slide-up">
      {/* Başlık şeridi */}
      <div className="bg-gradient-to-r from-blue-600 to-blue-500 px-5 py-3 flex items-center justify-between">
        <span className="text-white/80 text-xs font-medium uppercase tracking-widest">Ürün Bilgisi</span>
        <span className="text-white/60 text-xs font-mono">{urun.barkod}</span>
      </div>

      <div className="p-5">
        {/* Ürün adı & emoji */}
        <div className="flex items-center gap-4 mb-5">
          <div className="w-16 h-16 bg-gray-50 rounded-2xl flex items-center justify-center text-4xl shadow-inner border border-gray-100 flex-shrink-0">
            {urun.resim ?? "📦"}
          </div>
          <div className="flex-1 min-w-0">
            <h2 className="text-lg font-bold text-gray-800 leading-tight">{urun.urunAdi}</h2>
            <span className="inline-block mt-1 text-xs text-gray-400 bg-gray-100 px-2 py-0.5 rounded-full">
              {urun.kategori}
            </span>
          </div>
        </div>

        {/* Fiyat & Stok */}
        <div className="grid grid-cols-2 gap-3 mb-5">
          <div className="bg-blue-50 border border-blue-100 rounded-xl p-4 text-center">
            <p className="text-xs text-blue-400 font-medium mb-1 uppercase tracking-wide">Fiyat</p>
            <p className="text-2xl font-extrabold text-blue-700">
              {urun.fiyat.toFixed(2)}
              <span className="text-base font-semibold ml-1">{urun.paraBirimi}</span>
            </p>
          </div>
          <div className={`rounded-xl p-4 text-center ${stokBadge.includes("red") ? "bg-red-50 border border-red-100" : stokBadge.includes("orange") ? "bg-orange-50 border border-orange-100" : "bg-green-50 border border-green-100"}`}>
            <p className={`text-xs font-medium mb-1 uppercase tracking-wide ${stokRengi}`}>Stok</p>
            <p className={`text-2xl font-extrabold ${stokRengi}`}>
              {urun.stok}
              <span className="text-sm font-medium ml-1">adet</span>
            </p>
          </div>
        </div>

        {/* Mesaj */}
        {mesaj && (
          <div
            className={`mb-4 px-4 py-3 rounded-xl text-sm font-medium text-center transition-all ${
              mesaj.tip === "basarili"
                ? "bg-green-50 text-green-700 border border-green-200"
                : "bg-red-50 text-red-700 border border-red-200"
            }`}
          >
            {mesaj.metin}
          </div>
        )}

        {/* Satış butonu */}
        <button
          onClick={satisYap}
          disabled={satisYapiliyor || urun.stok === 0}
          className={`w-full py-4 rounded-xl font-bold text-lg tracking-wide transition-all duration-200 flex items-center justify-center gap-2 shadow-md active:scale-95 ${
            urun.stok === 0
              ? "bg-gray-200 text-gray-400 cursor-not-allowed shadow-none"
              : satisYapiliyor
              ? "bg-blue-400 text-white cursor-wait"
              : "bg-gradient-to-r from-blue-600 to-blue-500 text-white hover:from-blue-700 hover:to-blue-600 hover:shadow-lg"
          }`}
        >
          {satisYapiliyor ? (
            <>
              <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
              İşleniyor...
            </>
          ) : urun.stok === 0 ? (
            <>
              <span>🚫</span> Stok Tükendi
            </>
          ) : (
            <>
              <span>🛒</span> Ürün Sattım
            </>
          )}
        </button>

        {urun.stok > 0 && urun.stok <= 5 && (
          <p className="text-center text-xs text-orange-500 mt-2 font-medium">
            ⚠️ Son {urun.stok} ürün kaldı!
          </p>
        )}
      </div>
    </div>
  );
}
