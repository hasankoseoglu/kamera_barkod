import { useState, useEffect, useCallback } from "react";
import BarcodeScanner from "./components/BarcodeScanner";
import UrunKarti from "./components/UrunKarti";
import StokListesi from "./components/StokListesi";
import ManuelGiris from "./components/ManuelGiris";
import { Urun, barkodIleUrunBul, tumUrunleriGetir } from "./data/mockDatabase";

type Sekme = "tarayici" | "stok";

export default function App() {
  const [kameraAktif, setKameraAktif] = useState(false);
  const [aranan, setAranan] = useState<string | null>(null);
  const [bulunanUrun, setBulunanUrun] = useState<Urun | null>(null);
  const [bulunamadi, setBulunamadi] = useState(false);
  const [yukleniyor, setYukleniyor] = useState(false);
  const [urunler, setUrunler] = useState<Urun[]>([]);
  const [aktifSekme, setAktifSekme] = useState<Sekme>("tarayici");

  // Tüm ürünleri yükle
  useEffect(() => {
    tumUrunleriGetir().then(setUrunler);
  }, []);

  const barkodAra = useCallback(async (barkod: string) => {
    const temizBarkod = barkod.trim().replace(/\s+/g, "");
    if (!temizBarkod) return;
    setAranan(temizBarkod);
    setYukleniyor(true);
    setBulunamadi(false);
    setBulunanUrun(null);

    const urun = await barkodIleUrunBul(temizBarkod);
    if (urun) {
      setBulunanUrun(urun);
      setBulunamadi(false);
    } else {
      setBulunanUrun(null);
      setBulunamadi(true);
    }
    setYukleniyor(false);
  }, []);

  const stokGuncelle = (urunId: number, yeniStok: number) => {
    // Bulunan ürün kartını güncelle
    if (bulunanUrun?.urunId === urunId) {
      setBulunanUrun((prev) => (prev ? { ...prev, stok: yeniStok } : null));
    }
    // Stok listesini güncelle
    setUrunler((prev) =>
      prev.map((u) => (u.urunId === urunId ? { ...u, stok: yeniStok } : u))
    );
  };

  const temizle = () => {
    setBulunanUrun(null);
    setAranan(null);
    setBulunamadi(false);
  };

  const kameraToggle = () => {
    setKameraAktif((prev) => !prev);
    temizle();
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-blue-50/30 to-gray-100">
      {/* Header */}
      <header className="bg-gradient-to-r from-blue-700 to-blue-600 shadow-lg">
        <div className="max-w-md mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="text-2xl">📷</span>
            <div>
              <h1 className="text-white font-extrabold text-lg leading-tight">Barkod POS</h1>
              <p className="text-blue-200 text-xs">MSSQL Stok Yönetimi</p>
            </div>
          </div>
          {/* DB bağlantı göstergesi */}
          <div className="flex items-center gap-1.5 bg-blue-800/50 px-3 py-1.5 rounded-full">
            <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
            <span className="text-xs text-blue-200 font-medium">MSSQL</span>
          </div>
        </div>
      </header>

      {/* Sekme menüsü */}
      <div className="max-w-md mx-auto px-4 pt-4">
        <div className="flex bg-white rounded-xl shadow-sm border border-gray-100 p-1">
          <button
            onClick={() => setAktifSekme("tarayici")}
            className={`flex-1 py-2.5 rounded-lg text-sm font-semibold transition-all flex items-center justify-center gap-1.5 ${
              aktifSekme === "tarayici"
                ? "bg-blue-600 text-white shadow-md"
                : "text-gray-500 hover:text-gray-700"
            }`}
          >
            <span>📷</span> Barkod Tara
          </button>
          <button
            onClick={() => setAktifSekme("stok")}
            className={`flex-1 py-2.5 rounded-lg text-sm font-semibold transition-all flex items-center justify-center gap-1.5 ${
              aktifSekme === "stok"
                ? "bg-blue-600 text-white shadow-md"
                : "text-gray-500 hover:text-gray-700"
            }`}
          >
            <span>📦</span> Stok Listesi
          </button>
        </div>
      </div>

      <main className="max-w-md mx-auto px-4 py-4 space-y-4 pb-10">
        {aktifSekme === "tarayici" ? (
          <>
            {/* Kamera bölümü */}
            <div className="bg-white rounded-2xl shadow-lg border border-gray-100 p-4 space-y-3">
              <div className="flex items-center justify-between">
                <h2 className="text-sm font-bold text-gray-700 uppercase tracking-wider">
                  📷 Kamera ile Tara
                </h2>
                <button
                  onClick={kameraToggle}
                  className={`px-4 py-2 rounded-lg text-xs font-bold tracking-wide transition-all active:scale-95 ${
                    kameraAktif
                      ? "bg-red-100 text-red-600 hover:bg-red-200"
                      : "bg-blue-600 text-white hover:bg-blue-700 shadow-md"
                  }`}
                >
                  {kameraAktif ? "⏹ Kapat" : "▶ Kamerayı Aç"}
                </button>
              </div>

              <BarcodeScanner aktif={kameraAktif} onScan={barkodAra} />
            </div>

            {/* Manuel giriş */}
            <div className="bg-white rounded-2xl shadow-lg border border-gray-100 p-4 space-y-2">
              <h2 className="text-sm font-bold text-gray-700 uppercase tracking-wider mb-2">
                ⌨️ Manuel Barkod Girişi
              </h2>
              <ManuelGiris onBarkod={barkodAra} />
              <p className="text-xs text-gray-400 text-center">
                Test için: <code className="bg-gray-100 px-1 rounded">TEST1234567890</code> veya{" "}
                <code className="bg-gray-100 px-1 rounded">8690804510017</code>
              </p>
            </div>

            {/* Yükleniyor */}
            {yukleniyor && (
              <div className="bg-white rounded-2xl shadow-lg border border-gray-100 p-8 flex flex-col items-center gap-3">
                <div className="w-10 h-10 border-4 border-blue-500 border-t-transparent rounded-full animate-spin" />
                <p className="text-gray-500 text-sm font-medium">
                  MSSQL sorgulanıyor...
                </p>
                {aranan && (
                  <p className="text-xs text-gray-400 font-mono bg-gray-50 px-3 py-1 rounded-full">
                    Barkod: {aranan}
                  </p>
                )}
              </div>
            )}

            {/* Ürün bulunamadı */}
            {bulunamadi && !yukleniyor && (
              <div className="bg-white rounded-2xl shadow-lg border border-red-100 p-6 text-center animate-slide-up">
                <span className="text-5xl block mb-3">🔍</span>
                <h3 className="text-lg font-bold text-gray-800 mb-1">Ürün Bulunamadı</h3>
                <p className="text-sm text-gray-500 mb-1">
                  Bu barkod MSSQL veritabanında kayıtlı değil.
                </p>
                <p className="text-xs font-mono text-gray-400 bg-gray-50 px-3 py-1 rounded-full inline-block mb-4">
                  {aranan}
                </p>
                <button
                  onClick={temizle}
                  className="block w-full py-3 bg-gray-100 text-gray-700 rounded-xl text-sm font-semibold hover:bg-gray-200 transition-colors"
                >
                  Yeni Arama
                </button>
              </div>
            )}

            {/* Ürün kartı */}
            {bulunanUrun && !yukleniyor && (
              <div className="space-y-3">
                <UrunKarti urun={bulunanUrun} onStokGuncelle={stokGuncelle} />
                <button
                  onClick={temizle}
                  className="w-full py-3 bg-white border border-gray-200 text-gray-600 rounded-xl text-sm font-semibold hover:bg-gray-50 transition-colors shadow-sm"
                >
                  🔄 Yeni Barkod Tara
                </button>
              </div>
            )}

            {/* İlk durum */}
            {!bulunanUrun && !bulunamadi && !yukleniyor && (
              <div className="bg-white rounded-2xl shadow-lg border border-gray-100 p-8 text-center">
                <span className="text-6xl block mb-4">🏷️</span>
                <h3 className="text-lg font-bold text-gray-800 mb-2">Barkod Okutun</h3>
                <p className="text-sm text-gray-500 leading-relaxed">
                  Kamerayı açıp ürün üzerindeki barkodu çerçeve içine getirin
                  veya barkod numarasını manuel olarak girin.
                </p>
                <div className="mt-4 bg-blue-50 rounded-xl p-3 text-left space-y-1">
                  <p className="text-xs font-bold text-blue-700 mb-2">🛢️ MSSQL Bağlantısı</p>
                  <p className="text-xs text-blue-600">
                    • Veriler MSSQL veritabanından çekilir
                  </p>
                  <p className="text-xs text-blue-600">
                    • Satış anında stok otomatik güncellenir
                  </p>
                  <p className="text-xs text-blue-600">
                    • Gerçek API: <code className="bg-blue-100 px-1 rounded">/api/urunler/barkod/:id</code>
                  </p>
                </div>
              </div>
            )}
          </>
        ) : (
          /* Stok listesi sekmesi */
          <StokListesi urunler={urunler} />
        )}
      </main>
    </div>
  );
}
