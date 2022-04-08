using SherloCkoin.Application.Common.Exceptions;
using SherloCkoin.Application.Common.Interfaces;
using SherloCkoin.Domain.Entities;
using MediatR;
using System.Threading;
using System.Threading.Tasks;
using System;

namespace SherloCkoin.Application.Coins.Commands.UpdateCoin
{
    public class UpdateCoinCommand : IRequest
    {
        public int Id { get; set; }
        public string Name { get; set; }
        public string Symbol { get; set; }
        public string Network { get; set; }
        public bool IsInPresale { get; set; }
        public string ContractAddress { get; set; }
        public string Description { get; set; }
        public DateTime LaunchDate { get; set; }
        public string CustomChartLink { get; set; }
        public string CustomSwapLink { get; set; }
        public string WebsiteLink { get; set; }
        public string TelegramLink { get; set; }
        public string TwitterLink { get; set; }
        public string DiscordLink { get; set; }
    }


    public class UpdateCoinCommandHandler : IRequestHandler<UpdateCoinCommand>
    {
        private readonly IApplicationDbContext _context;

        public UpdateCoinCommandHandler(IApplicationDbContext context)
        {
            _context = context;
        }

        public async Task<Unit> Handle(UpdateCoinCommand request, CancellationToken cancellationToken)
        {
            var entity = await _context.Coins.FindAsync(request.Id);

            if (entity == null)
            {
                throw new NotFoundException(nameof(Coin), request.Id);
            }

            entity.Name = request.Name;
            entity.ContractAddress = request.ContractAddress;
            entity.CustomChartLink = request.CustomChartLink;
            entity.CustomSwapLink = request.CustomSwapLink;
            entity.Description = request.Description;
            entity.DiscordLink = request.DiscordLink;
            entity.IsInPresale = request.IsInPresale;
            entity.LaunchDate = request.LaunchDate;
            entity.Network = request.Network;
            entity.Symbol = request.Symbol;
            entity.TelegramLink = request.TelegramLink;
            entity.TwitterLink = request.TwitterLink;
            entity.WebsiteLink = request.WebsiteLink;

            await _context.SaveChangesAsync(cancellationToken);

            return Unit.Value;
        }
    }
}
