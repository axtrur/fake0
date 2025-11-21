
import React from 'react';
import { BackIcon, MoreIcon } from './Icons';

interface HeaderProps {
  backText?: string;
  title: string;
  showMore?: boolean;
  className?: string;
}

const Header: React.FC<HeaderProps> = ({ backText = '', title, showMore = true, className = 'bg-wechat-header' }) => {
  return (
    <div className={`sticky top-0 z-40 h-[44px] flex items-center justify-between px-2 shadow-sm flex-shrink-0 ${className}`}>
      <div className="flex items-center gap-1 active:bg-gray-200/50 rounded p-1 cursor-pointer transition-colors h-full min-w-[60px]">
        <BackIcon />
        <span className="text-[16px] font-normal text-black -ml-1.5 pb-0.5">{backText}</span>
      </div>
      
      <h1 className="text-[17px] font-medium text-black tracking-tight truncate flex-1 text-center px-2">
        {title}
      </h1>

      <div className="flex items-center justify-end min-w-[60px] px-2 cursor-pointer h-full">
        {showMore && <MoreIcon />}
      </div>
    </div>
  );
};

export default Header;
