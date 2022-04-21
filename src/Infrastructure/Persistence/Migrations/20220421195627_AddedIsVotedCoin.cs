using Microsoft.EntityFrameworkCore.Migrations;

namespace SherloCkoin.Infrastructure.Persistence.Migrations
{
    public partial class AddedIsVotedCoin : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<bool>(
                name: "IsApproved",
                table: "Coins",
                type: "bit",
                nullable: false,
                defaultValue: false);

            migrationBuilder.AddColumn<bool>(
                name: "IsPromoted",
                table: "Coins",
                type: "bit",
                nullable: false,
                defaultValue: false);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "IsApproved",
                table: "Coins");

            migrationBuilder.DropColumn(
                name: "IsPromoted",
                table: "Coins");
        }
    }
}
