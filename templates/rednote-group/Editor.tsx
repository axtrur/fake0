
import React, { useState } from 'react';
import { RedNoteGroupState, RedNoteGroupMessage } from '../../types';

interface EditorProps {
  state: RedNoteGroupState;
  setState: React.Dispatch<React.SetStateAction<RedNoteGroupState>>;
  onExport: () => void;
}

const InputGroup: React.FC<{ label: string; children: React.ReactNode }> = ({ label, children }) => (
  <div className="mb-3">
    <label className="block text-xs font-medium text-gray-600 mb-1">{label}</label>
    {children}
  </div>
);

const Editor: React.FC<EditorProps> = ({ state, setState, onExport }) => {
  const [msgContent, setMsgContent] = useState('');
  const [msgName, setMsgName] = useState('User');
  const [msgTag, setMsgTag] = useState('');
  const [msgQuote, setMsgQuote] = useState('');
  const [msgTime, setMsgTime] = useState('');
  
  // Avatar State
  const [otherAvatar, setOtherAvatar] = useState('https://avataaars.io/?avatarStyle=Circle&topType=LongHairStraight&accessoriesType=None&hairColor=Brown&facialHairType=None&clotheType=GraphicShirt&clotheColor=White&eyeType=Wink&eyebrowType=Default&mouthType=Default&skinColor=Light');
  const [meAvatar, setMeAvatar] = useState('https://avataaars.io/?avatarStyle=Circle&topType=ShortHairShortFlat&accessoriesType=Prescription02&hairColor=Black&facialHairType=BeardMedium&clotheType=BlazerShirt&eyeType=Default&eyebrowType=Default&mouthType=Default&skinColor=Light');

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>, type: 'me' | 'other') => {
    const file = e.target.files?.[0];
    if (file) {
      const url = URL.createObjectURL(file);
      if (type === 'me') setMeAvatar(url);
      else setOtherAvatar(url);
    }
  };

  const addMessage = (sender: 'me' | 'other') => {
      const newMessage: RedNoteGroupMessage = {
          id: Date.now().toString(),
          sender,
          name: sender === 'me' ? 'Me' : msgName,
          avatar: sender === 'me' ? meAvatar : otherAvatar,
          content: msgContent,
          tag: sender === 'other' ? msgTag : undefined,
          quote: msgQuote || undefined,
          timestamp: msgTime || undefined,
      };
      setState(prev => ({ ...prev, messages: [...prev.messages, newMessage] }));
      setMsgContent('');
      setMsgQuote('');
      setMsgTime('');
  };

  const deleteMessage = (id: string) => {
      setState(prev => ({ ...prev, messages: prev.messages.filter(m => m.id !== id) }));
  };

  return (
    <div className="h-full overflow-y-auto bg-white flex flex-col">
       <div className="p-5 flex-1">
        <h2 className="text-xl font-bold text-gray-800 mb-2">RedNote Group Chat</h2>
        <p className="text-xs text-gray-500 mb-4">Edit group messages.</p>

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
             <InputGroup label="Group Title">
                <input 
                    type="text" 
                    value={state.header.title}
                    onChange={e => setState(prev => ({ ...prev, header: { ...prev.header, title: e.target.value } }))}
                    className="w-full border rounded p-1.5 text-sm"
                />
            </InputGroup>
             <InputGroup label="Member Count">
                <input 
                    type="number" 
                    value={state.header.memberCount}
                    onChange={e => setState(prev => ({ ...prev, header: { ...prev.header, memberCount: parseInt(e.target.value) } }))}
                    className="w-full border rounded p-1.5 text-sm"
                />
            </InputGroup>
        </div>

        {/* Avatars Config */}
        <div className="mb-4 border-b pb-4">
            <h3 className="text-sm font-bold text-gray-700 mb-3">Default Avatars</h3>
            <div className="grid grid-cols-2 gap-3">
                <InputGroup label="Other Avatar">
                    <div className="flex items-center gap-2">
                        <img src={otherAvatar} className="w-8 h-8 rounded-full object-cover border" alt="Other" />
                        <input type="file" accept="image/*" onChange={(e) => handleImageUpload(e, 'other')} className="w-full text-xs" />
                    </div>
                </InputGroup>
                <InputGroup label="Me Avatar">
                    <div className="flex items-center gap-2">
                        <img src={meAvatar} className="w-8 h-8 rounded-full object-cover border" alt="Me" />
                        <input type="file" accept="image/*" onChange={(e) => handleImageUpload(e, 'me')} className="w-full text-xs" />
                    </div>
                </InputGroup>
            </div>
        </div>

        {/* Add Message */}
        <div className="mb-6 bg-gray-50 p-3 rounded border">
            <h3 className="text-sm font-bold text-gray-700 mb-3">Add Message</h3>
            <div className="grid grid-cols-2 gap-2">
                 <InputGroup label="User Name">
                    <input type="text" value={msgName} onChange={e => setMsgName(e.target.value)} className="w-full border rounded p-1.5 text-sm" />
                </InputGroup>
                 <InputGroup label="User Tag (Pink)">
                    <input type="text" value={msgTag} onChange={e => setMsgTag(e.target.value)} className="w-full border rounded p-1.5 text-sm" placeholder="e.g. AI产品" />
                </InputGroup>
            </div>
            <InputGroup label="Content">
                <textarea value={msgContent} onChange={e => setMsgContent(e.target.value)} className="w-full border rounded p-1.5 text-sm min-h-[60px]" placeholder="Message text..." />
            </InputGroup>
            <InputGroup label="Quote (Optional)">
                 <input type="text" value={msgQuote} onChange={e => setMsgQuote(e.target.value)} className="w-full border rounded p-1.5 text-sm" placeholder="Text to appear in gray box below" />
            </InputGroup>
             <InputGroup label="Timestamp (Optional)">
                 <input type="text" value={msgTime} onChange={e => setMsgTime(e.target.value)} className="w-full border rounded p-1.5 text-sm" placeholder="e.g. 09-14 19:20" />
            </InputGroup>
            
            <div className="grid grid-cols-2 gap-2 mt-3">
                <button 
                    onClick={() => addMessage('other')}
                    disabled={!msgContent}
                    className="bg-white border border-gray-300 text-gray-700 py-2 rounded text-xs font-bold hover:bg-gray-50 disabled:opacity-50"
                >
                    Add as Other
                </button>
                <button 
                    onClick={() => addMessage('me')}
                    disabled={!msgContent}
                    className="bg-[#388EFF] text-white py-2 rounded text-xs font-bold hover:bg-blue-600 disabled:opacity-50"
                >
                    Add as Me
                </button>
            </div>
        </div>

        {/* Message List */}
        <div className="space-y-2">
            {state.messages.map((item, idx) => (
                <div key={item.id} className="flex justify-between items-center bg-white border p-2 rounded shadow-sm">
                     <div className="flex items-center gap-2 overflow-hidden">
                        <div className={`w-2 h-full ${item.sender === 'me' ? 'bg-blue-500' : 'bg-gray-300'}`}></div>
                        <div className="flex flex-col overflow-hidden">
                            <span className="text-xs font-bold truncate">{item.name}</span>
                            <span className="text-[10px] text-gray-500 truncate max-w-[150px]">{item.content}</span>
                        </div>
                     </div>
                     <button onClick={() => deleteMessage(item.id)} className="text-xs text-red-500 px-2 hover:bg-red-50 rounded">Del</button>
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
