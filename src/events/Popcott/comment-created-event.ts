import { Subjects } from '../subjects';

export interface OrderCreatedEvent {
    subject: Subjects.OrderCreated;
    data: {
        id: string;
        version: number;
        userId: string;
        body: string;
        popcott: {
            id: string;
            userId: string;
            version: number;
            createdAt: string;
            title: string;
            comments: Array<[]>;
        };
    };
}