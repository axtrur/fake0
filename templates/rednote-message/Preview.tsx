
import React from 'react';
import { RedNoteMessageState } from '../../types';
import PhoneFrame from '../../components/PhoneFrame';
import StatusBar from '../../components/StatusBar';
import { 
    HeartIcon, UserPlusIcon, CommentIcon, UserGroupIcon, 
    HomeIcon, HotIcon, RNPlusIcon, RNMessageIcon, RNMeIcon
} from '../../components/Icons';

const Preview: React.FC<{ state: RedNoteMessageState }> = ({ state }) => {
  const renderBadge = (count: number) => {
    if (count <= 0) return null;
    const text = count > 99 ? '99+' : count.toString();
    return (
      <div className="absolute -top-1.5 -right-1.5 bg-[#FF2442] text-white text-[10px] font-medium px-[5px] h-[16px] min-w-[16px] flex items-center justify-center rounded-full border border-white z-10">
        {text}
      </div>
    );
  };

  const renderListBadge = (count: number, badgeType: 'number' | 'dot' = 'number') => {
     if (badgeType === 'dot') {
         return <div className="w-2 h-2 bg-[#FF2442] rounded-full" />;
     }
     if (count <= 0) return null;
     return (
        <div className="bg-[#FF2442] text-white text-[11px] font-medium px-[6px] h-[16px] min-w-[16px] flex items-center justify-center rounded-full">
            {count > 99 ? '99+' : count}
        </div>
     );
  };

  return (
    <PhoneFrame>
        {state.system.showStatusBar && (
            <StatusBar time={state.system.time} battery={state.system.battery} />
        )}

        {/* Header */}
        <div className="h-[44px] flex items-center justify-center px-4 bg-white relative border-b border-gray-50">
            <span className="text-[17px] font-medium text-black">{state.header.title}</span>
            <div className="absolute right-4 flex items-center gap-1 text-gray-600 text-sm">
                <UserGroupIcon />
                <span>发现群聊</span>
            </div>
        </div>

        {/* Scrollable Content */}
        <div className="flex-1 overflow-y-auto bg-white pb-[60px]">
            {/* Action Buttons Row */}
            <div className="flex justify-around py-5 px-2">
                <div className="flex flex-col items-center gap-2 cursor-pointer group">
                    <div className="relative w-[50px] h-[50px] bg-gradient-to-br from-[#FFEDEE] to-[#FFE6E6] rounded-[16px] flex items-center justify-center shadow-sm group-active:scale-95 transition-transform">
                        {renderBadge(state.actionCounts.likes)}
                        <HeartIcon filled={true} />
                    </div>
                    <span className="text-[13px] text-[#333333] font-medium">赞和收藏</span>
                </div>

                <div className="flex flex-col items-center gap-2 cursor-pointer group">
                    <div className="relative w-[50px] h-[50px] bg-gradient-to-br from-[#E6F0FF] to-[#DDEEFF] rounded-[16px] flex items-center justify-center shadow-sm group-active:scale-95 transition-transform">
                        {renderBadge(state.actionCounts.follows)}
                         <UserPlusIcon />
                         <div className="absolute inset-0 flex items-center justify-center">
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="#5B92E5" xmlns="http://www.w3.org/2000/svg">
                                <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z" />
                            </svg>
                         </div>
                    </div>
                    <span className="text-[13px] text-[#333333] font-medium">新增关注</span>
                </div>

                <div className="flex flex-col items-center gap-2 cursor-pointer group">
                    <div className="relative w-[50px] h-[50px] bg-gradient-to-br from-[#E6FFF2] to-[#DDFFE6] rounded-[16px] flex items-center justify-center shadow-sm group-active:scale-95 transition-transform">
                        {renderBadge(state.actionCounts.comments)}
                        <div className="absolute inset-0 flex items-center justify-center">
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="#43CF7C" xmlns="http://www.w3.org/2000/svg">
                                <path d="M20 2H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h14l4 4V4c0-1.1-.9-2-2-2zm-2 12H6v-2h12v2zm0-3H6V9h12v2zm0-3H6V6h12v2z"/>
                            </svg>
                        </div>
                    </div>
                    <span className="text-[13px] text-[#333333] font-medium">评论和@</span>
                </div>
            </div>

            {/* Message List */}
            <div className="px-3">
                {state.messageList.map((item) => (
                    <div key={item.id} className="flex items-center py-3.5 active:bg-gray-50 transition-colors">
                        {/* Avatar */}
                        <div className="relative flex-shrink-0 mr-3">
                            {item.isSystem ? (
                                <div className={`w-[48px] h-[48px] rounded-full flex items-center justify-center ${item.title.includes('系统') ? 'bg-[#4A90E2]' : 'bg-[#5B92E5]'}`}>
                                     {item.title.includes('系统') ? (
                                         <svg width="24" height="24" viewBox="0 0 24 24" fill="white"><path d="M12 22c1.1 0 2-.9 2-2h-4c0 1.1.9 2 2 2zm6-6v-5c0-3.07-1.63-5.64-4.5-6.32V4c0-.83-.67-1.5-1.5-1.5s-1.5.67-1.5 1.5v.68C7.64 5.36 6 7.92 6 11v5l-2 2v1h16v-1l-2-2zm-2 1H8v-6c0-2.48 1.51-4.5 4-4.5s4 2.02 4 4.5v6z"/></svg>
                                     ) : (
                                         <svg width="24" height="24" viewBox="0 0 24 24" fill="white"><path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm-5 14H4v-4h11v4zm0-5H4V9h11v4zm5 5h-4V9h4v9z"/></svg>
                                     )}
                                </div>
                            ) : (
                                <img src={item.avatarUrl} className="w-[48px] h-[48px] rounded-full object-cover border border-gray-100" alt={item.title} />
                            )}
                        </div>

                        {/* Content */}
                        <div className="flex-1 min-w-0">
                            <div className="flex justify-between items-baseline mb-0.5">
                                <h3 className="text-[16px] font-medium text-[#333] truncate pr-2">{item.title}</h3>
                                <span className="text-[11px] text-gray-400 flex-shrink-0">{item.time}</span>
                            </div>
                            <div className="flex justify-between items-center">
                                <p className="text-[13px] text-gray-500 truncate pr-4 leading-snug max-w-[85%]">
                                    {item.subtitle}
                                </p>
                                <div className="flex-shrink-0">
                                    {renderListBadge(item.badgeCount, item.badgeType)}
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>

        {/* Bottom Tab Bar */}
        {state.system.showFooter && (
            <div className="absolute bottom-0 w-full h-[50px] bg-white border-t border-gray-100 flex items-center justify-between px-6 z-20">
                <div className="flex flex-col items-center gap-0.5 cursor-pointer">
                    <HomeIcon />
                </div>
                <div className="flex flex-col items-center gap-0.5 cursor-pointer">
                    <HotIcon />
                </div>
                <div className="cursor-pointer hover:opacity-90 transition-opacity">
                    <RNPlusIcon />
                </div>
                <div className="flex flex-col items-center gap-0.5 cursor-pointer">
                    <RNMessageIcon count={state.bottomTabBadgeCount} />
                </div>
                <div className="flex flex-col items-center gap-0.5 cursor-pointer">
                    <RNMeIcon />
                </div>
            </div>
        )}
    </PhoneFrame>
  );
};

export default Preview;
