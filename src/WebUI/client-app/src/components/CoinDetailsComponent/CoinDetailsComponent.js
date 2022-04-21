import React from 'react'
import {Button} from '../../elements/HeaderButton'
import {CoinDetailsContainer,
        CoinOverviewWrapper,
        CoinOverviewTopContainer,
        CoinLogo,
        CoinData,
        Symbol,
        Address,
        FullName,
        CoinOverviewBottomContainer,
        SocialContainer, 
        TelegramLogo,
        TwitterLogo,
        DiscordLogo,
        Description,
        MarketOverviewContainer,
        MarketOverviewHeading,
        CoinInfoLine,
        LeftSide,
        RightSide,
        AnalyticsAndButtonContainer,
        Analytics
    } from './CoinDetailsComponentStyleElements'
import telegram from '../../photos/telegram.png';
import twitter from '../../photos/twitter.png';
import discord from '../../photos/discord.png';

function CoinDetailsComponent(props) {
    let details = props.coinDetails;
  return (
    <CoinDetailsContainer>
        <CoinOverviewWrapper>
            <CoinOverviewTopContainer>
                <CoinLogo src={details.logo} />
                <CoinData>
                    <Symbol>
                    {details.symbol}
                    </Symbol>
                    <Address>
                    {details.contractAddress}
                    </Address>
                    <FullName>
                    {details.name}
                    </FullName>
                </CoinData>
            </CoinOverviewTopContainer>
            <CoinOverviewBottomContainer>
                <SocialContainer>
                    {details.telegramLink && 
                        <a href={details.telegramLink}>
                            <TelegramLogo src={telegram}/>
                        </a>
                    }
                    {details.twitterLink && 
                        <a href={details.twitterLink}>
                            <TwitterLogo src={twitter}/>    
                        </a>
                    }
                    {details.discordLink && 
                        <a href={details.discordLink}>
                            <DiscordLogo src={discord}/>   
                        </a>
                    }
                </SocialContainer>
                <Description>
                    {details.description}
                </Description>
            </CoinOverviewBottomContainer>
        </CoinOverviewWrapper>

        <MarketOverviewContainer>
            <MarketOverviewHeading>
                Market Overview
            </MarketOverviewHeading>
            <CoinInfoLine>
                        <LeftSide>
                            Price (USD)
                        </LeftSide>
                        <RightSide>
                            330 
                        </RightSide>
            </CoinInfoLine>
             <CoinInfoLine>
                        <LeftSide>
                            Last 24h %
                        </LeftSide>
                        <RightSide>
                            30%
                        </RightSide>
            </CoinInfoLine>
            <CoinInfoLine>
                        <LeftSide>
                            MarketCap
                        </LeftSide>
                        <RightSide>
                            14,932,322.1
                        </RightSide>
            </CoinInfoLine>
            <CoinInfoLine>
                        <LeftSide>
                            Liquidity
                        </LeftSide>
                        <RightSide>
                            322
                        </RightSide>
            </CoinInfoLine>
        </MarketOverviewContainer>
        <AnalyticsAndButtonContainer>
            <Analytics>
                <MarketOverviewHeading>
                    Kronos Atlas Analytics
                </MarketOverviewHeading>
                    <CoinInfoLine>
                                <LeftSide>
                                    Votes 
                                </LeftSide>
                                <RightSide>
                                {details.votes}
                                </RightSide>
                    </CoinInfoLine>
                    <CoinInfoLine>
                                <LeftSide>
                                    Last 24h Votes   
                                 </LeftSide>

                                <RightSide>
                                {details.lastDayVotes}
                                </RightSide>
                    </CoinInfoLine>
                    <CoinInfoLine>
                                <LeftSide>
                                Listing Status
                                </LeftSide>
                                <RightSide>
                                {details.isInPresale ? 'Listed' : 'Not Listed'}
                                </RightSide>
                    </CoinInfoLine>
                    <CoinInfoLine>
                                <LeftSide>
                                Launch Date
                                </LeftSide>
                                <RightSide>
                                {new Date(details.launchDate).toLocaleDateString()}
                                </RightSide>
                    </CoinInfoLine>
            </Analytics>
            <Button width='170px' height='50px' font-size='18px' tableButton={false}>
                Vote BNB
            </Button>
        </AnalyticsAndButtonContainer>
    </CoinDetailsContainer>
  )
}

export default CoinDetailsComponent