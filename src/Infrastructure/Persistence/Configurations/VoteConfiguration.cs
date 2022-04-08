using SherloCkoin.Domain.Entities;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;

namespace SherloCkoin.Infrastructure.Persistence.Configurations
{
    public class VoteConfiguration : IEntityTypeConfiguration<Vote>
    {
        public void Configure(EntityTypeBuilder<Vote> builder)
    {
        builder.Property(t => t.UserIP)
            .HasMaxLength(200)
            .IsRequired();
    }
}
}
