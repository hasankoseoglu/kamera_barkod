/**
 * Bu dosya MSSQL veritabanından gelecek ürün verilerini simüle eder.
 * Gerçek projede bu veriler bir REST API (Express.js / ASP.NET Core)
 * üzerinden MSSQL'den çekilir.
 *
 * Örnek tablo yapısı:
 * CREATE TABLE Urunler (
 *   UrunID       INT PRIMARY KEY,
 *   Barkod       VARCHAR(50) UNIQUE NOT NULL,
 *   UrunAdi      NVARCHAR(200) NOT NULL,
 *   Fiyat        DECIMAL(10,2) NOT NULL,
 *   Para Birimi  NVARCHAR(10) DEFAULT 'TRY',
 *   Stok         INT NOT NULL,
 *   Kategori     NVARCHAR(100),
 *   Resim        NVARCHAR(500)
 * )
 */

export interface Urun {
  urunId: number;
  barkod: string;
  urunAdi: string;
  fiyat: number;
  paraBirimi: string;
  stok: number;
  kategori: string;
  resim?: string;
}

// Simüle edilmiş MSSQL verisi
let urunler: Urun[] = [
  {
    urunId: 1,
    barkod: "8690526085811",
    urunAdi: "Ülker Çikolatalı Gofret",
    fiyat: 12.5,
    paraBirimi: "₺",
    stok: 48,
    kategori: "Gıda",
    resim: "🍫",
  },
  {
    urunId: 2,
    barkod: "8690637094040",
    urunAdi: "Pınar Süt 1L",
    fiyat: 27.9,
    paraBirimi: "₺",
    stok: 30,
    kategori: "Süt Ürünleri",
    resim: "🥛",
  },
  {
    urunId: 3,
    barkod: "8690804510017",
    urunAdi: "Coca-Cola 330ml Kutu",
    fiyat: 22.0,
    paraBirimi: "₺",
    stok: 120,
    kategori: "İçecek",
    resim: "🥤",
  },
  {
    urunId: 4,
    barkod: "8691234567890",
    urunAdi: "Lay's Ketçap 107g",
    fiyat: 45.0,
    paraBirimi: "₺",
    stok: 5,
    kategori: "Atıştırmalık",
    resim: "🍟",
  },
  {
    urunId: 5,
    barkod: "8699533370020",
    urunAdi: "Nescafé Classic 100g",
    fiyat: 89.9,
    paraBirimi: "₺",
    stok: 0,
    kategori: "İçecek",
    resim: "☕",
  },
  {
    urunId: 6,
    barkod: "TEST1234567890",
    urunAdi: "Test Ürünü - Demo",
    fiyat: 99.99,
    paraBirimi: "₺",
    stok: 10,
    kategori: "Test",
    resim: "📦",
  },
];

// MSSQL API çağrısını simüle eden fonksiyonlar
// Gerçek projede: fetch('/api/urunler/barkod/' + barkod)

export const barkodIleUrunBul = async (barkod: string): Promise<Urun | null> => {
  // API gecikmesini simüle et
  await new Promise((r) => setTimeout(r, 600));
  const urun = urunler.find((u) => u.barkod === barkod);
  return urun ?? null;
};

export const stokDus = async (urunId: number): Promise<{ basarili: boolean; yeniStok: number; mesaj: string }> => {
  // API gecikmesini simüle et
  await new Promise((r) => setTimeout(r, 400));
  const urun = urunler.find((u) => u.urunId === urunId);
  if (!urun) return { basarili: false, yeniStok: 0, mesaj: "Ürün bulunamadı." };
  if (urun.stok <= 0) return { basarili: false, yeniStok: 0, mesaj: "Stok yetersiz!" };

  // Gerçek projede:
  // UPDATE Urunler SET Stok = Stok - 1 WHERE UrunID = @urunId AND Stok > 0
  urun.stok -= 1;
  return { basarili: true, yeniStok: urun.stok, mesaj: "Satış başarıyla kaydedildi." };
};

export const tumUrunleriGetir = async (): Promise<Urun[]> => {
  await new Promise((r) => setTimeout(r, 300));
  return [...urunler];
};
