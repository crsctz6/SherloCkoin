using SherloCkoin.Application.Common.Exceptions;
using SherloCkoin.Application.Coins.Commands.CreateCoin;
using SherloCkoin.Application.Coins.Commands.DeleteCoin;
using SherloCkoin.Domain.Entities;
using FluentAssertions;
using System.Threading.Tasks;
using NUnit.Framework;

namespace SherloCkoin.Application.IntegrationTests.Coins
{
    using static Testing;
    public class DeleteCoinTests : TestBase
    {
        [Test]
        public void ShouldRequireValidCoinId()
        {
            var command = new DeleteCoinCommand { Id = 99 };

            FluentActions.Invoking(() =>
                SendAsync(command)).Should().Throw<NotFoundException>();
        }

        [Test]
        public async Task ShouldDeleteCoin()
        {
            var itemId = await SendAsync(new CreateCoinCommand
            {
                Name = "New Coin"
            });

            await SendAsync(new DeleteCoinCommand
            {
                Id = itemId
            });

            var item = await FindAsync<Coin>(itemId);

            item.Should().BeNull();
        }
    }
}
