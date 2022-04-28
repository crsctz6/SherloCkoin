import styled from "styled-components";
import { Backgrounds,FontColors, FontSize, FontsFamilies, FontWeights } from "../GlobalStyleConsts";
export const Form = styled.form`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  background-color: ${Backgrounds.form};
  
  /* Change width of the form depending if the bar is opened or not */
  width: ${(props) => (props.barOpened ? "100%" : "20px")};
  /* If bar opened, normal cursor on the whole form. If closed, show pointer on the whole form so user knows he can click to open it */
  cursor: ${(props) => (props.barOpened ? "auto" : "pointer")};
  padding: 20px;
  height: 20px;
  border-radius: 5px;
  transition: width 300ms cubic-bezier(0.645, 0.045, 0.355, 1);
  @media screen and (max-width: 760px) {
    display: none;  
  }
`;

export const Input = styled.input`
  font-size: 14px;
  line-height: 1;
  background-color: transparent;
  width: 100%;
  margin-left: ${(props) => (props.barOpened ? "20px" : "0px")};
  border: none;
  color:${FontColors.lightGrey};
  transition: margin 300ms cubic-bezier(0.645, 0.045, 0.355, 1);
  &:focus,
  &:active {
    outline: none;
  }
  &::placeholder {
    color:${FontColors.lightGrey};
  }
`;

export const Button = styled.button`
  line-height: 1;
  pointer-events: ${(props) => (props.barOpened ? "auto" : "none")};
  cursor: ${(props) => (props.barOpened ? "pointer" : "none")};
  background-color: transparent;
  border: none;
  outline: none;
  color:${FontColors.lightGrey};
`;
export const MagnifyImg = styled.img`
height:25px;`;

export const SearchPanel = styled.div`
max-width:25%;
display: flex;
justify-content: center;`;

export const Ul = styled.ul`
display: ${(props) => (props.barOpened ? "inline" : "none")};
position:absolute;
top:70px;
width: 25%;
max-height:400px;
overflow: auto;
padding-inline-start:2px;
margin-top:10px;
background: ${Backgrounds.table};`

export const ResultItems = styled.div`
display: flex;
background: ${Backgrounds.table};
color: ${FontColors.white};
font-size: ${FontSize.text};
font-family: ${FontsFamilies.rest};
font-weight: ${FontWeights.medium};
width: 90%;
position: relative;
justify-content: space-between;
padding: 3%;
cursor: pointer;
`;

export const TextContainer = styled.div`
  padding: 1px 1vw;
  text-align: right;
`;