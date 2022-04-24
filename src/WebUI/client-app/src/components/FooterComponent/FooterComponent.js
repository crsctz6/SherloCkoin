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

import logo from '../../assets/logoColor.png';
import telegram from '../../assets/telegram.png';
import twitter from '../../assets/twitter.png';
import mail from '../../assets/email.png';
import discord from '../../assets/discord.png';
import { Link } from 'react-router-dom';
        
function FooterComponent() {
  return (
   <FooterWrapper>
        <FooterContainer>
           <Link to='/'>
            <Logo src={logo}/>
           </Link>
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
                    <Link to='/listed'>
                        <SocialElement>
                            Get Listed
                        </SocialElement>
                    </Link>
                    <Link to='/'>
                        <SocialElement>
                            Home
                        </SocialElement>
                    </Link>
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