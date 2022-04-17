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
import coinLogo from '../../photos/bnb.png';
function CoinDetailsComponent() {
  return (
    <CoinDetailsContainer>
        <CoinOverviewWrapper>
            <CoinOverviewTopContainer>
                <CoinLogo src={coinLogo}/>
                <CoinData>
                    <Symbol>
                        BNB
                    </Symbol>
                    <Address>
                    0xa0b73e1ff0b80914ab6fe0444e65848c4c34450b
                    </Address>
                    <FullName>
                        Binance Coin
                    </FullName>
                </CoinData>
            </CoinOverviewTopContainer>
            <CoinOverviewBottomContainer>
                <SocialContainer>
                    <TelegramLogo src={telegram}/>
                    <TwitterLogo src={twitter}/>
                    <DiscordLogo src={discord}/>
                </SocialContainer>
                <Description>
                     Puli (PULI) delivers simple yet very addicting P2E games supported by a novel NFT system. The first game, Puli Runner, was successfully launched on 31 January 2022. The team has also acquired a gaming studio for the development of future Play-to-Earn games. In addition, the token is supported by Lightspeed Crypto Services, LLC to support mobile game support on Android and IOS.
                     The purpose and key features of the token include a 10% Buy and 10% Sell tax that are used to fund aggressive marketing, game development, and stable liquidity. In addition, the asset can be staked for added earnings with instructions available at their website.
                     Puli (PULI) delivers simple yet very addicting P2E games supported by a novel NFT system. The first game, Puli Runner, was successfully launched on 31 January 2022. The team has also acquired a gaming studio for the development of future Play-to-Earn games. In addition, the token is supported by Lightspeed Crypto Services, LLC to support mobile game support on Android and IOS.
                   The purpose and key features of the token include a 10% Buy and 10% Sell tax that are used to fund aggressive marketing, game development, and stable liquidity. In addition, the asset can be staked for added earnings with instructions available at their website.
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
                                    51,393 
                                </RightSide>
                    </CoinInfoLine>
                    <CoinInfoLine>
                                <LeftSide>
                                    Last 24h Votes   
                                 </LeftSide>

                                <RightSide>
                                    1932
                                </RightSide>
                    </CoinInfoLine>
                    <CoinInfoLine>
                                <LeftSide>
                                Listing Status
                                </LeftSide>
                                <RightSide>
                                Listed
                                </RightSide>
                    </CoinInfoLine>
                    <CoinInfoLine>
                                <LeftSide>
                                Launch Date
                                </LeftSide>
                                <RightSide>
                                19/02/2022
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