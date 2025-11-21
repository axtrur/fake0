
import { PageTemplate } from './types';
import MessagePreview from './templates/wechat-message/Preview';
import MessageEditor from './templates/wechat-message/Editor';
import { INITIAL_STATE as MessageInitialState } from './templates/wechat-message/data';

import TransferReceivePreview from './templates/wechat-transfer-receive/Preview';
import TransferReceiveEditor from './templates/wechat-transfer-receive/Editor';
import { INITIAL_STATE as TransferReceiveInitialState } from './templates/wechat-transfer-receive/data';

import RedNoteMessagePreview from './templates/rednote-message/Preview';
import RedNoteMessageEditor from './templates/rednote-message/Editor';
import { INITIAL_STATE as RedNoteMessageInitialState } from './templates/rednote-message/data';

import RedNoteGroupPreview from './templates/rednote-group/Preview';
import RedNoteGroupEditor from './templates/rednote-group/Editor';
import { INITIAL_STATE as RedNoteGroupInitialState } from './templates/rednote-group/data';

export const TEMPLATES: Record<string, PageTemplate> = {
  'wechat-message': {
    key: 'wechat-message',
    app: 'wechat',
    name: 'Message List',
    initialState: MessageInitialState,
    Preview: MessagePreview,
    Editor: MessageEditor,
  },
  'wechat-transfer-receive': {
    key: 'wechat-transfer-receive',
    app: 'wechat',
    name: 'Transfer Receipt',
    initialState: TransferReceiveInitialState,
    Preview: TransferReceivePreview,
    Editor: TransferReceiveEditor,
  },
  'rednote-message': {
    key: 'rednote-message',
    app: 'rednote',
    name: 'Messages',
    initialState: RedNoteMessageInitialState,
    Preview: RedNoteMessagePreview,
    Editor: RedNoteMessageEditor,
  },
  'rednote-group': {
    key: 'rednote-group',
    app: 'rednote',
    name: 'Group Chat',
    initialState: RedNoteGroupInitialState,
    Preview: RedNoteGroupPreview,
    Editor: RedNoteGroupEditor,
  }
};

export type TemplateKey = keyof typeof TEMPLATES;
