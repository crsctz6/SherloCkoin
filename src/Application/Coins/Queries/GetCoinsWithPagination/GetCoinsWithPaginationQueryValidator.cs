using FluentValidation;

namespace SherloCkoin.Application.Coins.Queries.GetCoinsWithPagination
{
    public class GetCoinsWithPaginationQueryValidator : AbstractValidator<GetCoinsWithPaginationQuery>
    {
        public GetCoinsWithPaginationQueryValidator()
        {

            RuleFor(x => x.PageNumber)
                .GreaterThanOrEqualTo(1).WithMessage("PageNumber at least greater than or equal to 1.");

            RuleFor(x => x.PageSize)
                .GreaterThanOrEqualTo(1).WithMessage("PageSize at least greater than or equal to 1.");
        }
    }
}
