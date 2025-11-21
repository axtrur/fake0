
import React, { useState } from 'react';
import { RedNoteMessageState, RedNoteMessageItem } from '../../types';

interface EditorProps {
  state: RedNoteMessageState;
  setState: React.Dispatch<React.SetStateAction<RedNoteMessageState>>;
  onExport: () => void;
}

const InputGroup: React.FC<{ label: string; children: React.ReactNode }> = ({ label, children }) => (
  <div className="mb-3">
    <label className="block text-xs font-medium text-gray-600 mb-1">{label}</label>
    {children}
  </div>
);

const Editor: React.FC<EditorProps> = ({ state, setState, onExport }) => {
  const [newItemName, setNewItemName] = useState('');
  const [newItemContent, setNewItemContent] = useState('');
  const [newItemTime, setNewItemTime] = useState('12:00');
  const [newItemCount, setNewItemCount] = useState(1);
  const [newItemAvatar, setNewItemAvatar] = useState('');
  const [isRedDot, setIsRedDot] = useState(false);

  const handleAddItem = () => {
    const newItem: RedNoteMessageItem = {
        id: Date.now().toString(),
        title: newItemName || 'New User',
        subtitle: newItemContent || 'Message content...',
        time: newItemTime,
        badgeCount: newItemCount,
        badgeType: isRedDot ? 'dot' : 'number',
        avatarUrl: newItemAvatar || 'https://picsum.photos/200',
        isSystem: false
    };
    setState(prev => ({ ...prev, messageList: [newItem, ...prev.messageList] }));
    setNewItemName('');
    setNewItemContent('');
    setNewItemAvatar('');
  };

  const handleDelete = (id: string) => {
      setState(prev => ({ ...prev, messageList: prev.messageList.filter(m => m.id !== id) }));
  };

  const updateActionCount = (key: keyof typeof state.actionCounts, value: string) => {
      const num = parseInt(value) || 0;
      setState(prev => ({ ...prev, actionCounts: { ...prev.actionCounts, [key]: num } }));
  };

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const url = URL.createObjectURL(file);
      setNewItemAvatar(url);
    }
  };

  return (
    <div className="h-full overflow-y-auto bg-white flex flex-col">
       <div className="p-5 flex-1">
        <h2 className="text-xl font-bold text-gray-800 mb-2">RedNote Messages</h2>
        <p className="text-xs text-gray-500 mb-4">Edit message list and badges.</p>

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

        {/* Badges */}
        <div className="mb-6 border-b pb-4">
            <h3 className="text-sm font-bold text-gray-700 mb-3">Badges</h3>
            <div className="grid grid-cols-3 gap-2 mb-3">
                <InputGroup label="Likes (Top)">
                    <input type="number" value={state.actionCounts.likes} onChange={e => updateActionCount('likes', e.target.value)} className="w-full border rounded p-1.5 text-sm" />
                </InputGroup>
                <InputGroup label="Follows (Top)">
                    <input type="number" value={state.actionCounts.follows} onChange={e => updateActionCount('follows', e.target.value)} className="w-full border rounded p-1.5 text-sm" />
                </InputGroup>
                <InputGroup label="Comments (Top)">
                    <input type="number" value={state.actionCounts.comments} onChange={e => updateActionCount('comments', e.target.value)} className="w-full border rounded p-1.5 text-sm" />
                </InputGroup>
            </div>
             <InputGroup label="Bottom Tab Badge Count">
                <input 
                    type="number" 
                    value={state.bottomTabBadgeCount || 0} 
                    onChange={e => setState(prev => ({ ...prev, bottomTabBadgeCount: parseInt(e.target.value) || 0 }))} 
                    className="w-full border rounded p-1.5 text-sm" 
                />
            </InputGroup>
        </div>

        {/* Add Item */}
        <div className="mb-6 bg-gray-50 p-3 rounded border">
            <h3 className="text-sm font-bold text-gray-700 mb-3">Add New Message</h3>
            <div className="grid grid-cols-2 gap-2">
                <InputGroup label="Name">
                    <input type="text" value={newItemName} onChange={e => setNewItemName(e.target.value)} className="w-full border rounded p-1.5 text-sm" placeholder="Username" />
                </InputGroup>
                <InputGroup label="Time">
                    <input type="text" value={newItemTime} onChange={e => setNewItemTime(e.target.value)} className="w-full border rounded p-1.5 text-sm" />
                </InputGroup>
            </div>
            <InputGroup label="Subtitle">
                <input type="text" value={newItemContent} onChange={e => setNewItemContent(e.target.value)} className="w-full border rounded p-1.5 text-sm" placeholder="Message preview" />
            </InputGroup>
            
            <InputGroup label="Avatar">
                 <div className="flex items-center gap-2">
                    {newItemAvatar && <img src={newItemAvatar} className="w-8 h-8 rounded-full object-cover" alt="Preview" />}
                    <input type="file" accept="image/*" onChange={handleImageUpload} className="w-full text-xs" />
                </div>
            </InputGroup>

            <div className="grid grid-cols-2 gap-2 items-end">
                <InputGroup label="Badge Count">
                     <input type="number" disabled={isRedDot} value={newItemCount} onChange={e => setNewItemCount(parseInt(e.target.value))} className="w-full border rounded p-1.5 text-sm disabled:bg-gray-200" />
                </InputGroup>
                <div className="mb-3">
                    <label className="flex items-center gap-2 text-xs text-gray-700 cursor-pointer">
                        <input 
                          type="checkbox" 
                          checked={isRedDot}
                          onChange={e => setIsRedDot(e.target.checked)}
                          className="rounded text-red-500"
                        />
                        Red Dot Only
                    </label>
                </div>
            </div>
            
            <button onClick={handleAddItem} className="w-full bg-[#FF2442] text-white py-1.5 rounded text-xs font-bold mt-2">Add Message</button>
        </div>

        {/* List Management */}
        <h3 className="text-sm font-bold text-gray-700 mb-2">Message List</h3>
        <div className="space-y-2">
            {state.messageList.map((item, idx) => (
                <div key={item.id} className="flex justify-between items-center bg-white border p-2 rounded shadow-sm">
                     <div className="flex items-center gap-2 overflow-hidden">
                        <span className="w-5 h-5 flex items-center justify-center bg-gray-200 rounded text-[10px] text-gray-600">{idx + 1}</span>
                        <div className="flex flex-col overflow-hidden">
                            <span className="text-xs font-bold truncate">{item.title}</span>
                            <span className="text-[10px] text-gray-500 truncate">{item.subtitle}</span>
                        </div>
                     </div>
                     <button onClick={() => handleDelete(item.id)} className="text-xs text-red-500 px-2 hover:bg-red-50 rounded">Del</button>
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
