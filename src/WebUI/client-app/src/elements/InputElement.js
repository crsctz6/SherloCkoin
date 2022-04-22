import styled from "styled-components";
import {FontColors,FontSize, Borders, Backgrounds} from '../components/GlobalStyleConsts'

export  const Input =styled.input`
  font-size: 14px;
  line-height: 1;
  background-color: ${Backgrounds.form};
  border-radius: 5px;
  width: ${(props) => props.width ?? "350px;"};
  height: ${(props) => props.height ?? "40px"};
  cursor: pointer;
  border: none;
  padding-left: 5px;
  color:${FontColors.lightGrey};
  @media screen and (max-width:570px){
    width:98%;
  }
  `;
  export const TextArea = styled.textarea`
  font-size: 14px;
  line-height: 1;
  background-color: ${Backgrounds.form};
  border-radius: 5px;
  width: ${(props) => props.width ?? "350px;"};
  height: ${(props) => props.height ?? "40px"};
  cursor: pointer;
  border: none;
  padding-left: 5px;
  color:${FontColors.lightGrey};
  @media screen and (max-width:930px){
    width:98%;
  };
  @media screen and (max-width:570px){
    height:300px;
  }`;

  export const FileInput = styled.div`
  cursor:pointer;
  display:flex;
  align-items:center;
  width:150px;
  flex-direction:column;
  background:${Backgrounds.form};
  border-radius:5px;
  `;

  export const DateInput = styled.input`
  font-size: 14px;
  line-height: 1;
  background-color: ${Backgrounds.form};
  border-radius: 5px;
  width: ${(props) => props.width ?? "350px;"};
  height: ${(props) => props.height ?? "40px"};
  cursor: pointer;
  border: none;
  padding-left: 5px;
  color:${FontColors.lightGrey};
  ::-webkit-calendar-picker-indicator {
  filter: invert(48%) sepia(30%) saturate(0%) hue-rotate(203deg) brightness(90%) contrast(95%); 
  cursor: pointer;
}
::-webkit-calendar-picker-indicator:hover {
  filter: invert(60%) sepia(100%) saturate(1854%) hue-rotate(3deg) brightness(107%) contrast(106%);
}
  `;
 
 export const RadioInput = styled.input`
  height: 20px;
  width: 20px;
  color:${Borders.solidOrange};
  border-radius: 50%;
 `
export const ButtonInput = styled.input`
  background: ${Backgrounds.button};
  color: ${FontColors.white};
  font-size: ${(props) => props ?? FontSize.text};
  padding: 10px 20px;
  border-image: ${({ tableButton }) =>
    tableButton ? "transparent" : Borders.orange};
  border-radius: 5px;
  border-image-slice:1;
  width: ${(props) => props.width ?? "auto"};
  height: ${(props) => props.height ?? "auto"};
  cursor: pointer;
  transition: all 1000ms cubic-bezier(0.075, 0.82, 0.165, 1) 0s;
  
  margin:50px 0;
  
  &:hover {
    transform: scale(1.03);
    background:${Backgrounds.buttonHover};
  };
`
