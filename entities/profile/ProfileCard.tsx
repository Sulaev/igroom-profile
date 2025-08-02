'use client';

import { Profile } from "./types";
import { Avatar } from "./Avatar";

export function ProfileCard({ profile }: { profile: Profile }) {
  return (
    <div className="w-[360px] mx-auto bg-[#F5F5F5] flex flex-col items-center relative overflow-hidden pt-5 pb-8">
      
      <div className="w-full flex flex-row justify-between items-start px-4">
        <button className="p-0.5" onClick={() => window.history.back()}>
          <svg width="28" height="28" fill="none" viewBox="0 0 28 28">
            <path d="M18 7l-7 7 7 7" stroke="#A6A6A6" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </button>
        <div className="flex flex-col gap-3 items-center mt-2 select-none">
          <button className="flex flex-col items-center opacity-50">
            <svg width="25" height="25" fill="none">
              <path d="M20 14.5c0 1.57-2.5 4.5-7 4.5S6 16.07 6 14.5 8.5 10 13 10s7 2.93 7 4.5Z" stroke="#232323" strokeWidth="1.5"/>
            </svg>
            <span className="text-[12px] text-[#A9A9A9] mt-[-4px]">Это я</span>
          </button>
          <button className="flex flex-col items-center opacity-50">
            <svg width="25" height="25" fill="none">
              <circle cx="12.5" cy="12.5" r="10" stroke="#232323" strokeWidth="1.5"/>
              <path d="M8 15c1.5-2 5.5-2 7 0" stroke="#232323" strokeWidth="1.5" strokeLinecap="round"/>
            </svg>
            <span className="text-[12px] text-[#A9A9A9] mt-[-4px]">Котум</span>
          </button>
          <button className="flex flex-col items-center opacity-50">
            <svg width="25" height="25" fill="none">
              <path d="M20 7l-8.5 8.5-3.5-3.5" stroke="#232323" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
            <span className="text-[12px] text-[#A9A9A9] mt-[-4px]">Поделиться</span>
          </button>
        </div>
      </div>

      {/* Аватар */}
      <div className="flex flex-col items-center w-full relative z-10">
        <div className="relative flex items-center justify-center mt-[-28px]">
          <div className="w-[132px] h-[132px] bg-[#FFF457] rounded-full border-4 border-white flex items-center justify-center shadow-lg">
            <Avatar src={profile.avatar_url} alt={profile.name} />
          </div>
          {/* Зеленый P */}
          <span className="absolute -top-2 -left-2 bg-green-500 w-8 h-8 rounded-full flex items-center justify-center border-2 border-white font-bold text-white text-base shadow-md">P</span>
        </div>
      </div>

      {/* Имя, ник и "вчера" */}
      <div className="flex flex-col items-center mt-2 mb-2 w-full">
        <div className="flex flex-row items-center justify-between w-full px-6">
          <span className="text-[15px] text-[#838383]">@{profile.nickname}</span>
          <span className="text-[15px] text-[#838383]">Вчера 18.00</span>
        </div>
        <div className="text-[22px] font-bold text-black leading-none mt-1 mb-1">
          румер: <span className="font-bold">{profile.name}</span>
        </div>
      </div>

      {/* Статы */}
      <div className="flex items-center justify-between gap-2 w-full px-7 mt-1 mb-1">
        <div className="flex flex-col items-center">
          <span className="font-bold text-[17px] text-black leading-tight">1 месяц</span>
          <span className="text-xs text-[#838383] mt-[-2px]">в игре</span>
        </div>
        <div className="flex flex-col items-center">
          <span className="font-bold text-[17px] text-black leading-tight">15</span>
          <span className="text-xs text-[#838383] mt-[-2px]">встреч</span>
        </div>
        <div className="flex flex-col items-center">
          <span className="font-bold text-[17px] text-black leading-tight">350</span>
          <span className="text-xs text-[#838383] mt-[-2px]">румеров</span>
        </div>
      </div>

      {/* Город и Редакт */}
      <div className="flex flex-row items-center justify-between w-[92%] mx-auto mt-3 mb-2">
        <div className="bg-white rounded-[20px] px-6 py-[11px] text-[20px] text-black font-normal">
          Краснодар
        </div>
        <button className="flex items-center gap-1 border border-[#CBCBCB] bg-white rounded-[16px] px-4 py-2 ml-2 text-[16px] text-[#999] font-semibold">
          <svg width="24" height="24" fill="none">
            <circle cx="12" cy="12" r="10" stroke="#CBCBCB" strokeWidth="2"/>
            <path d="M12 8v4l2 2" stroke="#CBCBCB" strokeWidth="2" strokeLinecap="round"/>
          </svg>
          РЕДАКТ
        </button>
      </div>

      {/* Зовы / Иду */}
      <div className="w-[94%] mx-auto mt-2 mb-2 bg-white rounded-[22px] flex flex-col py-2 px-1 gap-1 shadow-sm">
        <div className="flex items-center justify-between py-[5px] px-3">
          <div className="flex items-center gap-2">
            <span className="w-[13px] h-[13px] rounded-full bg-green-500 block" />
            <span className="text-[19px] text-[#262626] font-semibold">ЗОВЫ</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="text-[19px] text-[#6D6D6D] font-bold">2</span>
            <svg width="24" height="24" fill="none">
              <path d="M8 10l4 4 4-4" stroke="#B8B8B8" strokeWidth="2" strokeLinecap="round"/>
            </svg>
          </div>
        </div>
        <hr className="border-[#ECECEC] mx-3"/>
        <div className="flex items-center justify-between py-[5px] px-3">
          <div className="flex items-center gap-2">
            <span className="w-[13px] h-[13px] rounded-full bg-orange-400 block" />
            <span className="text-[19px] text-[#262626] font-semibold">ИДУ</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="text-[19px] text-[#6D6D6D] font-bold">3</span>
            <svg width="24" height="24" fill="none">
              <path d="M8 10l4 4 4-4" stroke="#B8B8B8" strokeWidth="2" strokeLinecap="round"/>
            </svg>
          </div>
        </div>
      </div>

      {/* Кнопки "Создать игрум" и "Мои игрумы" */}
      <div className="w-[96%] mx-auto mt-4 rounded-[22px] overflow-hidden shadow-lg flex flex-col">
        <button className="w-full py-4 bg-[#A100FF] text-white font-bold text-[22px] leading-tight">
          СОЗДАТЬ ИГРУМ
        </button>
        <button className="w-full py-4 bg-white text-[#A100FF] font-bold text-[22px] leading-tight border-t-2 border-[#A100FF]">
          МОИ ИГРУМЫ
        </button>
      </div>

      {/* --- Новый блок --- */}
      <div className="flex flex-col gap-3 mt-6 w-full">

        {/* История встреч */}
        <div className="flex items-center bg-white rounded-xl px-4 py-3 mb-2 shadow-sm">
          <svg className="mr-3" width="22" height="22" fill="none">
            <circle cx="11" cy="11" r="9.5" stroke="#BFC3C9" strokeWidth="1.5"/>
            <path d="M11 6v5l3 3" stroke="#4B5563" strokeWidth="1.5" strokeLinecap="round"/>
          </svg>
          <span className="text-gray-700 text-base font-medium">ИСТОРИЯ ВСТРЕЧ</span>
        </div>

        {/* Публичный аккаунт + Взрослый */}
        <div className="flex gap-2 w-full">
          <div className="flex items-center bg-white rounded-xl px-4 py-3 flex-1 shadow-sm">
            <svg className="mr-2" width="22" height="22" fill="none">
              <circle cx="11" cy="11" r="9.5" stroke="#BFC3C9" strokeWidth="1.5"/>
              <path d="M11 7a4 4 0 100 8 4 4 0 000-8z" fill="#BFC3C9"/>
            </svg>
            <span className="text-gray-700 text-base">Публичный аккаунт</span>
          </div>
          <div className="flex items-center bg-white rounded-xl px-4 py-3 flex-1 shadow-sm">
            <svg className="mr-2" width="22" height="22" fill="none">
              <rect x="5" y="9" width="12" height="6" rx="3" fill="#BFC3C9"/>
              <rect x="8" y="6" width="6" height="6" rx="3" fill="#BFC3C9"/>
            </svg>
            <span className="text-gray-700 text-base">Взрослый</span>
          </div>
        </div>

        {/* Мои подписки, Черный список, Закладки */}
        <div className="bg-white rounded-xl shadow-sm divide-y divide-gray-100 flex flex-col">
          <button className="flex items-center px-4 py-3 gap-3 text-gray-700 text-base">
            <svg width="22" height="22" fill="none"><rect x="4" y="10" width="14" height="2" rx="1" fill="#BFC3C9"/></svg>
            Мои подписки
          </button>
          <button className="flex items-center px-4 py-3 gap-3 text-gray-700 text-base">
            <svg width="22" height="22" fill="none"><circle cx="11" cy="11" r="8" stroke="#BFC3C9" strokeWidth="1.5"/><line x1="7" y1="11" x2="15" y2="11" stroke="#BFC3C9" strokeWidth="1.5"/></svg>
            Черный список
          </button>
          <button className="flex items-center px-4 py-3 gap-3 text-gray-700 text-base">
            <svg width="22" height="22" fill="none"><path d="M6 6h10v10H6z" stroke="#BFC3C9" strokeWidth="1.5"/></svg>
            Закладки
          </button>
        </div>

        {/* Описание профиля + телеграм */}
        <div className="bg-white rounded-xl px-4 py-3 shadow-sm flex flex-col gap-1">
          <div className="text-[13px] text-gray-700 leading-snug line-clamp-2">
            я профессиональный скуф, обожаю сидеть дома и часто играю в Мафию с друзьями по вечерам в Сицилии и зову всех желающих и разные другие дела...
          </div>
          <div className="flex justify-between items-center mt-1">
            <span className="text-gray-400 text-sm">Мой телеграм</span>
            <span className="text-gray-700 text-sm font-medium">@ribakit3</span>
          </div>
        </div>

        {/* Список инструкций */}
        <div className="bg-white rounded-xl shadow-sm flex flex-col divide-y divide-gray-100">
          {[
            'Возможности ИГРУМА',
            'Правила ИГРУМА',
            'Инструкция РУМЕРА',
            'Инструкция МАСТЕРА',
            'Инструкция МЕСТА',
            'Пользовательское соглашение'
          ].map(item => (
            <button
              key={item}
              className="flex items-center px-4 py-3 gap-3 text-gray-700 text-base"
            >
              <span className="w-2 h-2 rounded-full bg-gray-300" />
              {item}
            </button>
          ))}
        </div>

        {/* Выйти из профиля */}
        <button className="bg-white rounded-xl px-4 py-3 shadow-sm text-gray-700 text-base font-medium flex items-center gap-3 mt-2">
          <svg width="22" height="22" fill="none">
            <path d="M7 11h8m0 0l-3-3m3 3l-3 3" stroke="#BFC3C9" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
          Выйти из профиля
        </button>
      </div>
    </div>
  );
}
