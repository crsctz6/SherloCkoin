import styled from "styled-components";

export const HeaderComp = styled.div`
  max-height: 185px;
  position: fixed;
  display: flex;
  align-items: center;
  justify-content: space-between;
  top: 0;
  left: 4%;
  right: 4%;
  z-index: 10;
  background-color: black;
  padding: 0 20px 0 20px;
  border-radius: 0 0 50px 50px;
`;

export const LogoHeader = styled.img`
  width: 180px;
  padding: 11px;

  @media screen and (max-width: 760px) {
    width: 140px;
  }
`;
