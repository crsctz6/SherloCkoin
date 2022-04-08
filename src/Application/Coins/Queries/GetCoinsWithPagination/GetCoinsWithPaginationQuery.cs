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

namespace SherloCkoin.Application.Coins.Queries.GetCoinsWithPagination
{
    public class GetCoinsWithPaginationQuery : IRequest<PaginatedList<CoinDTO>>
    {
        public int PageNumber { get; set; } = 1;
        public int PageSize { get; set; } = 10;
    }

    public class GetCoinsWithPaginationQueryHandler : IRequestHandler<GetCoinsWithPaginationQuery, PaginatedList<CoinDTO>>
    {
        private readonly IApplicationDbContext _context;
        private readonly IMapper _mapper;

        public GetCoinsWithPaginationQueryHandler(IApplicationDbContext context, IMapper mapper)
        {
            _context = context;
            _mapper = mapper;
        }

        public async Task<PaginatedList<CoinDTO>> Handle(GetCoinsWithPaginationQuery request, CancellationToken cancellationToken)
        {
            return await _context.Coins
                .OrderBy(x => x.Name)
                .ProjectTo<CoinDTO>(_mapper.ConfigurationProvider)
                .PaginatedListAsync(request.PageNumber, request.PageSize);
        }
    }
}
