using SherloCkoin.Domain.Common;
using SherloCkoin.Domain.Entities;


namespace SherloCkoin.Domain.Events
{
    public class CoinCreatedEvent : DomainEvent
    {
        public CoinCreatedEvent(Coin item)
        {
            Item = item;
        }

        public Coin Item { get; }
    }
}
