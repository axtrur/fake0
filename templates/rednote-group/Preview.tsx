
import React, { useRef, useEffect } from 'react';
import { RedNoteGroupState } from '../../types';
import PhoneFrame from '../../components/PhoneFrame';
import StatusBar from '../../components/StatusBar';
import { BackIcon, MoreIcon, SearchIcon, GroupAddIcon, VoiceIcon, SmileyIcon, PlusIcon } from '../../components/Icons';

const Preview: React.FC<{ state: RedNoteGroupState }> = ({ state }) => {
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (scrollRef.current) {
         setTimeout(() => {
             scrollRef.current?.scrollTo({ top: scrollRef.current.scrollHeight, behavior: 'smooth' });
        }, 50);
    }
  }, [state.messages]);

  return (
    <PhoneFrame>
        {state.system.showStatusBar && (
            <StatusBar time={state.system.time} battery={state.system.battery} />
        )}

        {/* RedNote Group Header */}
        <div className="h-[44px] flex items-center justify-between px-3 bg-white border-b border-gray-100 z-10 relative flex-shrink-0">
            <div className="flex items-center gap-1">
                <BackIcon />
                <div className="relative w-8 h-8 -ml-1">
                    {/* Overlapping avatars simulation for group icon */}
                    <img src={state.header.groupAvatar} className="w-full h-full rounded-full object-cover border border-gray-100" alt="Group" />
                </div>
                <div className="flex flex-col ml-1">
                    <span className="text-[15px] font-bold text-black leading-tight truncate max-w-[100px]">{state.header.title}</span>
                    <span className="text-[10px] text-gray-500 leading-tight">({state.header.memberCount})</span>
                </div>
            </div>

            <div className="flex items-center gap-4">
                <div className="flex items-center gap-1 bg-gray-50 px-2 py-1 rounded-full border border-gray-100">
                   <GroupAddIcon />
                   <span className="text-[10px] font-medium text-gray-600">群招募</span>
                </div>
                <SearchIcon />
                <MoreIcon />
            </div>
        </div>

        {/* Chat Area */}
        <div 
            className="flex-1 overflow-y-auto scroll-smooth bg-white"
            ref={scrollRef}
        >
            <div className="px-3 py-4 pb-6">
                 {/* Default group info hint at top usually exists but skipping to match screenshot focus */}
                
                {state.messages.map((msg) => {
                    const isMe = msg.sender === 'me';
                    return (
                        <React.Fragment key={msg.id}>
                             {/* Timestamp */}
                            {msg.timestamp && (
                                <div className="flex justify-center my-5">
                                    <span className="text-[#999999] text-[11px] font-medium">
                                        {msg.timestamp}
                                    </span>
                                </div>
                            )}

                            <div className={`flex w-full mb-5 ${isMe ? 'flex-row-reverse' : 'flex-row'}`}>
                                {/* Avatar */}
                                <div className={`flex-shrink-0 ${isMe ? 'ml-2' : 'mr-2'} mt-0.5`}>
                                    <img
                                        src={msg.avatar}
                                        alt="Avatar"
                                        className="w-9 h-9 rounded-full border border-gray-100 bg-gray-100 object-cover"
                                    />
                                </div>

                                <div className={`flex flex-col ${isMe ? 'items-end' : 'items-start'} max-w-[75%]`}>
                                    {/* Sender Name & Tag (Only for 'other') */}
                                    {!isMe && (
                                        <div className="flex items-center gap-1.5 mb-1 ml-1">
                                            <span className="text-[11px] text-[#999999]">{msg.name}</span>
                                            {msg.tag && (
                                                <span className="text-[9px] text-[#FF8A9C] bg-[#FFF0F2] px-1.5 py-0.5 rounded-[4px]">
                                                    {msg.tag}
                                                </span>
                                            )}
                                        </div>
                                    )}

                                    {/* Bubble */}
                                    <div className="relative group">
                                         <div
                                            className={`rounded-[12px] text-[15px] leading-[1.5] break-words px-3 py-2.5
                                            ${isMe 
                                                ? 'bg-[#388EFF] text-white rounded-br-[4px]' // Blue bubble for me
                                                : 'bg-[#F4F4F4] text-[#333333] rounded-tl-[4px]' // Gray bubble for others
                                            }
                                            `}
                                        >
                                            <span className="whitespace-pre-wrap">{msg.content}</span>
                                        </div>
                                        
                                        {/* Quote Block - Specific to RedNote styling where quote sits under the main bubble text often or integrated */}
                                        {msg.quote && (
                                            <div className={`mt-1 rounded-[8px] bg-[#F4F4F4] p-2 text-[12px] text-[#999999] leading-relaxed ${isMe ? 'text-right' : 'text-left'}`}>
                                                {msg.quote}
                                            </div>
                                        )}
                                    </div>
                                </div>
                            </div>
                        </React.Fragment>
                    );
                })}
            </div>
        </div>

        {/* Footer Input */}
        {state.system.showFooter && (
            <div className="sticky bottom-0 w-full bg-white border-t border-gray-100 flex items-center px-3 py-2 gap-3 pb-6">
                 <div className="cursor-pointer text-gray-700">
                    <VoiceIcon />
                 </div>
                 <div className="flex-1 h-9 bg-[#F4F4F4] rounded-full flex items-center px-4 text-gray-400 text-sm">
                    发消息...
                 </div>
                 <div className="flex gap-3 text-gray-700">
                    <SmileyIcon />
                    <PlusIcon />
                 </div>
            </div>
        )}
    </PhoneFrame>
  );
};

export default Preview;
