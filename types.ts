
import React from 'react';

export interface LinkCardData {
  title: string;
  author: string;
  views: string;
  coverUrl: string;
  source: string;
}

export interface TransferData {
  amount: string;
  status: string;
  footer: string;
}

export interface Message {
  id: string;
  type: 'text' | 'link' | 'transfer';
  sender: 'me' | 'other';
  content?: string;
  linkData?: LinkCardData;
  transferData?: TransferData;
  timestamp?: string;
  senderName?: string;
}

// System config shared across templates
export interface SystemConfig {
  time: string;
  battery: number;
  showStatusBar: boolean;
  showFooter: boolean; // Some pages might not need this, but we keep it in system
}

// --- Template 1: Message Page State ---
export interface ChatState {
  system: SystemConfig;
  header: {
    backText: string;
    title: string;
    showMore: boolean;
    bgOpacity?: number; // For custom styling
  };
  avatars: {
    me: string;
    other: string;
  };
  ui: {
    backgroundImage?: string;
  };
  messages: Message[];
}

// --- Template 2: Transfer Receive Page State ---
export interface TransferReceiveState {
  system: SystemConfig;
  amount: string;
  statusText: string;
  linkText: string;
  transferTime: string;
  receiveTime: string;
  showAd: boolean;
  adTitle: string;
  adDesc: string;
}

// --- Template 3: RedNote Message List State ---
export interface RedNoteMessageItem {
  id: string;
  avatarUrl: string;
  title: string;
  subtitle: string;
  time: string;
  badgeCount: number;
  badgeType?: 'number' | 'dot'; // New field for red dot
  isSystem?: boolean;
}

export interface RedNoteMessageState {
  system: SystemConfig;
  header: {
    title: string;
  };
  actionCounts: {
    likes: number;
    follows: number;
    comments: number;
  };
  bottomTabBadgeCount?: number; // New field for bottom tab
  messageList: RedNoteMessageItem[];
}

// --- Template 4: RedNote Group Chat State ---
export interface RedNoteGroupMessage {
    id: string;
    sender: 'me' | 'other';
    name: string;
    avatar: string;
    tag?: string; // e.g. "AI产品"
    content: string;
    quote?: string; // Quoted text content
    timestamp?: string;
}

export interface RedNoteGroupState {
    system: SystemConfig;
    header: {
        title: string;
        memberCount: number;
        groupAvatar: string;
    };
    messages: RedNoteGroupMessage[];
}

// Generic Template Definition
export interface PageTemplate<T = any> {
  key: string;
  app: 'wechat' | 'rednote';
  name: string;
  initialState: T;
  Preview: React.FC<{ state: T }>;
  Editor: React.FC<{ state: T; setState: React.Dispatch<React.SetStateAction<T>>; onExport: () => void }>;
}
