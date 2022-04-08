using SherloCkoin.Domain.Common;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace SherloCkoin.Domain.Entities
{
    public class Vote : AuditableEntity
    {
        public int Id { get; set; }
        public bool IsVoted { get; set; }
        public string UserIP { get; set; }
        public Coin Coin { get; set; }
    }
}
