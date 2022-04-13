using AutoMapper;
using AutoMapper.QueryableExtensions;
using MediatR;
using Microsoft.EntityFrameworkCore;
using SherloCkoin.Application.Common.Interfaces;
using SherloCkoin.Application.Votes.Queries.GetVote;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading;
using System.Threading.Tasks;

namespace SherloCkoin.Application.Votes.Queries.GetVotesForCoinsByUserIP
{
    public class GetVoteWithQuerry : IRequest<VoteDTO>
    {
        public string UserIP { get; set; }
        public int CoinId { get; set; }
    }
    public class GetVotesForCoinsByUserIP : IRequestHandler<GetVoteWithQuerry, VoteDTO>
    {

        private readonly IApplicationDbContext _context;
        private readonly IMapper _mapper;

        public GetVotesForCoinsByUserIP(IApplicationDbContext context, IMapper mapper)
        {
            _context = context;
            _mapper = mapper;
        }

        public async Task<VoteDTO> Handle(GetVoteWithQuerry request, CancellationToken cancellationToken)
        {
            return await _context.Votes
                .ProjectTo<VoteDTO>(_mapper.ConfigurationProvider)
                .LastOrDefaultAsync();
        }
    }
}
