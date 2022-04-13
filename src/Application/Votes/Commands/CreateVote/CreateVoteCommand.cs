using MediatR;
using Microsoft.EntityFrameworkCore;
using SherloCkoin.Application.Common.Interfaces;
using SherloCkoin.Domain.Entities;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading;
using System.Threading.Tasks;

namespace SherloCkoin.Application.Votes.Commands.CreateVote
{
    public class CreateVoteCommand : IRequest<int>
    {
        public string UserIP { get; set; }
        public int CoinId { get; set; }
    }

    public class CreateVoteCommandHandler : IRequestHandler<CreateVoteCommand, int>
    {
        private readonly IApplicationDbContext _context;

        public CreateVoteCommandHandler(IApplicationDbContext context)
        {
            _context = context;
        }

        public async Task<int> Handle(CreateVoteCommand request, CancellationToken cancellationToken)
        {
            var coin = await _context.Coins.FirstOrDefaultAsync(coin => coin.Id == request.CoinId);
            
            var entity = new Vote
            {
                  IsVoted = true
            };
            coin.Votes.Add(entity);
            var userVotes = new UserVotes
            {
                UserIP = request.UserIP,
                Vote = entity
            };
            // entity.DomainEvents.Add(new CoinCreatedEvent(entity));

            _context.UsersVotes.Add(userVotes);

            await _context.SaveChangesAsync(cancellationToken);

            return entity.Id;
        }
    }
}
