import styled from 'styled-components'
import { Backgrounds,Borders,FontSize,FontWeights,FontColors } from '../components/GlobalStyleConsts'

export const Button = styled.button`
background:${Backgrounds.button};
color:${FontColors.white};
font-size:${FontSize.text};
width:auto;
max-height:65px;
padding:10px 20px;
border: ${({tableButton})=>tableButton ? 'transparent':'${Borders.orange}'};
border-radius:5px;
cursor:pointer;

`



