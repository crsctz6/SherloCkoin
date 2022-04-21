import styled from "styled-components";
import {FontSize, FontColors,FontWeights,FontsFamilies, Borders, Backgrounds} from '../GlobalStyleConsts'

export const CoinDetailsContainer = styled.div`
width:80%;
margin:200px auto 0 auto;
border: 1.5px solid;
border-image:${Borders.blue};
border-image-slice:1;
padding:20px;
background:${Backgrounds.table};
padding: 50px 0;
@media screen and (max-width: 380px) {
 font-size:${FontSize.smallText};
  }`;

export const CoinOverviewWrapper = styled.div`
width:90%;
margin:0 auto;`;

export const CoinOverviewTopContainer = styled.div`
display:flex;
align-items:center;
@media screen and (max-width: 760px) {
 justify-content:space-between;
 flex-direction:column;
  }`;

export const CoinLogo = styled.img`
height:110px;
@media screen and (max-width: 450px) {
 height:80px;
  }`;

export const CoinData = styled.div`
margin-left:30px;`;

export const Symbol = styled.p`
color:${FontColors.white};
font-family:${FontsFamilies.rest};
font-size:${FontSize.biggerText};`;

export const Address = styled.p`
color:${FontColors.grey};
font-family:${FontsFamilies.rest};
font-size:${FontSize.smallText};`;

export const FullName = styled.p`
color:${FontColors.white};
font-family:${FontsFamilies.rest};
font-size:${FontSize.biggerText};`;

export const CoinOverviewBottomContainer = styled.div`
display:flex;
@media screen and (max-width: 760px) {
 justify-content:space-between;
 flex-direction:column;
  }`;

export const SocialContainer = styled.div`
display:flex;
justify-content:space-around;
flex-direction:column;

@media screen and (max-width: 760px) {
 justify-content:space-around;
 flex-direction:row;
  }`;

export const TelegramLogo = styled.img`
height:35px;
margin:15px 0;`;

export const TwitterLogo = styled.img`
height:35px;
margin:15px 0;`;

export const DiscordLogo = styled.img`
height:35px;
margin:15px 0;`;

export const Description = styled.p`
margin-left:110px;
max-width:1000px;
color:${FontColors.white};
font-family:${FontsFamilies.rest};
font-size:${FontSize.text};
@media screen and (max-width: 760px) {
 justify-content:space-around;
 flex-direction:row;
 margin:15px;}`;


export const MarketOverviewContainer = styled.div`
width:90%;
margin:120px auto 0 auto;
font-family:${FontsFamilies.rest};
color:${FontColors.lightGrey};
@media screen and (max-width: 380px) {
    margin:70px auto 0 auto;};`;

export const MarketOverviewHeading = styled.p`
color:${FontColors.white};
font-size:${FontSize.biggerText};
font-weight:${FontWeights.medium};`;

export const CoinInfoLine = styled.div`
display:flex;
justify-content:space-between; 
width:70%;
border-bottom:1px solid;
border-image:${Borders.reverseGrey};
border-image-slice:1;
@media screen and (max-width: 760px) {
width:100%;}`;

export const LeftSide = styled.p`
`;

export const RightSide = styled.p`
`;

export const AnalyticsAndButtonContainer = styled.div`
width:90%;
margin:120px auto 0 auto;
font-family:${FontsFamilies.rest};
color:${FontColors.lightGrey};
display:flex;
justify-content:space-between;
align-items:center;
@media screen and (max-width: 760px) {
width:100%;
flex-direction:column;
  };
 @media screen and (max-width: 380px) {
    margin:70px auto 0 auto;
  }`;

export const Analytics = styled.div`
flex:1;
@media screen and (max-width: 760px) {
width:90%;
margin-bottom:30px;
  }`;
