import { Goal } from "./goal-created-event";
import { Subjects } from "../subjects";
import { PopcottCategory } from "./types/popcott-category";

export interface PopcottCreatedEvent {
  subject: Subjects.PopcottCreated;
  data: {
    id: string;
    userId: string;
    userName: string;
    userProfileImage: string;
    createdAt: Date;
    // eventually allow for time based popcotts
    // endsAt: Date;
    title: string;
    image: string;
    category: PopcottCategory;
    likes: Array<any>;
    donations: Array<any>;
    supporters: Array<any>;
    comments: Array<any>;
    goal?: Goal;
    version: number;
  };
}
