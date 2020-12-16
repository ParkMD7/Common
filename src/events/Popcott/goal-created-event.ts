import { Subjects } from '../subjects';
import { GoalObjective } from './types/goal-objective';
import { RewardName } from './types/reward-name';
// import { RewardBadge } from './types/reward-badge';
import { RewardAmount } from './types/reward-amount';

export interface GoalCreatedEvent {
    subject: Subjects.GoalCreated;
    data: {
        id: string;
        objective: GoalObjective;
        description: string;
        popcottId: string;
        reward: {
            name: RewardName,
            // badge: RewardBadge,
            amount: RewardAmount,
        }
    };
};
