using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Authorization;
using System.Threading.Tasks;
using SherloCkoin.Application.Common.Models;
using SherloCkoin.Application.Coins.Queries.GetCoins;
using SherloCkoin.Application.Coins.Queries.GetCoinsWithPagination;
using SherloCkoin.Application.Coins.Commands.CreateCoin;
using SherloCkoin.Application.Coins.Commands.DeleteCoin;
using SherloCkoin.Application.Coins.Commands.UpdateCoin;
using SherloCkoin.Application.Coins.Queries.GetCoinsList;
using SherloCkoin.Application.Coins.Queries.GetCoinsDetails;
using SherloCkoin.Application.Coins.Queries.GetCoinsForSearch;
using System.Collections.Generic;

namespace SherloCkoin.WebUI.Controllers
{
    public class CoinController : ApiControllerBase
    {
        [HttpGet]
        public async Task<ActionResult<PaginatedList<CoinListedDTO>>> GetCoinsWithPagination([FromQuery] GetCoinsWithPaginationQuery query)
        {
            return await Mediator.Send(query);
        }
        [HttpGet("search")]
        public async Task<ActionResult<List<CoinListedSearchDTO>>> GetCoinsForSearch()
        {
            return await Mediator.Send(new GetCoinsForSearch());
        }

        [HttpGet("{id}/{userIP}")]
        public async Task<ActionResult<CoinDetailsDTO>> GetCoinDetails(int id, string userIP)
        {
            return await Mediator.Send(new GetCoinsDetailsById() { CoinId = id, UserIP = userIP});
        }


        [HttpPost]
        public async Task<ActionResult<int>> Create(CreateCoinCommand command)
        {
            return await Mediator.Send(command);
        }

        [HttpPut("{id}")]
        public async Task<ActionResult> Update(int id, UpdateCoinCommand command)
        {
            if (id != command.Id)
            {
                return BadRequest();
            }

            await Mediator.Send(command);

            return NoContent();
        }



        [HttpDelete("{id}")]
        public async Task<ActionResult> Delete(int id)
        {
            await Mediator.Send(new DeleteCoinCommand { Id = id });

            return NoContent();
        }
    }
}