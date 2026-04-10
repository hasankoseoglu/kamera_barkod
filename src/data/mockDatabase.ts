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
  stokId: string;
  barkod: string;
  urunAdi: string;
  stok: number;
  fiyat: number;
  paraBirimi: string;
  kategori: string;
  resim?: string;
}

// Simüle edilmiş MSSQL verisi
type HamUrun = {
  urunId?: string;
  "Stok Kodu"?: string;
  Barkod?: string;
  "Stok Cinsi"?: string;
  Miktar?: string;
  " Toplam Tutar "?: string;
};

const hamUrunler: HamUrun[] = [
  {
    "urunId": "1",
    "Stok Kodu": "3ST217-34902-BEJ01",
    "Barkod": "8699131909942",
    "Stok Cinsi": "Schafer Home Floral 2 Li Pamuk Floş Banyo Paspası-Bej",
    "Miktar": "1",
    " Toplam Tutar ": " 1,316.34 "
  },
  {
    "urunId": "2",
    "Stok Kodu": "3ST217-34902-GLD01",
    "Barkod": "8699131909935",
    "Stok Cinsi": "Schafer Home Floral 2 Li Pamuk Floş Banyo Paspası-Gold",
    "Miktar": "1",
    " Toplam Tutar ": " 1,316.34 "
  },
  {
    "urunId": "3",
    "Stok Kodu": "3ST217-34902-GRI01",
    "Barkod": "8699131909959",
    "Stok Cinsi": "Schafer Home Floral 2 Li Pamuk Floş Banyo Paspası-Gri",
    "Miktar": "1",
    " Toplam Tutar ": " 1,316.34 "
  },
  {
    "urunId": "4",
    "Stok Kodu": "3ST503-34902-BEJ01",
    "Barkod": "8699131909812",
    "Stok Cinsi": "Schafer Home Natural 2 Li Pamuk Floş Banyo Paspası-Bej",
    "Miktar": "1",
    " Toplam Tutar ": " 1,316.34 "
  },
  {
    "urunId": "5",
    "Stok Kodu": "3ST503-34902-GLD01",
    "Barkod": "8699131909805",
    "Stok Cinsi": "Schafer Home Natural 2 Li Pamuk Floş Banyo Paspası-Gold",
    "Miktar": "1",
    " Toplam Tutar ": " 1,316.34 "
  },
  {
    "urunId": "6",
    "Stok Kodu": "3ST503-34902-GRI01",
    "Barkod": "8699131909843",
    "Stok Cinsi": "Schafer Home Natural 2 Li Pamuk Floş Banyo Paspası-Gri",
    "Miktar": "1",
    " Toplam Tutar ": " 1,316.34 "
  },
  {
    "urunId": "7",
    "Stok Kodu": "3ST645-34902-BEJ01",
    "Barkod": "8699131909867",
    "Stok Cinsi": "Schafer Home Retro 2 Li Pamuk Floş Banyo Paspası-Bej",
    "Miktar": "1",
    " Toplam Tutar ": " 1,316.34 "
  },
  {
    "urunId": "8",
    "Stok Kodu": "3ST645-34902-GLD01",
    "Barkod": "8699131909850",
    "Stok Cinsi": "Schafer Home Retro 2 Li Pamuk Floş Banyo Paspası-Gold",
    "Miktar": "1",
    " Toplam Tutar ": " 1,316.34 "
  },
  {
    "urunId": "9",
    "Stok Kodu": "3ST645-34902-GRI01",
    "Barkod": "8699131909874",
    "Stok Cinsi": "Schafer Home Retro 2 Li Pamuk Floş Banyo Paspası-Gri",
    "Miktar": "1",
    " Toplam Tutar ": " 1,316.34 "
  },
  {
    "urunId": "10",
    "Stok Kodu": "3ST902-34902-GRI01",
    "Barkod": "8699131891261",
    "Stok Cinsi": "Schafer Home Liva Pamuk 2 Li Banyo Paspası-Açık Gri",
    "Miktar": "1",
    " Toplam Tutar ": " 1,243.17 "
  },
  {
    "urunId": "11",
    "Stok Kodu": "3ST902-34902-CAP01",
    "Barkod": "8699131891254",
    "Stok Cinsi": "Schafer Home Liva Pamuk 2 Li Banyo Paspası-Cappuccino",
    "Miktar": "1",
    " Toplam Tutar ": " 1,243.17 "
  },
  {
    "urunId": "12",
    "Stok Kodu": "3ST902-34902-BYZ01",
    "Barkod": "8699131891247",
    "Stok Cinsi": "Schafer Home Liva Pamuk 2 Li Banyo Paspası-Beyaz",
    "Miktar": "1",
    " Toplam Tutar ": " 1,243.17 "
  },
  {
    "urunId": "13",
    "Stok Kodu": "3ST431-34902-GRI01",
    "Barkod": "8699131909799",
    "Stok Cinsi": "Schafer Home Lora 2 Li Pamuk Banyo Paspası-Koyu Gri",
    "Miktar": "1",
    " Toplam Tutar ": " 1,243.17 "
  },
  {
    "urunId": "14",
    "Stok Kodu": "3ST431-34902-BEJ01",
    "Barkod": "8699131909782",
    "Stok Cinsi": "Schafer Home Lora 2 Li Pamuk Banyo Paspası-Bej",
    "Miktar": "1",
    " Toplam Tutar ": " 1,243.17 "
  },
  {
    "urunId": "15",
    "Stok Kodu": "3ST352-34902-GRI01",
    "Barkod": "8699131909768",
    "Stok Cinsi": "Schafer Home Julia 2 Li Pamuk Banyo Paspası-Koyu Gri",
    "Miktar": "1",
    " Toplam Tutar ": " 1,243.17 "
  },
  {
    "urunId": "16",
    "Stok Kodu": "3ST352-34902-BEJ01",
    "Barkod": "8699131909751",
    "Stok Cinsi": "Schafer Home Julia 2 Li Pamuk Banyo Paspası-Bej",
    "Miktar": "1",
    " Toplam Tutar ": " 1,243.17 "
  },
  {
    "urunId": "17",
    "Stok Kodu": "3ST185-34902-GRI01",
    "Barkod": "8699131891339",
    "Stok Cinsi": "Schafer Home Eleo Pamuk 2 Li Banyo Paspası-Açık Gri",
    "Miktar": "1",
    " Toplam Tutar ": " 1,243.17 "
  },
  {
    "urunId": "18",
    "Stok Kodu": "3ST185-34902-CAP01",
    "Barkod": "8699131891322",
    "Stok Cinsi": "Schafer Home Eleo Pamuk 2 Li Banyo Paspası-Cappuccino",
    "Miktar": "1",
    " Toplam Tutar ": " 1,243.17 "
  },
  {
    "urunId": "19",
    "Stok Kodu": "3ST107-32902-NON01",
    "Barkod": "8699131877357",
    "Stok Cinsi": "Schafer Home Chic Çift Kişilik Nevresim Takımı 4 Parça",
    "Miktar": "6",
    " Toplam Tutar ": " 7,898.05 "
  },
  {
    "urunId": "20",
    "Stok Kodu": "3S596-32902-XXX01",
    "Barkod": "8699131477816",
    "Stok Cinsi": "Schafer Home Palm Çift Kişilik Nevresim Takımı 4 Parça",
    "Miktar": "6",
    " Toplam Tutar ": " 7,898.05 "
  },
  {
    "urunId": "21",
    "Stok Kodu": "3S5400-32902-NON07",
    "Barkod": "8699131906620",
    "Stok Cinsi": "Schafer Home Wild Çift Kişilik Nevresim Takımı 4 Parça",
    "Miktar": "6",
    " Toplam Tutar ": " 7,898.05 "
  },
  {
    "urunId": "22",
    "Stok Kodu": "3S5400-32902-NON03",
    "Barkod": "8699131906576",
    "Stok Cinsi": "Schafer Home Troya Çift Kişilik Nevresim Takımı 4 Parça",
    "Miktar": "6",
    " Toplam Tutar ": " 7,898.05 "
  },
  {
    "urunId": "23",
    "Stok Kodu": "3S5400-32902-NON01",
    "Barkod": "8699131906545",
    "Stok Cinsi": "Schafer Home Geo Çift Kişilik Nevresim Takımı 4 Parça",
    "Miktar": "6",
    " Toplam Tutar ": " 7,898.05 "
  },
  {
    "urunId": "24",
    "Stok Kodu": "3S202-32902-XXX01",
    "Barkod": "8699131045640",
    "Stok Cinsi": "Schafer Home Flora Çift Kişilik Nevresim Takımı 4 Parça",
    "Miktar": "6",
    " Toplam Tutar ": " 7,898.05 "
  },
  {
    "urunId": "25",
    "Stok Kodu": "3ST070-32906-BEJ01",
    "Barkod": "8699131907740",
    "Stok Cinsi": "Schafer Home Blossom Yatak Örtüsü Seti 3 Parça-Bej",
    "Miktar": "3",
    " Toplam Tutar ": " 10,415.18 "
  },
  {
    "urunId": "26",
    "Stok Kodu": "3S5400-32902-GLD01",
    "Barkod": "8699131901441",
    "Stok Cinsi": "Schafer Home Otto Nakışlı Nevresim Takımı 6 Parça-Bej",
    "Miktar": "3",
    " Toplam Tutar ": " 6,873.31 "
  },
  {
    "urunId": "27",
    "Stok Kodu": "3S468-32908-BYZ01",
    "Barkod": "8699131079966",
    "Stok Cinsi": "Schafer Home Microfiber Ck Yorgan Yastık Seti 3 Parça",
    "Miktar": "3",
    " Toplam Tutar ": " 3,748.13 "
  },
  {
    "urunId": "28",
    "Stok Kodu": "3ST070-32906-GRI01",
    "Barkod": "8699131907757",
    "Stok Cinsi": "Schafer Home Blossom Yatak Örtüsü Seti 3 Parça-Gri",
    "Miktar": "3",
    " Toplam Tutar ": " 10,415.18 "
  },
  {
    "urunId": "29",
    "Stok Kodu": "3S5400-32902-GUM01",
    "Barkod": "8699131901458",
    "Stok Cinsi": "Schafer Home Otto Nakışlı Nevresim Takımı 6 Parça-Gri",
    "Miktar": "3",
    " Toplam Tutar ": " 6,873.31 "
  },
  {
    "urunId": "30",
    "Stok Kodu": "3S468-32908-BYZ01",
    "Barkod": "8699131079966",
    "Stok Cinsi": "Schafer Home Microfiber Ck Yorgan Yastık Seti 3 Parça",
    "Miktar": "3",
    " Toplam Tutar ": " 3,748.13 "
  },
  {
    "urunId": "31",
    "Stok Kodu": "3S811-32909-BYZ01",
    "Barkod": "8699131442395",
    "Stok Cinsi": "Schafer Home Alez 160x200 Cm 1 Parça-Beyaz",
    "Miktar": "2",
    " Toplam Tutar ": " 1,743.84 "
  },
  {
    "urunId": "32",
    "Stok Kodu": "3ST509-32906-MAV01",
    "Barkod": "8699131845141",
    "Stok Cinsi": "Schafer Home Nature Müslin Yatak Örtüsü Nevresim Seti 5 Parça-Mavi",
    "Miktar": "2",
    " Toplam Tutar ": " 4,697.24 "
  },
  {
    "urunId": "33",
    "Stok Kodu": "3ST144-34908-GRI01",
    "Barkod": "8699131909737",
    "Stok Cinsi": "Schafer Home Dina Banyo Seti 6 Parça-Gri",
    "Miktar": "2",
    " Toplam Tutar ": " 6,039.69 "
  },
  {
    "urunId": "34",
    "Stok Kodu": "3ST556-31901-GRI01",
    "Barkod": "8699131891650",
    "Stok Cinsi": "Schafer Home Otto Çeyiz Seti 11 Parça-Gri",
    "Miktar": "2",
    " Toplam Tutar ": " 12,080.72 "
  },
  {
    "urunId": "35",
    "Stok Kodu": "3S468-32908-BYZ01",
    "Barkod": "8699131079966",
    "Stok Cinsi": "Schafer Home Microfiber Ck Yorgan Yastık Seti 3 Parça",
    "Miktar": "2",
    " Toplam Tutar ": " 2,415.07 "
  },
  {
    "urunId": "36",
    "Stok Kodu": "3ST428-34911-ASO01",
    "Barkod": "8699131846810",
    "Stok Cinsi": "Schafer Home Lena 3 Lü Havlu Seti 30x50 Cm-Asorti01",
    "Miktar": "2",
    " Toplam Tutar ": " 536.91 "
  },
  {
    "urunId": "37",
    "Stok Kodu": "3ST811-32909-BYZ01",
    "Barkod": "8699131891162",
    "Stok Cinsi": "Schafer Home Yastık Alezi 50x70Cm 2 Parça-Beyaz",
    "Miktar": "2",
    " Toplam Tutar ": " 536.91 "
  },
  {
    "urunId": "38",
    "Stok Kodu": "3S468-32908-BYZ01",
    "Barkod": "8699131079966",
    "Stok Cinsi": "Schafer Home Microfiber Ck Yorgan Yastık Seti 3 Parça",
    "Miktar": "2",
    " Toplam Tutar ": " 2,393.61 "
  },
  {
    "urunId": "39",
    "Stok Kodu": "3S4642-31901-BEJ01",
    "Barkod": "8699131877302",
    "Stok Cinsi": "Schafer Home Moneta Çeyiz Seti 11 Parça-Bej",
    "Miktar": "2",
    " Toplam Tutar ": " 15,964.92 "
  },
  {
    "urunId": "40",
    "Stok Kodu": "3ST002-34908-BEJ01",
    "Barkod": "8699131876800",
    "Stok Cinsi": "Schafer Home Arya Banyo Seti 6 Parça-Bej/Haki",
    "Miktar": "2",
    " Toplam Tutar ": " 5,054.65 "
  },
  {
    "urunId": "41",
    "Stok Kodu": "3ST257-34909-NON01",
    "Barkod": "8699131892756",
    "Stok Cinsi": "Schafer Home Gardenia Çamaşır Spreyi 250 ML 1 Parça",
    "Miktar": "2",
    " Toplam Tutar ": " 320.78 "
  },
  {
    "urunId": "42",
    "Stok Kodu": "3ST851-32903-BEJ01",
    "Barkod": "8699131886052",
    "Stok Cinsi": "Schafer Home Zuma Çift Kişilik Pike 200x220 Cm-Bej",
    "Miktar": "2",
    " Toplam Tutar ": " 1,029.34 "
  },
  {
    "urunId": "43",
    "Stok Kodu": "3ST428-34911-ASO04",
    "Barkod": "8699131846841",
    "Stok Cinsi": "Schafer Home Lena 3 Lü Havlu Seti 30x50 Cm-Asorti04",
    "Miktar": "2",
    " Toplam Tutar ": " 515.25 "
  },
  {
    "urunId": "44",
    "Stok Kodu": "3ST811-32909-BYZ01",
    "Barkod": "8699131891162",
    "Stok Cinsi": "Schafer Home Yastık Alezi 50x70Cm 2 Parça-Beyaz",
    "Miktar": "2",
    " Toplam Tutar ": " 515.25 "
  },
  {
    "urunId": "45",
    "Stok Kodu": "3ST029-31901-CAP01",
    "Barkod": "8699131880098",
    "Stok Cinsi": "Schafer Home Anna Çeyiz Seti 11 Parça-Cappuccino",
    "Miktar": "2",
    " Toplam Tutar ": " 16,746.37 "
  },
  {
    "urunId": "46",
    "Stok Kodu": "3S468-32908-BYZ01",
    "Barkod": "8699131079966",
    "Stok Cinsi": "Schafer Home Microfiber Ck Yorgan Yastık Seti 3 Parça",
    "Miktar": "2",
    " Toplam Tutar ": " 2,317.62 "
  },
  {
    "urunId": "47",
    "Stok Kodu": "3ST035-34908-EKR01",
    "Barkod": "8699131907733",
    "Stok Cinsi": "Schafer Home Azur Dantelli Banyo Seti 6 Parça-Ekru/Bej",
    "Miktar": "2",
    " Toplam Tutar ": " 6,440.12 "
  },
  {
    "urunId": "48",
    "Stok Kodu": "3S811-32909-BYZ01",
    "Barkod": "8699131442395",
    "Stok Cinsi": "Schafer Home Alez 160x200 Cm 1 Parça-Beyaz",
    "Miktar": "2",
    " Toplam Tutar ": " 1,673.48 "
  },
  {
    "urunId": "49",
    "Stok Kodu": "3ST906-34902-BEJ02",
    "Barkod": "8699131869505",
    "Stok Cinsi": "Schafer Home Liora Pamuk 2 Li Banyo Paspası-Bej",
    "Miktar": "2",
    " Toplam Tutar ": " 1,286.99 "
  },
  {
    "urunId": "50",
    "Stok Kodu": "3ST257-34909-NON01",
    "Barkod": "8699131892756",
    "Stok Cinsi": "Schafer Home Gardenia Çamaşır Spreyi 250 ML 1 Parça",
    "Miktar": "2",
    " Toplam Tutar ": " 320.78 "
  },
  {
    "urunId": "51",
    "Stok Kodu": "3ST851-32903-KRM01",
    "Barkod": "8699131886038",
    "Stok Cinsi": "Schafer Home Zuma Çift Kişilik Pike 200x220 Cm-Krem",
    "Miktar": "2",
    " Toplam Tutar ": " 1,029.34 "
  },
  {
    "urunId": "52",
    "Stok Kodu": "3ST428-34911-ASO04",
    "Barkod": "8699131846841",
    "Stok Cinsi": "Schafer Home Lena 3 Lü Havlu Seti 30x50 Cm-Asorti04",
    "Miktar": "2",
    " Toplam Tutar ": " 515.25 "
  },
  {
    "urunId": "53",
    "Stok Kodu": "3ST811-32909-BYZ01",
    "Barkod": "8699131891162",
    "Stok Cinsi": "Schafer Home Yastık Alezi 50x70Cm 2 Parça-Beyaz",
    "Miktar": "2",
    " Toplam Tutar ": " 515.25 "
  },
  {
    "urunId": "54",
    "Stok Kodu": "3ST029-31901-EKR01",
    "Barkod": "8699131880128",
    "Stok Cinsi": "Schafer Home Anna Çeyiz Seti 11 Parça-Ekru",
    "Miktar": "2",
    " Toplam Tutar ": " 16,746.37 "
  },
  {
    "urunId": "55",
    "Stok Kodu": "3S468-32908-BYZ01",
    "Barkod": "8699131079966",
    "Stok Cinsi": "Schafer Home Microfiber Ck Yorgan Yastık Seti 3 Parça",
    "Miktar": "2",
    " Toplam Tutar ": " 2,317.62 "
  },
  {
    "urunId": "56",
    "Stok Kodu": "3ST035-34908-EKR01",
    "Barkod": "8699131907733",
    "Stok Cinsi": "Schafer Home Azur Dantelli Banyo Seti 6 Parça-Ekru/Bej",
    "Miktar": "2",
    " Toplam Tutar ": " 6,440.12 "
  },
  {
    "urunId": "57",
    "Stok Kodu": "3S811-32909-BYZ01",
    "Barkod": "8699131442395",
    "Stok Cinsi": "Schafer Home Alez 160x200 Cm 1 Parça-Beyaz",
    "Miktar": "2",
    " Toplam Tutar ": " 1,673.48 "
  },
  {
    "urunId": "58",
    "Stok Kodu": "3ST906-34902-BEJ02",
    "Barkod": "8699131869505",
    "Stok Cinsi": "Schafer Home Liora Pamuk 2 Li Banyo Paspası-Bej",
    "Miktar": "2",
    " Toplam Tutar ": " 1,286.99 "
  },
  {
    "urunId": "59",
    "Stok Kodu": "3ST384-32906-GRI01",
    "Barkod": "8699131875681",
    "Stok Cinsi": "Schafer Home Kylie Yatak Örtüsü Nevresim Seti 7 Parça-Gri",
    "Miktar": "2",
    " Toplam Tutar ": " 14,632.68 "
  },
  {
    "urunId": "60",
    "Stok Kodu": "3ST384-32906-KMT01",
    "Barkod": "8699131875674",
    "Stok Cinsi": "Schafer Home Kylie Yatak Örtüsü Nevresim Seti 7 Parça-Kiremit",
    "Miktar": "2",
    " Toplam Tutar ": " 14,632.68 "
  },
  {
    "urunId": "61",
    "Stok Kodu": "3ST180-31901-MAV01",
    "Barkod": "8699131876794",
    "Stok Cinsi": "Schafer Home Enza Çeyiz Seti 8 Parça-Mavi",
    "Miktar": "2",
    " Toplam Tutar ": " 17,559.51 "
  },
  {
    "urunId": "62",
    "Stok Kodu": "3ST180-31901-YSL01",
    "Barkod": "8699131876787",
    "Stok Cinsi": "Schafer Home Enza Çeyiz Seti 8 Parça-Yeşil",
    "Miktar": "2",
    " Toplam Tutar ": " 17,559.51 "
  },
  {
    "urunId": "63",
    "Stok Kodu": "3ST851-32903-ANT01",
    "Barkod": "8699131886045",
    "Stok Cinsi": "Schafer Home Zuma Çift Kişilik Pike 200x220 Cm-Antrasit",
    "Miktar": "8",
    " Toplam Tutar ": " 4,677.07 "
  },
  {
    "urunId": "64",
    "Stok Kodu": "3ST851-32903-BEJ01",
    "Barkod": "8699131886052",
    "Stok Cinsi": "Schafer Home Zuma Çift Kişilik Pike 200x220 Cm-Bej",
    "Miktar": "8",
    " Toplam Tutar ": " 4,677.07 "
  },
  {
    "urunId": "65",
    "Stok Kodu": "3ST851-32903-KRM01",
    "Barkod": "8699131886038",
    "Stok Cinsi": "Schafer Home Zuma Çift Kişilik Pike 200x220 Cm-Krem",
    "Miktar": "8",
    " Toplam Tutar ": " 4,677.07 "
  },
  {
    "urunId": "66",
    "Stok Kodu": "1S6035-02001-BEJ01",
    "Barkod": "8699131910474",
    "Stok Cinsi": "Schafer Rapid 6 Kişilik Kahvaltı Takımı 14 Parça-Bej",
    "Miktar": "4",
    " Toplam Tutar ": " 5,482.06 "
  },
  {
    "urunId": "67",
    "Stok Kodu": "1S6035-02001-YSL01",
    "Barkod": "8699131910498",
    "Stok Cinsi": "Schafer Rapid 6 Kişilik Kahvaltı Takımı 14 Parça-Yeşil",
    "Miktar": "4",
    " Toplam Tutar ": " 5,482.06 "
  },
  {
    "urunId": "68",
    "Stok Kodu": "1S3207-02001-KAH01",
    "Barkod": "8699131915622",
    "Stok Cinsi": "Schafer Iconic 4 Kişilik Kahvaltı Takımı 10 Parça-Kahverengi",
    "Miktar": "6",
    " Toplam Tutar ": " 5,476.57 "
  },
  {
    "urunId": "69",
    "Stok Kodu": "1S3207-02001-LAC01",
    "Barkod": "8699131915608",
    "Stok Cinsi": "Schafer Iconic 4 Kişilik Kahvaltı Takımı 10 Parça-Lacivert",
    "Miktar": "6",
    " Toplam Tutar ": " 5,476.57 "
  },
  {
    "urunId": "70",
    "Stok Kodu": "1S3207-02001-YSL02",
    "Barkod": "8699131915615",
    "Stok Cinsi": "Schafer Iconic 4 Kişilik Kahvaltı Takımı 10 Parça-Yeşil02",
    "Miktar": "6",
    " Toplam Tutar ": " 5,476.57 "
  },
  {
    "urunId": "71",
    "Stok Kodu": "1S5718-24012-GLD01",
    "Barkod": "8699131912591",
    "Stok Cinsi": "Schafer Pure Su Seti 24 Parça-Gold",
    "Miktar": "4",
    " Toplam Tutar ": " 18,282.06 "
  },
  {
    "urunId": "72",
    "Stok Kodu": "1S5718-24012-PLT01",
    "Barkod": "8699131912607",
    "Stok Cinsi": "Schafer Pure Su Seti 24 Parça-Platin",
    "Miktar": "4",
    " Toplam Tutar ": " 18,282.06 "
  },
  {
    "urunId": "73",
    "Stok Kodu": "1S6485-08002-GLD01",
    "Barkod": "8699131852835",
    "Stok Cinsi": "Schafer Sorte 6 Kişilik Kahve Fincan Takımı 12 Parça-Gold01",
    "Miktar": "6",
    " Toplam Tutar ": " 10,965.94 "
  },
  {
    "urunId": "74",
    "Stok Kodu": "1S6485-08002-GLD02",
    "Barkod": "8699131852859",
    "Stok Cinsi": "Schafer Sorte 6 Kişilik Kahve Fincan Takımı 12 Parça-Gold02",
    "Miktar": "6",
    " Toplam Tutar ": " 10,965.94 "
  },
  {
    "urunId": "75",
    "Stok Kodu": "1S6485-08002-GLD04",
    "Barkod": "8699131852897",
    "Stok Cinsi": "Schafer Sorte 6 Kişilik Kahve Fincan Takımı 12 Parça-Gold04",
    "Miktar": "6",
    " Toplam Tutar ": " 10,965.94 "
  },
  {
    "urunId": "76",
    "Stok Kodu": "1S6485-08002-GLD05",
    "Barkod": "8699131852934",
    "Stok Cinsi": "Schafer Sorte 6 Kişilik Kahve Fincan Takımı 12 Parça-Gold05",
    "Miktar": "6",
    " Toplam Tutar ": " 10,965.94 "
  },
  {
    "urunId": "77",
    "Stok Kodu": "1S6485-08002-PLT01",
    "Barkod": "8699131852842",
    "Stok Cinsi": "Schafer Sorte 6 Kişilik Kahve Fincan Takımı 12 Parça-Platin01",
    "Miktar": "6",
    " Toplam Tutar ": " 10,965.94 "
  },
  {
    "urunId": "78",
    "Stok Kodu": "1S6485-08002-PLT03",
    "Barkod": "8699131852903",
    "Stok Cinsi": "Schafer Sorte 6 Kişilik Kahve Fincan Takımı 12 Parça-Platin03",
    "Miktar": "6",
    " Toplam Tutar ": " 10,965.94 "
  },
  {
    "urunId": "79",
    "Stok Kodu": "1S6485-08002-PLT04",
    "Barkod": "8699131852927",
    "Stok Cinsi": "Schafer Sorte 6 Kişilik Kahve Fincan Takımı 12 Parça-Platin04",
    "Miktar": "6",
    " Toplam Tutar ": " 10,965.94 "
  },
  {
    "urunId": "80",
    "Stok Kodu": "1S3207-02001-TRC01",
    "Barkod": "8699131903650",
    "Stok Cinsi": "Schafer Iconic 4 Kişilik Kahvaltı Takımı 10 Parça-Turuncu",
    "Miktar": "6",
    " Toplam Tutar ": " 5,480.23 "
  },
  {
    "urunId": "81",
    "Stok Kodu": "1S0450-22012-SIY01",
    "Barkod": "8699131860588",
    "Stok Cinsi": "Schafer Black Stone 3 lü Tava + Sahan Seti-Siyah",
    "Miktar": "100",
    " Toplam Tutar ": " 137,051.43 "
  },
  {
    "urunId": "82",
    "Stok Kodu": "1S1632-19052-PEM02",
    "Barkod": "8699131877630",
    "Stok Cinsi": "Schafer Easy Mini Hazneli Rende 1 Parça-Pembe",
    "Miktar": "12",
    " Toplam Tutar ": " 1,425.74 "
  },
  {
    "urunId": "83",
    "Stok Kodu": "1S1632-19034-NON01",
    "Barkod": "8699131877654",
    "Stok Cinsi": "Schafer Easy Salata Maşası 2 Parça-Pembe/Vizon",
    "Miktar": "12",
    " Toplam Tutar ": " 1,425.74 "
  },
  {
    "urunId": "84",
    "Stok Kodu": "1S1632-19066-PEM01",
    "Barkod": "8699131825556",
    "Stok Cinsi": "Schafer Easy Soyacak 1 Parça-Pembe/Vizon-1",
    "Miktar": "12",
    " Toplam Tutar ": " 1,316.02 "
  },
  {
    "urunId": "85",
    "Stok Kodu": "1S1632-19066-PEM02",
    "Barkod": "8699131825563",
    "Stok Cinsi": "Schafer Easy Soyacak 1 Parça-Pembe/Vizon-2",
    "Miktar": "12",
    " Toplam Tutar ": " 1,316.02 "
  },
  {
    "urunId": "86",
    "Stok Kodu": "1S1632-19039-PEM01",
    "Barkod": "8699131825730",
    "Stok Cinsi": "Schafer Easy Ölçü Kabı Seti 4 Parça-Pembe",
    "Miktar": "12",
    " Toplam Tutar ": " 1,096.59 "
  },
  {
    "urunId": "87",
    "Stok Kodu": "1S1632-19052-VIZ05",
    "Barkod": "8699131877685",
    "Stok Cinsi": "Schafer Easy Mini Sarımsak Rendesi 2 Parça-Vizon",
    "Miktar": "12",
    " Toplam Tutar ": " 2,742.31 "
  },
  {
    "urunId": "88",
    "Stok Kodu": "1S1632-19052-PEM03",
    "Barkod": "8699131877715",
    "Stok Cinsi": "Schafer Easy Mini Sarımsak Rendesi 2 Parça-Pembe",
    "Miktar": "12",
    " Toplam Tutar ": " 2,742.31 "
  },
  {
    "urunId": "89",
    "Stok Kodu": "1S1632-19002-PEM01",
    "Barkod": "8699131877692",
    "Stok Cinsi": "Schafer Easy Oklava 1 Parça-Pembe",
    "Miktar": "6",
    " Toplam Tutar ": " 2,194.01 "
  },
  {
    "urunId": "90",
    "Stok Kodu": "1S1632-19002-VIZ01",
    "Barkod": "8699131877708",
    "Stok Cinsi": "Schafer Easy Oklava 1 Parça-Vizon",
    "Miktar": "6",
    " Toplam Tutar ": " 2,194.01 "
  },
  {
    "urunId": "91",
    "Stok Kodu": "1S1632-19003-PEM01",
    "Barkod": "8699131825549",
    "Stok Cinsi": "Schafer Easy Bıçak Bileyici 1 Parça-Pembe/Vizon",
    "Miktar": "12",
    " Toplam Tutar ": " 4,388.02 "
  },
  {
    "urunId": "92",
    "Stok Kodu": "1S1632-19052-VIZ03",
    "Barkod": "8699131877616",
    "Stok Cinsi": "Schafer Easy Çift Taraflı Hazneli Rende-Vizon",
    "Miktar": "12",
    " Toplam Tutar ": " 4,388.02 "
  },
  {
    "urunId": "93",
    "Stok Kodu": "1S1632-19012-VIZ01",
    "Barkod": "8699131825624",
    "Stok Cinsi": "Schafer Easy Değirmen 1 Parça-Vizon",
    "Miktar": "12",
    " Toplam Tutar ": " 6,571.89 "
  },
  {
    "urunId": "94",
    "Stok Kodu": "1S1632-19037-PEM01",
    "Barkod": "8699131825648",
    "Stok Cinsi": "Schafer Easy Pasta Hazırlık Seti 4 Parça-Pembe",
    "Miktar": "12",
    " Toplam Tutar ": " 6,571.89 "
  },
  {
    "urunId": "95",
    "Stok Kodu": "1S1632-12006-PEM01",
    "Barkod": "8699131825679",
    "Stok Cinsi": "Schafer Easy Doğrayıcı Seti 4 Parça-Pembe",
    "Miktar": "12",
    " Toplam Tutar ": " 5,485.17 "
  },
  {
    "urunId": "96",
    "Stok Kodu": "1S1632-17001-PEM01",
    "Barkod": "8699131825501",
    "Stok Cinsi": "Schafer Easy Narenciğe Sıkacağı 3 Parça-Pembe/Vizon",
    "Miktar": "12",
    " Toplam Tutar ": " 2,413.17 "
  },
  {
    "urunId": "97",
    "Stok Kodu": "1S1632-12003-PEM01",
    "Barkod": "8699131825471",
    "Stok Cinsi": "Schafer Easy Mutfak Makası 1 Parça-Pembe/Vizon",
    "Miktar": "12",
    " Toplam Tutar ": " 3,839.45 "
  },
  {
    "urunId": "98",
    "Stok Kodu": "1S1632-12001-PEM02",
    "Barkod": "8699131877753",
    "Stok Cinsi": "Schafer Easy Servis Seti 4 Parça-Pembe",
    "Miktar": "12",
    " Toplam Tutar ": " 16,446.17 "
  },
  {
    "urunId": "99",
    "Stok Kodu": "1S1632-12002-PEM02",
    "Barkod": "8699131825495",
    "Stok Cinsi": "Schafer Easy Standlı Gadget Seti 6 Parça-Pembe/Vizon",
    "Miktar": "6",
    " Toplam Tutar ": " 4,383.09 "
  },
  {
    "urunId": "100",
    "Stok Kodu": "1S1632-33002-PEM01",
    "Barkod": "8699131877562",
    "Stok Cinsi": "Schafer Easy Ekmek Sepeti 1 Parça-Pembe",
    "Miktar": "6",
    " Toplam Tutar ": " 2,468.30 "
  },
  {
    "urunId": "101",
    "Stok Kodu": "1S1632-33002-VIZ01",
    "Barkod": "8699131877593",
    "Stok Cinsi": "Schafer Easy Ekmek Sepeti 1 Parça-Vizon",
    "Miktar": "6",
    " Toplam Tutar ": " 2,468.30 "
  },
  {
    "urunId": "102",
    "Stok Kodu": "1S1632-19004-NON01",
    "Barkod": "8699131877760",
    "Stok Cinsi": "Schafer Easy Paket Mandalı 9 Parça-Pembe/Vizon",
    "Miktar": "12",
    " Toplam Tutar ": " 2,193.74 "
  },
  {
    "urunId": "103",
    "Stok Kodu": "1S1632-19052-VIZ04",
    "Barkod": "8699131877647",
    "Stok Cinsi": "Schafer Easy Mini Hazneli Rende 1 Parça-Vizon",
    "Miktar": "24",
    " Toplam Tutar ": " 2,851.47 "
  },
  {
    "urunId": "104",
    "Stok Kodu": "1S1632-19032-VIZ01",
    "Barkod": "8699131877678",
    "Stok Cinsi": "Schafer Easy Limon Sıkacağı 1 Parça-Vizon",
    "Miktar": "12",
    " Toplam Tutar ": " 3,290.88 "
  },
  {
    "urunId": "105",
    "Stok Kodu": "1S1632-19032-PEM01",
    "Barkod": "8699131877661",
    "Stok Cinsi": "Schafer Easy Limon Sıkacağ 1 Parça-Pembe",
    "Miktar": "12",
    " Toplam Tutar ": " 3,290.88 "
  },
  {
    "urunId": "106",
    "Stok Kodu": "1S1632-12005-PEM01",
    "Barkod": "8699131825587",
    "Stok Cinsi": "Schafer Easy Çok Amaçlı Açacak 1 Parça-Pembe/vizon",
    "Miktar": "12",
    " Toplam Tutar ": " 1,974.31 "
  },
  {
    "urunId": "107",
    "Stok Kodu": "1S1632-19038-NON01",
    "Barkod": "8699131877623",
    "Stok Cinsi": "Schafer Easy Nihale 1 Parça-Pembe/Vizon",
    "Miktar": "12",
    " Toplam Tutar ": " 1,754.88 "
  },
  {
    "urunId": "108",
    "Stok Kodu": "1S1632-19066-PEM04",
    "Barkod": "8699131825655",
    "Stok Cinsi": "Schafer Easy Soyacak 1 Parça-Pembe",
    "Miktar": "12",
    " Toplam Tutar ": " 657.74 "
  },
  {
    "urunId": "109",
    "Stok Kodu": "1S1632-19066-VIZ01",
    "Barkod": "8699131825662",
    "Stok Cinsi": "Schafer Easy Soyacak 1 Parça-Vizon",
    "Miktar": "12",
    " Toplam Tutar ": " 657.74 "
  },
  {
    "urunId": "110",
    "Stok Kodu": "1S1632-19051-PEM01",
    "Barkod": "8699131825570",
    "Stok Cinsi": "Schafer Easy Pizza Kesici 1 Parça-Pembe/Vizon",
    "Miktar": "12",
    " Toplam Tutar ": " 1,645.17 "
  },
  {
    "urunId": "111",
    "Stok Kodu": "1S1632-19018-VIZ01",
    "Barkod": "8699131877746",
    "Stok Cinsi": "Schafer Easy Kapaklı Silikon Fırça 3 Parça-Vizon",
    "Miktar": "12",
    " Toplam Tutar ": " 1,645.17 "
  },
  {
    "urunId": "112",
    "Stok Kodu": "1S1632-19018-PEM01",
    "Barkod": "8699131877722",
    "Stok Cinsi": "Schafer Easy Kapaklı Silikon Fırça 3 Parça-Pembe",
    "Miktar": "12",
    " Toplam Tutar ": " 1,645.17 "
  },
  {
    "urunId": "113",
    "Stok Kodu": "1S2413-13001-INX02",
    "Barkod": "8699131907337",
    "Stok Cinsi": "Schafer Gurme Süzgeçli Makarna Tenceresi 2 Parça-Inox",
    "Miktar": "12",
    " Toplam Tutar ": " 10,960.46 "
  },
  {
    "urunId": "114",
    "Stok Kodu": "1S6468-15001-GRI01",
    "Barkod": "8699131795668",
    "Stok Cinsi": "Schafer Solea Çaydanlık Takımı 3 Parça-Gri",
    "Miktar": "12",
    " Toplam Tutar ": " 10,960.46 "
  },
  {
    "urunId": "115",
    "Stok Kodu": "1S6468-15001-KRM01",
    "Barkod": "8699131795644",
    "Stok Cinsi": "Schafer Solea Çaydanlık Takımı 3 Parça-Krem",
    "Miktar": "12",
    " Toplam Tutar ": " 10,960.46 "
  },
  {
    "urunId": "116",
    "Stok Kodu": "2SE043-25002-INX01",
    "Barkod": "8699131877272",
    "Stok Cinsi": "Schafer Brew Master Filtre Kahve Makinesi-Inox",
    "Miktar": "4",
    " Toplam Tutar ": " 9,139.20 "
  },
  {
    "urunId": "117",
    "Stok Kodu": "1S214-21008-SIY01",
    "Barkod": "8699131258873",
    "Stok Cinsi": "Schafer Fry Çıtır Kızartma Tenceresi 22 Cm 3 Parça-Siyah",
    "Miktar": "8",
    " Toplam Tutar ": " 6,575.54 "
  },
  {
    "urunId": "118",
    "Stok Kodu": "SHF66579",
    "Barkod": "8699131666579",
    "Stok Cinsi": "Schafer Fry Çıtır Kızartma Tenceresi 22 Cm 3 Parça-Kırmızı",
    "Miktar": "8",
    " Toplam Tutar ": " 6,575.54 "
  },
  {
    "urunId": "119",
    "Stok Kodu": "SHF68636",
    "Barkod": "8699131268636",
    "Stok Cinsi": "Schafer Fry Çıtır Kızartma Tenceresi 22 Cm 3 Parça-Lacivert",
    "Miktar": "8",
    " Toplam Tutar ": " 6,575.54 "
  },
  {
    "urunId": "120",
    "Stok Kodu": "1S4223-19024-SIY01",
    "Barkod": "8699131751831",
    "Stok Cinsi": "Schafer Lucas Çelik Karıştırma Kabı 24 Cm 4 Parça-Siyah",
    "Miktar": "12",
    " Toplam Tutar ": " 7,669.03 "
  },
  {
    "urunId": "121",
    "Stok Kodu": "1S5710-27002-SIY01",
    "Barkod": "8699131912874",
    "Stok Cinsi": "Schafer Pratikmatik 4 Parça Düdüklü Tencere Seti 4+6,5 L-Siyah/Gri",
    "Miktar": "6",
    " Toplam Tutar ": " 21,937.37 "
  },
  {
    "urunId": "122",
    "Stok Kodu": "1S2041-12001-KRM01",
    "Barkod": "8699131825853",
    "Stok Cinsi": "Schafer Forge Servis Seti 6 Parça-Krem",
    "Miktar": "12",
    " Toplam Tutar ": " 12,057.60 "
  },
  {
    "urunId": "123",
    "Stok Kodu": "1S2043-22002-SIY01",
    "Barkod": "8699131835128",
    "Stok Cinsi": "Schafer Fish Pan Kapaklı Balık Tavası 32 Cm 2 Parça",
    "Miktar": "18",
    " Toplam Tutar ": " 16,440.69 "
  },
  {
    "urunId": "124",
    "Stok Kodu": "2SE541-25001-KRM02",
    "Barkod": "8699131837030",
    "Stok Cinsi": "Schafer Optimal Elektrikli Cam Çay Makinesi-Krem",
    "Miktar": "8",
    " Toplam Tutar ": " 16,084.11 "
  },
  {
    "urunId": "125",
    "Stok Kodu": "2SE541-25001-SIY02",
    "Barkod": "8699131837054",
    "Stok Cinsi": "Schafer Optimal Elektrikli Cam Çay Makinesi-Siyah",
    "Miktar": "8",
    " Toplam Tutar ": " 16,084.11 "
  },
  {
    "urunId": "126",
    "Stok Kodu": "1S1643-22005-ANT01",
    "Barkod": "8699131909133",
    "Stok Cinsi": "Schafer Everyday 3 Lü Tencere Seti 6 Parça-Antrasit",
    "Miktar": "8",
    " Toplam Tutar ": " 21,935.54 "
  },
  {
    "urunId": "127",
    "Stok Kodu": "1S1643-22005-KRM01",
    "Barkod": "8699131909140",
    "Stok Cinsi": "Schafer Everyday 3 Lü Tencere Seti 6 Parça-Krem",
    "Miktar": "8",
    " Toplam Tutar ": " 21,935.54 "
  },
  {
    "urunId": "128",
    "Stok Kodu": "1S4223-19024-SIY02",
    "Barkod": "8699131751848",
    "Stok Cinsi": "Schafer Lucas Çelik Karıştırma Kabı 16/20/24 Cm 9 Parça-Siyah",
    "Miktar": "12",
    " Toplam Tutar ": " 13,154.74 "
  },
  {
    "urunId": "129",
    "Stok Kodu": "1S2413-13001-INX03",
    "Barkod": "8699131909126",
    "Stok Cinsi": "Schafer Gurme Kuşkonmaz ve Kızartma Tenceresi 3 Parça-Inox",
    "Miktar": "8",
    " Toplam Tutar ": " 12,426.97 "
  },
  {
    "urunId": "130",
    "Stok Kodu": "1S1643-22007-ANT01",
    "Barkod": "8699131909157",
    "Stok Cinsi": "Schafer Everyday 3 Lü Sahan Seti 6 Parça-Antrasit",
    "Miktar": "8",
    " Toplam Tutar ": " 18,278.40 "
  },
  {
    "urunId": "131",
    "Stok Kodu": "1S1643-22007-KRM01",
    "Barkod": "8699131909164",
    "Stok Cinsi": "Schafer Everyday 3 Lü Sahan Seti 6 Parça-Krem",
    "Miktar": "8",
    " Toplam Tutar ": " 18,278.40 "
  },
  {
    "urunId": "132",
    "Stok Kodu": "2SE504-25002-KMZ02",
    "Barkod": "8699131902455",
    "Stok Cinsi": "Schafer Nesil Plus Közde Türk Kahve Makinesi-Kırmızı",
    "Miktar": "6",
    " Toplam Tutar ": " 10,965.94 "
  },
  {
    "urunId": "133",
    "Stok Kodu": "2SE504-25002-KRM02",
    "Barkod": "8699131902462",
    "Stok Cinsi": "Schafer Nesil Plus Közde Türk Kahve Makinesi-Krem",
    "Miktar": "6",
    " Toplam Tutar ": " 10,965.94 "
  },
  {
    "urunId": "134",
    "Stok Kodu": "2SE504-25002-ROS02",
    "Barkod": "8699131902479",
    "Stok Cinsi": "Schafer Nesil Plus Közde Türk Kahve Makinesi-Rosegold",
    "Miktar": "6",
    " Toplam Tutar ": " 10,965.94 "
  },
  {
    "urunId": "135",
    "Stok Kodu": "2SE504-25002-SIY02",
    "Barkod": "8699131902448",
    "Stok Cinsi": "Schafer Nesil Plus Közde Türk Kahve Makinesi-Siyah",
    "Miktar": "6",
    " Toplam Tutar ": " 10,965.94 "
  },
  {
    "urunId": "136",
    "Stok Kodu": "2SE713-25001-INX01",
    "Barkod": "8699131876268",
    "Stok Cinsi": "Schafer Teaform Plus Paslanmaz Çay Makinesi-Inox",
    "Miktar": "8",
    " Toplam Tutar ": " 23,619.05 "
  },
  {
    "urunId": "137",
    "Stok Kodu": "2SE122-25007-INX01",
    "Barkod": "8699131874165",
    "Stok Cinsi": "Schafer DigiChef Tost ve Izgara Makinesi-Inox",
    "Miktar": "4",
    " Toplam Tutar ": " 26,666.67 "
  },
  {
    "urunId": "138",
    "Stok Kodu": "2SE713-25001-SIY02",
    "Barkod": "8699131876282",
    "Stok Cinsi": "Schafer Teaform Plus Paslanmaz Çay Makinesi-Siyah",
    "Miktar": "12",
    " Toplam Tutar ": " 38,285.71 "
  },
  {
    "urunId": "139",
    "Stok Kodu": "2SE042-25021-GRI01",
    "Barkod": "8699131874127",
    "Stok Cinsi": "Schafer Body Form Vücut Analiz Tartısı",
    "Miktar": "10",
    " Toplam Tutar ": " 9,761.90 "
  },
  {
    "urunId": "140",
    "Stok Kodu": "2SE718-25001-INX01",
    "Barkod": "8699131911822",
    "Stok Cinsi": "Schafer TeaNest Dijital Cam Çay Makinesi-Inox",
    "Miktar": "8",
    " Toplam Tutar ": " 38,095.24 "
  },
  {
    "urunId": "141",
    "Stok Kodu": "2SE184-25020-INX04",
    "Barkod": "8699131912621",
    "Stok Cinsi": "Schafer Kea Elektro Mega Ev Aletleri 4 Lü Set-Inox04 (Teaform Plus)",
    "Miktar": "6",
    " Toplam Tutar ": " 62,857.14 "
  },
  {
    "urunId": "142",
    "Stok Kodu": "1S061-25002-SIY01",
    "Barkod": "8699131934210",
    "Stok Cinsi": "Schafer Barista Öğütücülü Filtre Kahve Makinesi-Siyah",
    "Miktar": "2",
    " Toplam Tutar ": " 12,380.95 "
  },
  {
    "urunId": "143",
    "Stok Kodu": "2SE587-25014-BYZ01",
    "Barkod": "8699131912171",
    "Stok Cinsi": "Schafer Prochef DigiMix Dijital Stand Mikser 5 L-Beyaz",
    "Miktar": "6",
    " Toplam Tutar ": " 37,142.86 "
  },
  {
    "urunId": "144",
    "Stok Kodu": "2SE587-25014-SIY01",
    "Barkod": "8699131912195",
    "Stok Cinsi": "Schafer Prochef DigiMix Dijital Stand Mikser 5 L-Siyah",
    "Miktar": "6",
    " Toplam Tutar ": " 37,142.86 "
  },
  {
    "urunId": "145",
    "Stok Kodu": "2SE583-25014-ANT02",
    "Barkod": "8699131900857",
    "Stok Cinsi": "Schafer Prochef Touch Stand Mikser 5 L-Spray Boyalı Antrasit",
    "Miktar": "6",
    " Toplam Tutar ": " 28,571.43 "
  },
  {
    "urunId": "146",
    "Stok Kodu": "2SE583-25014-GUM01",
    "Barkod": "8699131900840",
    "Stok Cinsi": "Schafer Prochef Touch Stand Mikser 5 L-Spray Boyalı Gümüş",
    "Miktar": "6",
    " Toplam Tutar ": " 28,571.43 "
  },
  {
    "urunId": "147",
    "Stok Kodu": "2SE785-25031-GUM01",
    "Barkod": "8699131910931",
    "Stok Cinsi": "Schafer Vortex Toz Torbasız Elektrikli Süpürge-Gümüş/Siyah",
    "Miktar": "6",
    " Toplam Tutar ": " 28,571.43 "
  },
  {
    "urunId": "148",
    "Stok Kodu": "2SE785-25031-KRM01",
    "Barkod": "8699131911280",
    "Stok Cinsi": "Schafer Vortex Toz Torbasız Elektrikli Süpürge-Krem/Siyah",
    "Miktar": "6",
    " Toplam Tutar ": " 28,571.43 "
  },
  {
    "urunId": "149",
    "Stok Kodu": "2SE786-25031-ANT01",
    "Barkod": "8699131881460",
    "Stok Cinsi": "Schafer Vakum S Dikey Elektrikli Süpürge-Antrasit",
    "Miktar": "36",
    " Toplam Tutar ": " 68,571.43 "
  },
  {
    "urunId": "150",
    "Stok Kodu": "2SE816-25017-BRZ01",
    "Barkod": "8699131762172",
    "Stok Cinsi": "Schafer Waffle Express Waffle Makinesi-Bronz",
    "Miktar": "12",
    " Toplam Tutar ": " 22,857.14 "
  },
  {
    "urunId": "151",
    "Stok Kodu": "2SE816-25017-FUM01",
    "Barkod": "8699131762684",
    "Stok Cinsi": "Schafer Waffle Express Waffle Makinesi-Füme",
    "Miktar": "12",
    " Toplam Tutar ": " 22,857.14 "
  },
  {
    "urunId": "152",
    "Stok Kodu": "2SE816-25017-KRM01",
    "Barkod": "8699131762219",
    "Stok Cinsi": "Schafer Waffle Express Waffle Makinesi-Krem",
    "Miktar": "12",
    " Toplam Tutar ": " 22,857.14 "
  },
  {
    "urunId": "153",
    "Stok Kodu": "2SE705-26001-KRM01",
    "Barkod": "8699131906392",
    "Stok Cinsi": "Schafer Tee Haus Yeni Nesil Elektrikli Cam Semaver-Krem",
    "Miktar": "4",
    " Toplam Tutar ": " 15,238.10 "
  },
  {
    "urunId": "154",
    "Stok Kodu": "2SE705-26001-ROS01",
    "Barkod": "8699131906415",
    "Stok Cinsi": "Schafer Tee Haus Yeni Nesil Elektrikli Cam Semaver-Rosegold",
    "Miktar": "4",
    " Toplam Tutar ": " 15,238.10 "
  },
  {
    "urunId": "155",
    "Stok Kodu": "2SE705-26001-SIY01",
    "Barkod": "8699131906422",
    "Stok Cinsi": "Schafer Tee Haus Yeni Nesil Elektrikli Cam Semaver-Siyah",
    "Miktar": "4",
    " Toplam Tutar ": " 15,238.10 "
  },
  {
    "urunId": "156",
    "Stok Kodu": "2SE085-25010-ANT01",
    "Barkod": "8699131905609",
    "Stok Cinsi": "Schafer Chef Blend Çubuk Blender-Antrasit/Siyah",
    "Miktar": "12",
    " Toplam Tutar ": " 16,000.00 "
  },
  {
    "urunId": "157",
    "Stok Kodu": "2SE085-25010-KRM01",
    "Barkod": "8699131905586",
    "Stok Cinsi": "Schafer Chef Blend Çubuk Blender-Krem/Siyah",
    "Miktar": "12",
    " Toplam Tutar ": " 16,000.00 "
  },
  {
    "urunId": "158",
    "Stok Kodu": "2SE085-25010-SIY01",
    "Barkod": "8699131753804",
    "Stok Cinsi": "Schafer Chef Blend Çubuk Blender-Siyah/Rosegold",
    "Miktar": "12",
    " Toplam Tutar ": " 16,000.00 "
  },
  {
    "urunId": "159",
    "Stok Kodu": "2SE388-25002-INX01",
    "Barkod": "8699131877265",
    "Stok Cinsi": "Schafer Coffee Viva Filtre Kahve Makinesi-Inox",
    "Miktar": "8",
    " Toplam Tutar ": " 16,761.90 "
  },
  {
    "urunId": "160",
    "Stok Kodu": "1S1644-02001-SIY01",
    "Barkod": "8699131912409",
    "Stok Cinsi": "Schafer Evelynn Kahvaltı Takımı 32 Parça-Siyah01",
    "Miktar": "6",
    " Toplam Tutar ": " 17,915.58 "
  },
  {
    "urunId": "161",
    "Stok Kodu": "1S6457-02001-LAC01",
    "Barkod": "8699131756805",
    "Stok Cinsi": "Schafer Swanky Kahvaltı Takımı 32 Parça-Lacivert01",
    "Miktar": "6",
    " Toplam Tutar ": " 23,372.73 "
  },
  {
    "urunId": "162",
    "Stok Kodu": "1S6457-02001-KMZ01",
    "Barkod": "8699131756829",
    "Stok Cinsi": "Schafer Swanky Kahvaltı Takımı 32 Parça-Kırmızı01",
    "Miktar": "6",
    " Toplam Tutar ": " 18,697.40 "
  },
  {
    "urunId": "163",
    "Stok Kodu": "1S1644-02001-SIY02",
    "Barkod": "8699131912416",
    "Stok Cinsi": "Schafer Evelynn Kahvaltı Takımı 32 Parça-Siyah02",
    "Miktar": "6",
    " Toplam Tutar ": " 17,918.18 "
  },
  {
    "urunId": "164",
    "Stok Kodu": "1S1644-02001-YSL01",
    "Barkod": "8699131912423",
    "Stok Cinsi": "Schafer Evelynn Kahvaltı Takımı 32 Parça-Yeşil",
    "Miktar": "6",
    " Toplam Tutar ": " 17,918.18 "
  },
  {
    "urunId": "165",
    "Stok Kodu": "*1S0848-21001-KRM01",
    "Barkod": "8699131881118",
    "Stok Cinsi": "",
    "Miktar": "6",
    " Toplam Tutar ": " -   "
  },
  {
    "urunId": "166",
    "Stok Kodu": "*1S0848-21001-KRM02",
    "Barkod": "8699131881163",
    "Stok Cinsi": "",
    "Miktar": "6",
    " Toplam Tutar ": " -   "
  },
  {
    "urunId": "167",
    "Stok Kodu": "*1S0848-21001-KRM03",
    "Barkod": "8699131881125",
    "Stok Cinsi": "",
    "Miktar": "6",
    " Toplam Tutar ": " -   "
  },
  {
    "urunId": "168",
    "Stok Kodu": "*1S0848-21001-KRM04",
    "Barkod": "8699131881132",
    "Stok Cinsi": "",
    "Miktar": "6",
    " Toplam Tutar ": " -   "
  },
  {
    "urunId": "169",
    "Stok Kodu": "*1S0848-21001-KRM05",
    "Barkod": "8699131881149",
    "Stok Cinsi": "",
    "Miktar": "6",
    " Toplam Tutar ": " -   "
  },
  {
    "urunId": "170",
    "Stok Kodu": "*1S0848-21001-KRM06",
    "Barkod": "8699131881156",
    "Stok Cinsi": "",
    "Miktar": "6",
    " Toplam Tutar ": " -   "
  },
  {
    "urunId": "171",
    "Stok Kodu": "*1S0848-21002-KRM01",
    "Barkod": "8699131881200",
    "Stok Cinsi": "",
    "Miktar": "6",
    " Toplam Tutar ": " -   "
  },
  {
    "urunId": "172",
    "Stok Kodu": "*1S0848-21002-KRM02",
    "Barkod": "8699131881217",
    "Stok Cinsi": "",
    "Miktar": "6",
    " Toplam Tutar ": " -   "
  },
  {
    "urunId": "173",
    "Stok Kodu": "*1S0848-21002-KRM03",
    "Barkod": "8699131881224",
    "Stok Cinsi": "",
    "Miktar": "6",
    " Toplam Tutar ": " -   "
  },
  {
    "urunId": "174",
    "Stok Kodu": "*1S0848-21002-KRM04",
    "Barkod": "8699131881231",
    "Stok Cinsi": "",
    "Miktar": "6",
    " Toplam Tutar ": " -   "
  },
  {
    "urunId": "175",
    "Stok Kodu": "*1S0848-21002-KRM05",
    "Barkod": "8699131901007",
    "Stok Cinsi": "",
    "Miktar": "6",
    " Toplam Tutar ": " -   "
  },
  {
    "urunId": "176",
    "Stok Kodu": "*1S0848-21005-KRM01",
    "Barkod": "8699131881187",
    "Stok Cinsi": "",
    "Miktar": "6",
    " Toplam Tutar ": " -   "
  },
  {
    "urunId": "177",
    "Stok Kodu": "*1S0848-21005-KRM02",
    "Barkod": "8699131881194",
    "Stok Cinsi": "",
    "Miktar": "6",
    " Toplam Tutar ": " -   "
  },
  {
    "urunId": "178",
    "Stok Kodu": "*1S0848-30035-KRM01",
    "Barkod": "8699131901021",
    "Stok Cinsi": "",
    "Miktar": "6",
    " Toplam Tutar ": " -   "
  },
  {
    "urunId": "179",
    "Stok Kodu": "1S0848-21002-KRM05",
    "Barkod": "8699131901007",
    "Stok Cinsi": "Schafer Ceramoni Seramik Krep Tava 26 Cm-Krem",
    "Miktar": "12",
    " Toplam Tutar ": " 14,285.71 "
  },
  {
    "urunId": "180",
    "Stok Kodu": "1S0848-21002-KRM03",
    "Barkod": "8699131881224",
    "Stok Cinsi": "Schafer Ceramoni Seramik Tava 28 Cm-Krem",
    "Miktar": "12",
    " Toplam Tutar ": " 18,285.71 "
  },
  {
    "urunId": "181",
    "Stok Kodu": "1S0848-21002-KRM04",
    "Barkod": "8699131881231",
    "Stok Cinsi": "Schafer Ceramoni Seramik Tava 30 Cm-Krem",
    "Miktar": "12",
    " Toplam Tutar ": " 19,542.86 "
  },
  {
    "urunId": "182",
    "Stok Kodu": "1S0848-21005-KRM02",
    "Barkod": "8699131881194",
    "Stok Cinsi": "Schafer Ceramoni Seramik Kapaklı Sahan 22 Cm-Krem",
    "Miktar": "12",
    " Toplam Tutar ": " 24,000.00 "
  },
  {
    "urunId": "183",
    "Stok Kodu": "1S0848-21001-KRM05",
    "Barkod": "8699131881149",
    "Stok Cinsi": "Schafer Ceramoni Seramik Basık Tencere 28 Cm-Krem",
    "Miktar": "12",
    " Toplam Tutar ": " 32,000.00 "
  },
  {
    "urunId": "184",
    "Stok Kodu": "1S0848-21001-KRM06",
    "Barkod": "8699131881156",
    "Stok Cinsi": "Schafer Ceramoni Seramik Basık Tencere 30 Cm-Krem",
    "Miktar": "12",
    " Toplam Tutar ": " 33,257.14 "
  },
  {
    "urunId": "185",
    "Stok Kodu": "1S0848-21001-KRM01",
    "Barkod": "8699131881118",
    "Stok Cinsi": "Schafer Ceramoni Seramik Derin Tencere 20 Cm-Krem",
    "Miktar": "12",
    " Toplam Tutar ": " 27,314.29 "
  },
  {
    "urunId": "186",
    "Stok Kodu": "1S0848-21001-KRM03",
    "Barkod": "8699131881125",
    "Stok Cinsi": "Schafer Ceramoni Seramik Basık Tencere 24 Cm-Krem",
    "Miktar": "12",
    " Toplam Tutar ": " 28,571.43 "
  },
  {
    "urunId": "187",
    "Stok Kodu": "1S0848-21002-KRM02",
    "Barkod": "8699131881217",
    "Stok Cinsi": "Schafer Ceramoni Seramik Tava 26 Cm-Krem",
    "Miktar": "12",
    " Toplam Tutar ": " 17,142.86 "
  },
  {
    "urunId": "188",
    "Stok Kodu": "1S0848-21001-KRM04",
    "Barkod": "8699131881132",
    "Stok Cinsi": "Schafer Ceramoni Seramik Basık Tencere 26 Cm-Krem",
    "Miktar": "12",
    " Toplam Tutar ": " 29,828.57 "
  },
  {
    "urunId": "189",
    "Stok Kodu": "1S0848-21001-KRM02",
    "Barkod": "8699131881163",
    "Stok Cinsi": "Schafer Ceramoni Seramik Derin Tencere 24 Cm-Krem",
    "Miktar": "12",
    " Toplam Tutar ": " 30,857.14 "
  },
  {
    "urunId": "190",
    "Stok Kodu": "1S0848-30035-KRM01",
    "Barkod": "8699131901021",
    "Stok Cinsi": "Schafer Ceramoni Seramik Sütlük 16 Cm-Krem",
    "Miktar": "12",
    " Toplam Tutar ": " 18,171.43 "
  },
  {
    "urunId": "191",
    "Stok Kodu": "1S0848-21005-KRM01",
    "Barkod": "8699131881187",
    "Stok Cinsi": "Schafer Ceramoni Seramik Kapaklı Sahan 20 Cm-Krem",
    "Miktar": "12",
    " Toplam Tutar ": " 23,200.00 "
  },
  {
    "urunId": "192",
    "Stok Kodu": "1S0848-21002-KRM01",
    "Barkod": "8699131881200",
    "Stok Cinsi": "Schafer Ceramoni Seramik Tava 24 Cm-Krem",
    "Miktar": "12",
    " Toplam Tutar ": " 16,000.00 "
  },
  {
    "urunId": "193",
    "Stok Kodu": "*1S2817-13001-INX01",
    "Barkod": "8699131623688",
    "Stok Cinsi": "",
    "Miktar": "6",
    " Toplam Tutar ": " -   "
  },
  {
    "urunId": "194",
    "Stok Kodu": "*1S2817-13001-INX02",
    "Barkod": "8699131957806",
    "Stok Cinsi": "",
    "Miktar": "6",
    " Toplam Tutar ": " -   "
  },
  {
    "urunId": "195",
    "Stok Kodu": "*1S2817-13001-INX03",
    "Barkod": "8699131614723",
    "Stok Cinsi": "",
    "Miktar": "6",
    " Toplam Tutar ": " -   "
  },
  {
    "urunId": "196",
    "Stok Kodu": "*1S2817-13001-INX04",
    "Barkod": "8699131095645",
    "Stok Cinsi": "",
    "Miktar": "6",
    " Toplam Tutar ": " -   "
  },
  {
    "urunId": "197",
    "Stok Kodu": "*1S2817-13001-INX08",
    "Barkod": "8699131506943",
    "Stok Cinsi": "",
    "Miktar": "6",
    " Toplam Tutar ": " -   "
  },
  {
    "urunId": "198",
    "Stok Kodu": "*1S2817-13001-INX05",
    "Barkod": "8699131458112",
    "Stok Cinsi": "",
    "Miktar": "6",
    " Toplam Tutar ": " -   "
  },
  {
    "urunId": "199",
    "Stok Kodu": "*1S2817-13001-INX09",
    "Barkod": "8699131384428",
    "Stok Cinsi": "",
    "Miktar": "6",
    " Toplam Tutar ": " -   "
  },
  {
    "urunId": "200",
    "Stok Kodu": "*1S2817-13001-INX10",
    "Barkod": "8699131591673",
    "Stok Cinsi": "",
    "Miktar": "6",
    " Toplam Tutar ": " -   "
  },
  {
    "urunId": "201",
    "Stok Kodu": "*1S2817-13001-INX11",
    "Barkod": "8699131330470",
    "Stok Cinsi": "",
    "Miktar": "6",
    " Toplam Tutar ": " -   "
  },
  {
    "urunId": "202",
    "Stok Kodu": "*1S2817-13004-INX01",
    "Barkod": "8699131382530",
    "Stok Cinsi": "",
    "Miktar": "6",
    " Toplam Tutar ": " -   "
  },
  {
    "urunId": "203",
    "Stok Kodu": "*1S2817-13004-INX02",
    "Barkod": "8699131807200",
    "Stok Cinsi": "",
    "Miktar": "6",
    " Toplam Tutar ": " -   "
  },
  {
    "urunId": "204",
    "Stok Kodu": "*1S2817-13007-INX06",
    "Barkod": "8699131357972",
    "Stok Cinsi": "",
    "Miktar": "6",
    " Toplam Tutar ": " -   "
  },
  {
    "urunId": "205",
    "Stok Kodu": "*1S2817-13007-INX07",
    "Barkod": "8699131357323",
    "Stok Cinsi": "",
    "Miktar": "6",
    " Toplam Tutar ": " -   "
  },
  {
    "urunId": "206",
    "Stok Kodu": "*1S2817-13007-INX08",
    "Barkod": "8699131588543",
    "Stok Cinsi": "",
    "Miktar": "6",
    " Toplam Tutar ": " -   "
  },
  {
    "urunId": "207",
    "Stok Kodu": "*1S2817-13009-INX01",
    "Barkod": "8699131872802",
    "Stok Cinsi": "",
    "Miktar": "6",
    " Toplam Tutar ": " -   "
  },
  {
    "urunId": "208",
    "Stok Kodu": "1S2817-13004-INX01",
    "Barkod": "8699131382530",
    "Stok Cinsi": "Schafer Held Çelik Kaçerola 14 Cm 1 Parça-Inox",
    "Miktar": "12",
    " Toplam Tutar ": " 6,857.14 "
  },
  {
    "urunId": "209",
    "Stok Kodu": "1S2817-13001-INX02",
    "Barkod": "8699131957806",
    "Stok Cinsi": "Schafer Held Çelik Derin Tencere 24 Cm 2 Parça-Inox",
    "Miktar": "12",
    " Toplam Tutar ": " 17,257.14 "
  },
  {
    "urunId": "210",
    "Stok Kodu": "1S2817-13001-INX05",
    "Barkod": "8699131458112",
    "Stok Cinsi": "Schafer Held Çelik Basık Tencere 26 Cm 2 Parça-Inox",
    "Miktar": "12",
    " Toplam Tutar ": " 18,514.29 "
  },
  {
    "urunId": "211",
    "Stok Kodu": "1S2817-13001-INX09",
    "Barkod": "8699131384428",
    "Stok Cinsi": "Schafer Held Çelik Derin Tencere 30 Cm 2 Parça-Inox",
    "Miktar": "12",
    " Toplam Tutar ": " 26,285.71 "
  },
  {
    "urunId": "212",
    "Stok Kodu": "1S2817-13001-INX03",
    "Barkod": "8699131614723",
    "Stok Cinsi": "Schafer Held Çelik Derin Tencere 28 Cm 2 Parça-Inox",
    "Miktar": "12",
    " Toplam Tutar ": " 23,085.71 "
  },
  {
    "urunId": "213",
    "Stok Kodu": "1S2817-13001-INX04",
    "Barkod": "8699131095645",
    "Stok Cinsi": "Schafer Held Çelik Basık Tencere 24 Cm 2 Parça-Inox",
    "Miktar": "12",
    " Toplam Tutar ": " 17,142.86 "
  },
  {
    "urunId": "214",
    "Stok Kodu": "1S2817-13001-INX10",
    "Barkod": "8699131591673",
    "Stok Cinsi": "Schafer Held Çelik Basık Tencere 30 Cm 2 Parça-Inox",
    "Miktar": "12",
    " Toplam Tutar ": " 22,857.14 "
  },
  {
    "urunId": "215",
    "Stok Kodu": "1S2817-13007-INX07",
    "Barkod": "8699131357323",
    "Stok Cinsi": "Schafer Held Çelik Tava 24 Cm 1 Parça-Inox",
    "Miktar": "12",
    " Toplam Tutar ": " 11,428.57 "
  },
  {
    "urunId": "216",
    "Stok Kodu": "1S2817-13007-INX08",
    "Barkod": "8699131588543",
    "Stok Cinsi": "Schafer Held Çelik Tava 28 Cm 1 Parça-Inox",
    "Miktar": "12",
    " Toplam Tutar ": " 15,428.57 "
  },
  {
    "urunId": "217",
    "Stok Kodu": "1S2817-13001-INX11",
    "Barkod": "8699131330470",
    "Stok Cinsi": "Schafer Held Çelik Derin Tencere 26 Cm 2 Parça-Inox",
    "Miktar": "12",
    " Toplam Tutar ": " 19,428.57 "
  },
  {
    "urunId": "218",
    "Stok Kodu": "1S2817-13009-INX01",
    "Barkod": "8699131872802",
    "Stok Cinsi": "Schafer Held Çelik Sahan 20 Cm 2 Parça-Inox (Kapaklı)",
    "Miktar": "12",
    " Toplam Tutar ": " 9,714.29 "
  },
  {
    "urunId": "219",
    "Stok Kodu": "1S2817-13001-INX01",
    "Barkod": "8699131623688",
    "Stok Cinsi": "Schafer Held Çelik Derin Tencere 20 Cm 2 Parça-Inox",
    "Miktar": "12",
    " Toplam Tutar ": " 13,714.29 "
  },
  {
    "urunId": "220",
    "Stok Kodu": "1S2817-13007-INX06",
    "Barkod": "8699131357972",
    "Stok Cinsi": "Schafer Held Çelik Tava 26 Cm 1 Parça-Inox",
    "Miktar": "12",
    " Toplam Tutar ": " 13,714.29 "
  },
  {
    "urunId": "221",
    "Stok Kodu": "1S2817-13001-INX08",
    "Barkod": "8699131506943",
    "Stok Cinsi": "Schafer Held Çelik Basık Tencere 28 Cm 2 Parça-Inox",
    "Miktar": "12",
    " Toplam Tutar ": " 21,714.29 "
  },
  {
    "urunId": "222",
    "Stok Kodu": "1S2817-13004-INX02",
    "Barkod": "8699131807200",
    "Stok Cinsi": "Schafer Held Çelik Kaçerola 18 Cm 1 Parça-Inox",
    "Miktar": "12",
    " Toplam Tutar ": " 8,571.43 "
  },
  {
    "urunId": "223",
    "Stok Kodu": "*1S0831-20004-GRI01",
    "Barkod": "8699131865392",
    "Stok Cinsi": "",
    "Miktar": "6",
    " Toplam Tutar ": " -   "
  },
  {
    "urunId": "224",
    "Stok Kodu": "*1S0831-22001-GRI01",
    "Barkod": "8699131753279",
    "Stok Cinsi": "",
    "Miktar": "6",
    " Toplam Tutar ": " -   "
  },
  {
    "urunId": "225",
    "Stok Kodu": "*1S0831-22001-GRI02",
    "Barkod": "8699131753286",
    "Stok Cinsi": "",
    "Miktar": "6",
    " Toplam Tutar ": " -   "
  },
  {
    "urunId": "226",
    "Stok Kodu": "*1S0831-22001-GRI03",
    "Barkod": "8699131753293",
    "Stok Cinsi": "",
    "Miktar": "6",
    " Toplam Tutar ": " -   "
  },
  {
    "urunId": "227",
    "Stok Kodu": "*1S0831-22001-GRI04",
    "Barkod": "8699131753309",
    "Stok Cinsi": "",
    "Miktar": "6",
    " Toplam Tutar ": " -   "
  },
  {
    "urunId": "228",
    "Stok Kodu": "*1S0831-22001-GRI05",
    "Barkod": "8699131753316",
    "Stok Cinsi": "",
    "Miktar": "6",
    " Toplam Tutar ": " -   "
  },
  {
    "urunId": "229",
    "Stok Kodu": "*1S0831-22001-GRI06",
    "Barkod": "8699131753330",
    "Stok Cinsi": "",
    "Miktar": "6",
    " Toplam Tutar ": " -   "
  },
  {
    "urunId": "230",
    "Stok Kodu": "*1S0831-22001-GRI07",
    "Barkod": "8699131753347",
    "Stok Cinsi": "",
    "Miktar": "6",
    " Toplam Tutar ": " -   "
  },
  {
    "urunId": "231",
    "Stok Kodu": "*1S0831-22001-GRI08",
    "Barkod": "8699131868478",
    "Stok Cinsi": "",
    "Miktar": "6",
    " Toplam Tutar ": " -   "
  },
  {
    "urunId": "232",
    "Stok Kodu": "*1S0831-22002-GRI01",
    "Barkod": "8699131753385",
    "Stok Cinsi": "",
    "Miktar": "6",
    " Toplam Tutar ": " -   "
  },
  {
    "urunId": "233",
    "Stok Kodu": "*1S0831-22002-GRI02",
    "Barkod": "8699131753392",
    "Stok Cinsi": "",
    "Miktar": "6",
    " Toplam Tutar ": " -   "
  },
  {
    "urunId": "234",
    "Stok Kodu": "*1S0831-22002-GRI03",
    "Barkod": "8699131753408",
    "Stok Cinsi": "",
    "Miktar": "6",
    " Toplam Tutar ": " -   "
  },
  {
    "urunId": "235",
    "Stok Kodu": "*1S0831-22002-GRI05",
    "Barkod": "8699131753422",
    "Stok Cinsi": "",
    "Miktar": "6",
    " Toplam Tutar ": " -   "
  },
  {
    "urunId": "236",
    "Stok Kodu": "*1S0831-22002-GRI04",
    "Barkod": "8699131753415",
    "Stok Cinsi": "",
    "Miktar": "6",
    " Toplam Tutar ": " -   "
  },
  {
    "urunId": "237",
    "Stok Kodu": "*1S0831-22002-GRI06",
    "Barkod": "8699131753453",
    "Stok Cinsi": "",
    "Miktar": "6",
    " Toplam Tutar ": " -   "
  },
  {
    "urunId": "238",
    "Stok Kodu": "*1S0831-22003-GRI01",
    "Barkod": "8699131753354",
    "Stok Cinsi": "",
    "Miktar": "6",
    " Toplam Tutar ": " -   "
  },
  {
    "urunId": "239",
    "Stok Kodu": "*1S0831-22003-GRI02",
    "Barkod": "8699131753361",
    "Stok Cinsi": "",
    "Miktar": "6",
    " Toplam Tutar ": " -   "
  },
  {
    "urunId": "240",
    "Stok Kodu": "*1S0831-22004-GRI01",
    "Barkod": "8699131753439",
    "Stok Cinsi": "",
    "Miktar": "6",
    " Toplam Tutar ": " -   "
  },
  {
    "urunId": "241",
    "Stok Kodu": "*1S0831-23001-GRI01",
    "Barkod": "8699131765371",
    "Stok Cinsi": "",
    "Miktar": "4",
    " Toplam Tutar ": " -   "
  },
  {
    "urunId": "242",
    "Stok Kodu": "*1S0831-23001-GRI02",
    "Barkod": "8699131765388",
    "Stok Cinsi": "",
    "Miktar": "4",
    " Toplam Tutar ": " -   "
  },
  {
    "urunId": "243",
    "Stok Kodu": "*1S0831-23001-GRI03",
    "Barkod": "8699131765449",
    "Stok Cinsi": "",
    "Miktar": "4",
    " Toplam Tutar ": " -   "
  },
  {
    "urunId": "244",
    "Stok Kodu": "*1S0831-23001-GRI04",
    "Barkod": "8699131765470",
    "Stok Cinsi": "",
    "Miktar": "4",
    " Toplam Tutar ": " -   "
  },
  {
    "urunId": "245",
    "Stok Kodu": "*1S0831-23001-GRI05",
    "Barkod": "8699131765487",
    "Stok Cinsi": "",
    "Miktar": "4",
    " Toplam Tutar ": " -   "
  },
  {
    "urunId": "246",
    "Stok Kodu": "*1S0831-23001-GRI06",
    "Barkod": "8699131765494",
    "Stok Cinsi": "",
    "Miktar": "4",
    " Toplam Tutar ": " -   "
  },
  {
    "urunId": "247",
    "Stok Kodu": "1S0831-20004-GRI01",
    "Barkod": "8699131865392",
    "Stok Cinsi": "Schafer Cory Pankek Tavası 26 Cm 1 Parça-Gri",
    "Miktar": "12",
    " Toplam Tutar ": " 13,257.14 "
  },
  {
    "urunId": "248",
    "Stok Kodu": "1S0831-22003-GRI01",
    "Barkod": "8699131753354",
    "Stok Cinsi": "Schafer Cory Yanmaz Yapışmaz Sahan 20 Cm-Gri",
    "Miktar": "12",
    " Toplam Tutar ": " 13,257.14 "
  },
  {
    "urunId": "249",
    "Stok Kodu": "1S0831-22002-GRI03",
    "Barkod": "8699131753408",
    "Stok Cinsi": "Schafer Cory Yanmaz Yapışmaz Tava 28 Cm-Gri",
    "Miktar": "12",
    " Toplam Tutar ": " 16,971.43 "
  },
  {
    "urunId": "250",
    "Stok Kodu": "1S0831-22002-GRI05",
    "Barkod": "8699131753422",
    "Stok Cinsi": "Schafer Cory Yanmaz Yapışmaz Kare Grill Tava 28 Cm-Gri",
    "Miktar": "12",
    " Toplam Tutar ": " 18,514.29 "
  },
  {
    "urunId": "251",
    "Stok Kodu": "1S0831-22002-GRI01",
    "Barkod": "8699131753385",
    "Stok Cinsi": "Schafer Cory Yanmaz Yapışmaz Tava 24 Cm-Gri",
    "Miktar": "12",
    " Toplam Tutar ": " 13,828.57 "
  },
  {
    "urunId": "252",
    "Stok Kodu": "1S0831-22002-GRI02",
    "Barkod": "8699131753392",
    "Stok Cinsi": "Schafer Cory Yanmaz Yapışmaz Tava 26 Cm-Gri",
    "Miktar": "12",
    " Toplam Tutar ": " 15,314.29 "
  },
  {
    "urunId": "253",
    "Stok Kodu": "1S0831-22003-GRI02",
    "Barkod": "8699131753361",
    "Stok Cinsi": "Schafer Cory Yanmaz Yapışmaz Sahan 22 Cm-Gri",
    "Miktar": "12",
    " Toplam Tutar ": " 15,314.29 "
  },
  {
    "urunId": "254",
    "Stok Kodu": "1S0831-22001-GRI03",
    "Barkod": "8699131753293",
    "Stok Cinsi": "Schafer Cory Yanmaz Yapışmaz Derin Tencere 26 Cm-Gri",
    "Miktar": "12",
    " Toplam Tutar ": " 24,000.00 "
  },
  {
    "urunId": "255",
    "Stok Kodu": "1S0831-22001-GRI07",
    "Barkod": "8699131753347",
    "Stok Cinsi": "Schafer Cory Yanmaz Yapışmaz Basık Tencere 30 Cm-Gri",
    "Miktar": "12",
    " Toplam Tutar ": " 26,742.86 "
  },
  {
    "urunId": "256",
    "Stok Kodu": "1S0831-22002-GRI04",
    "Barkod": "8699131753415",
    "Stok Cinsi": "Schafer Cory Yanmaz Yapışmaz Tava 30 Cm-Gri",
    "Miktar": "12",
    " Toplam Tutar ": " 18,114.29 "
  },
  {
    "urunId": "257",
    "Stok Kodu": "1S0831-22001-GRI08",
    "Barkod": "8699131868478",
    "Stok Cinsi": "Schafer Cory Yanmaz Yapışmaz Derin Tencere 28 Cm-Gri",
    "Miktar": "12",
    " Toplam Tutar ": " 27,314.29 "
  },
  {
    "urunId": "258",
    "Stok Kodu": "1S0831-22004-GRI01",
    "Barkod": "8699131753439",
    "Stok Cinsi": "Schafer Cory Yanmaz Yapışmaz Wok Tava 28 Cm-Gri",
    "Miktar": "12",
    " Toplam Tutar ": " 17,142.86 "
  },
  {
    "urunId": "259",
    "Stok Kodu": "1S0831-22001-GRI02",
    "Barkod": "8699131753286",
    "Stok Cinsi": "Schafer Cory Yanmaz Yapışmaz Derin Tencere 24 Cm-Gri",
    "Miktar": "12",
    " Toplam Tutar ": " 22,114.29 "
  },
  {
    "urunId": "260",
    "Stok Kodu": "1S0831-22001-GRI04",
    "Barkod": "8699131753309",
    "Stok Cinsi": "Schafer Cory Yanmaz Yapışmaz Basık Tencere 24 Cm-Gri",
    "Miktar": "12",
    " Toplam Tutar ": " 19,885.71 "
  },
  {
    "urunId": "261",
    "Stok Kodu": "1S0831-22001-GRI01",
    "Barkod": "8699131753279",
    "Stok Cinsi": "Schafer Cory Yanmaz Yapışmaz Derin Tencere 20 Cm-Gri",
    "Miktar": "12",
    " Toplam Tutar ": " 18,685.71 "
  },
  {
    "urunId": "262",
    "Stok Kodu": "1S0831-22001-GRI06",
    "Barkod": "8699131753330",
    "Stok Cinsi": "Schafer Cory Yanmaz Yapışmaz Basık Tencere 28 Cm-Gri",
    "Miktar": "12",
    " Toplam Tutar ": " 24,914.29 "
  },
  {
    "urunId": "263",
    "Stok Kodu": "1S0831-22002-GRI06",
    "Barkod": "8699131753453",
    "Stok Cinsi": "Schafer Cory Yanmaz Yapışmaz Krep Tava 25 Cm-Gri",
    "Miktar": "12",
    " Toplam Tutar ": " 11,714.29 "
  },
  {
    "urunId": "264",
    "Stok Kodu": "1S0831-22001-GRI05",
    "Barkod": "8699131753316",
    "Stok Cinsi": "Schafer Cory Yanmaz Yapışmaz Basık Tencere 26 Cm-Gri",
    "Miktar": "12",
    " Toplam Tutar ": " 21,714.29 "
  },
  {
    "urunId": "265",
    "Stok Kodu": "1S0831-23001-GRI01",
    "Barkod": "8699131765371",
    "Stok Cinsi": "Schafer Cory Klasik Döküm Kek Kalıbı 1 Parça-Gri",
    "Miktar": "8",
    " Toplam Tutar ": " 7,238.10 "
  },
  {
    "urunId": "266",
    "Stok Kodu": "1S0831-23001-GRI02",
    "Barkod": "8699131765388",
    "Stok Cinsi": "Schafer Cory Baton Döküm Kek Kalıbı 1 Parça-Gri",
    "Miktar": "8",
    " Toplam Tutar ": " 7,238.10 "
  },
  {
    "urunId": "267",
    "Stok Kodu": "1S0831-23001-GRI03",
    "Barkod": "8699131765449",
    "Stok Cinsi": "Schafer Cory Elmas Döküm Kek Kalıbı 1 Parça-Gri",
    "Miktar": "8",
    " Toplam Tutar ": " 7,238.10 "
  },
  {
    "urunId": "268",
    "Stok Kodu": "1S0831-23001-GRI04",
    "Barkod": "8699131765470",
    "Stok Cinsi": "Schafer Cory Bardak Döküm Kek Kalıbı 1 Parça-Gri",
    "Miktar": "8",
    " Toplam Tutar ": " 7,238.10 "
  },
  {
    "urunId": "269",
    "Stok Kodu": "1S0831-23001-GRI05",
    "Barkod": "8699131765487",
    "Stok Cinsi": "Schafer Cory Pırlanta Döküm Kek Kalıbı 1 Parça-Gri",
    "Miktar": "8",
    " Toplam Tutar ": " 7,238.10 "
  },
  {
    "urunId": "270",
    "Stok Kodu": "1S0831-23001-GRI06",
    "Barkod": "8699131765494",
    "Stok Cinsi": "Schafer Cory Rüzgar Gülü Döküm Kek Kalıbı 1 Parça-Gri",
    "Miktar": "8",
    " Toplam Tutar ": " 7,238.10 "
  },
  {
    "urunId": "271",
    "Stok Kodu": "1S2404-21007-SIY01",
    "Barkod": "8699131871331",
    "Stok Cinsi": "Schafer Gastronomie Master Seramik Wok Tava 28 Cm-Siyah/Gri",
    "Miktar": "12",
    " Toplam Tutar ": " 9,870.13 "
  },
  {
    "urunId": "272",
    "Stok Kodu": "1S2404-21001-SIY04",
    "Barkod": "8699131871218",
    "Stok Cinsi": "Schafer Gastronomie Master Seramik Basık Tencere 24 Cm-Siyah/Gri",
    "Miktar": "12",
    " Toplam Tutar ": " 14,337.66 "
  },
  {
    "urunId": "273",
    "Stok Kodu": "1S2404-22003-SIY02",
    "Barkod": "8699131871324",
    "Stok Cinsi": "Schafer Gastronomie Master Seramik Sahan 20 Cm-Siyah/Gri",
    "Miktar": "12",
    " Toplam Tutar ": " 8,727.27 "
  },
  {
    "urunId": "274",
    "Stok Kodu": "1S2404-21001-SIY01",
    "Barkod": "8699131871195",
    "Stok Cinsi": "Schafer Gastronomie Master Seramik Derin Tencere 20 Cm-Siyah/Gri",
    "Miktar": "12",
    " Toplam Tutar ": " 14,025.97 "
  },
  {
    "urunId": "275",
    "Stok Kodu": "1S2404-21001-SIY02",
    "Barkod": "8699131871201",
    "Stok Cinsi": "Schafer Gastronomie Master Seramik Derin Tencere 24 Cm-Siyah/Gri",
    "Miktar": "12",
    " Toplam Tutar ": " 16,103.90 "
  },
  {
    "urunId": "276",
    "Stok Kodu": "1S2404-21002-SIY01",
    "Barkod": "8699131871263",
    "Stok Cinsi": "Schafer Gastronomie Master Seramik Tava 24 Cm-Siyah/Gri",
    "Miktar": "12",
    " Toplam Tutar ": " 11,428.57 "
  },
  {
    "urunId": "277",
    "Stok Kodu": "1S2404-21002-SIY02",
    "Barkod": "8699131871294",
    "Stok Cinsi": "Schafer Gastronomie Master Seramik Tava 26 Cm-Siyah/Gri",
    "Miktar": "12",
    " Toplam Tutar ": " 12,467.53 "
  },
  {
    "urunId": "278",
    "Stok Kodu": "1S2404-21002-SIY03",
    "Barkod": "8699131871300",
    "Stok Cinsi": "Schafer Gastronomie Master Seramik Tava 28 Cm-Siyah/Gri",
    "Miktar": "12",
    " Toplam Tutar ": " 13,298.70 "
  },
  {
    "urunId": "279",
    "Stok Kodu": "1S2404-21001-SIY03",
    "Barkod": "8699131871232",
    "Stok Cinsi": "Schafer Gastronomie Master Seramik Derin Tencere 26 Cm-Siyah/Gri",
    "Miktar": "6",
    " Toplam Tutar ": " 8,805.20 "
  },
  {
    "urunId": "280",
    "Stok Kodu": "1S2404-21001-SIY05",
    "Barkod": "8699131871249",
    "Stok Cinsi": "Schafer Gastronomie Master Seramik Basık Tencere 26 Cm-Siyah/Gri",
    "Miktar": "6",
    " Toplam Tutar ": " 7,922.08 "
  },
  {
    "urunId": "281",
    "Stok Kodu": "1S4648-22005-GRI01",
    "Barkod": "8699131752012",
    "Stok Cinsi": "Schafer Millard Yanmaz Yapışmaz Tencere Seti 7 Parça-Gri",
    "Miktar": "4",
    " Toplam Tutar ": " 18,290.24 "
  },
  {
    "urunId": "282",
    "Stok Kodu": "1S4648-22005-SIY01",
    "Barkod": "8699131809747",
    "Stok Cinsi": "Schafer Dark Millard Yanmaz Yapışmaz Tencere Seti 7 Parça-Siyah",
    "Miktar": "4",
    " Toplam Tutar ": " 18,290.24 "
  },
  {
    "urunId": "283",
    "Stok Kodu": "1S2825-20003-SIY02",
    "Barkod": "8699131909744",
    "Stok Cinsi": "Schafer Hektor Döküm Tencere Seti 7 Parça-Siyah",
    "Miktar": "4",
    " Toplam Tutar ": " 15,363.41 "
  },
  {
    "urunId": "284",
    "Stok Kodu": "1S004-29001-GUM01",
    "Barkod": "8699131646656",
    "Stok Cinsi": "Schafer Alia Çelik Çeyiz Seti 18 Parça-Gümüş",
    "Miktar": "4",
    " Toplam Tutar ": " 46,339.01 "
  },
  {
    "urunId": "285",
    "Stok Kodu": "1S3513-29001-INX01",
    "Barkod": "8699131794715",
    "Stok Cinsi": "Schafer Jewel Çelik Çeyiz Seti 18 Parça-Inox",
    "Miktar": "4",
    " Toplam Tutar ": " 48,778.03 "
  },
  {
    "urunId": "286",
    "Stok Kodu": "1S2445-29001-INX01 ",
    "Barkod": "8699131863428",
    "Stok Cinsi": "Schafer Grande Mia Çelik Çeyiz Seti 16 Parça-Inox",
    "Miktar": "4",
    " Toplam Tutar ": " 29,265.84 "
  },
  {
    "urunId": "287",
    "Stok Kodu": "1S6440-13002-INX02",
    "Barkod": "8699131801710",
    "Stok Cinsi": "Schafer New Stahl Çelik Tencere Seti 8 Parça-Inox",
    "Miktar": "4",
    " Toplam Tutar ": " 21,948.77 "
  },
  {
    "urunId": "288",
    "Stok Kodu": "1S2404-22005-SIY01",
    "Barkod": "8699131752586",
    "Stok Cinsi": "Schafer Gastronomie Master Tencere Seti 7 Parça-Siyah",
    "Miktar": "4",
    " Toplam Tutar ": " 30,485.35 "
  },
  {
    "urunId": "289",
    "Stok Kodu": "1S0036-29001-SIY01",
    "Barkod": "8699131864746",
    "Stok Cinsi": "Schafer Atlas Çelik Çeyiz Seti 14 Parça-Siyah",
    "Miktar": "4",
    " Toplam Tutar ": " 37,802.42 "
  },
  {
    "urunId": "290",
    "Stok Kodu": "1S0848-21003-GRI01",
    "Barkod": "8699131901052",
    "Stok Cinsi": "Schafer Ceramoni Seramik Tencere Seti 7 Parça-Gri",
    "Miktar": "4",
    " Toplam Tutar ": " 24,387.79 "
  },
  {
    "urunId": "291",
    "Stok Kodu": "1S0848-21003-KRM01",
    "Barkod": "8699131904268",
    "Stok Cinsi": "Schafer Ceramoni Seramik Tencere Seti 7 Parça-Krem",
    "Miktar": "4",
    " Toplam Tutar ": " 24,387.79 "
  },
  {
    "urunId": "292",
    "Stok Kodu": "1S7034-13002-INX02",
    "Barkod": "8699131838914",
    "Stok Cinsi": "Schafer New Trendy Çelik Tencere Seti 8 Parça-Inox",
    "Miktar": "4",
    " Toplam Tutar ": " 24,387.79 "
  },
  {
    "urunId": "293",
    "Stok Kodu": "1S0002-15001-GLD02",
    "Barkod": "8699131027462",
    "Stok Cinsi": "Schafer Ada Çaydanlık Takımı Orta Boy 4 Parça-Gold",
    "Miktar": "4",
    " Toplam Tutar ": " 5,142.86 "
  },
  {
    "urunId": "294",
    "Stok Kodu": "1S0002-15001-INX05",
    "Barkod": "8699131838655",
    "Stok Cinsi": "Schafer Ada Metal Çaydanlık Takımı Orta Boy 4 Parça-Inox",
    "Miktar": "4",
    " Toplam Tutar ": " 4,952.38 "
  },
  {
    "urunId": "295",
    "Stok Kodu": "1S102-13002-INX01",
    "Barkod": "8699131661796",
    "Stok Cinsi": "Schafer Cookhaus Çelik Tencere Seti 8 Parça-Inox",
    "Miktar": "12",
    " Toplam Tutar ": " 33,257.14 "
  },
  {
    "urunId": "296",
    "Stok Kodu": "1S102-13002-GUM01",
    "Barkod": "8699131928103",
    "Stok Cinsi": "Schafer Cookhaus Çelik Tencere Seti 6 Parça-Gümüş",
    "Miktar": "20",
    " Toplam Tutar ": " 41,333.33 "
  },
  {
    "urunId": "297",
    "Stok Kodu": "1S102-13003-GUM01",
    "Barkod": "8699131927533",
    "Stok Cinsi": "Schafer Cookhaus Çelik Sahan Seti 6 Parça-Gümüş",
    "Miktar": "24",
    " Toplam Tutar ": " 42,514.29 "
  },
  {
    "urunId": "298",
    "Stok Kodu": "1S1202-15001-GUM01",
    "Barkod": "8699131909119",
    "Stok Cinsi": "Prochef Mini Dev Çaydanlık Takımı 4 Parça-Gümüş",
    "Miktar": "4",
    " Toplam Tutar ": " 5,485.71 "
  },
  {
    "urunId": "299",
    "Stok Kodu": "1S1644-01001-GLD01",
    "Barkod": "8699131912201",
    "Stok Cinsi": "Schafer Evelynn Yemek Takımı 29 Parça-Gold",
    "Miktar": "4",
    " Toplam Tutar ": " 24,761.90 "
  },
  {
    "urunId": "300",
    "Stok Kodu": "1S1644-01001-PLT01",
    "Barkod": "8699131912232",
    "Stok Cinsi": "Schafer Evelynn Yemek Takımı 29 Parça-Platin",
    "Miktar": "4",
    " Toplam Tutar ": " 24,761.90 "
  },
  {
    "urunId": "301",
    "Stok Kodu": "7S7000-98855-X0003",
    "Barkod": "8699131897720",
    "Stok Cinsi": "Schafer 69x50 Cm Büyük Boy Poşet",
    "Miktar": "100",
    " Toplam Tutar ": " 771.89 "
  },
  {
    "urunId": "302",
    "Stok Kodu": "1S1621-22007-GRI01",
    "Barkod": "8699131794753",
    "Stok Cinsi": "Schafer Eternal 2 Li Sahan 18 Cm+22 Cm-Gri",
    "Miktar": "12",
    " Toplam Tutar ": " 11,771.43 "
  },
  {
    "urunId": "303",
    "Stok Kodu": "1S1621-22005-GRI01",
    "Barkod": "8699131794739",
    "Stok Cinsi": "Schafer Eternal 3 lü Set Tencere 18 Cm+Sahan 18 Cm+Tava 18 Cm-Gri",
    "Miktar": "12",
    " Toplam Tutar ": " 18,285.71 "
  },
  {
    "urunId": "304",
    "Stok Kodu": "1S0810-27001-INX02",
    "Barkod": "8699131911105",
    "Stok Cinsi": "Schafer Classic Pro Düdüklü Tencere 6 L-Inox",
    "Miktar": "8",
    " Toplam Tutar ": " 13,638.10 "
  },
  {
    "urunId": "305",
    "Stok Kodu": "1S0810-27001-INX01",
    "Barkod": "8699131911099",
    "Stok Cinsi": "Schafer Classic Pro Düdüklü Tencere 4 L-Inox",
    "Miktar": "8",
    " Toplam Tutar ": " 12,952.38 "
  },
  {
    "urunId": "306",
    "Stok Kodu": "1S2006-08002-ASO01",
    "Barkod": "8699131780114",
    "Stok Cinsi": "Schafer Flott 6 Kişilik Kahve Fincan Takımı 12 Parça-Asorti01",
    "Miktar": "6",
    " Toplam Tutar ": " 5,708.57 "
  },
  {
    "urunId": "307",
    "Stok Kodu": "1S2006-08002-ASO02",
    "Barkod": "8699131780121",
    "Stok Cinsi": "Schafer Flott 6 Kişilik Kahve Fincan Takımı 12 Parça-Asorti02",
    "Miktar": "6",
    " Toplam Tutar ": " 5,708.57 "
  },
  {
    "urunId": "308",
    "Stok Kodu": "1S1621-22012-GRI01",
    "Barkod": "8699131794760",
    "Stok Cinsi": "Schafer Eternal 2 Li Sahan 20 Cm+Tava 26 Cm-Gri",
    "Miktar": "12",
    " Toplam Tutar ": " 13,714.29 "
  },
  {
    "urunId": "309",
    "Stok Kodu": "1S0815-27002-SIY01",
    "Barkod": "8699131135570",
    "Stok Cinsi": "Schafer Compact 4 Parça Düdüklü Tencere Seti 4+6,5 L-Siyah",
    "Miktar": "6",
    " Toplam Tutar ": " 21,714.29 "
  },
  {
    "urunId": "310",
    "Stok Kodu": "1S2042-16001-INX01",
    "Barkod": "8699131830420",
    "Stok Cinsi": "Schafer Fabian 3 lü Çelik Cezve Seti 4 Parça-Inox",
    "Miktar": "12",
    " Toplam Tutar ": " 8,742.86 "
  },
  {
    "urunId": "311",
    "Stok Kodu": "1S1644-08002-NON01",
    "Barkod": "8699131912348",
    "Stok Cinsi": "Schafer Evelynn 6 Kişilik Kahve Fincan Takımı 12 Parça-Non01",
    "Miktar": "12",
    " Toplam Tutar ": " 7,988.57 "
  },
  {
    "urunId": "312",
    "Stok Kodu": "1S0040-08002-GRI02",
    "Barkod": "8699131866917",
    "Stok Cinsi": "Schafer Aurora 2 Kişilik Kahve Fincan Takımı 4 Parça-Gri/Yeşil",
    "Miktar": "6",
    " Toplam Tutar ": " 1,994.29 "
  },
  {
    "urunId": "313",
    "Stok Kodu": "1S0040-08002-LAC06",
    "Barkod": "8699131866948",
    "Stok Cinsi": "Schafer Aurora 2 Kişilik Kahve Fincan Takımı 4 Parça-Lacivert/Bej",
    "Miktar": "6",
    " Toplam Tutar ": " 1,994.29 "
  },
  {
    "urunId": "314",
    "Stok Kodu": "1S0040-08002-PEM02",
    "Barkod": "8699131867037",
    "Stok Cinsi": "Schafer Aurora 2 Kişilik Kahve Fincan Takımı 4 Parça-Pembe",
    "Miktar": "6",
    " Toplam Tutar ": " 1,994.29 "
  },
  {
    "urunId": "315",
    "Stok Kodu": "7S7000-98855-X0002",
    "Barkod": "8699131167427",
    "Stok Cinsi": "Schafer 38x45 Cm Küçük Boy Poşet",
    "Miktar": "100",
    " Toplam Tutar ": " 389.71 "
  },
  {
    "urunId": "316",
    "Stok Kodu": "7S7000-98855-X0009",
    "Barkod": "8699131053065",
    "Stok Cinsi": "Schafer 45x58 Cm Orta Boy Poşet",
    "Miktar": "100",
    " Toplam Tutar ": " 630.86 "
  },
  {
    "urunId": "317",
    "Stok Kodu": "1S2446-08002-ASO07",
    "Barkod": "8699131864876",
    "Stok Cinsi": "Schafer Glossy 2 Kişilik Kahve Fincan Takımı 4 Parça-Asorti07",
    "Miktar": "8",
    " Toplam Tutar ": " 2,659.05 "
  },
  {
    "urunId": "318",
    "Stok Kodu": "1S3207-13002-INX01",
    "Barkod": "8699131878903",
    "Stok Cinsi": "Schafer Iconic Çelik Tencere Seti 6 Parça-Inox",
    "Miktar": "4",
    " Toplam Tutar ": " 20,000.00 "
  },
  {
    "urunId": "319",
    "Stok Kodu": "1S2825-20003-SIY01",
    "Barkod": "8699131872147",
    "Stok Cinsi": "Schafer Hektor 3 Lü Döküm Tencere Seti 6 Parça-Siyah",
    "Miktar": "12",
    " Toplam Tutar ": " 31,885.71 "
  },
  {
    "urunId": "320",
    "Stok Kodu": "1S3209-27001-SIY01",
    "Barkod": "8699131884041",
    "Stok Cinsi": "Schafer İn Safe Düdüklü Tencere 5 L-Siyah",
    "Miktar": "12",
    " Toplam Tutar ": " 44,000.00 "
  },
  {
    "urunId": "321",
    "Stok Kodu": "1S2414-27001-SIY01",
    "Barkod": "8699131885871",
    "Stok Cinsi": "Schafer Grand Düdüklü Tencere 12 L-Siyah",
    "Miktar": "6",
    " Toplam Tutar ": " 26,457.14 "
  },
  {
    "urunId": "322",
    "Stok Kodu": "1S3209-27001-SIY02",
    "Barkod": "8699131884065",
    "Stok Cinsi": "Schafer İn Safe Düdüklü Tencere 7 L-Siyah",
    "Miktar": "12",
    " Toplam Tutar ": " 46,857.14 "
  },
  {
    "urunId": "323",
    "Stok Kodu": "1S4240-15001-KAH01",
    "Barkod": "8699131814550",
    "Stok Cinsi": "Schafer Luz Orta Boy Çelik Çaydanlık Takımı 3 Parça-Kahverengi",
    "Miktar": "8",
    " Toplam Tutar ": " 12,647.62 "
  },
  {
    "urunId": "324",
    "Stok Kodu": "1S4240-15001-KMZ01",
    "Barkod": "8699131814567",
    "Stok Cinsi": "Schafer Luz Orta Boy Çelik Çaydanlık Takımı 3 Parça-Kırmızı",
    "Miktar": "8",
    " Toplam Tutar ": " 12,647.62 "
  },
  {
    "urunId": "325",
    "Stok Kodu": "1S4240-15001-SIY01",
    "Barkod": "8699131814581",
    "Stok Cinsi": "Schafer Luz Orta Boy Çelik Çaydanlık Takımı 3 Parça-Siyah",
    "Miktar": "8",
    " Toplam Tutar ": " 12,647.62 "
  },
  {
    "urunId": "326",
    "Stok Kodu": "1S3209-27002-SIY01",
    "Barkod": "8699131868645",
    "Stok Cinsi": "Schafer İn Safe 2 Li Düdüklü Tencere Seti 4 Parça-Siyah",
    "Miktar": "12",
    " Toplam Tutar ": " 75,428.57 "
  },
  {
    "urunId": "327",
    "Stok Kodu": "1S3513-29001-INX02",
    "Barkod": "8699131912164",
    "Stok Cinsi": "Schafer Jewel Çelik Çeyiz Seti 15 Parça-Inox",
    "Miktar": "6",
    " Toplam Tutar ": " 43,428.57 "
  },
  {
    "urunId": "328",
    "Stok Kodu": "1S4243-11001-GUM01",
    "Barkod": "8699131841211",
    "Stok Cinsi": "Schafer Lena Çatal Kaşık Bıçak Takımı 18 Parça-GUM01",
    "Miktar": "12",
    " Toplam Tutar ": " 14,845.71 "
  },
  {
    "urunId": "329",
    "Stok Kodu": "1S4243-11001-GUM02",
    "Barkod": "8699131841228",
    "Stok Cinsi": "Schafer Lena Çatal Kaşık Bıçak Takımı 18 Parça-GUM02",
    "Miktar": "12",
    " Toplam Tutar ": " 14,845.71 "
  },
  {
    "urunId": "330",
    "Stok Kodu": "1S4243-11001-GUM03",
    "Barkod": "8699131841235",
    "Stok Cinsi": "Schafer Lena Çatal Kaşık Bıçak Takımı 18 Parça-GUM03",
    "Miktar": "12",
    " Toplam Tutar ": " 14,845.71 "
  },
  {
    "urunId": "331",
    "Stok Kodu": "1S2825-06002-SIY01",
    "Barkod": "8699131872161",
    "Stok Cinsi": "Schafer Hektor 3 Lü Döküm Sahan Seti 6 Parça-Siyah",
    "Miktar": "12",
    " Toplam Tutar ": " 24,342.86 "
  },
  {
    "urunId": "332",
    "Stok Kodu": "1S4657-11001-BYZ01",
    "Barkod": "8699131808498",
    "Stok Cinsi": "Schafer Mona 24 Parça Çatal Kaşık Bıçak Takımı-Beyaz",
    "Miktar": "12",
    " Toplam Tutar ": " 10,057.14 "
  },
  {
    "urunId": "333",
    "Stok Kodu": "1S4657-11001-KMZ02",
    "Barkod": "8699131827185",
    "Stok Cinsi": "Schafer Mona 24 Parça Çatal Kaşık Bıçak Takımı-Kırmızı02",
    "Miktar": "12",
    " Toplam Tutar ": " 10,057.14 "
  },
  {
    "urunId": "334",
    "Stok Kodu": "1S7002-15001-KAH02",
    "Barkod": "8699131838693",
    "Stok Cinsi": "Schafer Tea Chef Orta Boy Çaydanlık Takımı 4 Parça-Kahve",
    "Miktar": "8",
    " Toplam Tutar ": " 12,571.43 "
  },
  {
    "urunId": "335",
    "Stok Kodu": "1S7002-15001-SIY02",
    "Barkod": "8699131838648",
    "Stok Cinsi": "Schafer Tea Chef Orta Boy Çaydanlık Takımı 4 Parça-Siyah",
    "Miktar": "8",
    " Toplam Tutar ": " 12,571.43 "
  },
  {
    "urunId": "336",
    "Stok Kodu": "1S7002-15001-KAH01",
    "Barkod": "8699131838686",
    "Stok Cinsi": "Schafer Tea Chef Küçük Boy Çaydanlık Takımı 4 Parça-Kahve",
    "Miktar": "8",
    " Toplam Tutar ": " 11,123.81 "
  },
  {
    "urunId": "337",
    "Stok Kodu": "1S7002-15001-SIY01",
    "Barkod": "8699131838679",
    "Stok Cinsi": "Schafer Tea Chef Küçük Boy Çaydanlık Takımı 4 Parça-Siyah",
    "Miktar": "8",
    " Toplam Tutar ": " 11,123.81 "
  },
  {
    "urunId": "338",
    "Stok Kodu": "1S6477-12001-GUM01",
    "Barkod": "8699131821121",
    "Stok Cinsi": "Schafer Steely Çelik Servis Seti 5 Parça-Gümüş01",
    "Miktar": "12",
    " Toplam Tutar ": " 16,571.43 "
  },
  {
    "urunId": "339",
    "Stok Kodu": "1S6477-12001-GUM02",
    "Barkod": "8699131821138",
    "Stok Cinsi": "Schafer Steely Çelik Servis Seti 5 Parça-Gümüş02",
    "Miktar": "12",
    " Toplam Tutar ": " 16,571.43 "
  },
  {
    "urunId": "340",
    "Stok Kodu": "1S6028-22005-SIY01",
    "Barkod": "8699131849729",
    "Stok Cinsi": "Schafer Rock Stone Tencere Seti 10 Parça-Siyah",
    "Miktar": "30",
    " Toplam Tutar ": " 70,000.00 "
  },
  {
    "urunId": "341",
    "Stok Kodu": "1S7042-15001-KAH01",
    "Barkod": "8699131875452",
    "Stok Cinsi": "Schafer TeeHaus Çelik Çaydanlık Takımı 4 Parça-Kahverengi",
    "Miktar": "8",
    " Toplam Tutar ": " 13,866.67 "
  },
  {
    "urunId": "342",
    "Stok Kodu": "1S7042-15001-SIY01",
    "Barkod": "8699131875438",
    "Stok Cinsi": "Schafer TeeHaus Çelik Çaydanlık Takımı 4 Parça-Siyah",
    "Miktar": "8",
    " Toplam Tutar ": " 13,866.67 "
  },
  {
    "urunId": "343",
    "Stok Kodu": "1S5745-01001-BYZ03",
    "Barkod": "8699131868102",
    "Stok Cinsi": "Schafer Pacific Kare Yemek Takımı 24 Parça-Beyaz03",
    "Miktar": "6",
    " Toplam Tutar ": " 30,000.00 "
  },
  {
    "urunId": "344",
    "Stok Kodu": "1S5119-15001-INX01",
    "Barkod": "8699131803486",
    "Stok Cinsi": "Schafer Napoli Çelik Çaydanlık Takımı 4 Parça-Inox (Büyük Boy)",
    "Miktar": "8",
    " Toplam Tutar ": " 14,171.43 "
  },
  {
    "urunId": "345",
    "Stok Kodu": "1S7028-15001-INX01",
    "Barkod": "8699131803479",
    "Stok Cinsi": "Schafer Toledo Çelik Çaydanlık Takımı 4 Parça-Inox (Büyük Boy)",
    "Miktar": "8",
    " Toplam Tutar ": " 14,171.43 "
  },
  {
    "urunId": "346",
    "Stok Kodu": "1S4661-20003-SIY01",
    "Barkod": "8699131825358",
    "Stok Cinsi": "Schafer Matrix Döküm Tencere Seti 8 Parça-Siyah",
    "Miktar": "6",
    " Toplam Tutar ": " 42,285.71 "
  },
  {
    "urunId": "347",
    "Stok Kodu": "1S6427-14005-KRM01",
    "Barkod": "8699131904831",
    "Stok Cinsi": "Schafer Solide Round Bıçak Seti 6 Parça-Krem",
    "Miktar": "6",
    " Toplam Tutar ": " 8,457.14 "
  },
  {
    "urunId": "348",
    "Stok Kodu": "1S6452-11001-GUM23",
    "Barkod": "8699131821459",
    "Stok Cinsi": "Schafer Sheen 24 Parça Çatal Kaşık Bıçak Takımı-Gümüş23",
    "Miktar": "12",
    " Toplam Tutar ": " 8,674.29 "
  },
  {
    "urunId": "349",
    "Stok Kodu": "1S6452-11001-GUM24",
    "Barkod": "8699131821473",
    "Stok Cinsi": "Schafer Sheen 24 Parça Çatal Kaşık Bıçak Takımı-Gümüş24",
    "Miktar": "12",
    " Toplam Tutar ": " 8,674.29 "
  },
  {
    "urunId": "350",
    "Stok Kodu": "1S6427-14005-KAH04",
    "Barkod": "8699131904855",
    "Stok Cinsi": "Schafer Solide Wave Bıçak Seti 6 Parça-Kahverengi",
    "Miktar": "6",
    " Toplam Tutar ": " 10,514.29 "
  },
  {
    "urunId": "351",
    "Stok Kodu": "1S5737-20003-KMZ01",
    "Barkod": "8699131786659",
    "Stok Cinsi": "Schafer Retro Cast Mini Döküm Tencere Seti 5 Parça-Kırmızı",
    "Miktar": "6",
    " Toplam Tutar ": " 8,057.14 "
  },
  {
    "urunId": "352",
    "Stok Kodu": "1S5737-20003-ROS01",
    "Barkod": "8699131786642",
    "Stok Cinsi": "Schafer Retro Cast Mini Döküm Tencere Seti 5 Parça-Rosegold",
    "Miktar": "6",
    " Toplam Tutar ": " 8,057.14 "
  },
  {
    "urunId": "353",
    "Stok Kodu": "1S5737-20003-SIY01",
    "Barkod": "8699131786673",
    "Stok Cinsi": "Schafer Retro Cast Mini Döküm Tencere Seti 5 Parça-Siyah",
    "Miktar": "6",
    " Toplam Tutar ": " 8,057.14 "
  },
  {
    "urunId": "354",
    "Stok Kodu": "1S0843-01001-GLD01",
    "Barkod": "8699131813478",
    "Stok Cinsi": "Schafer Chance Gold Yemek Takımı 56 Parça-Gold",
    "Miktar": "3",
    " Toplam Tutar ": " 70,000.00 "
  },
  {
    "urunId": "355",
    "Stok Kodu": "1S0843-01001-PLT01",
    "Barkod": "8699131813508",
    "Stok Cinsi": "Schafer Chance Platin Yemek Takımı 56 Parça-Platin",
    "Miktar": "3",
    " Toplam Tutar ": " 70,000.00 "
  },
  {
    "urunId": "356",
    "Stok Kodu": "1S6487-01001-GLD04",
    "Barkod": "8699131859094",
    "Stok Cinsi": "Schafer Superfine Bone Lux Yemek Takımı 56 Parça-Gold",
    "Miktar": "3",
    " Toplam Tutar ": " 70,000.00 "
  },
  {
    "urunId": "357",
    "Stok Kodu": "1S6487-01001-GLD05 ",
    "Barkod": "8699131884201",
    "Stok Cinsi": "Schafer Superfine Bone Delicea Yemek Takımı 56 Parça-Gold",
    "Miktar": "3",
    " Toplam Tutar ": " 70,000.00 "
  },
  {
    "urunId": "358",
    "Stok Kodu": "1S6487-01001-PLT05",
    "Barkod": "8699131884195",
    "Stok Cinsi": "Schafer Superfine Bone Delicea Yemek Takımı 56 Parça-Platin",
    "Miktar": "3",
    " Toplam Tutar ": " 70,000.00 "
  },
  {
    "urunId": "359",
    "Stok Kodu": "1S6487-01001-GLD03",
    "Barkod": "8699131859087",
    "Stok Cinsi": "Schafer Superfine Bone Lumiere Yemek Takımı 56 Parça-Gold",
    "Miktar": "3",
    " Toplam Tutar ": " 70,000.00 "
  },
  {
    "urunId": "360",
    "Stok Kodu": "SHF2410",
    "Barkod": "8699131719435",
    "Stok Cinsi": "Schafer Vals Çelik Tencere Seti 8 Parça-Inox",
    "Miktar": "12",
    " Toplam Tutar ": " 28,571.43 "
  },
  {
    "urunId": "361",
    "Stok Kodu": "1S7601-13002-INX02",
    "Barkod": "8699131746875",
    "Stok Cinsi": "Schafer Vals Çelik Tencere Seti 7 Parça-Inox",
    "Miktar": "6",
    " Toplam Tutar ": " 14,285.71 "
  },
  {
    "urunId": "362",
    "Stok Kodu": "1S4244-02001-MAV01",
    "Barkod": "8699131843987",
    "Stok Cinsi": "Schafer Luca Kahvaltı Takımı 32 Parça-Mavi01",
    "Miktar": "3",
    " Toplam Tutar ": " 7,142.86 "
  },
  {
    "urunId": "363",
    "Stok Kodu": "1S4244-02001-MAV02",
    "Barkod": "8699131886151",
    "Stok Cinsi": "Schafer Luca Kahvaltı Takımı 32 Parça-Mavi02",
    "Miktar": "3",
    " Toplam Tutar ": " 7,142.86 "
  },
  {
    "urunId": "364",
    "Stok Kodu": "1S4032-11001-GUM03",
    "Barkod": "8699131825402",
    "Stok Cinsi": "Schafer Betta 72 Parça Çatal Kaşık Bıçak Takımı-Gümüş03",
    "Miktar": "2",
    " Toplam Tutar ": " 8,571.43 "
  },
  {
    "urunId": "365",
    "Stok Kodu": "1S6035-01001-SIY01",
    "Barkod": "8699131910429",
    "Stok Cinsi": "Schafer Rapid Yemek Takımı 24 Parça-Siyah",
    "Miktar": "6",
    " Toplam Tutar ": " 14,285.71 "
  },
  {
    "urunId": "366",
    "Stok Kodu": "1S6035-01001-YSL01",
    "Barkod": "8699131910450",
    "Stok Cinsi": "Schafer Rapid Yemek Takımı 24 Parça-Yeşil",
    "Miktar": "6",
    " Toplam Tutar ": " 14,285.71 "
  },
  {
    "urunId": "367",
    "Stok Kodu": "1S2812-11001-GUM03",
    "Barkod": "8699131804285",
    "Stok Cinsi": "Schafer Hamburg 72 Parça Çatal Kaşık Bıçak Takımı-Gümüş03",
    "Miktar": "4",
    " Toplam Tutar ": " 13,333.33 "
  },
  {
    "urunId": "368",
    "Stok Kodu": "1S2812-11001-GUM10",
    "Barkod": "8699131804377",
    "Stok Cinsi": "Schafer Hamburg 72 Parça Çatal Kaşık Bıçak Takımı-Gümüş10",
    "Miktar": "4",
    " Toplam Tutar ": " 13,333.33 "
  },
  {
    "urunId": "369",
    "Stok Kodu": "1S2812-11001-GUM06",
    "Barkod": "8699131804315",
    "Stok Cinsi": "Schafer Hamburg 72 Parça Çatal Kaşık Bıçak Takımı-Gümüş06",
    "Miktar": "4",
    " Toplam Tutar ": " 13,333.33 "
  },
  {
    "urunId": "370",
    "Stok Kodu": "1S2812-11001-GUM21",
    "Barkod": "8699131813591",
    "Stok Cinsi": "Schafer Hamburg 72 Parça Çatal Kaşık Bıçak Takımı-Gümüş21",
    "Miktar": "4",
    " Toplam Tutar ": " 13,333.33 "
  },
  {
    "urunId": "371",
    "Stok Kodu": "1S0446-01001-PLT01",
    "Barkod": "8699131832745",
    "Stok Cinsi": "Schafer Bety Yemek Takımı 48 Parça-Platin",
    "Miktar": "4",
    " Toplam Tutar ": " 62,853.33 "
  },
  {
    "urunId": "372",
    "Stok Kodu": "1S1636-01001-BYZ01",
    "Barkod": "8699131849682",
    "Stok Cinsi": "Schafer Ella Yemek Takımı 56 Parça-Beyaz",
    "Miktar": "4",
    " Toplam Tutar ": " 62,853.33 "
  },
  {
    "urunId": "373",
    "Stok Kodu": "1S4232-01001-BYZ01",
    "Barkod": "8699131779965",
    "Stok Cinsi": "Schafer Lilya Yemek Takımı 55 Parça-Beyaz",
    "Miktar": "4",
    " Toplam Tutar ": " 62,853.33 "
  },
  {
    "urunId": "374",
    "Stok Kodu": "1S0020-01001-LAC01",
    "Barkod": "8699131784297",
    "Stok Cinsi": "Schafer Adel Navy Blue Yemek Takımı 56 Parça-Lacivert",
    "Miktar": "4",
    " Toplam Tutar ": " 62,853.33 "
  },
  {
    "urunId": "375",
    "Stok Kodu": "1S4232-01001-MAV02 ",
    "Barkod": "8699131901212",
    "Stok Cinsi": "Schafer Lilya Yemek Takımı 55 Parça-Mavi02",
    "Miktar": "4",
    " Toplam Tutar ": " 62,853.33 "
  },
  {
    "urunId": "376",
    "Stok Kodu": "1S6004-22005-SIY03",
    "Barkod": "8699131940891",
    "Stok Cinsi": "Schafer Rock Granit Tencere Seti 7 Parça-Siyah",
    "Miktar": "20",
    " Toplam Tutar ": " 47,619.05 "
  },
  {
    "urunId": "377",
    "Stok Kodu": "1S2812-11001-GUM11",
    "Barkod": "8699131804391",
    "Stok Cinsi": "Schafer Hamburg 72 Parça Çatal Kaşık Bıçak Takımı-Gümüş11",
    "Miktar": "5",
    " Toplam Tutar ": " 16,666.67 "
  },
  {
    "urunId": "378",
    "Stok Kodu": "1S2812-11001-GUM23",
    "Barkod": "8699131819128",
    "Stok Cinsi": "Schafer Hamburg 72 Parça Çatal Kaşık Bıçak Takımı-Gümüş23",
    "Miktar": "5",
    " Toplam Tutar ": " 16,666.67 "
  },
  {
    "urunId": "379",
    "Stok Kodu": "1S2812-11001-GUM30",
    "Barkod": "8699131868546",
    "Stok Cinsi": "Schafer Hamburg 72 Parça Çatal Kaşık Bıçak Takımı-Gümüş30",
    "Miktar": "5",
    " Toplam Tutar ": " 16,666.67 "
  },
  {
    "urunId": "380",
    "Stok Kodu": "1S2812-11001-GUM31",
    "Barkod": "8699131868539",
    "Stok Cinsi": "Schafer Hamburg 72 Parça Çatal Kaşık Bıçak Takımı-Gümüş31",
    "Miktar": "5",
    " Toplam Tutar ": " 16,666.67 "
  },
  {
    "urunId": "381",
    "Stok Kodu": "1S4234-02001-ASO01",
    "Barkod": "8699131790977",
    "Stok Cinsi": "Schafer Lora Kahvaltı Takımı 32 Parça-Asorti",
    "Miktar": "4",
    " Toplam Tutar ": " 9,523.81 "
  },
  {
    "urunId": "382",
    "Stok Kodu": "1S4234-02001-BEJ01",
    "Barkod": "8699131790953",
    "Stok Cinsi": "Schafer Lora Kahvaltı Takımı 32 Parça-Bej",
    "Miktar": "4",
    " Toplam Tutar ": " 9,523.81 "
  },
  {
    "urunId": "383",
    "Stok Kodu": "1S4234-02001-YSL01",
    "Barkod": "8699131790960",
    "Stok Cinsi": "Schafer Lora Kahvaltı Takımı 32 Parça-Yeşil",
    "Miktar": "4",
    " Toplam Tutar ": " 9,523.81 "
  },
  {
    "urunId": "384",
    "Stok Kodu": "1S1644-01001-BEJ01",
    "Barkod": "8699131916131",
    "Stok Cinsi": "Schafer Evelynn Yemek Takımı 24 Parça-Bej",
    "Miktar": "4",
    " Toplam Tutar ": " 9,523.81 "
  },
  {
    "urunId": "385",
    "Stok Kodu": "1S1644-01001-YSL01",
    "Barkod": "8699131916162",
    "Stok Cinsi": "Schafer Evelynn Yemek Takımı 24 Parça-Yeşil",
    "Miktar": "4",
    " Toplam Tutar ": " 9,523.81 "
  },
  {
    "urunId": "386",
    "Stok Kodu": "3ST002-34905-BEJ02",
    "Barkod": "8699131833735",
    "Stok Cinsi": "Schafer Home Arya 70x140 Cm Havlu 1 Parça-Bej",
    "Miktar": "4",
    " Toplam Tutar ": " 1,462.67 "
  },
  {
    "urunId": "387",
    "Stok Kodu": "3ST002-34905-GRI02",
    "Barkod": "8699131833759",
    "Stok Cinsi": "Schafer Home Arya 70x140 Cm Havlu 1 Parça-Gri",
    "Miktar": "4",
    " Toplam Tutar ": " 1,462.67 "
  },
  {
    "urunId": "388",
    "Stok Kodu": "3ST002-34905-IND02",
    "Barkod": "8699131833704",
    "Stok Cinsi": "Schafer Home Arya 70x140 Cm Havlu 1 Parça-İndigo",
    "Miktar": "4",
    " Toplam Tutar ": " 1,462.67 "
  },
  {
    "urunId": "389",
    "Stok Kodu": "3ST002-34905-KMT02",
    "Barkod": "8699131833674",
    "Stok Cinsi": "Schafer Home Arya 70x140 Cm Havlu 1 Parça-Kiremit",
    "Miktar": "4",
    " Toplam Tutar ": " 1,462.67 "
  },
  {
    "urunId": "390",
    "Stok Kodu": "3ST002-34905-KRM02",
    "Barkod": "8699131833742",
    "Stok Cinsi": "Schafer Home Arya 70x140 Cm Havlu 1 Parça-Krem",
    "Miktar": "4",
    " Toplam Tutar ": " 1,462.67 "
  },
  {
    "urunId": "391",
    "Stok Kodu": "3ST002-34905-KRM01",
    "Barkod": "8699131833599",
    "Stok Cinsi": "Schafer Home Arya 50x90 Cm Havlu 1 Parça-Krem",
    "Miktar": "10",
    " Toplam Tutar ": " 2,742.40 "
  },
  {
    "urunId": "392",
    "Stok Kodu": "3ST002-34905-KMT01",
    "Barkod": "8699131833513",
    "Stok Cinsi": "Schafer Home Arya 50x90 Cm Havlu 1 Parça-Kiremit",
    "Miktar": "10",
    " Toplam Tutar ": " 2,742.40 "
  },
  {
    "urunId": "393",
    "Stok Kodu": "3ST002-34905-IND01",
    "Barkod": "8699131833575",
    "Stok Cinsi": "Schafer Home Arya 50x90 Cm Havlu 1 Parça-İndigo",
    "Miktar": "10",
    " Toplam Tutar ": " 2,742.40 "
  },
  {
    "urunId": "394",
    "Stok Kodu": "3ST002-34905-GRI01",
    "Barkod": "8699131833612",
    "Stok Cinsi": "Schafer Home Arya 50x90 Cm Havlu 1 Parça-Gri",
    "Miktar": "10",
    " Toplam Tutar ": " 2,742.40 "
  },
  {
    "urunId": "395",
    "Stok Kodu": "3ST002-34905-BEJ01",
    "Barkod": "8699131833605",
    "Stok Cinsi": "Schafer Home Arya 50x90 Cm Havlu 1 Parça-Bej",
    "Miktar": "10",
    " Toplam Tutar ": " 2,742.40 "
  },
  {
    "urunId": "396",
    "Stok Kodu": "3ST002-34905-YSL02",
    "Barkod": "8699131833568",
    "Stok Cinsi": "Schafer Home Arya 50x90 Cm Havlu 1 Parça-Orta Yeşil",
    "Miktar": "10",
    " Toplam Tutar ": " 2,742.40 "
  },
  {
    "urunId": "397",
    "Stok Kodu": "3S003-34906-XXX01",
    "Barkod": "8699131691281",
    "Stok Cinsi": "Schafer Home Amber Oda Kokusu 100 ML 1 Parça",
    "Miktar": "4",
    " Toplam Tutar ": " 1,276.34 "
  },
  {
    "urunId": "398",
    "Stok Kodu": "3S003-34909-XXX02",
    "Barkod": "8699131006290",
    "Stok Cinsi": "Schafer Home Amber Çamaşır Spreyi 400 ML 1 Parça",
    "Miktar": "4",
    " Toplam Tutar ": " 1,276.34 "
  },
  {
    "urunId": "399",
    "Stok Kodu": "3ST170-34905-IND01",
    "Barkod": "8699131865323",
    "Stok Cinsi": "Schafer Home Ethnic 75x150 Plaj Havlusu 1 Parça-Indigo",
    "Miktar": "5",
    " Toplam Tutar ": " 3,195.43 "
  },
  {
    "urunId": "400",
    "Stok Kodu": "3ST170-34905-PEM01",
    "Barkod": "8699131865217",
    "Stok Cinsi": "Schafer Home Ethnic 75x150 Plaj Havlusu 1 Parça-Pembe",
    "Miktar": "5",
    " Toplam Tutar ": " 3,195.43 "
  },
  {
    "urunId": "401",
    "Stok Kodu": "3ST170-34905-SRI01",
    "Barkod": "8699131865316",
    "Stok Cinsi": "Schafer Home Ethnic 75x150 Plaj Havlusu 1 Parça-Sarı",
    "Miktar": "5",
    " Toplam Tutar ": " 3,195.43 "
  },
  {
    "urunId": "402",
    "Stok Kodu": "3ST170-34905-YSL01",
    "Barkod": "8699131865293",
    "Stok Cinsi": "Schafer Home Ethnic 75x150 Plaj Havlusu 1 Parça-Yeşil",
    "Miktar": "5",
    " Toplam Tutar ": " 3,195.43 "
  },
  {
    "urunId": "403",
    "Stok Kodu": "3ST283-32904-YSL02",
    "Barkod": "8699131876770",
    "Stok Cinsi": "Schafer Home Hera Tek Kişilik Pike Takımı 3 Parça-Yeşil",
    "Miktar": "10",
    " Toplam Tutar ": " 16,448.00 "
  },
  {
    "urunId": "404",
    "Stok Kodu": "3ST283-32904-YSL01",
    "Barkod": "8699131876732",
    "Stok Cinsi": "Schafer Home Hera Çift Kişilik Pike Takımı 4 Parça-Yeşil",
    "Miktar": "15",
    " Toplam Tutar ": " 31,529.14 "
  },
  {
    "urunId": "405",
    "Stok Kodu": "3ST340-32906-HAK01",
    "Barkod": "8699131874639",
    "Stok Cinsi": "Schafer Home Infinity Çift Kişilik Complete Set 4 Parça-Haki",
    "Miktar": "2",
    " Toplam Tutar ": " 6,398.17 "
  },
  {
    "urunId": "406",
    "Stok Kodu": "3ST340-32906-HRD01",
    "Barkod": "8699131874660",
    "Stok Cinsi": "Schafer Home Infinity Çift Kişilik Complete Set 4 Parça-Hardal",
    "Miktar": "2",
    " Toplam Tutar ": " 6,398.17 "
  },
  {
    "urunId": "407",
    "Stok Kodu": "3ST340-32906-IND01",
    "Barkod": "8699131874646",
    "Stok Cinsi": "Schafer Home Infinity Çift Kişilik Complete Set 4 Parça-İndigo",
    "Miktar": "2",
    " Toplam Tutar ": " 6,398.17 "
  },
  {
    "urunId": "408",
    "Stok Kodu": "3ST425-34905-GRI01",
    "Barkod": "8699131909058",
    "Stok Cinsi": "Schafer Home Lace Havlu 50x90 Cm 1 Parça-Orta Gri",
    "Miktar": "10",
    " Toplam Tutar ": " 3,648.00 "
  },
  {
    "urunId": "409",
    "Stok Kodu": "3ST425-34905-GRI02",
    "Barkod": "8699131909102",
    "Stok Cinsi": "Schafer Home Lace Havlu 70x140 Cm 1 Parça-Orta Gri",
    "Miktar": "4",
    " Toplam Tutar ": " 2,190.63 "
  },
  {
    "urunId": "410",
    "Stok Kodu": "3ST425-34905-KAH01",
    "Barkod": "8699131909027",
    "Stok Cinsi": "Schafer Home Lace Havlu 50x90 Cm 1 Parça-Kahverengi",
    "Miktar": "10",
    " Toplam Tutar ": " 3,648.00 "
  },
  {
    "urunId": "411",
    "Stok Kodu": "3ST425-34905-KAH02",
    "Barkod": "8699131909065",
    "Stok Cinsi": "Schafer Home Lace Havlu 70x140 Cm 1 Parça-Kahverengi",
    "Miktar": "4",
    " Toplam Tutar ": " 2,190.63 "
  },
  {
    "urunId": "412",
    "Stok Kodu": "3ST425-34905-KRM01",
    "Barkod": "8699131909034",
    "Stok Cinsi": "Schafer Home Lace Havlu 50x90 Cm 1 Parça-Krem",
    "Miktar": "10",
    " Toplam Tutar ": " 3,648.00 "
  },
  {
    "urunId": "413",
    "Stok Kodu": "3ST425-34905-KRM02",
    "Barkod": "8699131909089",
    "Stok Cinsi": "Schafer Home Lace Havlu 70x140 Cm 1 Parça-Krem",
    "Miktar": "4",
    " Toplam Tutar ": " 2,190.63 "
  },
  {
    "urunId": "414",
    "Stok Kodu": "3ST425-34905-MRD01",
    "Barkod": "8699131909041",
    "Stok Cinsi": "Schafer Home Lace Havlu 50x90 Cm 1 Parça-Mürdüm",
    "Miktar": "10",
    " Toplam Tutar ": " 3,648.00 "
  },
  {
    "urunId": "415",
    "Stok Kodu": "3ST425-34905-MRD02",
    "Barkod": "8699131909096",
    "Stok Cinsi": "Schafer Home Lace Havlu 70x140 Cm 1 Parça-Mürdüm",
    "Miktar": "4",
    " Toplam Tutar ": " 2,190.63 "
  },
  {
    "urunId": "416",
    "Stok Kodu": "3ST139-34905-BEJ01",
    "Barkod": "8699131883259",
    "Stok Cinsi": "Schafer Home Dolce Jakarlı Havlu 50x90 1 Parça-Bej",
    "Miktar": "10",
    " Toplam Tutar ": " 4,105.14 "
  },
  {
    "urunId": "417",
    "Stok Kodu": "3ST139-34905-BEJ02",
    "Barkod": "8699131883297",
    "Stok Cinsi": "Schafer Home Dolce Jakarlı Havlu 70x140 1 Parça-Bej",
    "Miktar": "4",
    " Toplam Tutar ": " 2,556.34 "
  },
  {
    "urunId": "418",
    "Stok Kodu": "3ST139-34905-KMT01",
    "Barkod": "8699131882603",
    "Stok Cinsi": "Schafer Home Dolce Jakarlı Havlu 50x90 1 Parça-Kiremit",
    "Miktar": "10",
    " Toplam Tutar ": " 4,105.14 "
  },
  {
    "urunId": "419",
    "Stok Kodu": "3ST139-34905-KMT02",
    "Barkod": "8699131883334",
    "Stok Cinsi": "Schafer Home Dolce Jakarlı Havlu 70x140 1 Parça-Kiremit",
    "Miktar": "4",
    " Toplam Tutar ": " 2,556.34 "
  },
  {
    "urunId": "420",
    "Stok Kodu": "3ST139-34905-YSL01",
    "Barkod": "8699131883266",
    "Stok Cinsi": "Schafer Home Dolce Jakarlı Havlu 50x90 1 Parça-Yeşil",
    "Miktar": "10",
    " Toplam Tutar ": " 4,105.14 "
  },
  {
    "urunId": "421",
    "Stok Kodu": "3ST139-34905-YSL02",
    "Barkod": "8699131883280",
    "Stok Cinsi": "Schafer Home Dolce Jakarlı Havlu 70x140 1 Parça-Yeşil",
    "Miktar": "4",
    " Toplam Tutar ": " 2,556.34 "
  },
  {
    "urunId": "422",
    "Stok Kodu": "3ST130-34911-ANT01",
    "Barkod": "8699131888469",
    "Stok Cinsi": "Schafer Home Daily 4 lü Havlu Seti 30x40 Cm-Antrasit",
    "Miktar": "8",
    " Toplam Tutar ": " 4,381.26 "
  },
  {
    "urunId": "423",
    "Stok Kodu": "3ST130-34911-KAH01",
    "Barkod": "8699131888445",
    "Stok Cinsi": "Schafer Home Daily 4 Lü Havlu Seti 30x40 Cm-Kahverengi",
    "Miktar": "8",
    " Toplam Tutar ": " 4,381.26 "
  },
  {
    "urunId": "424",
    "Stok Kodu": "3ST130-34911-KMT01",
    "Barkod": "8699131888452",
    "Stok Cinsi": "Schafer Home Daily 4 lü Havlu Seti 30x40 Cm-Kiremit",
    "Miktar": "8",
    " Toplam Tutar ": " 4,381.26 "
  },
  {
    "urunId": "425",
    "Stok Kodu": "3ST130-34911-YSL01",
    "Barkod": "8699131888438",
    "Stok Cinsi": "Schafer Home Daily 4 lü Havlu Seti 30x40 Cm-Yeşil",
    "Miktar": "8",
    " Toplam Tutar ": " 4,381.26 "
  },
  {
    "urunId": "426",
    "Stok Kodu": "3ST002-34905-YSL04",
    "Barkod": "8699131833698",
    "Stok Cinsi": "Schafer Home Arya 70x140 Cm Havlu 1 Parça-Orta Yeşil",
    "Miktar": "4",
    " Toplam Tutar ": " 1,462.67 "
  },
  {
    "urunId": "427",
    "Stok Kodu": "3S5400-34905-HRD01",
    "Barkod": "8699131911051",
    "Stok Cinsi": "Schafer Home Ayak Havlusu 50x70 Cm 1 Parça-Hardal",
    "Miktar": "10",
    " Toplam Tutar ": " 4,570.97 "
  },
  {
    "urunId": "428",
    "Stok Kodu": "3S5400-34905-MAV01",
    "Barkod": "8699131911044",
    "Stok Cinsi": "Schafer Home Ayak Havlusu 50x70 Cm 1 Parça-Mavi",
    "Miktar": "10",
    " Toplam Tutar ": " 4,570.97 "
  },
  {
    "urunId": "429",
    "Stok Kodu": "3S5400-34905-YSL01",
    "Barkod": "8699131911020",
    "Stok Cinsi": "Schafer Home Ayak Havlusu 50x70 Cm 1 Parça-Yeşil",
    "Miktar": "10",
    " Toplam Tutar ": " 4,570.97 "
  },
  {
    "urunId": "430",
    "Stok Kodu": "3S5400-34912-NON01",
    "Barkod": "8699131906514",
    "Stok Cinsi": "Schafer Home Oval Sepet 7x19 cm",
    "Miktar": "15",
    " Toplam Tutar ": " 2,729.14 "
  },
  {
    "urunId": "431",
    "Stok Kodu": "3S5400-34912-NON02",
    "Barkod": "8699131906521",
    "Stok Cinsi": "Schafer Home Küçük Sepet 9x13 cm",
    "Miktar": "15",
    " Toplam Tutar ": " 2,043.43 "
  },
  {
    "urunId": "432",
    "Stok Kodu": "3ST257-34906-NON01",
    "Barkod": "8699131892732",
    "Stok Cinsi": "Schafer Home Gardenia Oda Kokusu 100 ML 1 Parça",
    "Miktar": "4",
    " Toplam Tutar ": " 1,276.34 "
  },
  {
    "urunId": "433",
    "Stok Kodu": "3ST493-34906-NON01",
    "Barkod": "8699131861974",
    "Stok Cinsi": "Schafer Home Mirano Tonga Oda Kokusu 110 ML 1 Parça",
    "Miktar": "4",
    " Toplam Tutar ": " 2,190.63 "
  },
  {
    "urunId": "434",
    "Stok Kodu": "3ST584-34906-NON01",
    "Barkod": "8699131892657",
    "Stok Cinsi": "Schafer Home Pure Oda Kokusu 100 ML 1 Parça",
    "Miktar": "4",
    " Toplam Tutar ": " 1,276.34 "
  },
  {
    "urunId": "435",
    "Stok Kodu": "3ST590-34906-XXX01",
    "Barkod": "8699131828076",
    "Stok Cinsi": "Schafer Home Powder Oda Kokusu 110 ML 1 Parça",
    "Miktar": "4",
    " Toplam Tutar ": " 2,190.63 "
  },
  {
    "urunId": "436",
    "Stok Kodu": "3ST618-34905-BYZ01",
    "Barkod": "8699131883358",
    "Stok Cinsi": "Schafer Home Plain Jakarlı Havlu 50x90 Cm 1 Parça-Beyaz",
    "Miktar": "10",
    " Toplam Tutar ": " 4,105.14 "
  },
  {
    "urunId": "437",
    "Stok Kodu": "3ST618-34905-BYZ02",
    "Barkod": "8699131883402",
    "Stok Cinsi": "Schafer Home Plain Jakarlı Havlu 70x140 Cm 1 Parça-Beyaz",
    "Miktar": "4",
    " Toplam Tutar ": " 2,556.34 "
  },
  {
    "urunId": "438",
    "Stok Kodu": "3ST618-34905-ANT01",
    "Barkod": "8699131883341",
    "Stok Cinsi": "Schafer Home Plain Jakarlı Havlu 50x90 Cm 1 Parça-Antrasit",
    "Miktar": "10",
    " Toplam Tutar ": " 4,105.14 "
  },
  {
    "urunId": "439",
    "Stok Kodu": "3ST618-34905-ANT02",
    "Barkod": "8699131883365",
    "Stok Cinsi": "Schafer Home Plain Jakarlı Havlu 70x140 Cm 1 Parça-Antrasit",
    "Miktar": "4",
    " Toplam Tutar ": " 2,556.34 "
  },
  {
    "urunId": "440",
    "Stok Kodu": "3ST618-34905-GRI01",
    "Barkod": "8699131883372",
    "Stok Cinsi": "Schafer Home Plain Jakarlı Havlu 50x90 Cm 1 Parça-Gri",
    "Miktar": "10",
    " Toplam Tutar ": " 4,105.14 "
  },
  {
    "urunId": "441",
    "Stok Kodu": "3ST618-34905-GRI02",
    "Barkod": "8699131883396",
    "Stok Cinsi": "Schafer Home Plain Jakarlı Havlu 70x140 Cm 1 Parça-Gri",
    "Miktar": "4",
    " Toplam Tutar ": " 2,556.34 "
  },
  {
    "urunId": "442",
    "Stok Kodu": "3ST619-34905-IND01",
    "Barkod": "8699131888520",
    "Stok Cinsi": "Schafer Home Polly Havlu 50x90 Cm 1 Parça-İndigo",
    "Miktar": "10",
    " Toplam Tutar ": " 4,105.14 "
  },
  {
    "urunId": "443",
    "Stok Kodu": "3ST619-34905-IND02",
    "Barkod": "8699131888551",
    "Stok Cinsi": "Schafer Home Polly Havlu 70x140 Cm 1 Parça-İndigo",
    "Miktar": "4",
    " Toplam Tutar ": " 2,739.20 "
  },
  {
    "urunId": "444",
    "Stok Kodu": "3ST619-34905-KAH01",
    "Barkod": "8699131888544",
    "Stok Cinsi": "Schafer Home Polly Havlu 50x90 Cm 1 Parça-Kahverengi",
    "Miktar": "10",
    " Toplam Tutar ": " 4,105.14 "
  },
  {
    "urunId": "445",
    "Stok Kodu": "3ST619-34905-KAH02",
    "Barkod": "8699131888575",
    "Stok Cinsi": "Schafer Home Polly Havlu 70x140 Cm 1 Parça-Kahverengi",
    "Miktar": "4",
    " Toplam Tutar ": " 2,739.20 "
  },
  {
    "urunId": "446",
    "Stok Kodu": "3ST619-34905-KRM01",
    "Barkod": "8699131888537",
    "Stok Cinsi": "Schafer Home Polly Havlu 50x90 Cm 1 Parça-Krem",
    "Miktar": "10",
    " Toplam Tutar ": " 4,105.14 "
  },
  {
    "urunId": "447",
    "Stok Kodu": "3ST619-34905-KRM02",
    "Barkod": "8699131888568",
    "Stok Cinsi": "Schafer Home Polly Havlu 70x140 Cm 1 Parça-Krem",
    "Miktar": "4",
    " Toplam Tutar ": " 2,739.20 "
  },
  {
    "urunId": "448",
    "Stok Kodu": "3ST685-34905-IND01",
    "Barkod": "8699131852828",
    "Stok Cinsi": "Schafer Home Sun 75x150 Cm Plaj Havlu 1 Parça-İndigo",
    "Miktar": "5",
    " Toplam Tutar ": " 3,195.43 "
  },
  {
    "urunId": "449",
    "Stok Kodu": "3ST685-34905-PEM01",
    "Barkod": "8699131865248",
    "Stok Cinsi": "Schafer Home Sun 75x150 Cm Plaj Havlu 1 Parça-Pembe",
    "Miktar": "5",
    " Toplam Tutar ": " 3,195.43 "
  },
  {
    "urunId": "450",
    "Stok Kodu": "3ST685-34905-SRI01",
    "Barkod": "8699131863756",
    "Stok Cinsi": "Schafer Home Sun 75x150 Cm Plaj Havlu 1 Parça-Sarı",
    "Miktar": "5",
    " Toplam Tutar ": " 3,195.43 "
  },
  {
    "urunId": "451",
    "Stok Kodu": "3ST685-34905-YSL01",
    "Barkod": "8699131852811",
    "Stok Cinsi": "Schafer Home Sun 75x150 Cm Plaj Havlu 1 Parça-Yeşil",
    "Miktar": "5",
    " Toplam Tutar ": " 3,195.43 "
  },
  {
    "urunId": "452",
    "Stok Kodu": "3ST748-32906-BEJ01",
    "Barkod": "8699131892138",
    "Stok Cinsi": "Schafer Home Sofia Müslin Pike 200x220 Cm 1 Parça-Bej",
    "Miktar": "8",
    " Toplam Tutar ": " 9,501.26 "
  },
  {
    "urunId": "453",
    "Stok Kodu": "3ST748-32906-KRM01",
    "Barkod": "8699131886007",
    "Stok Cinsi": "Schafer Home Sofia Müslin Pike 200x220 Cm 1 Parça-Krem",
    "Miktar": "8",
    " Toplam Tutar ": " 9,501.26 "
  },
  {
    "urunId": "454",
    "Stok Kodu": "3ST748-32906-PUD01",
    "Barkod": "8699131886014",
    "Stok Cinsi": "Schafer Home Sofia Müslin Pike 200x220 Cm 1 Parça-Pudra",
    "Miktar": "8",
    " Toplam Tutar ": " 9,501.26 "
  },
  {
    "urunId": "455",
    "Stok Kodu": "3ST749-34905-EKR01",
    "Barkod": "8699131910160",
    "Stok Cinsi": "Schafer Home Stone 50x90 Havlu 1 Parça-Ekru",
    "Miktar": "10",
    " Toplam Tutar ": " 3,656.69 "
  },
  {
    "urunId": "456",
    "Stok Kodu": "3ST749-34905-GRI01",
    "Barkod": "8699131910177",
    "Stok Cinsi": "Schafer Home Stone 50x90 Havlu 1 Parça-Gri",
    "Miktar": "10",
    " Toplam Tutar ": " 3,656.69 "
  },
  {
    "urunId": "457",
    "Stok Kodu": "3ST749-34905-KMT01",
    "Barkod": "8699131765128",
    "Stok Cinsi": "Schafer Home Stone 50x90 Havlu 1 Parça-Kiremit",
    "Miktar": "10",
    " Toplam Tutar ": " 3,656.69 "
  },
  {
    "urunId": "458",
    "Stok Kodu": "3ST749-34905-LAC01",
    "Barkod": "8699131910207",
    "Stok Cinsi": "Schafer Home Stone 50x90 Havlu 1 Parça-Lacivert",
    "Miktar": "10",
    " Toplam Tutar ": " 3,656.69 "
  },
  {
    "urunId": "459",
    "Stok Kodu": "3ST754-34906-NON01",
    "Barkod": "8699131892701",
    "Stok Cinsi": "Schafer Home Sandal Ağacı Oda Kokusu 100 ML 1 Parça",
    "Miktar": "4",
    " Toplam Tutar ": " 1,276.34 "
  },
  {
    "urunId": "460",
    "Stok Kodu": "3ST754-34909-NON01",
    "Barkod": "8699131892763",
    "Stok Cinsi": "Schafer Home Sandal Ağacı Çamaşır Spreyi 250 ML 1 Parça",
    "Miktar": "4",
    " Toplam Tutar ": " 910.63 "
  },
  {
    "urunId": "461",
    "Stok Kodu": "3ST755-34906-NON01",
    "Barkod": "8699131892749",
    "Stok Cinsi": "Schafer Home Sakura Oda Kokusu 100 ML 1 Parça",
    "Miktar": "4",
    " Toplam Tutar ": " 1,276.34 "
  },
  {
    "urunId": "462",
    "Stok Kodu": "3ST755-34909-NON01",
    "Barkod": "8699131892787",
    "Stok Cinsi": "Schafer Home Sakura Çamaşır Spreyi 250 ML 1 Parça",
    "Miktar": "4",
    " Toplam Tutar ": " 910.63 "
  },
  {
    "urunId": "463",
    "Stok Kodu": "3ST003-34906-XXX02",
    "Barkod": "8699131828106",
    "Stok Cinsi": "Schafer Home Amber Oda Kokusu 110 Ml 1 Parça",
    "Miktar": "4",
    " Toplam Tutar ": " 2,190.63 "
  },
  {
    "urunId": "464",
    "Stok Kodu": "3ST003-34909-NON01",
    "Barkod": "8699131892671",
    "Stok Cinsi": "Schafer Home Amber Çamaşır Spreyi 250 ML 1 Parça",
    "Miktar": "4",
    " Toplam Tutar ": " 910.63 "
  },
  {
    "urunId": "465",
    "Stok Kodu": "3ST113-32902-IND01",
    "Barkod": "8699131891605",
    "Stok Cinsi": "Schafer Home Clasy İpliği Boyalı ÇK Nevresim Takımı 4 Parça-İndigo",
    "Miktar": "6",
    " Toplam Tutar ": " 7,125.94 "
  },
  {
    "urunId": "466",
    "Stok Kodu": "3ST113-32902-KAH01",
    "Barkod": "8699131891612",
    "Stok Cinsi": "Schafer Home Clasy İpliği Boyalı ÇK Nevresim Takımı 4 Parça-Kahverengi",
    "Miktar": "6",
    " Toplam Tutar ": " 7,125.94 "
  },
  
];

const fiyatParseEt = (deger?: string): number => {
  const temiz = (deger ?? "").replace(/\s+/g, "").replace(/,/g, "");
  const sayi = Number.parseFloat(temiz);
  return Number.isFinite(sayi) ? sayi : 0;
};

let urunler: Urun[] = hamUrunler
  .filter((u) => {
    const barkod = (u.Barkod ?? "").trim();
    const stokCinsi = (u["Stok Cinsi"] ?? "").trim();
    const toplamTutar = (u[" Toplam Tutar "] ?? "").trim();

    return barkod.length > 0 && stokCinsi.length > 0 && toplamTutar !== "-" && fiyatParseEt(toplamTutar) > 0;
  })
  .filter((u, index, arr) => {
    const barkod = (u.Barkod ?? "").trim();
    return arr.findIndex((x) => (x.Barkod ?? "").trim() === barkod) === index;
  })
  .map((u) => ({
    stokId: (u["Stok Kodu"] ?? "").trim(),
    barkod: (u.Barkod ?? "").trim(),
    urunAdi: (u["Stok Cinsi"] ?? "").trim(),
    stok: Number.parseInt((u.Miktar ?? "0").trim(), 10) || 0,
    fiyat: fiyatParseEt(u[" Toplam Tutar "]),
    paraBirimi: "₺",
    kategori: "Mutfak Küçük Ev Aletleri",
  }));

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

export const stokDus = async (barkod: string): Promise<{ basarili: boolean; yeniStok: number; mesaj: string }> => {
  // API gecikmesini simüle et
  await new Promise((r) => setTimeout(r, 400));
  const urun = urunler.find((u) => u.barkod === barkod);
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
