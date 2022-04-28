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
    public class CoinListedSearchDTO : IMapFrom<Coin>
    {
        public int Id { get; set; }
        public string Logo { get; set; }
        public string Name { get; set; }
        public string Symbol { get; set; }
        

        public void Mapping(Profile profile)
        {
            profile.CreateMap<Coin, CoinListedSearchDTO>();
        }
    }
}
