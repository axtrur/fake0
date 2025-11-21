
import React, { useRef, useEffect } from 'react';
import { ChatState } from '../../types';
import PhoneFrame from '../../components/PhoneFrame';
import StatusBar from '../../components/StatusBar';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import MessageBubble from '../../components/MessageBubble';

const Preview: React.FC<{ state: ChatState }> = ({ state }) => {
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

        <Header 
            backText={state.header.backText} 
            title={state.header.title} 
            showMore={state.header.showMore}
        />

        <div 
            className="flex-1 overflow-y-auto scroll-smooth"
            style={{ 
                backgroundColor: state.ui.backgroundImage ? 'transparent' : '#EDEDED',
                backgroundImage: state.ui.backgroundImage ? `url(${state.ui.backgroundImage})` : 'none',
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                backgroundAttachment: 'fixed'
            }}
            ref={scrollRef}
        >
            <div className="px-3 py-2 min-h-full pb-4">
                {state.messages.map((msg) => (
                <React.Fragment key={msg.id}>
                    {msg.timestamp && (
                    <div className="flex justify-center my-5">
                        <span className="bg-[#DADADA]/40 backdrop-blur-[2px] text-[#F5F5F5] text-[11px] px-1.5 py-[3px] rounded-[4px]">
                        {msg.timestamp}
                        </span>
                    </div>
                    )}
                    
                    <MessageBubble 
                        message={msg} 
                        avatarUrl={msg.sender === 'me' ? state.avatars.me : state.avatars.other}
                    />
                </React.Fragment>
                ))}
            </div>
        </div>

        {state.system.showFooter && <Footer />}
    </PhoneFrame>
  );
};

export default Preview;
