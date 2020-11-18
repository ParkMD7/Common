import { Subjects } from '../subjects';
import { PopcottCategory } from './types/popcott-category';

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
        version: number;
    };
};
