import { Subjects } from '../subjects';
import { PopcottCategory } from './types/popcott-category';

export interface PopcottUpdatedEvent {
    subject: Subjects.PopcottUpdated;
    data: {
        id: string;
        userId: string;
        createdAt: Date;
        // endsAt: Date;
        title: string;
        category?: PopcottCategory;
        likes?: Array<[]>;
        donations?: Array<[]>;
        supporters?: Array<[]>;
        comments?: Array<[]>;
    };
}