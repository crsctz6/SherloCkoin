using SherloCkoin.Domain.Common;
using System.Threading.Tasks;

namespace SherloCkoin.Application.Common.Interfaces
{
    public interface IDomainEventService
    {
        Task Publish(DomainEvent domainEvent);
    }
}
