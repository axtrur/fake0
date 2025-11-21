import React from 'react';
import { TransferData } from '../types';
import { TransferCheckIcon } from './Icons';

interface TransferBubbleProps {
  data: TransferData;
}

const TransferBubble: React.FC<TransferBubbleProps> = ({ data }) => {
  return (
    <div className="w-[230px] flex flex-col">
      {/* Top Part: Icon + Amount + Status */}
      <div className="flex items-center p-3 gap-3">
        <div className="flex-shrink-0 opacity-90">
           <TransferCheckIcon />
        </div>
        <div className="flex flex-col text-white">
          <span className="text-[15px] font-semibold leading-tight">¥{data.amount}</span>
          <span className="text-[12px] opacity-90 mt-0.5">{data.status}</span>
        </div>
      </div>
      
      {/* Bottom Part: Footer */}
      <div className="border-t border-white/20 py-1 px-3">
        <span className="text-[10px] text-white/60 font-light tracking-wide">{data.footer}</span>
      </div>
    </div>
  );
};

export default TransferBubble;