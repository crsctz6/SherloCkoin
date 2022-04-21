using Microsoft.EntityFrameworkCore.Migrations;

namespace SherloCkoin.Infrastructure.Persistence.Migrations
{
    public partial class AddedUserVotesOnCoin : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<int>(
                name: "CoinId",
                table: "UsersVotes",
                type: "int",
                nullable: true);

            migrationBuilder.CreateIndex(
                name: "IX_UsersVotes_CoinId",
                table: "UsersVotes",
                column: "CoinId");

            migrationBuilder.AddForeignKey(
                name: "FK_UsersVotes_Coins_CoinId",
                table: "UsersVotes",
                column: "CoinId",
                principalTable: "Coins",
                principalColumn: "Id",
                onDelete: ReferentialAction.Restrict);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_UsersVotes_Coins_CoinId",
                table: "UsersVotes");

            migrationBuilder.DropIndex(
                name: "IX_UsersVotes_CoinId",
                table: "UsersVotes");

            migrationBuilder.DropColumn(
                name: "CoinId",
                table: "UsersVotes");
        }
    }
}
