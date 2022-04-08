using SherloCkoin.Application.Common.Models;
using SherloCkoin.Domain.Events;
using MediatR;
using Microsoft.Extensions.Logging;
using System.Threading;
using System.Threading.Tasks;


namespace SherloCkoin.Application.Coins.EventHandlers
{
    public class CoinCreatedEventHandler : INotificationHandler<DomainEventNotification<CoinCreatedEvent>>
    {
        private readonly ILogger<VoteCreatedEvent> _logger;

        public CoinCreatedEventHandler(ILogger<VoteCreatedEvent> logger)
        {
            _logger = logger;
        }

        public Task Handle(DomainEventNotification<CoinCreatedEvent> notification, CancellationToken cancellationToken)
        {
            var domainEvent = notification.DomainEvent;

            _logger.LogInformation("SherloCkoin Domain Event: {DomainEvent}", domainEvent.GetType().Name);

            return Task.CompletedTask;
        }
    }
}
