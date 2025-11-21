import React from 'react';
import { VoiceIcon, SmileyIcon, PlusIcon } from './Icons';

const Footer: React.FC = () => {
  return (
    <div className="sticky bottom-0 w-full bg-wechat-footer border-t border-[#DCDCDC] flex items-center px-3 py-2 gap-3">
      <div className="cursor-pointer">
        <VoiceIcon />
      </div>
      
      <div className="flex-1">
        <input 
            type="text" 
            className="w-full h-9 bg-white rounded-[4px] border-none outline-none px-3 text-base caret-wechat-green"
        />
      </div>

      <div className="flex gap-3">
        <div className="cursor-pointer">
          <SmileyIcon />
        </div>
        <div className="cursor-pointer">
            <PlusIcon />
        </div>
      </div>
    </div>
  );
};

export default Footer;