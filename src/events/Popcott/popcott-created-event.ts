import { Subjects } from '../subjects';
import { PopcottCategory } from './types/popcott-category';

export interface PopcottCreatedEvent {
    subject: Subjects.PopcottCreated;
    data: {
        userId: string;
        createdAt: Date;
        endsAt: Date;
        title: string;
        category: PopcottCategory;
        likes: Array<[]>;
        donations: Array<[]>;
        supporters: Array<[]>;
        comments: Array<[]>;
    };
}