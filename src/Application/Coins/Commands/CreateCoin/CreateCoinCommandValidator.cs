using FluentValidation;


namespace SherloCkoin.Application.Coins.Commands.CreateCoin
{
    public class CreateCoinCommandValidator : AbstractValidator<CreateCoinCommand>
    {
        public CreateCoinCommandValidator()
        {
            RuleFor(v => v.Name)
                .MaximumLength(200)
                .NotEmpty();
        }
    }
}
