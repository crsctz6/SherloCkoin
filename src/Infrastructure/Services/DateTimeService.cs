using SherloCkoin.Application.Common.Interfaces;
using System;

namespace SherloCkoin.Infrastructure.Services
{
    public class DateTimeService : IDateTime
    {
        public DateTime Now => DateTime.Now;
    }
}
