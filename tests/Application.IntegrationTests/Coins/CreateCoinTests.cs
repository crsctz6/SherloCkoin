using SherloCkoin.Application.Coins.Commands.CreateCoin;
using SherloCkoin.Application.Common.Exceptions;
using FluentAssertions;
using NUnit.Framework;
using System;
using System.Threading.Tasks;
using SherloCkoin.Domain.Entities;

namespace SherloCkoin.Application.IntegrationTests.Coins
{
    using static Testing;
    public class CreateCoinTests : TestBase
    {
        [Test]
        public void ShouldRequireMinimumFields()
        {
            var command = new CreateCoinCommand();

            FluentActions.Invoking(() =>
                SendAsync(command)).Should().Throw<ValidationException>();
        }

        [Test]
        public async Task ShouldCreateCoin()
        {
            var userId = await RunAsDefaultUserAsync();


            var command = new CreateCoinCommand
            {
                Name = "Tests"
            };

            var itemId = await SendAsync(command);

            var item = await FindAsync<Coin>(itemId);

            item.Should().NotBeNull();
            item.Name.Should().Be(command.Name);
            item.CreatedBy.Should().Be(userId);
            item.Created.Should().BeCloseTo(DateTime.Now, 10000);
            item.LastModifiedBy.Should().BeNull();
            item.LastModified.Should().BeNull();
        }
    }
}
