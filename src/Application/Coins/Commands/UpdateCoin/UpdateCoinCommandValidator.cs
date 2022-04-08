using FluentValidation;

namespace SherloCkoin.Application.Coins.Commands.UpdateCoin
{
    public class UpdateCoinCommandValidator : AbstractValidator<UpdateCoinCommand>
    {
        public UpdateCoinCommandValidator()
        {
            RuleFor(v => v.Name)
                .MaximumLength(200)
                .NotEmpty();
        }
    }
}
