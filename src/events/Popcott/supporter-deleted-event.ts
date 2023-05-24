import { Subjects } from "../subjects";

export interface SupporterDeletedEvent {
  subject: Subjects.SupporterDeleted;
  data: {
    id: string;
    popcottId: string;
  };
}
