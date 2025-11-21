
import React, { useState } from 'react';
import { ChatState, Message } from '../../types';

interface EditorProps {
  state: ChatState;
  setState: React.Dispatch<React.SetStateAction<ChatState>>;
  onExport: () => void;
}

const SectionTitle: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <h3 className="text-sm font-semibold text-gray-900 uppercase tracking-wider mb-3 mt-6 border-b pb-1">{children}</h3>
);

const InputGroup: React.FC<{ label: string; children: React.ReactNode }> = ({ label, children }) => (
  <div className="mb-3">
    <label className="block text-xs font-medium text-gray-600 mb-1">{label}</label>
    {children}
  </div>
);

const Editor: React.FC<EditorProps> = ({ state, setState, onExport }) => {
  const [activeTab, setActiveTab] = useState<'text' | 'transfer'>('text');
  const [newMessageContent, setNewMessageContent] = useState('');
  const [leftSenderName, setLeftSenderName] = useState('Sender Name');
  
  // Transfer temporary state
  const [transferAmount, setTransferAmount] = useState('16.00');
  const [transferStatus, setTransferStatus] = useState('已收款');
  const [transferFooter, setTransferFooter] = useState('微信转账');

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>, target: 'me' | 'other' | 'bg') => {
    const file = e.target.files?.[0];
    if (file) {
      const url = URL.createObjectURL(file);
      if (target === 'bg') {
        setState(prev => ({ ...prev, ui: { ...prev.ui, backgroundImage: url } }));
      } else {
        setState(prev => ({ ...prev, avatars: { ...prev.avatars, [target]: url } }));
      }
    }
  };

  const addMessage = (content: string, sender: 'me' | 'other', type: 'text' | 'transfer', extraData?: any) => {
    const newMessage: Message = {
        id: Date.now().toString(),
        type: type,
        sender,
        content: type === 'text' ? content : undefined,
        transferData: type === 'transfer' ? extraData : undefined,
        senderName: sender === 'other' ? leftSenderName : undefined,
    };
    setState(prev => ({ ...prev, messages: [...prev.messages, newMessage] }));
  };

  const deleteMessage = (id: string) => {
    setState(prev => ({ ...prev, messages: prev.messages.filter(m => m.id !== id) }));
  };

  return (
    <div className="h-full overflow-y-auto bg-white flex flex-col">
      <div className="p-5 flex-1">
        <h2 className="text-xl font-bold text-gray-800 mb-2">WeChat Message</h2>
        <p className="text-xs text-gray-500 mb-4">Edit chat conversation.</p>

        <SectionTitle>System</SectionTitle>
        <div className="grid grid-cols-2 gap-4">
           <div className="flex flex-col gap-2 pt-1">
             <label className="flex items-center gap-2 text-sm text-gray-700 cursor-pointer">
                <input 
                  type="checkbox" 
                  checked={state.system.showStatusBar}
                  onChange={e => setState(prev => ({ ...prev, system: { ...prev.system, showStatusBar: e.target.checked } }))}
                  className="rounded text-green-500 focus:ring-green-500"
                />
                Show status bar
             </label>
             <label className="flex items-center gap-2 text-sm text-gray-700 cursor-pointer">
                <input 
                  type="checkbox" 
                  checked={state.system.showFooter}
                  onChange={e => setState(prev => ({ ...prev, system: { ...prev.system, showFooter: e.target.checked } }))}
                  className="rounded text-green-500 focus:ring-green-500"
                />
                Show bottom bar
             </label>
           </div>
           <div className="space-y-2">
             <InputGroup label="Time">
                <input 
                    type="time" 
                    value={state.system.time}
                    onChange={e => setState(prev => ({ ...prev, system: { ...prev.system, time: e.target.value } }))}
                    className="w-full border rounded p-1.5 text-sm"
                />
             </InputGroup>
             <InputGroup label="Battery (%)">
                <input 
                    type="number" 
                    min="0" max="100"
                    value={state.system.battery}
                    onChange={e => setState(prev => ({ ...prev, system: { ...prev.system, battery: parseInt(e.target.value) } }))}
                    className="w-full border rounded p-1.5 text-sm"
                />
             </InputGroup>
           </div>
        </div>

        <SectionTitle>Appearance & Header</SectionTitle>
        <InputGroup label="Chat Background">
             <input 
                type="file" 
                accept="image/*"
                onChange={(e) => handleImageUpload(e, 'bg')}
                className="block w-full text-sm text-gray-500 file:mr-2 file:py-1 file:px-2 file:rounded-md file:border-0 file:text-xs file:font-semibold file:bg-green-50 file:text-green-700"
            />
        </InputGroup>
        <div className="grid grid-cols-2 gap-3">
            <InputGroup label="Chat Name">
                <input 
                    type="text"
                    value={state.header.title}
                    onChange={e => setState(prev => ({ ...prev, header: { ...prev.header, title: e.target.value } }))}
                    className="w-full border rounded p-2 text-sm"
                />
            </InputGroup>
            <InputGroup label="Back Text">
                <input 
                    type="text"
                    value={state.header.backText}
                    onChange={e => setState(prev => ({ ...prev, header: { ...prev.header, backText: e.target.value } }))}
                    className="w-full border rounded p-2 text-sm"
                />
            </InputGroup>
        </div>

        <SectionTitle>Avatars</SectionTitle>
        <div className="grid grid-cols-2 gap-4">
            <InputGroup label="Other">
                <div className="flex items-center gap-2">
                    <img src={state.avatars.other} className="w-8 h-8 rounded bg-gray-200 object-cover" alt="Other" />
                    <input type="file" accept="image/*" onChange={(e) => handleImageUpload(e, 'other')} className="w-full text-xs" />
                </div>
            </InputGroup>
            <InputGroup label="Me">
                <div className="flex items-center gap-2">
                    <img src={state.avatars.me} className="w-8 h-8 rounded bg-gray-200 object-cover" alt="Me" />
                    <input type="file" accept="image/*" onChange={(e) => handleImageUpload(e, 'me')} className="w-full text-xs" />
                </div>
            </InputGroup>
        </div>

        <SectionTitle>Message Content</SectionTitle>
        <div className="flex border-b border-gray-200 mb-3">
            <button 
                className={`px-4 py-2 text-sm font-medium ${activeTab === 'text' ? 'text-green-600 border-b-2 border-green-600' : 'text-gray-500'}`}
                onClick={() => setActiveTab('text')}
            >
                Text
            </button>
            <button 
                className={`px-4 py-2 text-sm font-medium ${activeTab === 'transfer' ? 'text-green-600 border-b-2 border-green-600' : 'text-gray-500'}`}
                onClick={() => setActiveTab('transfer')}
            >
                Transfer
            </button>
        </div>

        <InputGroup label="Sender Name (for Left side)">
            <input
                type="text"
                className="w-full border rounded p-1.5 text-sm"
                value={leftSenderName}
                onChange={e => setLeftSenderName(e.target.value)}
                placeholder="Name above left message bubble"
            />
        </InputGroup>

        {activeTab === 'text' ? (
            <div className="space-y-3">
                <textarea
                    className="w-full border rounded p-2 text-sm min-h-[60px]"
                    placeholder="Type message..."
                    value={newMessageContent}
                    onChange={e => setNewMessageContent(e.target.value)}
                />
                <div className="grid grid-cols-2 gap-2">
                    <button 
                        onClick={() => { addMessage(newMessageContent, 'other', 'text'); setNewMessageContent(''); }}
                        disabled={!newMessageContent.trim()}
                        className="bg-blue-500 text-white py-1.5 rounded text-xs disabled:opacity-50"
                    >
                        Add Left
                    </button>
                    <button 
                        onClick={() => { addMessage(newMessageContent, 'me', 'text'); setNewMessageContent(''); }}
                        disabled={!newMessageContent.trim()}
                        className="bg-green-500 text-white py-1.5 rounded text-xs disabled:opacity-50"
                    >
                        Add Right
                    </button>
                </div>
            </div>
        ) : (
             <div className="space-y-2">
                <div className="grid grid-cols-2 gap-2">
                    <InputGroup label="Amount">
                        <input type="text" className="w-full border rounded p-1.5 text-sm" value={transferAmount} onChange={e => setTransferAmount(e.target.value)} />
                    </InputGroup>
                    <InputGroup label="Status">
                         <input type="text" className="w-full border rounded p-1.5 text-sm" value={transferStatus} onChange={e => setTransferStatus(e.target.value)} />
                    </InputGroup>
                </div>
                 <div className="grid grid-cols-2 gap-2">
                    <button onClick={() => addMessage('', 'other', 'transfer', { amount: transferAmount, status: transferStatus, footer: transferFooter })} className="bg-orange-400 text-white py-1.5 rounded text-xs">Add Left</button>
                    <button onClick={() => addMessage('', 'me', 'transfer', { amount: transferAmount, status: transferStatus, footer: transferFooter })} className="bg-orange-400 text-white py-1.5 rounded text-xs">Add Right</button>
                </div>
            </div>
        )}
        
        <div className="mt-4 space-y-1 max-h-[200px] overflow-y-auto border-t pt-2">
            {state.messages.slice().reverse().map((msg) => (
                <div key={msg.id} className="flex justify-between items-center bg-gray-50 p-1.5 rounded text-xs">
                    <span className="truncate max-w-[150px]">{msg.type === 'text' ? msg.content : `[${msg.type}]`}</span>
                    <button onClick={() => deleteMessage(msg.id)} className="text-red-500">Del</button>
                </div>
            ))}
        </div>

      </div>
      <div className="p-4 border-t bg-gray-50">
         <button onClick={onExport} className="w-full bg-green-600 text-white font-bold py-2 rounded shadow">Export Image</button>
      </div>
    </div>
  );
};

export default Editor;
