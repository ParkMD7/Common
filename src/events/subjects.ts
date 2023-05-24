// subjects are names of channels aka event names
export enum Subjects {
  // Popcott [Popcotts]
  PopcottCreated = "popcott:created",
  PopcottUpdated = "popcott:updated",
  // Popcott [Comments]
  CommentCreated = "comment:created",
  // Popcott [Donations]
  DonationCreated = "donation:created",
  // Popcott [Supporters]
  SupporterCreated = "supporter:created",
  SupporterDeleted = "supporter:deleted",
  // Popcott [Goals]
  GoalCreated = "goal:created",
  // Popcott [Rewards]
  RewardCreated = "reward:created",
}
