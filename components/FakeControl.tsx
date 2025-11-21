
import React from 'react';
import { TEMPLATES, TemplateKey } from '../templateRegistry';

interface FakeControlProps {
  currentTemplate: TemplateKey;
  onTemplateChange: (key: TemplateKey) => void;
}

// External high-quality icons for the apps
const APP_ICONS: Record<string, string> = {
  wechat: 'https://blogres.wechat.com/uploads/2019/01/0-logo-1.jpg',
  rednote: 'https://upload.wikimedia.org/wikipedia/commons/c/c1/XiaohongshuLOGO.png'
};

const FakeControl: React.FC<FakeControlProps> = ({ currentTemplate, onTemplateChange }) => {
  // Derive current app from current template
  const currentApp = TEMPLATES[currentTemplate].app;

  // Get unique apps
  const apps = Array.from(new Set(Object.values(TEMPLATES).map(t => t.app)));

  // Get templates for current app
  const currentAppTemplates = Object.values(TEMPLATES).filter(t => t.app === currentApp);

  const handleAppChange = (newApp: string) => {
      const firstTemplateOfApp = Object.values(TEMPLATES).find(t => t.app === newApp);
      if (firstTemplateOfApp) {
          onTemplateChange(firstTemplateOfApp.key as TemplateKey);
      }
  };

  return (
    <div className="bg-white border-b border-gray-200 px-6 py-3 flex items-center gap-4 shadow-sm z-20 relative h-[60px]">
      {/* App Selector */}
      <div className="flex items-center gap-2">
        <span className="text-sm font-semibold text-gray-600 uppercase tracking-wide">App:</span>
        <select 
            value={currentApp}
            onChange={(e) => handleAppChange(e.target.value)}
            className="border-gray-300 border rounded px-3 py-1.5 text-sm focus:ring-2 focus:ring-blue-500 outline-none bg-gray-50 font-medium capitalize cursor-pointer hover:bg-gray-100 transition-colors"
        >
            {apps.map(app => (
                <option key={app} value={app}>{app === 'rednote' ? 'RedNote' : 'WeChat'}</option>
            ))}
        </select>
      </div>

      <div className="h-4 w-px bg-gray-300"></div>

      {/* Page Selector */}
      <div className="flex items-center gap-2">
        <span className="text-sm font-semibold text-gray-600 uppercase tracking-wide">Page:</span>
        <select 
            value={currentTemplate}
            onChange={(e) => onTemplateChange(e.target.value as TemplateKey)}
            className="border-gray-300 border rounded px-3 py-1.5 text-sm focus:ring-2 focus:ring-blue-500 outline-none bg-gray-50 font-medium cursor-pointer hover:bg-gray-100 transition-colors"
        >
            {currentAppTemplates.map(t => (
                <option key={t.key} value={t.key}>{t.name}</option>
            ))}
        </select>
      </div>
      
      <div className="h-4 w-px bg-gray-300 hidden md:block"></div>
      
      <p className="text-xs text-gray-500 hidden md:block">Switch apps and pages to configure.</p>

      {/* Right side: App Icon */}
      <div className="ml-auto flex items-center gap-3">
          <div className="flex flex-col items-end">
             <span className="text-xs font-bold text-gray-800 capitalize">{currentApp === 'rednote' ? 'Little Red Book' : 'WeChat'}</span>
             <span className="text-[10px] text-gray-400">Current App</span>
          </div>
          <img 
            src={APP_ICONS[currentApp] || ''} 
            alt={currentApp}
            className="w-9 h-9 rounded-[8px] object-cover border border-gray-100 shadow-sm"
          />
      </div>
    </div>
  );
};

export default FakeControl;
