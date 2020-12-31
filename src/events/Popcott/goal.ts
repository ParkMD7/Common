import { GoalObjective } from './types/goal-objective';
import { Reward } from './reward';

export interface Goal {
    objective: GoalObjective; // eventually separate into subject and noun
    description: string;
    reward: Reward;
};
