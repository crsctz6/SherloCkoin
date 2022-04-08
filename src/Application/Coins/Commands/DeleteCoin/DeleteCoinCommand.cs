using SherloCkoin.Application.Common.Exceptions;
using SherloCkoin.Application.Common.Interfaces;
using SherloCkoin.Domain.Entities;
using MediatR;
using System.Threading;
using System.Threading.Tasks;

namespace SherloCkoin.Application.Coins.Commands.DeleteCoin
{
    public class DeleteCoinCommand : IRequest
    {
        public int Id { get; set; }
    }

    public class DeleteCoinCommandHandler : IRequestHandler<DeleteCoinCommand>
    {
        private readonly IApplicationDbContext _context;

        public DeleteCoinCommandHandler(IApplicationDbContext context)
        {
            _context = context;
        }

        public async Task<Unit> Handle(DeleteCoinCommand request, CancellationToken cancellationToken)
        {
            var entity = await _context.Coins.FindAsync(request.Id);

            if (entity == null)
            {
                throw new NotFoundException(nameof(Coin), request.Id);
            }

            _context.Coins.Remove(entity);

            await _context.SaveChangesAsync(cancellationToken);

            return Unit.Value;
        }
    }
}
