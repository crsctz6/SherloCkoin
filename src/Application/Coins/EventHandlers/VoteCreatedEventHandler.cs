using SherloCkoin.Application.Common.Models;
using SherloCkoin.Domain.Events;
using MediatR;
using Microsoft.Extensions.Logging;
using System.Threading;
using System.Threading.Tasks;


namespace SherloCkoin.Application.Coins.EventHandlers
{
     public class VoteCreatedEventHandler : INotificationHandler<DomainEventNotification<VoteCreatedEvent>>
    {
        private readonly ILogger<VoteCreatedEvent> _logger;

        public VoteCreatedEventHandler(ILogger<VoteCreatedEvent> logger)
        {
            _logger = logger;
        }

        public Task Handle(DomainEventNotification<VoteCreatedEvent> notification, CancellationToken cancellationToken)
        {
            var domainEvent = notification.DomainEvent;

            _logger.LogInformation("SherloCkoin Domain Event: {DomainEvent}", domainEvent.GetType().Name);

            return Task.CompletedTask;
        }
    }
}
