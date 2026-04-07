import { useState } from "react";

interface ManuelGirisProps {
  onBarkod: (barkod: string) => void;
}

export default function ManuelGiris({ onBarkod }: ManuelGirisProps) {
  const [deger, setDeger] = useState("");

  const gonder = () => {
    const temiz = deger.trim();
    if (temiz) {
      onBarkod(temiz);
      setDeger("");
    }
  };

  return (
    <div className="flex gap-2">
      <input
        type="text"
        value={deger}
        onChange={(e) => setDeger(e.target.value)}
        onKeyDown={(e) => e.key === "Enter" && gonder()}
        placeholder="Barkod numarası girin..."
        className="flex-1 border border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-blue-400 bg-gray-50"
      />
      <button
        onClick={gonder}
        className="px-4 py-3 bg-blue-600 text-white rounded-xl text-sm font-semibold hover:bg-blue-700 transition-colors active:scale-95"
      >
        Ara
      </button>
    </div>
  );
}
