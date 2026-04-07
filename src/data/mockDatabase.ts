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
  kartfiyat: number;
  paraBirimi: string;
  stok: number;
  kategori: string;
  resim?: string;
}

// Simüle edilmiş MSSQL verisi
let urunler: Urun[] = [
  {
    urunId: 1,
    barkod: "8692341371103",
    urunAdi: "Arnica Tost Makinesi",
    fiyat: 2899.9,
    kartfiyat: 2799.9,
    paraBirimi: "₺",
    stok: 20,
    kategori: "Mutfak Küçük Ev Aletleri",
    resim: "🍳",
  },
  {
    urunId: 2,
    barkod: "8699991100223",
    urunAdi: "Schafer Çelik Çaydanlık Seti",
    fiyat: 1499.9,
    kartfiyat: 1399.9,
    paraBirimi: "₺",
    stok: 15,
    kategori: "Mutfak Küçük Ev Aletleri",
    resim: "🫖",
  },
  {
    urunId: 3,
    barkod: "8691000000003",
    urunAdi: "Arnica Blender Seti",
    fiyat: 2199.9,
    kartfiyat: 2099.9,
    paraBirimi: "₺",
    stok: 18,
    kategori: "Mutfak Küçük Ev Aletleri",
    resim: "🥤",
  },
  {
    urunId: 4,
    barkod: "8691000000004",
    urunAdi: "Schafer Elektrikli Cezve",
    fiyat: 999.9,
    kartfiyat: 949.9,
    paraBirimi: "₺",
    stok: 22,
    kategori: "Mutfak Küçük Ev Aletleri",
    resim: "☕",
  },
  {
    urunId: 5,
    barkod: "8691000000005",
    urunAdi: "Arnica El Mikseri",
    fiyat: 849.9,
    kartfiyat: 799.9,
    paraBirimi: "₺",
    stok: 25,
    kategori: "Mutfak Küçük Ev Aletleri",
    resim: "🥣",
  },
  {
    urunId: 6,
    barkod: "8691000000006",
    urunAdi: "Schafer Kettle 1.7L",
    fiyat: 1199.9,
    kartfiyat: 1099.9,
    paraBirimi: "₺",
    stok: 16,
    kategori: "Mutfak Küçük Ev Aletleri",
    resim: "🫖",
  },
    {
    urunId: 8,
    barkod: "IH37110",
    urunAdi: "Arnica Katı Meyve Sıkacağı",
    fiyat: 1299.9,
    kartfiyat: 1249.9,
    paraBirimi: "₺",
    stok: 11,
    kategori: "Mutfak Küçük Ev Aletleri",
    resim: "🍊",
  },
  {
    urunId: 8,
    barkod: "8691000000008",
    urunAdi: "Schafer Mini Doğrayıcı",
    fiyat: 899.9,
    kartfiyat: 849.9,
    paraBirimi: "₺",
    stok: 27,
    kategori: "Mutfak Küçük Ev Aletleri",
    resim: "🔪",
  },
  {
    urunId: 9,
    barkod: "8691000000009",
    urunAdi: "Arnica Filtre Kahve Makinesi",
    fiyat: 1899.9,
    kartfiyat: 1799.9,
    paraBirimi: "₺",
    stok: 12,
    kategori: "Mutfak Küçük Ev Aletleri",
    resim: "☕",
  },
  {
    urunId: 10,
    barkod: "8691000000010",
    urunAdi: "Schafer Türk Kahve Makinesi",
    fiyat: 1699.9,
    kartfiyat: 1599.9,
    paraBirimi: "₺",
    stok: 19,
    kategori: "Mutfak Küçük Ev Aletleri",
    resim: "☕",
  },
  {
    urunId: 11,
    barkod: "8691000000011",
    urunAdi: "Arnica Airfryer 4.5L",
    fiyat: 3499.9,
    kartfiyat: 3399.9,
    paraBirimi: "₺",
    stok: 11,
    kategori: "Mutfak Küçük Ev Aletleri",
    resim: "🍟",
  },
  {
    urunId: 12,
    barkod: "8691000000012",
    urunAdi: "Schafer Airfryer 5L",
    fiyat: 3799.9,
    kartfiyat: 3699.9,
    paraBirimi: "₺",
    stok: 9,
    kategori: "Mutfak Küçük Ev Aletleri",
    resim: "🍗",
  },
  {
    urunId: 13,
    barkod: "8691000000013",
    urunAdi: "Arnica Hamur Yoğurma Makinesi",
    fiyat: 4299.9,
    kartfiyat: 4199.9,
    paraBirimi: "₺",
    stok: 8,
    kategori: "Mutfak Küçük Ev Aletleri",
    resim: "🍞",
  },
  {
    urunId: 14,
    barkod: "8691000000014",
    urunAdi: "Schafer Tost Makinesi",
    fiyat: 2499.9,
    kartfiyat: 2399.9,
    paraBirimi: "₺",
    stok: 13,
    kategori: "Mutfak Küçük Ev Aletleri",
    resim: "🥪",
  },
  {
    urunId: 15,
    barkod: "8691000000015",
    urunAdi: "Arnica Elektrikli Izgara",
    fiyat: 2799.9,
    kartfiyat: 2699.9,
    paraBirimi: "₺",
    stok: 10,
    kategori: "Mutfak Küçük Ev Aletleri",
    resim: "🔥",
  },
  {
    urunId: 16,
    barkod: "8691000000016",
    urunAdi: "Schafer Waffle Makinesi",
    fiyat: 1399.9,
    kartfiyat: 1349.9,
    paraBirimi: "₺",
    stok: 17,
    kategori: "Mutfak Küçük Ev Aletleri",
    resim: "🧇",
  },
  {
    urunId: 17,
    barkod: "8691000000017",
    urunAdi: "Arnica Buharlı Pişirici",
    fiyat: 2399.9,
    kartfiyat: 2299.9,
    paraBirimi: "₺",
    stok: 7,
    kategori: "Mutfak Küçük Ev Aletleri",
    resim: "🥦",
  },
  {
    urunId: 18,
    barkod: "8691000000018",
    urunAdi: "Schafer Dijital Mutfak Terazisi",
    fiyat: 499.9,
    kartfiyat: 449.9,
    paraBirimi: "₺",
    stok: 30,
    kategori: "Mutfak Küçük Ev Aletleri",
    resim: "⚖️",
  },
  {
    urunId: 19,
    barkod: "8691000000019",
    urunAdi: "Arnica Vakumlama Makinesi",
    fiyat: 1999.9,
    kartfiyat: 1899.9,
    paraBirimi: "₺",
    stok: 9,
    kategori: "Mutfak Küçük Ev Aletleri",
    resim: "🥩",
  },
  {
    urunId: 20,
    barkod: "8691000000020",
    urunAdi: "Schafer El Blenderi",
    fiyat: 1099.9,
    kartfiyat: 999.9,
    paraBirimi: "₺",
    stok: 21,
    kategori: "Mutfak Küçük Ev Aletleri",
    resim: "🧁",
  },
];

// MSSQL API çağrısını simüle eden fonksiyonlar
// Gerçek projede: fetch('/api/urunler/barkod/' + barkod)

export const barkodIleUrunBul = async (barkod: string): Promise<Urun | null> => {
  // API gecikmesini simüle et
  await new Promise((r) => setTimeout(r, 600));

  const normalizeBarkod = (deger: string) => deger.trim().replace(/\s+/g, "").toUpperCase();
  const arananBarkod = normalizeBarkod(barkod);
  const urun = urunler.find((u) => normalizeBarkod(u.barkod) === arananBarkod);
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
