using AutoMapper;
using AutoMapper.QueryableExtensions;
using SherloCkoin.Application.Common.Interfaces;
using SherloCkoin.Application.Common.Mappings;
using SherloCkoin.Application.Common.Models;
using MediatR;
using System.Linq;
using System.Threading;
using System.Threading.Tasks;
using SherloCkoin.Application.Coins.Queries.GetCoins;
using SherloCkoin.Application.Coins.Queries.GetCoinsList;
using Microsoft.EntityFrameworkCore;

namespace SherloCkoin.Application.Coins.Queries.GetCoinsWithPagination
{
    public class GetCoinsWithPaginationQuery : IRequest<PaginatedList<CoinListedDTO>>
    {
        public int PageNumber { get; set; } = 1;
        public int PageSize { get; set; } = 10;
        public string UserIP { get; set; }
    }

    public class GetCoinsWithPaginationQueryHandler : IRequestHandler<GetCoinsWithPaginationQuery, PaginatedList<CoinListedDTO>>
    {
        private readonly IApplicationDbContext _context;
        private readonly IMapper _mapper;

        public GetCoinsWithPaginationQueryHandler(IApplicationDbContext context, IMapper mapper)
        {
            _context = context;
            _mapper = mapper;
        }

        public async Task<PaginatedList<CoinListedDTO>> Handle(GetCoinsWithPaginationQuery request, CancellationToken cancellationToken)
        {
            return await _context.Coins
                .OrderBy(x => x.Name)
                .ProjectTo<CoinListedDTO>(_mapper.ConfigurationProvider, new  { userIP =request.UserIP })
                .PaginatedListAsync(request.PageNumber, request.PageSize);
        }
    }
}
