// subjects are names of channels aka event names
export enum Subjects {
    TicketCreated = 'ticket:created',
    TicketUpdated = 'ticket:updated',
    OrderCreated = 'order:created',
    OrderCancelled = 'order:cancelled',
    ExpirationComplete = 'expiration:complete',
}