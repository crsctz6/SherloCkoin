using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace SherloCkoin.Domain.Entities
{
    public class CoinDetails
    {
        public int Id { get; set; }
        public int CoinRef { get; set; }
        public int MarketCap { get; set; }
        public string Launch { get; set; }
        public double Price { get; set; }
        public DateTime Create { get; set; }

    }
}
