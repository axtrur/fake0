
import React, { useState } from 'react';
import FakeControl from './components/FakeControl';
import { TEMPLATES, TemplateKey } from './templateRegistry';

function App() {
  const [currentTemplateKey, setCurrentTemplateKey] = useState<TemplateKey>('wechat-message');
  
  // We store the state for ALL templates so switching back and forth preserves data
  // Map<TemplateKey, State>
  const [templateStates, setTemplateStates] = useState<Record<string, any>>(() => {
      const initial: Record<string, any> = {};
      Object.values(TEMPLATES).forEach(t => {
          initial[t.key] = t.initialState;
      });
      return initial;
  });

  const CurrentTemplate = TEMPLATES[currentTemplateKey];
  
  // Helper to update state for the current active template
  const updateCurrentState = (newStateOrUpdater: any) => {
      setTemplateStates(prev => {
          const oldState = prev[currentTemplateKey];
          const newState = typeof newStateOrUpdater === 'function' 
            ? newStateOrUpdater(oldState) 
            : newStateOrUpdater;
            
          return {
              ...prev,
              [currentTemplateKey]: newState
          };
      });
  };

  const handleExport = () => {
    alert("Use a screenshot tool to capture the preview area!");
  };

  return (
    <div className="flex flex-col h-screen w-full bg-gray-100 font-sans overflow-hidden">
      {/* Top Control Bar */}
      <FakeControl 
        currentTemplate={currentTemplateKey} 
        onTemplateChange={setCurrentTemplateKey} 
      />

      <div className="flex flex-1 overflow-hidden">
          {/* Left: Preview Area */}
          <div className="flex-1 flex items-center justify-center bg-[#F0F2F5] p-4 relative overflow-hidden">
            <div className="scale-[0.85] md:scale-90 lg:scale-100 transition-transform duration-300 origin-center shadow-2xl rounded-[50px]">
                 {/* Render Dynamic Preview */}
                 <CurrentTemplate.Preview 
                    state={templateStates[currentTemplateKey]} 
                 />
            </div>
            <div className="absolute bottom-4 left-4 text-gray-400 text-xs font-mono">
                Template: {CurrentTemplate.name} ({CurrentTemplate.app})
            </div>
          </div>

          {/* Right: Configuration Panel */}
          <div className="w-[400px] flex-shrink-0 shadow-2xl z-10 bg-white">
             {/* Render Dynamic Editor */}
             <CurrentTemplate.Editor 
                state={templateStates[currentTemplateKey]} 
                setState={updateCurrentState}
                onExport={handleExport}
             />
          </div>
      </div>
    </div>
  );
}

export default App;
