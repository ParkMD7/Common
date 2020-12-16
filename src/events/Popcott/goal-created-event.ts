import { Subjects } from '../subjects';
import { GoalObjective } from './types/goal-objective';

export interface GoalCreatedEvent {
    subject: Subjects.GoalCreated;
    data: {
        id: string;
        objective: GoalObjective;
        description: string;
        popcottId: string;
    };
};
