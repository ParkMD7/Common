import { Subjects } from "../subjects";
import { RewardName } from "./types/reward-name";
import { RewardBadge } from "./types/reward-badge";
import { RewardAmount } from "./types/reward-amount";

export interface Reward {
  id: string;
  popcottId: string;
  userId: string;
  reward: {
    name: RewardName;
    badge: RewardBadge;
    amount: RewardAmount;
  };
}

export interface RewardCreatedEvent {
  subject: Subjects.RewardCreated;
  data: Reward;
}
