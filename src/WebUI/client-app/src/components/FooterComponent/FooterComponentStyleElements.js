import styled from "styled-components";
import {FontSize, FontColors,FontWeights,FontsFamilies} from '../GlobalStyleConsts'
 
export const FooterWrapper = styled.div`
background-image:url('./assets/bott.png');
background-size:cover;
background-position:center;
//font
font-family:${FontsFamilies.rest};
//positioning and spacing
height:auto;
width:100%;
left:0;
bottom:0;
right:0;
display:flex;
justify-content:space-around;
flex-direction:row;
align-items:center;


@media screen and (max-width:700px){
flex-direction:column;
}
`

export const FooterContainer = styled.div`

flex:1;
align-content:center;
text-align:center;
`
export const Logo = styled.img`
width:180px;
@media screen and (max-width:700px){
width:140px;
}
`
export const RightsContainer = styled.div`
line-height:0.6em;

//remember to modify this when responsivenes
`
export const RightsName = styled.h4`
color:${FontColors.white};
font-size:${FontSize.biggerText};
margin-top:100px;
@media screen and (max-width:700px){
    margin-top:40px;
}
`
export const RightsParagraph = styled.p`
color:${FontColors.lightGrey};
font-weight:${FontWeights.regular};
font-size:${FontSize.text};

`
export const PrivacyContainer = styled.div`


`
export const PrivacyParagraph = styled.p`
color:${FontColors.white};
margin-top:50px;
font-size:${FontSize.text};
cursor:pointer;
`
export const TermsParagraph = styled.p`
color:${FontColors.white};
font-size:${FontSize.text};
cursor:pointer;
`
export const SocialContainer = styled.div`

`
export const SocialList = styled.ul`
font-size:${FontSize.text};
padding:0;
li:nth-child(1) {
    font-weight:500;
    }

`
export const SocialElement = styled.li`
color:${FontColors.white};
cursor:pointer;
display:inline-block;
margin:15px;
`
export const SocialLinks = styled.div`

`
export const SocialLink = styled.img`
height:30px;
margin:0 15px;

`
