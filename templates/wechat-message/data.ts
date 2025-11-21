
import { ChatState } from '../../types';

export const INITIAL_STATE: ChatState = {
  system: {
    time: '21:20',
    battery: 80,
    showStatusBar: true,
    showFooter: true,
  },
  header: {
    backText: '8129',
    title: '深港同行 筑梦蜜雪冰城(4)',
    showMore: true,
  },
  avatars: {
    me: 'https://picsum.photos/id/58/200/200',
    other: 'https://via.placeholder.com/200x200/0b0b14/ffffff?text=User',
  },
  ui: {
    backgroundImage: ''
  },
  messages: [
    {
        id: '1',
        type: 'text',
        sender: 'other',
        content: '感觉今年过得很漫长的感觉，不到一年变化如此之快',
        timestamp: '10:07',
        senderName: '江锋'
      },
      {
        id: '2',
        type: 'text',
        sender: 'other',
        content: 'Gemini 是偏向 coding 还是都能干',
        timestamp: '10:16',
        senderName: '江锋'
      },
      {
        id: '3',
        type: 'text',
        sender: 'other',
        content: '看得很是心动',
        senderName: '江锋'
      },
      {
        id: '4',
        type: 'link',
        sender: 'other',
        timestamp: '17:51',
        senderName: '江锋',
        linkData: {
            title: '音乐版权公司是如何用Suno把音乐变成工业垃圾...',
            author: 'SevenTeamMusic',
            views: '1644',
            coverUrl: 'https://picsum.photos/id/145/200/200', 
            source: 'Bilibili'
        }
      },
      {
        id: '5',
        type: 'text',
        sender: 'other',
        content: '有点震撼了',
        senderName: '江锋'
      },
      {
        id: '6',
        type: 'text',
        sender: 'other',
        content: '小弟还没发第一张 就觉得有点悲观了哈哈哈哈',
        senderName: '江锋'
      },
      {
        id: '7',
        type: 'text',
        sender: 'me',
        content: '都能干，发散性问题更强一些，复刻能力也很强'
      },
      {
        id: 't1',
        type: 'transfer',
        sender: 'other',
        timestamp: '21:20',
        transferData: {
            amount: '16.00',
            status: '已被接收',
            footer: '微信转账'
        }
      },
      {
        id: 't2',
        type: 'transfer',
        sender: 'me',
        transferData: {
            amount: '16.00',
            status: '已收款',
            footer: '微信转账'
        }
      }
  ]
};
