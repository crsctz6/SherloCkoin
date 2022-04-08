using SherloCkoin.Domain.Common;
using SherloCkoin.Domain.Entities;

namespace SherloCkoin.Domain.Events
{
    public class VoteCreatedEvent : DomainEvent
    {
        public VoteCreatedEvent(Vote item)
        {
            Item = item;
        }

        public Vote Item { get; }
    }
}
