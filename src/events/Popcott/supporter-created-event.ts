import { Subjects } from '../subjects';

export interface SupporterCreatedEvent {
    subject: Subjects.SupporterCreated;
    data: {
        id: string;
        userId: string;
        userName: string;
        imageURL: string;
        popcottId: string;
    };
};
