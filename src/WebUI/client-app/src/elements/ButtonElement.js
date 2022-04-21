import styled from "styled-components";
import {
  Backgrounds,
  FontSize,
  FontColors,
  Borders,
} from "../components/GlobalStyleConsts";

export const Button = styled.button`
  background: ${Backgrounds.button};
  color: ${FontColors.white};
  font-size: ${(props) => props ?? FontSize.text};
  padding: 10px 20px;
  border: ${({ tableButton }) =>
    tableButton ? "transparent" : Borders.orange};
  border-radius: 5px;
  width: ${(props) => props.width ?? "auto"};
  height: ${(props) => props.height ?? "auto"};
  cursor: pointer;
  transition: all 1000ms cubic-bezier(0.075, 0.82, 0.165, 1) 0s;
  cursor: pointer;
  :hover {
  transform: scale(1.03);
  background:${Backgrounds.buttonHover};
}

`;
