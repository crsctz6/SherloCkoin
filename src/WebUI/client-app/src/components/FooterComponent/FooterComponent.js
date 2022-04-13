import React from 'react'
import {FooterWrapper,

        FooterContainer,
        Logo,
        SocialContainer,
        RightsContainer,
        RightsName,
        RightsParagraph,
        PrivacyContainer,
        PrivacyParagraph,
        TermsParagraph,
        SocialList,
        SocialElement,
        SocialLinks,
        SocialLink} from './FooterComponentStyleElements'

import logo from '../../photos/logo.png';
import telegram from '../../photos/telegram.png';
import twitter from '../../photos/twitter.png';
import mail from '../../photos/email.png';
import discord from '../../photos/discord.png';
        
function FooterComponent() {
  return (
   <FooterWrapper>
     
       <FooterContainer>
           <Logo src={logo}/>

       </FooterContainer>
       <FooterContainer>
           <RightsContainer>
               <RightsName>© 2022 KronosAtlas.com</RightsName>
               <RightsParagraph>All rights reserved</RightsParagraph>
           </RightsContainer>
           <PrivacyContainer>
               <PrivacyParagraph>
                   Privacy Policy
               </PrivacyParagraph>
               <TermsParagraph>
                   Terms & Conditions
               </TermsParagraph>
           </PrivacyContainer>
        </FooterContainer>
        <FooterContainer>
            <SocialContainer>
                <SocialList>
                    <SocialElement>
                        Get Listed
                    </SocialElement>
                    <SocialElement>
                        Home
                    </SocialElement>
                    <SocialElement>
                        Contact
                    </SocialElement>
                </SocialList>
                <SocialLinks>
                    <SocialLink src={twitter}/>
                    <SocialLink src={telegram}/>
                    <SocialLink src={mail}/>    
                    <SocialLink src={discord}/>                   
                </SocialLinks>
            </SocialContainer>
        </FooterContainer>
  
   </FooterWrapper>
  )
}

export default FooterComponent