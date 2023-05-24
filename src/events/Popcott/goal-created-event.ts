import { Subjects } from "../subjects";
import { GoalTarget } from "./goal-target";

export interface Goal {
  id: string;
  popcottId: string;
  objective: string;
  description: string;
  target: GoalTarget;
}

export interface GoalCreatedEvent {
  subject: Subjects.GoalCreated;
  data: Goal;
}
