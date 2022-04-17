import styled from "styled-components";
import { Backgrounds,FontColors } from "../GlobalStyleConsts";
export const Form = styled.form`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  background-color: ${Backgrounds.form};
  
  /* Change width of the form depending if the bar is opened or not */
  width: ${(props) => (props.barOpened ? "25%" : "20px")};
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