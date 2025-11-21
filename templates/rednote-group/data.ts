
import { RedNoteGroupState } from '../../types';

export const INITIAL_STATE: RedNoteGroupState = {
  system: {
    time: '21:51',
    battery: 50,
    showStatusBar: true,
    showFooter: true,
  },
  header: {
    title: 'AI...',
    memberCount: 235,
    groupAvatar: 'https://picsum.photos/id/1018/200/200',
  },
  messages: [
    {
        id: '1',
        sender: 'other',
        name: 'Max嘉豪',
        avatar: 'https://avataaars.io/?avatarStyle=Circle&topType=ShortHairTheCaesar&accessoriesType=Sunglasses&hairColor=Black&facialHairType=BeardLight&clotheType=Hoodie&clotheColor=PastelOrange&eyeType=Happy&eyebrowType=Default&mouthType=Smile&skinColor=Light',
        content: '以后套壳就完事了 🥵',
        timestamp: '09-14 18:40'
    },
    {
        id: '2',
        sender: 'me',
        name: 'CYBER NEXT',
        avatar: 'https://avataaars.io/?avatarStyle=Circle&topType=ShortHairShortFlat&accessoriesType=Prescription02&hairColor=Black&facialHairType=BeardMedium&clotheType=BlazerShirt&eyeType=Default&eyebrowType=Default&mouthType=Default&skinColor=Light',
        content: 'tarregon , conductor build这两个claude code sdk套壳产品已经是收费的了',
    },
    {
        id: '3',
        sender: 'other',
        name: '爱吃鸭舌的yiyi',
        avatar: 'https://avataaars.io/?avatarStyle=Circle&topType=LongHairStraight&accessoriesType=None&hairColor=Brown&facialHairType=None&clotheType=GraphicShirt&clotheColor=White&eyeType=Wink&eyebrowType=Default&mouthType=Default&skinColor=Light',
        tag: 'AI 产品',
        content: '哈哈我还没研究透ai sdk，所以得用ai sdk还是claude code sdk搞产品呢',
        timestamp: '09-14 18:45'
    },
    {
        id: '4',
        sender: 'me',
        name: 'CYBER NEXT',
        avatar: 'https://avataaars.io/?avatarStyle=Circle&topType=ShortHairShortFlat&accessoriesType=Prescription02&hairColor=Black&facialHairType=BeardMedium&clotheType=BlazerShirt&eyeType=Default&eyebrowType=Default&mouthType=Default&skinColor=Light',
        content: '如果你有前端基础，可以尝试下claude code sdk，如果没有，用ai sdk容易搭建一些',
        timestamp: '09-14 19:05'
    },
    {
        id: '5',
        sender: 'other',
        name: 'Max嘉豪',
        avatar: 'https://avataaars.io/?avatarStyle=Circle&topType=ShortHairTheCaesar&accessoriesType=Sunglasses&hairColor=Black&facialHairType=BeardLight&clotheType=Hoodie&clotheColor=PastelOrange&eyeType=Happy&eyebrowType=Default&mouthType=Smile&skinColor=Light',
        content: '@木子老师 好，去看看',
        quote: '木子老师: tarregon , conductor build这两个claude code sdk套壳产品已...',
        timestamp: '09-14 19:20'
    }
  ]
};
