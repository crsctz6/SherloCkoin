using SherloCkoin.Application.Common.Interfaces;
using SherloCkoin.Domain.Entities;
using SherloCkoin.Domain.Events;
using MediatR;
using System.Threading;
using System.Threading.Tasks;
using System;

namespace SherloCkoin.Application.Coins.Commands.CreateCoin
{
    public class CreateCoinCommand : IRequest<int>
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

    public class CreateCoinCommandHandler : IRequestHandler<CreateCoinCommand, int>
    {
        private readonly IApplicationDbContext _context;

        public CreateCoinCommandHandler(IApplicationDbContext context)
        {
            _context = context;
        }

        public async Task<int> Handle(CreateCoinCommand request, CancellationToken cancellationToken)
        {
            var entity = new Coin
            {
                Name = request.Name,
                ContractAddress = request.ContractAddress,
                CustomChartLink = request.CustomChartLink,
                CustomSwapLink = request.CustomSwapLink,
                Description = request.Description,
                DiscordLink = request.DiscordLink,
                IsInPresale = request.IsInPresale,
                LaunchDate = request.LaunchDate,
                Network = request.Network,
                Symbol = request.Symbol,
                TelegramLink = request.TelegramLink,
                TwitterLink = request.TwitterLink,
                WebsiteLink = request.WebsiteLink
            };

            entity.DomainEvents.Add(new CoinCreatedEvent(entity));

            _context.Coins.Add(entity);

            await _context.SaveChangesAsync(cancellationToken);

            return entity.Id;
        }
    }
}
