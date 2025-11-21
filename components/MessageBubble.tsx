import React from 'react';
import { Message } from '../types';
import LinkCard from './LinkCard';
import TransferBubble from './TransferBubble';

interface MessageBubbleProps {
  message: Message;
  avatarUrl: string;
}

const MessageBubble: React.FC<MessageBubbleProps> = ({ message, avatarUrl }) => {
  const isMe = message.sender === 'me';

  // Determine bubble background color based on type
  let bubbleBgClass = isMe ? 'bg-wechat-green' : 'bg-wechat-bubble-white';
  let arrowBorderClass = isMe 
    ? 'border-l-wechat-green' 
    : 'border-r-wechat-bubble-white';

  // Transfer messages use a specific light orange color
  const TRANSFER_COLOR_HEX = '#F7E2C5'; 
  const isTransfer = message.type === 'transfer';

  if (isTransfer) {
    // We use inline styles for the specific hex color since it's not in tailwind config
    // Just strictly controlling the arrow classes here
    arrowBorderClass = isMe 
      ? `border-l-[${TRANSFER_COLOR_HEX}]` 
      : `border-r-[${TRANSFER_COLOR_HEX}]`;
  }

  return (
    <div className={`flex w-full mb-4 ${isMe ? 'flex-row-reverse' : 'flex-row'}`}>
      {/* Avatar */}
      <div className={`flex-shrink-0 ${isMe ? 'ml-2.5' : 'mr-2.5'} mt-0.5`}>
        <img
          src={avatarUrl}
          alt="Avatar"
          className="w-10 h-10 rounded-[4px] bg-gray-200 object-cover"
        />
      </div>

      <div className={`flex flex-col ${isMe ? 'items-end' : 'items-start'} max-w-[72%]`}>
        {/* Sender Name (Only for 'other' in group chats usually) */}
        {!isMe && message.senderName && (
          <span className="text-[12px] text-gray-400 mb-0.5 ml-0.5">{message.senderName}</span>
        )}

        <div className="relative group">
           {/* Triangle Arrow */}
           <div
            className={`absolute top-3.5 w-0 h-0 border-[6px] border-transparent 
            ${isMe ? 'right-[-11px]' : 'left-[-11px]'}
            `}
            style={{
              borderLeftColor: isMe && isTransfer ? TRANSFER_COLOR_HEX : undefined,
              borderRightColor: !isMe && isTransfer ? TRANSFER_COLOR_HEX : undefined,
              // Fallback to classes for non-transfer
            }}
          >
             {/* CSS Triangle fallback if inline style doesn't catch (simplified logic) */}
            {!isTransfer && (
                <div className={`absolute -top-[6px] ${isMe ? '-left-[6px] border-l-wechat-green' : '-right-[6px] border-r-wechat-bubble-white'} w-0 h-0 border-[6px] border-transparent`}></div>
            )}
          </div>

          {/* Bubble Content */}
          <div
            className={`rounded-[4px] text-[16px] leading-[1.4] break-words relative shadow-sm min-h-[40px]
            ${!isTransfer ? (isMe ? 'bg-wechat-green text-black px-2.5 py-2.5' : 'bg-wechat-bubble-white text-black px-2.5 py-2.5') : 'text-black'}
            `}
            style={{
                backgroundColor: isTransfer ? TRANSFER_COLOR_HEX : undefined,
                overflow: 'hidden'
            }}
          >
            {message.type === 'text' && (
              <span className="whitespace-pre-wrap">{message.content}</span>
            )}
            {message.type === 'link' && message.linkData && (
               <LinkCard data={message.linkData} />
            )}
            {message.type === 'transfer' && message.transferData && (
               <TransferBubble data={message.transferData} />
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default MessageBubble;