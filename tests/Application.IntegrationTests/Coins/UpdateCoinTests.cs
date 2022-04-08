using SherloCkoin.Application.Common.Exceptions;
using SherloCkoin.Application.Coins.Commands.CreateCoin;
using SherloCkoin.Application.Coins.Commands.UpdateCoin;
using SherloCkoin.Domain.Entities;
using FluentAssertions;
using System.Threading.Tasks;
using NUnit.Framework;
using System;

namespace SherloCkoin.Application.IntegrationTests.Coins
{
    using static Testing;
    public class UpdateCoinTests : TestBase
    {
        [Test]
        public void ShouldRequireValidTodoItemId()
        {
            var command = new UpdateCoinCommand
            {
                Id = 99,
                Name = "New Coin"
            };

            FluentActions.Invoking(() =>
                SendAsync(command)).Should().Throw<NotFoundException>();
        }

        [Test]
        public async Task ShouldUpdateCoin()
        {
            var userId = await RunAsDefaultUserAsync();

            var itemId = await SendAsync(new CreateCoinCommand
            {
                Name = "New Coin"
            });

            var command = new UpdateCoinCommand
            {
                Id = itemId,
                Name = "Updated Coin Name"
            };

            await SendAsync(command);

            var item = await FindAsync<Coin>(itemId);

            item.Name.Should().Be(command.Name);
            item.LastModifiedBy.Should().NotBeNull();
            item.LastModifiedBy.Should().Be(userId);
            item.LastModified.Should().NotBeNull();
            item.LastModified.Should().BeCloseTo(DateTime.Now, 1000);
        }
    }
}
