using AutoMapper;
using AutoMapper.QueryableExtensions;
using MediatR;
using Microsoft.EntityFrameworkCore;
using SherloCkoin.Application.Coins.Queries.GetCoins;
using SherloCkoin.Application.Common.Interfaces;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading;
using System.Threading.Tasks;

namespace SherloCkoin.Application.Coins.Queries.GetCoinsDetails
{
    public class GetCoinsDetailsById : IRequest<CoinDetailsDTO>
    {
        public int CoinId { get; set; }
        public string UserIP { get; set; }
    }
    public class GetCoinsDetailsHandler : IRequestHandler<GetCoinsDetailsById, CoinDetailsDTO>
    {
        private readonly IApplicationDbContext _context;
        private readonly IMapper _mapper;

        public GetCoinsDetailsHandler(IApplicationDbContext context, IMapper mapper)
        {
            _context = context;
            _mapper = mapper;
        }

        public async Task<CoinDetailsDTO> Handle(GetCoinsDetailsById request, CancellationToken cancellationToken)
        {
            return await _context.Coins
               .Where(coin => coin.Id == request.CoinId)
               .ProjectTo<CoinDetailsDTO>(_mapper.ConfigurationProvider, new { userIP = request.UserIP })
               .FirstOrDefaultAsync();
               
        }
    }
}

