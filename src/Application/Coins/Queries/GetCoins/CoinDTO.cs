using AutoMapper;
using SherloCkoin.Application.Common.Mappings;
using SherloCkoin.Domain.Entities;
using System;

namespace SherloCkoin.Application.Coins.Queries.GetCoins
{
    public class CoinDTO : IMapFrom<Coin>
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
        public void Mapping(Profile profile)
        {
            profile.CreateMap<Coin, CoinDTO>();
        }
    }
}
