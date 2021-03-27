import { Subjects } from '../subjects';
import { GoalObjective } from './types/goal-objective';
import { GoalTarget } from './goal-target';

export interface Goal {
    id: string;
    popcottId: string;
    objective: GoalObjective; // eventually separate into subject and noun
    description: string;
    target: GoalTarget;
};

export interface GoalCreatedEvent {
    subject: Subjects.GoalCreated;
    data: Goal
};
