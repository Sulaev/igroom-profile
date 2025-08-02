'use client';

import { AlignJustify } from 'lucide-react';

export function Header() {
  return (
    <div className="flex items-center w-[360px] justify-between px-4 py-2 bg-[#F5F5F5]">
      <div className="font-semibold text-lg text-[#888]">Профиль</div>
      <AlignJustify />
    </div>
  );
}
