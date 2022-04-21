import styled from "styled-components";
import {FontSize, FontColors,FontWeights,FontsFamilies, Backgrounds, Borders} from '../GlobalStyleConsts'

export const CardWrapper =styled.div`
background:${Backgrounds.table};

border:1.5px solid;
border-image:${Borders.orange};
border-image-slice:1;
width:90%;
margin:100px auto 100px auto;
padding:50px 0;
font-family:${FontsFamilies.rest};
`

export const CardHeader =styled.h2`
font-size:${FontSize.headersAndButtons};
color:${FontColors.white};
font-weight:${FontWeights.medium};
margin-bottom:40px;

`
export const CardTextWarpper = styled.div`

`
export const CardTitle =styled.h4`
color:${FontColors.lightGrey};
`
export const CardParagraph =styled.p`
color:${FontColors.grey};
font-size:${FontSize.text};
width:70%;
margin-bottom:30px;
@media screen and (max-width:700px){
    width:100%;
}
`
export const CardWarning =styled.p`
color:${FontColors.orange};
font-size:${FontSize.text};
`

export const CardContainer= styled.div`
margin:0 20px;
`