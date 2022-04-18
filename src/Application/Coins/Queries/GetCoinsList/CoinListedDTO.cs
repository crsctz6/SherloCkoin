using AutoMapper;
using SherloCkoin.Application.Common.Mappings;
using SherloCkoin.Domain.Entities;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace SherloCkoin.Application.Coins.Queries.GetCoinsList
{
    public class CoinListedDTO : IMapFrom<Coin>
    {
        public string Logo { get; set; }
        public string Name { get; set; }
        public double MarketCap { get; set; }
        public double Price { get; set; }
        public double ChangedPrice { get; set; }
        public long Launch { get; set; }
        public int Votes { get; set; }
        public bool IsVoted { get; set; }
        public void Mapping(Profile profile)
        {
            List<UserVotes> userVotes = null;
            profile.CreateMap<Coin, CoinListedDTO>()
                .ForMember(d => d.Votes, opt => opt.MapFrom(c => c.Votes.Count));
        }
    }
}
