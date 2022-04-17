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
  border-image: ${({ tableButton }) =>
    tableButton ? "transparent" : Borders.orange};
  border-image-slice:1;
  border-radius: 5px;
  width: ${(props) => props.width ?? "auto"};
  height: ${(props) => props.height ?? "auto"};
  cursor: pointer;
`;
