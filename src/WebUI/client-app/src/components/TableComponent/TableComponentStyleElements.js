import styled from "styled-components";
import {
  Backgrounds,
  Borders,
  FontSize,
  FontColors,
  FontWeights,
  FontsFamilies,
} from "../GlobalStyleConsts.js";

export const ComponentContainer = styled.div`
  width: 90%;
  margin: 150px auto 100px auto;
`;
export const TableHeading = styled.p`
  color: ${FontColors.white};
  font-family: ${FontsFamilies.rest};
  font-size: ${FontSize.headersAndButtons};
  text-align: left;
  margin-bottom:20px ;

  @media screen and (max-width: 1100px) {
    font-size: ${FontSize.biggerText};
  }
`;
export const TableWrapper = styled.div`
  border: 1.5px solid;
  border-image: ${({ top }) =>
    top
      ? `${Borders.orange}`
      : "linear-gradient(212.2deg, #625959 19.32%, rgba(98, 89, 89, 0) 90.56%)"};   
  border-image-slice: 1;
  margin: 0 auto;

  @media screen and (max-width: 1585px) {
    width: auto;
    overflow-x: scroll;
    white-space: nowrap;
  }
`;

export const Table = styled.table`
  background: ${Backgrounds.table};
  color: ${FontColors.white};
  border-collapse: collapse;
  font-size: ${FontSize.text};
  font-family: ${FontsFamilies.rest};
  font-weight: ${FontWeights.medium};
  width: 100%;
  position: relative;
  table-layout: auto;
`;

export const Tr = styled.tr`
  border-bottom: 1px solid ${Borders.solidGrey};
  height: 50px;
  th:nth-child(3) {
    
    position: sticky;
    left: 0;

    background: ${Backgrounds.table};
  }
  Td:nth-child(3) {
    position: sticky;
    left: 0px;

    background: ${Backgrounds.table};
  }
`;
export const Tbody = styled.tbody``;
export const Thead = styled.thead``;
export const Td = styled.td`
  padding: 10px 4vw;
  text-align: center;
`;
