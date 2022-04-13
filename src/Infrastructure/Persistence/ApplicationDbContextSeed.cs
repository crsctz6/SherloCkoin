using SherloCkoin.Domain.Entities;
using SherloCkoin.Infrastructure.Identity;
using Microsoft.AspNetCore.Identity;
using System.Linq;
using System.Threading.Tasks;

namespace SherloCkoin.Infrastructure.Persistence
{
    public static class ApplicationDbContextSeed
    {
        public static async Task SeedDefaultUserAsync(UserManager<ApplicationUser> userManager, RoleManager<IdentityRole> roleManager)
        {
            var administratorRole = new IdentityRole("Administrator");

            if (roleManager.Roles.All(r => r.Name != administratorRole.Name))
            {
                await roleManager.CreateAsync(administratorRole);
            }

            var administrator = new ApplicationUser { UserName = "administrator@localhost", Email = "administrator@localhost" };

            if (userManager.Users.All(u => u.UserName != administrator.UserName))
            {
                await userManager.CreateAsync(administrator, "Administrator1!");
                await userManager.AddToRolesAsync(administrator, new [] { administratorRole.Name });
            }
        }

        public static async Task SeedSampleDataAsync(ApplicationDbContext context)
        {
            // Seed, if necessary
            if (!context.Coins.Any())
            {
                context.Coins.Add(new Coin
                {
                    Name = "XY Finance",
                    ContractAddress = "0x77777777772cf0455fB38eE0e75f38034dFa50DE",
                    Description = "XY Finance is a one-stop cross-chain aggregator for DeFi and Metaverse. Our mission is to facilitate the seamless and secure transfer of on-chain assets, including tokens, NFTs, and more, across all blockchains. The protocol has built a one-click swap aggregator with the highest interoperability that allows crypto users to trade all on-chain assets.",
                    Symbol = "XY",
                    DiscordLink = "https://discord.com/invite/zHKxJYZ52P",
                    WebsiteLink = "https://xy.finance/"
                });

                await context.SaveChangesAsync();
            }
        }
    }
}
