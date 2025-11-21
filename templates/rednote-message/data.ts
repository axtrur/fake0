
import { RedNoteMessageState } from '../../types';

export const INITIAL_STATE: RedNoteMessageState = {
  system: {
    time: '18:15',
    battery: 84,
    showStatusBar: true,
    showFooter: true,
  },
  header: {
    title: '消息',
  },
  actionCounts: {
    likes: 999, // Representing 99+
    follows: 999,
    comments: 999,
  },
  bottomTabBadgeCount: 99,
  messageList: [
    {
      id: '1',
      avatarUrl: 'https://picsum.photos/id/101/100/100',
      title: '稻米协会',
      subtitle: '"左邪右花亲瓶摸瞎"撤回了一条消息',
      time: '17:38',
      badgeCount: 2,
      badgeType: 'number'
    },
    {
      id: '2',
      avatarUrl: '', // Empty for system icon
      isSystem: true,
      title: '系统消息',
      subtitle: '恭喜您已获得薯条优惠券',
      time: '15:03',
      badgeCount: 1,
      badgeType: 'number'
    },
    {
      id: '3',
      avatarUrl: 'https://picsum.photos/id/237/100/100',
      title: '困困鱼',
      subtitle: '[动画表情]',
      time: '13:51',
      badgeCount: 1,
      badgeType: 'number'
    },
    {
      id: '4',
      avatarUrl: 'https://picsum.photos/id/104/100/100',
      title: '盗墓笔记群（哑巴群）',
      subtitle: 'Lorcia.: [笔记] 娇羞花',
      time: '12:52',
      badgeCount: 4,
      badgeType: 'number'
    },
    {
      id: '5',
      avatarUrl: '',
      isSystem: true,
      title: '活动消息',
      subtitle: '恭喜您的粉丝数破500啦',
      time: '11:41',
      badgeCount: 0, 
      badgeType: 'dot' // Red dot type
    },
    {
      id: '6',
      avatarUrl: 'https://picsum.photos/id/338/100/100',
      title: 'freethinker',
      subtitle: '[表情]',
      time: '09:09',
      badgeCount: 1,
      badgeType: 'number'
    },
    {
      id: '7',
      avatarUrl: 'https://picsum.photos/id/433/100/100',
      title: '兔宝',
      subtitle: '[动画表情]',
      time: '08:55',
      badgeCount: 2,
      badgeType: 'number'
    }
  ]
};
