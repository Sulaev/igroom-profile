'use client';

import React from "react";

export function Footer() {
  return (
    <nav className="fixed bottom-6 left-1/2 -translate-x-1/2 z-50 w-[390px] rounded bg-[#EDEDED] flex items-center justify-between px-8 shadow"
      style={{ minWidth: 320 }}>
      <button className="outline-none">
        <span className="block w-10 h-10 flex items-center justify-center">
          <svg width="38" height="38" fill="none">
            <rect x="4" y="8" width="30" height="26" rx="7" fill="#00F000" />
            <path d="M13.5 18.5c0-2.5 4.5-4 4.5-4s4.5 1.5 4.5 4c0 2.5-2 4.5-4.5 4.5S13.5 21 13.5 18.5Z" fill="#fff"/>
          </svg>
        </span>
      </button>
          
      <button className="outline-none">
        <span className="block w-10 h-10 flex items-center justify-center">
          <svg width="38" height="38" fill="none">
            <ellipse cx="19" cy="19" rx="14" ry="13" fill="#BDBDBD"/>
            <rect x="11" y="14" width="16" height="3" rx="1.5" fill="#fff"/>
            <rect x="11" y="20" width="10" height="3" rx="1.5" fill="#fff"/>
          </svg>
        </span>
      </button>

      <button className="outline-none">
        <span className="block w-10 h-10 flex items-center justify-center">
          <svg width="38" height="38" fill="none">
            <ellipse cx="19" cy="19" rx="14" ry="13" fill="#BDBDBD"/>
            <circle cx="19" cy="19" r="11" stroke="#fff" strokeWidth="2"/>
            <path d="M8 19h22M19 8v22" stroke="#fff" strokeWidth="2"/>
          </svg>
        </span>
      </button>

      <button className="outline-none">
        <span className="block w-10 h-10 flex items-center justify-center">
          <svg width="38" height="38" fill="none">
            <ellipse cx="19" cy="19" rx="14" ry="13" fill="#BDBDBD"/>
            <path d="M19 12c-3 0-5 2.5-5 5.5V22H24v-4.5C24 14.5 22 12 19 12Z" stroke="#fff" strokeWidth="2"/>
            <circle cx="19" cy="25" r="2" fill="#fff"/>
          </svg>
        </span>
      </button>

      <button className="outline-none">
        <span className="block w-10 h-10 items-center justify-center">
          <svg width="38" height="38" fill="none">
            <ellipse cx="19" cy="19" rx="14" ry="13" fill="#BDBDBD"/>
            <circle cx="19" cy="16" r="4" fill="#fff"/>
            <rect x="13" y="22" width="12" height="5" rx="2.5" fill="#fff"/>
          </svg>
        </span>
      </button>
    </nav>
  );
}
