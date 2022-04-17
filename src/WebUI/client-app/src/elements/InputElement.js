import styled from "styled-components";
import {FontSize, FontColors,FontWeights,FontsFamilies, Borders, Backgrounds} from '../components/GlobalStyleConsts'

export  const Input =styled.input`
  font-size: 14px;
  line-height: 1;
  background-color: ${Backgrounds.form};
  width: 30%;
  border-radius: 5px;
  width: ${(props) => props.width ?? "350px;"};
  height: ${(props) => props.height ?? "40px"};
  cursor: pointer;
  border: none;
  padding-left: 5px;
  color:${FontColors.lightGrey};
  
  `
 
