using AutoMapper;
using SherloCkoin.Application.Common.Mappings;
using SherloCkoin.Domain.Entities;
using System;
using System.Linq;

namespace SherloCkoin.Application.Coins.Queries.GetCoins
{
    public class CoinDetailsDTO : IMapFrom<Coin>
    {
        public  int Id { get; set; }
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
        public int Votes { get; set; }
        public int LastDayVotes { get; set; }
        public bool IsVoted { get; set; }
        public string Logo { get; set; }
        public CoinDetails CoinDetails { get; set; }
        public double Price { get; set; }
        public string Launch { get; set; }
        public int MarketCap { get; set; }
        public void Mapping(Profile profile)
        {
            string userIP = "";
            profile.CreateMap<Coin, CoinDetailsDTO>()
                .ForMember(d => d.Votes, opt => opt.MapFrom(c => c.Votes.Count))
                .ForMember(d => d.LastDayVotes, opt => opt.MapFrom(c => c.UsersVotes.Count))
                .ForMember(d => d.CoinDetails, opt => opt.MapFrom(c => c.CoinDetails))
                .ForMember(d => d.Price, opt => opt.MapFrom(c => c.CoinDetails.Price))
                .ForMember(d => d.Launch, opt => opt.MapFrom(c => c.CoinDetails.Launch))
                .ForMember(d => d.MarketCap, opt => opt.MapFrom(c => c.CoinDetails.MarketCap))
                .ForMember(d => d.IsVoted, opt => opt.MapFrom(
                    c => c.UsersVotes.Select(v => v.UserIP).Contains(userIP)));
        }
    }
}
