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
                context.Coins.AddRange(new Coin
                {
                    Name = "XY Finance",
                    ContractAddress = "0x77777777772cf0455fB38eE0e75f38034dFa50DE",
                    Description = "XY Finance is a one-stop cross-chain aggregator for DeFi and Metaverse. Our mission is to facilitate the seamless and secure transfer of on-chain assets, including tokens, NFTs, and more, across all blockchains. The protocol has built a one-click swap aggregator with the highest interoperability that allows crypto users to trade all on-chain assets.",
                    Symbol = "XY",
                    DiscordLink = "https://discord.com/invite/zHKxJYZ52P",
                    WebsiteLink = "https://xy.finance/",
                   // Logo = "data:image/png;base64,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"
                },
                new Coin
                {
                    Name = "Savanna",
                    ContractAddress = "0x654bAc3eC77d6dB497892478f854cF6e8245DcA9",
                    Description = "MM Finance is an AMM & DEX on Cronos Chain that offers fee rebates via trade mining with the lowest trading fees on Cronos at 0.17%!",
                    Symbol = "SVN",
                    TwitterLink = "https://twitter.com/MMFcrypto",
                    WebsiteLink = "https://medium.com/@MMFinance",
                    //Logo = "data:image/png;base64,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"
                }
                );

                await context.SaveChangesAsync();
            }
        }
    }
}
