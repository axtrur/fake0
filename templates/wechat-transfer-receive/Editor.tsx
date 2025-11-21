
import React from 'react';
import { TransferReceiveState } from '../../types';

interface EditorProps {
  state: TransferReceiveState;
  setState: React.Dispatch<React.SetStateAction<TransferReceiveState>>;
  onExport: () => void;
}

const InputGroup: React.FC<{ label: string; children: React.ReactNode }> = ({ label, children }) => (
  <div className="mb-3">
    <label className="block text-xs font-medium text-gray-600 mb-1">{label}</label>
    {children}
  </div>
);

const Editor: React.FC<EditorProps> = ({ state, setState, onExport }) => {
  return (
    <div className="h-full overflow-y-auto bg-white flex flex-col">
       <div className="p-5 flex-1">
        <h2 className="text-xl font-bold text-gray-800 mb-2">Transfer Receipt</h2>
        <p className="text-xs text-gray-500 mb-4">Edit receipt details.</p>
        
        {/* System */}
        <div className="grid grid-cols-2 gap-3 mb-4 border-b pb-4">
            <InputGroup label="Time">
                <input 
                    type="time" 
                    value={state.system.time}
                    onChange={e => setState(prev => ({ ...prev, system: { ...prev.system, time: e.target.value } }))}
                    className="w-full border rounded p-1.5 text-sm"
                />
            </InputGroup>
            <InputGroup label="Battery">
                <input 
                    type="number" 
                    value={state.system.battery}
                    onChange={e => setState(prev => ({ ...prev, system: { ...prev.system, battery: parseInt(e.target.value) } }))}
                    className="w-full border rounded p-1.5 text-sm"
                />
            </InputGroup>
        </div>

        {/* Main Info */}
        <InputGroup label="Amount">
            <input 
                type="text" 
                value={state.amount}
                onChange={e => setState(prev => ({ ...prev, amount: e.target.value }))}
                className="w-full border rounded p-2 font-mono"
            />
        </InputGroup>
        <InputGroup label="Status Text">
            <input 
                type="text" 
                value={state.statusText}
                onChange={e => setState(prev => ({ ...prev, statusText: e.target.value }))}
                className="w-full border rounded p-2 text-sm"
            />
        </InputGroup>
        <InputGroup label="Link Text">
            <input 
                type="text" 
                value={state.linkText}
                onChange={e => setState(prev => ({ ...prev, linkText: e.target.value }))}
                className="w-full border rounded p-2 text-sm"
            />
        </InputGroup>

        {/* Times */}
        <InputGroup label="Transfer Time">
            <input 
                type="text" 
                value={state.transferTime}
                onChange={e => setState(prev => ({ ...prev, transferTime: e.target.value }))}
                className="w-full border rounded p-2 text-sm"
            />
        </InputGroup>
        <InputGroup label="Receive Time">
            <input 
                type="text" 
                value={state.receiveTime}
                onChange={e => setState(prev => ({ ...prev, receiveTime: e.target.value }))}
                className="w-full border rounded p-2 text-sm"
            />
        </InputGroup>

        {/* Ad Config */}
        <div className="border-t pt-4 mt-4">
            <label className="flex items-center gap-2 text-sm font-bold text-gray-700 cursor-pointer mb-3">
                <input 
                  type="checkbox" 
                  checked={state.showAd}
                  onChange={e => setState(prev => ({ ...prev, showAd: e.target.checked }))}
                  className="rounded text-green-500"
                />
                Show Bottom Ad
             </label>
             {state.showAd && (
                <>
                   <InputGroup label="Ad Description">
                        <input 
                            type="text" 
                            value={state.adDesc}
                            onChange={e => setState(prev => ({ ...prev, adDesc: e.target.value }))}
                            className="w-full border rounded p-2 text-sm"
                        />
                    </InputGroup>
                    <InputGroup label="Ad Title">
                        <input 
                            type="text" 
                            value={state.adTitle}
                            onChange={e => setState(prev => ({ ...prev, adTitle: e.target.value }))}
                            className="w-full border rounded p-2 text-sm"
                        />
                    </InputGroup>
                </>
             )}
        </div>

       </div>
       <div className="p-4 border-t bg-gray-50">
         <button onClick={onExport} className="w-full bg-green-600 text-white font-bold py-2 rounded shadow">Export Image</button>
      </div>
    </div>
  );
};

export default Editor;
