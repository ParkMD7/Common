import { GoalObjective } from './types/goal-objective';
import { GoalTarget } from './goal-target';

export interface Goal {
    objective: GoalObjective; // eventually separate into subject and noun
    description: string;
    target: GoalTarget;
};
