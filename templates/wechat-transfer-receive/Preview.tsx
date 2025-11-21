
import React from 'react';
import { TransferReceiveState } from '../../types';
import PhoneFrame from '../../components/PhoneFrame';
import StatusBar from '../../components/StatusBar';
import Header from '../../components/Header';
import { LargeGreenCheckIcon, WealthIcon } from '../../components/Icons';

const Preview: React.FC<{ state: TransferReceiveState }> = ({ state }) => {
  return (
    <PhoneFrame>
        {state.system.showStatusBar && (
            <StatusBar time={state.system.time} battery={state.system.battery} />
        )}

        <Header 
            backText="" 
            title="" 
            showMore={true}
            className="bg-white" // White header
        />

        <div className="flex-1 bg-white flex flex-col items-center pt-8 px-6">
            <div className="mb-6">
                <LargeGreenCheckIcon />
            </div>
            
            <h2 className="text-[16px] text-black mb-2 font-normal text-center">
                {state.statusText}
            </h2>
            
            <div className="text-[40px] font-bold text-black mb-2 tracking-tight">
                ¥{state.amount}
            </div>
            
            <a href="#" className="text-[14px] text-[#576B95] mb-12 font-medium">
                {state.linkText}
            </a>

            {/* Details List */}
            <div className="w-full space-y-3 border-b border-gray-100 pb-8 mb-6">
                <div className="flex justify-between items-center text-[14px]">
                    <span className="text-gray-400">转账时间</span>
                    <span className="text-gray-900 font-light">{state.transferTime}</span>
                </div>
                <div className="flex justify-between items-center text-[14px]">
                    <span className="text-gray-400">收款时间</span>
                    <span className="text-gray-900 font-light">{state.receiveTime}</span>
                </div>
            </div>

            {/* Ad Card */}
            {state.showAd && (
                <div className="w-full flex items-center justify-between">
                    <div className="flex items-center gap-3">
                        <WealthIcon />
                        <div className="flex flex-col">
                            <span className="text-[13px] text-gray-400">{state.adDesc}</span>
                            <span className="text-[15px] text-black font-normal">{state.adTitle}</span>
                        </div>
                    </div>
                    <button className="bg-[#07C160] text-white text-[13px] font-medium px-4 py-1.5 rounded-[4px]">
                        转入
                    </button>
                </div>
            )}
        </div>
    </PhoneFrame>
  );
};

export default Preview;
