import React from 'react';
import { WifiIcon, SignalIcon, BatteryIcon } from './Icons';

interface StatusBarProps {
  time: string;
  battery: number;
}

const StatusBar: React.FC<StatusBarProps> = ({ time, battery }) => {
  return (
    <div className="h-[44px] w-full flex items-center justify-between px-4 text-black bg-wechat-bg text-[15px] font-semibold select-none z-50">
      {/* Left: Time */}
      <div className="w-1/3 flex justify-start pl-2">
        <span>{time}</span>
      </div>

      {/* Right: Status Icons */}
      <div className="w-1/3 flex justify-end items-center gap-1.5 pr-1">
        <SignalIcon />
        <WifiIcon />
        <BatteryIcon level={battery} />
      </div>
    </div>
  );
};

export default StatusBar;
