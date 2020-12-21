import { GoalObjective } from './types/goal-objective';
import { RewardName } from './types/reward-name';
import { RewardBadge } from './types/reward-badge';
import { RewardAmount } from './types/reward-amount';

export interface Goal {
    objective: GoalObjective; // eventually separate into subject and noun
    description: string;
    reward: {
        name: RewardName,
        badge: RewardBadge,
        amount: RewardAmount,
    }
};
