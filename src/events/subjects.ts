// subjects are names of channels aka event names
export enum Subjects {
    // TicketingApp
    TicketCreated = 'ticket:created',
    TicketUpdated = 'ticket:updated',
    OrderCreated = 'order:created',
    OrderCancelled = 'order:cancelled',
    ExpirationComplete = 'expiration:complete',
    PaymentCreated = 'payment:created',
    // Popcott
    PopcottCreated = 'popcott:created',
    PopcottUpdated = 'popcott:updated',
    CommentCreated = 'comment:created',
    DonationCreated = 'donation:created',
    SupporterCreated = 'supporter:created',
    SupporterDeleted = 'supporter:deleted',
    GoalCreated = 'goal:created',
    RewardCreated = 'reward:created',
}
