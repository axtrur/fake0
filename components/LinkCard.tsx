import React from 'react';
import { LinkCardData } from '../types';
import { BilibiliIcon, PlayIcon } from './Icons';

interface LinkCardProps {
  data: LinkCardData;
}

const LinkCard: React.FC<LinkCardProps> = ({ data }) => {
  return (
    <div className="flex flex-col w-[240px]">
      <div className="flex gap-2">
        <div className="flex-1">
          <p className="text-sm text-black leading-tight line-clamp-2 mb-1 font-medium">
            {data.title}
          </p>
          
        </div>
        <div className="relative w-[60px] h-[60px] flex-shrink-0">
            <img 
                src={data.coverUrl} 
                alt="Cover" 
                className="w-full h-full object-cover rounded-sm"
            />
            <div className="absolute inset-0 flex items-center justify-center">
                <PlayIcon />
            </div>
        </div>
      </div>
      
      <div className="mt-1 flex flex-col gap-0.5">
        <p className="text-xs text-gray-500">UP主: {data.author}</p>
        <p className="text-xs text-gray-500">播放: {data.views}</p>
      </div>

      <div className="mt-2 pt-2 border-t border-gray-100 flex items-center gap-1">
        {data.source === 'Bilibili' && <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/76/Bilibili_logo_icon.png/600px-Bilibili_logo_icon.png?20241129020521" alt="Bilibili" className="w-3 h-3 opacity-70" />}
        <span className="text-xs text-gray-500">哔哩哔哩</span>
      </div>
    </div>
  );
};

export default LinkCard;