import React from 'react'
import {CardWrapper,CardContainer,CardHeader,CardTitle,CardParagraph,CardWarning,CardTextWarpper} from './TextCardComponentStyleElements'
function TextCardComponent() {
  return (
    <div>
        <CardWrapper>
            <CardContainer>
            <CardHeader>
                Find the next CRONOS moonshot!
            </CardHeader>
            <CardTextWarpper>
                <CardTitle>
                With CRONOS gaining more traction & hype, many believe it could be a Top 3 Cryptocurrency in the near future.
                </CardTitle>
                <CardParagraph>
                    Most of you probably missed the golden age of meme coins: Doge, Shiba, Safemoon and more.Kronos Atlas is the #1 platform helping you find and get early in the next CRO moonshot, before they get listed on CoinMarketCap or CoinGecko and exchanges.
                </CardParagraph>
            </CardTextWarpper>
            <CardWarning>
             Please do your own research (DYOR), any coin listed on Kronos Atlas does not mean it’s safe or legit.
            </CardWarning>
            </CardContainer>
        </CardWrapper>
    </div>
  )
}

export default TextCardComponent