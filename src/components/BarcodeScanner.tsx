import { useEffect, useRef, useState, useCallback } from "react";
import { BrowserMultiFormatReader } from "@zxing/browser";

interface BarcodeScannerProps {
  onScan: (barkod: string) => void;
  aktif: boolean;
}

export default function BarcodeScanner({ onScan, aktif }: BarcodeScannerProps) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const readerRef = useRef<BrowserMultiFormatReader | null>(null);
  const controlsRef = useRef<{ stop: () => void } | null>(null);
  const [hata, setHata] = useState<string | null>(null);
  const [yukleniyor, setYukleniyor] = useState(false);
  const sonScanRef = useRef<string>("");
  const cooldownRef = useRef(false);

  const tarayiciyiBaslat = useCallback(async () => {
    if (!videoRef.current || !aktif) return;
    setYukleniyor(true);
    setHata(null);

    try {
      readerRef.current = new BrowserMultiFormatReader();
      const controls = await readerRef.current.decodeFromConstraints(
        {
          video: {
            facingMode: { ideal: "environment" },
            width: { ideal: 1280 },
            height: { ideal: 720 },
          },
        },
        videoRef.current,
        (result, err) => {
          if (result) {
            const metin = result.getText();
            if (metin && metin !== sonScanRef.current && !cooldownRef.current) {
              sonScanRef.current = metin;
              cooldownRef.current = true;
              onScan(metin);
              // 3 saniye cooldown - aynı barkodu tekrar okutmayı engelle
              setTimeout(() => {
                cooldownRef.current = false;
                sonScanRef.current = "";
              }, 3000);
            }
          }
          if (err && !(err.message?.includes("No MultiFormat"))) {
            // Sessiz hataları görmezden gel
          }
        }
      );
      controlsRef.current = controls as unknown as { stop: () => void };
      setYukleniyor(false);
    } catch (e: unknown) {
      const mesaj =
        e instanceof Error
          ? e.message.includes("Permission")
            ? "Kamera izni verilmedi. Lütfen tarayıcı ayarlarından kamera iznini açın."
            : e.message.includes("Could not find")
            ? "Kamera bulunamadı. Lütfen cihazınızda kamera olduğundan emin olun."
            : "Kamera başlatılamadı: " + e.message
          : "Bilinmeyen kamera hatası.";
      setHata(mesaj);
      setYukleniyor(false);
    }
  }, [aktif, onScan]);

  const tarayiciyiDurdur = useCallback(() => {
    if (controlsRef.current) {
      try {
        controlsRef.current.stop();
      } catch (_) {}
      controlsRef.current = null;
    }
    if (videoRef.current?.srcObject) {
      const stream = videoRef.current.srcObject as MediaStream;
      stream.getTracks().forEach((t) => t.stop());
      videoRef.current.srcObject = null;
    }
  }, []);

  useEffect(() => {
    if (aktif) {
      tarayiciyiBaslat();
    } else {
      tarayiciyiDurdur();
    }
    return () => {
      tarayiciyiDurdur();
    };
  }, [aktif, tarayiciyiBaslat, tarayiciyiDurdur]);

  return (
    <div className="relative w-full">
      {/* Kamera görüntüsü */}
      <div className="relative w-full aspect-video bg-gray-900 rounded-2xl overflow-hidden shadow-2xl border-2 border-blue-500/40">
        <video
          ref={videoRef}
          className="w-full h-full object-cover"
          muted
          playsInline
          autoPlay
        />

        {/* Tarama çerçevesi */}
        {aktif && !hata && !yukleniyor && (
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="relative w-64 h-40">
              {/* Köşe çizgileri */}
              <span className="absolute top-0 left-0 w-8 h-8 border-t-4 border-l-4 border-green-400 rounded-tl-md" />
              <span className="absolute top-0 right-0 w-8 h-8 border-t-4 border-r-4 border-green-400 rounded-tr-md" />
              <span className="absolute bottom-0 left-0 w-8 h-8 border-b-4 border-l-4 border-green-400 rounded-bl-md" />
              <span className="absolute bottom-0 right-0 w-8 h-8 border-b-4 border-r-4 border-green-400 rounded-br-md" />
              {/* Tarama çizgisi animasyonu */}
              <div className="absolute inset-x-2 h-0.5 bg-green-400/80 shadow-[0_0_8px_2px_rgba(74,222,128,0.6)] animate-[scan-line_2s_ease-in-out_infinite]" />
            </div>
            <p className="absolute bottom-4 text-white/70 text-sm font-medium tracking-wide">
              Barkodu çerçeve içine getirin
            </p>
          </div>
        )}

        {/* Yükleniyor */}
        {yukleniyor && (
          <div className="absolute inset-0 flex flex-col items-center justify-center bg-gray-900/80">
            <div className="w-10 h-10 border-4 border-blue-400 border-t-transparent rounded-full animate-spin mb-3" />
            <p className="text-white text-sm">Kamera açılıyor...</p>
          </div>
        )}

        {/* Hata */}
        {hata && (
          <div className="absolute inset-0 flex flex-col items-center justify-center bg-gray-900/90 p-4">
            <span className="text-4xl mb-3">📷</span>
            <p className="text-red-400 text-sm text-center font-medium">{hata}</p>
          </div>
        )}

        {/* Kamera kapalı */}
        {!aktif && !yukleniyor && !hata && (
          <div className="absolute inset-0 flex flex-col items-center justify-center bg-gray-900">
            <span className="text-5xl mb-3 opacity-30">📷</span>
            <p className="text-white/40 text-sm">Kamera kapalı</p>
          </div>
        )}
      </div>
    </div>
  );
}
