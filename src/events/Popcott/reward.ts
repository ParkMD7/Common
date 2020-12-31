import { RewardName } from './types/reward-name';
import { RewardBadge } from './types/reward-badge';
import { RewardAmount } from './types/reward-amount';

export interface Reward {
    description: string;
    reward: {
        name: RewardName,
        badge: RewardBadge,
        amount: RewardAmount,
    }
};
