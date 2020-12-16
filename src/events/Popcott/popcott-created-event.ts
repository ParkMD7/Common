import { Subjects } from '../subjects';
import { PopcottCategory } from './types/popcott-category';
import { GoalObjective } from './types/goal-objective';

export interface PopcottCreatedEvent {
    subject: Subjects.PopcottCreated;
    data: {
        id: string;
        userId: string;
        userName: string;
        userProfileImage: string;
        createdAt: Date;
        // endsAt: Date;
        title: string;
        image: string;
        category: PopcottCategory;
        likes: Array<any>;
        donations: Array<any>;
        supporters: Array<any>;
        comments: Array<any>;
        // mad-lib nouns / verbs going forward
        goal: {
            id: string;
            objective: GoalObjective;
        };
        version: number;
    };
};
