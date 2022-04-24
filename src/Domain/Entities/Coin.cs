using SherloCkoin.Domain.Common;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace SherloCkoin.Domain.Entities
{
    public class Coin : AuditableEntity, IHasDomainEvent
    {
        public Coin()
        {
            Votes = new List<Vote>();
            UsersVotes = new List<UserVotes>();
            CoinDetails = new CoinDetails();
        }
        public int Id { get; set; }
        public string Logo { get; set; }
        public string Name { get; set; }
        public string Symbol { get; set; }
        public string Network { get; set; }
        public bool IsInPresale { get; set; }
        public string ContractAddress{ get; set; }
        public string Description { get; set; }
        public DateTime LaunchDate { get; set; }
        public string CustomChartLink{ get; set; }
        public string CustomSwapLink { get; set; }
        public string WebsiteLink { get; set; }
        public string TelegramLink { get; set; }
        public string TwitterLink { get; set; }
        public string DiscordLink { get; set; }
        public bool IsPromoted { get; set; }
        public bool IsApproved { get; set; }
        public List<DomainEvent> DomainEvents { get; set; } = new List<DomainEvent>();
        public List<Vote> Votes { get; set; }
        public List<UserVotes> UsersVotes { get; set; }
        public CoinDetails CoinDetails { get; set; }
    }
}
