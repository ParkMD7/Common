import { Subjects } from '../subjects';

export interface DonationCreatedEvent {
    subject: Subjects.DonationCreated;
    data: {
        id: string;
        userId: string;
        userName: string;
        amount: number;
        stripeId: string;
        popcottId: string;
    };
};
