import styled from 'styled-components'
import {FontSize, FontColors,FontWeights,FontsFamilies, Borders, Backgrounds} from '../GlobalStyleConsts'

export const FormWrapper =styled.div`
width:80%;
margin:200px auto 100px auto;
border: 1.5px solid;
border-image:${Borders.orange};
border-image-slice:1;
padding:20px;
background:${Backgrounds.table};
padding: 50px 0;
font-family:${FontsFamilies.rest};
`;

export const HeadingContainer =styled.div`
width:90%;
margin:0 auto;
`;

export const Title =styled.p`
font-size:${FontSize.headersAndButtons};
font-weight:${FontWeights.medium};
color:${FontColors.white};
`;

export const Paragraph =styled.p`
color:${FontColors.lightGrey};
max-width:700px;
`;

export const Form = styled.form`
width:90%;
margin:70px auto 0 auto;
display:flex;
justify-content:space-between;
flex-direction:column;
`;

export const Label = styled.label`
color:${FontColors.white};
margin:20px 0 10px 0;
`;

export const UploadImg =styled.p`
color:${FontColors.lightGrey};
font-size:${FontSize.text};
`;

export const Plus =styled.img`
padding-top:15px;
height:40px;
width:40px;
`;