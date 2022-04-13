using System;
using Microsoft.EntityFrameworkCore.Migrations;

namespace SherloCkoin.Infrastructure.Persistence.Migrations
{
    public partial class AddedLogo : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<byte[]>(
                name: "Logo",
                table: "Coins",
                type: "varbinary(max)",
                nullable: true);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "Logo",
                table: "Coins");
        }
    }
}
