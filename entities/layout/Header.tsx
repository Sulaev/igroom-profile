'use client';

import { AlignJustify } from 'lucide-react';

export function Header() {
  return (
    <div className="flex items-center w-[390px] justify-between px-[21px] py-2 bg-[#F5F5F5] text-[#7F7F7F]">
      <div className="text-[34px]">Профиль</div>
      <AlignJustify className='size-8.5'/>
    </div>
  );
}
