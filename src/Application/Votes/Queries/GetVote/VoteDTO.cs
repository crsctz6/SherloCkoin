using AutoMapper;
using MediatR;
using SherloCkoin.Application.Common.Mappings;
using SherloCkoin.Domain.Entities;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace SherloCkoin.Application.Votes.Queries.GetVote
{
    public class VoteDTO : IMapFrom<Vote>
    {
        public bool IsVoted { get; set; }

        public void Mapping(Profile profile)
        {
            profile.CreateMap<Vote, VoteDTO>();
        }
    }
    

}
