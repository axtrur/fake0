
import { TransferReceiveState } from '../../types';

export const INITIAL_STATE: TransferReceiveState = {
  system: {
    time: '21:20',
    battery: 54,
    showStatusBar: true,
    showFooter: false,
  },
  amount: '16.00',
  statusText: '你已收款，资金已存入零钱',
  linkText: '零钱余额',
  transferTime: '2025年11月20日 21:20:06',
  receiveTime: '2025年11月20日 21:20:14',
  showAd: true,
  adTitle: '给小金库再添一笔',
  adDesc: '零钱通 七日年化1.06%',
};
