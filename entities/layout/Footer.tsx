'use client';

import React from "react";

export function Footer() {
  return (
    <nav className="fixed bottom-0 left-0 right-0 z-50 h-[60px] bg-[#EDEDED] flex items-center justify-between px-8 shadow"
      style={{ minWidth: 320 }}>
      <button className="outline-none">
        <span className="block w-10 h-10 flex items-center justify-center">
          <img src="/icon/home.svg" alt="Домой" width={36} height={37} />
        </span>
      </button>
      <button className="outline-none">
        <span className="block w-10 h-10 flex items-center justify-center">
          <img src="/icon/message.svg" alt="Сообщения" width={40} height={34} />
        </span>
      </button>
      <button className="outline-none">
        <span className="block w-10 h-10 flex items-center justify-center">
          <img src="/icon/earth.svg" alt="Глобус" width={35} height={36} />
        </span>
      </button>
      <button className="outline-none">
        <span className="block w-10 h-10 flex items-center justify-center">
          <img src="/icon/bell.svg" alt="Уведомления" width={28} height={39} />
        </span>
      </button>
      <button className="outline-none">
        <span className="block w-10 h-10 flex items-center justify-center">
          <img src="/icon/profile.svg" alt="Профиль" width={28} height={36} />
        </span>
      </button>
    </nav>
  );
}
