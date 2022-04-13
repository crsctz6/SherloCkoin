using SherloCkoin.Domain.Entities;
using Microsoft.EntityFrameworkCore;
using System.Threading;
using System.Threading.Tasks;

namespace SherloCkoin.Application.Common.Interfaces
{
    public interface IApplicationDbContext
    {
        DbSet<Vote> Votes { get; set; }

        DbSet<Coin> Coins { get; set; }

        DbSet<UserVotes> UsersVotes { get; set; }

        Task<int> SaveChangesAsync(CancellationToken cancellationToken);
    }
}
