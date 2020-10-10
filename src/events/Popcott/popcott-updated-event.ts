import { Subjects } from '../subjects';
import { PopcottCategory } from './types/popcott-category';

export interface PopcottUpdatedEvent {
    subject: Subjects.PopcottUpdated;
    data: {
        userId: string;
        title: string;
        type: PopcottCategory;
        likes: number;
        donationsReceived: number;
        supporters: Array<[]>;
        comments: Array<[]>;
    };
}