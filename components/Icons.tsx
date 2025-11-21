
import React from 'react';

export const BackIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M15 18L9 12L15 6" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

export const MoreIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle cx="5" cy="12" r="1.5" fill="black"/>
    <circle cx="12" cy="12" r="1.5" fill="black"/>
    <circle cx="19" cy="12" r="1.5" fill="black"/>
  </svg>
);

export const VoiceIcon = () => (
  <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="text-black">
    <circle cx="12" cy="12" r="10" />
    <path d="M12 8v8" />
    <path d="M8 10v4" />
    <path d="M16 10v4" />
  </svg>
);

export const SmileyIcon = () => (
  <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="text-black">
    <circle cx="12" cy="12" r="10" />
    <path d="M8 14s1.5 2 4 2 4-2 4-2" />
    <line x1="9" y1="9" x2="9.01" y2="9" />
    <line x1="15" y1="9" x2="15.01" y2="9" />
  </svg>
);

export const PlusIcon = () => (
  <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="text-black">
    <circle cx="12" cy="12" r="10" />
    <line x1="12" y1="8" x2="12" y2="16" />
    <line x1="8" y1="12" x2="16" y2="12" />
  </svg>
);

export const BilibiliIcon = () => (
  <div className="w-4 h-4 bg-pink-500 rounded flex items-center justify-center text-white text-[10px] font-bold">
    B
  </div>
);

export const PlayIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="rgba(0,0,0,0.5)" xmlns="http://www.w3.org/2000/svg">
     <circle cx="12" cy="12" r="11" stroke="white" strokeWidth="1.5" />
     <path d="M10 8L16 12L10 16V8Z" fill="white" />
  </svg>
);

export const WifiIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M5 12.55a11 11 0 0 1 14.08 0" />
    <path d="M1.42 9a16 16 0 0 1 21.16 0" />
    <path d="M8.53 16.11a6 6 0 0 1 6.95 0" />
    <line x1="12" y1="20" x2="12.01" y2="20" />
  </svg>
);

export const SignalIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
     <path d="M2 20h20V2L2 20z" />
  </svg>
);

export const BatteryIcon = ({ level }: { level: number }) => (
  <div className="relative w-6 h-3 border border-black rounded-[3px] flex items-center p-0.5">
    <div 
      className="h-full bg-black rounded-[1px]" 
      style={{ width: `${Math.min(Math.max(level, 0), 100)}%` }}
    />
    <div className="absolute -right-1 top-1/2 -translate-y-1/2 w-0.5 h-1.5 bg-black rounded-r-sm" />
  </div>
);

export const TransferCheckIcon = () => (
  <svg width="44" height="44" viewBox="0 0 44 44" fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle cx="22" cy="22" r="21" stroke="white" strokeWidth="2" />
    <path d="M13 23L18.5 28.5L31 16" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

export const LargeGreenCheckIcon = () => (
  <svg width="60" height="60" viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle cx="30" cy="30" r="30" fill="#07C160" />
    <path d="M18 32L25 39L42 22" stroke="white" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

export const WealthIcon = () => (
  <div className="w-8 h-8 rounded-full bg-[#F3F3F3] flex items-center justify-center">
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M12 2L2 12L12 22L22 12L12 2Z" fill="#FFD700" stroke="#FFA500" strokeWidth="1" strokeLinejoin="round"/>
        <path d="M7 12L12 17L17 12" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
  </div>
);

// RedNote Icons
export const HeartIcon = ({ filled = false }: { filled?: boolean }) => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill={filled ? "#FF2442" : "none"} stroke={filled ? "#FF2442" : "white"} strokeWidth="2">
    <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

export const UserPlusIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M16 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
    <circle cx="8.5" cy="7" r="4" />
    <line x1="20" y1="8" x2="20" y2="14" />
    <line x1="23" y1="11" x2="17" y2="11" />
  </svg>
);

export const CommentIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z" />
  </svg>
);

export const DiscoverGroupIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="black" strokeWidth="2">
     <circle cx="9" cy="21" r="1" />
     <circle cx="20" cy="21" r="1" />
     <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6" />
  </svg>
);

export const UserGroupIcon = () => (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="black" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
        <circle cx="9" cy="7" r="4"></circle>
        <path d="M23 21v-2a4 4 0 0 0-3-3.87"></path>
        <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
    </svg>
);

export const SearchIcon = () => (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="black" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="11" cy="11" r="8"></circle>
        <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
    </svg>
);

export const GroupAddIcon = () => (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="black" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M16 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
        <circle cx="8.5" cy="7" r="4"></circle>
        <line x1="20" y1="8" x2="20" y2="14"></line>
        <line x1="23" y1="11" x2="17" y2="11"></line>
    </svg>
);

// Bottom Bar Icons for RedNote
export const HomeIcon = () => (
    <span className="text-[15px] text-gray-400">首页</span>
);
export const HotIcon = () => (
    <span className="text-[15px] text-gray-400">热门</span>
);
export const RNPlusIcon = () => (
    <div className="w-[44px] h-[32px] bg-[#FF2442] rounded-[8px] flex items-center justify-center">
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5">
            <line x1="12" y1="5" x2="12" y2="19"></line>
            <line x1="5" y1="12" x2="19" y2="12"></line>
        </svg>
    </div>
);
export const RNMessageIcon = ({ count = 0 }: { count?: number }) => (
    <div className="relative">
        <span className="text-[15px] font-bold text-black">消息</span>
        {count > 0 && (
             <span className="absolute -top-2 -right-3 bg-[#FF2442] text-white text-[9px] px-1 rounded-full min-w-[16px] text-center leading-[14px] border border-white">
                {count > 99 ? '99+' : count}
             </span>
        )}
    </div>
);
export const RNMeIcon = () => (
    <span className="text-[15px] text-gray-400">我</span>
);
