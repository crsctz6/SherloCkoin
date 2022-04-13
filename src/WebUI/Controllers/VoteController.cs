using Microsoft.AspNetCore.Mvc;
using SherloCkoin.Application.Votes.Commands.CreateVote;
using SherloCkoin.Application.Votes.Queries.GetVote;
using SherloCkoin.Application.Votes.Queries.GetVotesForCoinsByUserIP;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace SherloCkoin.WebUI.Controllers
{
    public class VoteController : ApiControllerBase
    {
        [HttpGet]
        public async Task<ActionResult<VoteDTO>> GetVotesForCoinByUserIP([FromQuery] GetVoteWithQuerry query)
        {
            return await Mediator.Send(query);
        }

        [HttpPost]
        public async Task<ActionResult<int>> Create(CreateVoteCommand command)
        {
            return await Mediator.Send(command);
        }
    }
}
