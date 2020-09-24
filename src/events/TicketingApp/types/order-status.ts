export enum OrderStatus {
    Created = 'created', // when the orders been created but the ticket it's trying to order has been reserved
    Cancelled = 'cancelled', // the ticket that the order is trying to reserve has aready been claimed OR the user cancels the ticket OR the order expires before payment
    AwaitingPayment = 'awaiting:payment', // the order has successfully reserved the ticket
    Complete = 'complete' // the order has reserved the ticket & the user has provided payment successfully
}