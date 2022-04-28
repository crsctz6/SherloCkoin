using AutoMapper;
using AutoMapper.QueryableExtensions;
using MediatR;
using SherloCkoin.Application.Coins.Queries.GetCoinsList;
using SherloCkoin.Application.Common.Interfaces;
using SherloCkoin.Application.Common.Mappings;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading;
using System.Threading.Tasks;

namespace SherloCkoin.Application.Coins.Queries.GetCoinsForSearch
{
    public class GetCoinsForSearch : IRequest<List<CoinListedSearchDTO>>
    {
    }
    public class GetCoinsForSearchHandler : IRequestHandler<GetCoinsForSearch, List<CoinListedSearchDTO>>
    {
        private readonly IApplicationDbContext _context;
        private readonly IMapper _mapper;

        public GetCoinsForSearchHandler(IApplicationDbContext context, IMapper mapper)
        {
            _context = context;
            _mapper = mapper;
        }

        public async Task<List<CoinListedSearchDTO>> Handle(GetCoinsForSearch request, CancellationToken cancellationToken)
        {
            return await _context.Coins
                .OrderBy(x => x.Name)
                .Where(coin => coin.IsApproved)
                .ProjectToListAsync<CoinListedSearchDTO>(_mapper.ConfigurationProvider);
        }
    }
}
