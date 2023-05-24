import { Subjects } from "../subjects";

export interface SupporterCreatedEvent {
  subject: Subjects.SupporterCreated;
  data: {
    id: string;
    userId: string;
    userName: string;
    userProfileImage: string;
    imageURL: string;
    popcottId: string;
    taggedSupporters: string[],
  };
}
