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
        image: string;
        category?: PopcottCategory;
        likes?: Array<any>;
        donations?: Array<any>;
        supporters?: Array<any>;
        comments?: Array<any>;
        version: number;
    };
};
