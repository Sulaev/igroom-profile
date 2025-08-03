'use client';

import { Profile } from "./types";
import { Avatar } from "./Avatar";
import { formatLastSeen } from "@/shared/lib/dateUtils";
import { DurationStyled } from "@/shared/lib/formatDurationInApp";

export function ProfileCard({ profile }: { profile: Profile }) {
  return (
    <div className="w-[390px] mx-auto bg-[#F5F5F5] flex flex-col items-center relative overflow-hidden pb-20 pt-20">
      
      <div className="relative w-full flex items-start pt-12" style={{ minHeight: 180 }}>
        <button
          className="absolute left-0 top-2 pl-3"
          onClick={() => window.history.back()}
        >
          <img src="/icon/chevronLeft.svg" alt="Котум" width={18} height={31} />
        </button>

        <div className="absolute left-1/2 top-2 -translate-x-1/2 flex flex-col items-center">
          <div className="w-[180px] h-[180px] bg-[#FFF457] rounded-full flex items-center justify-center shadow-lg">
            <Avatar src={profile.avatar_url} alt={profile.name} />
          </div>
          <span className="absolute -top-2 -left-1 bg-green-500 w-8 h-8 rounded-full flex items-center justify-center font-bold text-black text-base shadow-md">
            P
          </span>
        </div>

        <div className="absolute right-0 top-2 flex flex-col gap-7 items-center pl-7 pr-6 select-none">
          <button className="flex flex-col items-center">
            <img src="/icon/share.svg" alt="Поделиться" width={27} height={41} />
          </button>
          <button className="flex flex-col items-center">
            <img src="/icon/eye.svg" alt="Это я" width={36} height={21} />
            <span className="text-[12px] text-[#A9A9A9]">Это я</span>
          </button>
          <button className="flex flex-col items-center">
            <img src="/icon/cat.svg" alt="Котум" width={30} height={30} />
            <span className="text-[12px] text-[#A9A9A9]">Котум</span>
          </button>
        </div>
      </div>

      <div className="flex flex-col w-full py-5">
        <div className="w-full text-center text-[22px] text-black leading-none mt-1 mb-1 break-words font-normal">
          румер: <span className="font-bold">{profile.name}</span>
        </div>
        <div className="flex flex-row items-center justify-between w-full px-17">
          <span className="text-[17px] text-[#434343]">@{profile.nickname}</span>
          <span className="text-[17px] text-[#434343]">{formatLastSeen(profile.last_login_at)}</span>
        </div>
      </div>

      <div className="flex justify-center items-center w-full px-7 mt-1 mb-1 text-[24px] text-[#434343]">
        <div className="flex flex-col items-center min-w-[110px]">
          <DurationStyled isoDate={profile.created_at} />
        </div>

        <div className="h-12 w-px bg-[#434343] mx-3 opacity-60" />

        <div className="flex flex-col items-center px-8 min-w-[60px]">
          <span className="font-bold leading-tight">15</span>
          <span className="text-base text-[#434343] font-normal mt-[-2px]">встреч</span>
        </div>

        <div className="h-12 w-px bg-[#434343] mx-3 opacity-60" />

        <div className="flex flex-col items-center min-w-[80px]">
          <span className="font-bold leading-tight">350</span>
          <span className="text-base text-[#434343] font-normal mt-[-2px]">румеров</span>
        </div>
      </div>


      <div className="flex flex-row items-center justify-between w-[95%] mx-auto mt-3 mb-2">
        <div className="bg-white rounded-[25px] px-6 py-[11px] text-[22px] text-black font-normal w-[236px] text-center">
          {profile.city.name}
        </div>
        <button className="flex items-center w-[122px] h-[60px] pl-[13px] gap-0.5 border-[3px] border-[#CBCBCB] bg-white rounded-[25px] text-[16px] text-[#999] font-semibold">
          <img src="/icon/gear.svg" alt="Редактировать" width={30} height={30} />
          РЕДАКТ
        </button>
      </div>

      <div className="w-[94%] mx-auto mt-2 mb-2 bg-white rounded-[22px] flex flex-col py-2 px-3 gap-1 shadow-sm">
        <div className="flex items-center justify-between py-[5px] px-3">
          <div className="flex items-center gap-4.5">
            <span className="w-[13px] h-[13px] rounded-full bg-green-500 block" />
            <span className="text-[19px] text-[#262626] font-semibold">ЗОВЫ</span>
          </div>
          <div className="flex items-center gap-3">
            <span className="w-7 h-7 rounded-full bg-[#D1D1D1] flex items-center justify-center text-[22px] text-[#434343] font-bold">
              {profile.calling_limit}
            </span>
            <img src="/icon/chevronDown.svg" alt="Котум" width={31} height={18} />
          </div>
        </div>

        <hr className="border-[#ECECEC] mx-3" />
        
        <div className="flex items-center justify-between py-[5px] px-3">
          <div className="flex items-center gap-4.5">
            <span className="w-[13px] h-[13px] rounded-full bg-orange-400 block" />
            <span className="text-[19px] text-[#262626] font-semibold">ИДУ</span>
          </div>

          <div className="flex items-center gap-3">
            <span className="w-7 h-7 rounded-full bg-[#D1D1D1] flex items-center justify-center text-[22px] text-[#434343] font-bold">
              {profile.going_limit}
            </span>
            <img src="/icon/chevronDown.svg" alt="Котум" width={31} height={18} />
          </div>
        </div>
      </div>

      <div className="w-[96%] mx-auto mt-4 rounded-[25px] overflow-hidden shadow-lg border-4 border-[#A100FF] bg-white">
        <button
          className="w-full py-4 bg-[#A100FF] text-white font-bold text-[22px] leading-none text-center uppercase tracking-wide"
          style={{ borderRadius: 0 }}
        >
          СОЗДАТЬ ИГРУМ
        </button>

        <button
          className="w-full py-4 bg-white text-[#A100FF] font-bold text-[22px] leading-none text-center uppercase tracking-wide"
          style={{ borderRadius: 0 }}
        >
          МОИ ИГРУМЫ
        </button>
      </div>

      <div className="flex flex-col gap-3 mt-6 w-full">

        <div className="flex items-center gap-2.5 bg-white rounded-[25px] px-4 py-3 mb-2 shadow-sm">
          <img src="/icon/historyClock.svg" alt="Котум" width={28} height={26} />
          <span className="text-gray-700 text-[20px] font-medium">ИСТОРИЯ ВСТРЕЧ</span>
        </div>

        <div className="bg-white rounded-[25px] py-2 px-4 w-full flex flex-col shadow-sm">
          <div className="flex items-center gap-2 min-h-[50px] pl-2.5">
            <img src="/icon/publickEye.svg" alt="Публичный аккаунт" width={35} height={21}/>
            <span className="text-black text-[20px] font-normal">Публичный аккаун</span>
          </div>

          <hr className="border-t border-[#D9D9D9] my-2" />

          <div className="flex items-center gap-3.5 min-h-[50px] pl-4">
            <img src="/icon/burgerLeft.svg" alt="Взрослый" width={22} height={21} />
            <span className="text-black text-[20px] font-normal">Взрослый</span>
          </div>
        </div>

        <div className="bg-white rounded-[25px] py-2 px-4 w-full flex flex-col shadow-sm">
          <div className="flex items-center gap-2 min-h-[50px] pl-3.5">
            <img src="/icon/check.svg" alt="Публичный аккаунт" width={26} height={19}/>
            <span className="text-black text-[20px] font-normal">Мои подписки</span>
          </div>

          <hr className="border-t border-[#D9D9D9] my-1" />

          <div className="flex items-center gap-3.5 min-h-[50px] pl-4">
            <img src="/icon/blackList.svg" alt="Взрослый" width={22} height={22} />
            <span className="text-black text-[20px] font-normal">Черный список</span>
          </div>

          <hr className="border-t border-[#D9D9D9] my-1" />

          <div className="flex items-center gap-3.5 min-h-[50px] pl-4.5">
            <img src="/icon/bookmarks.svg" alt="Взрослый" width={17} height={20} />
            <span className="text-black text-[20px] font-normal">Закладки</span>
          </div>
        </div>

        <div className="bg-white rounded-[25px] px-4 py-3 shadow-sm flex flex-col gap-1 relative">
          <div className="text-black text-[17px] font-normal leading-snug pr-10 line-clamp-4">
            {profile.about}  
          </div>

          <img
            src="/icon/chevronDown.svg"
            alt="Открыть"
            width={21}
            height={12}
            className="absolute right-4 bottom-15 rotate-270"
          />

          <hr className="border-t border-[#D9D9D9] my-1" />

          <div className="flex justify-between items-center mt-1">
            <span className="text-black text-[17px]">Мой телеграм</span>
            <span className="text-black text-[17px] font-bold">@{profile.telegram}</span>
          </div>
        </div>

        <div className="bg-white rounded-[25px] shadow-sm flex flex-col px-4 py-1">
          {[
            'Возможновти ИГРУМА',
            'Правила ИГРУМА',
            'Инструкция РУМЕРА',
            'Инструкция МАСТЕРА',
            'Инструкция МЕСТА',
            'Пользовательское соглашение'
          ].map((item, idx, arr) => (
            <div key={item} >
              <button
                className="flex items-center gap-4 px-[11px] py-3 w-full text-black text-[20px] font-normal"
                style={{ textAlign: "left" }}
              >
                <span className="w-2.5 h-2.5 rounded-full bg-[#A7A7A7] mr-2" />
                {item}
              </button>
              {idx < arr.length - 1 && (
                <hr className="border-t border-[#D9D9D9]" />
              )}
            </div>
          ))}
        </div>

        <button className="bg-white rounded-[25px] pl-[32px] py-4 shadow-sm text-gray-700 text-[20px] font-medium flex items-center gap-3 mt-2 h-[60px]">
          <img src="/icon/door.svg" alt="Взрослый" width={23} height={28} />
          Выйти из профиля
        </button>
      </div>
    </div>
  );
}
