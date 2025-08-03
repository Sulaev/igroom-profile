'use client';

import { AlignJustify } from 'lucide-react';

export function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 h-[60px] bg-[#F5F5F5] flex items-center justify-between px-[21px] shadow"
      style={{ minWidth: 320 }}>
      <div className="text-[34px] text-[#7F7F7F] font-normal">Профиль</div>
      <AlignJustify className="w-8 h-8 text-[#7F7F7F]" />
    </header>
  );
}
