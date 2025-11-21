import React from 'react';

interface PhoneFrameProps {
  children: React.ReactNode;
}

const PhoneFrame: React.FC<PhoneFrameProps> = ({ children }) => {
  return (
    <div className="relative w-[375px] h-[812px] bg-black rounded-[50px] shadow-2xl border-[12px] border-black overflow-hidden ring-4 ring-gray-200/50">
       {/* Notch placeholder */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[150px] h-[30px] bg-black z-[100] rounded-b-[20px]"></div>
      
      {/* Screen Content */}
      <div className="w-full h-full bg-[#EDEDED] relative overflow-hidden flex flex-col">
        {children}
      </div>

      {/* Home Bar */}
      <div className="absolute bottom-1.5 left-1/2 -translate-x-1/2 w-[130px] h-[5px] bg-black rounded-full z-[100]"></div>
    </div>
  );
};

export default PhoneFrame;
