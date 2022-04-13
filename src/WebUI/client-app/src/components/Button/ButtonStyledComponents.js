import styled from "styled-components";

export const ButtonComp = styled.button`
  /* Adapt the colors based on primary prop */
  background: ${(props) => (props.primary ? "green" : "white")};
  color: ${(props) => (props.primary ? "white" : "palevioletred")};

  font-size: 1em;
  margin: 1em;
  padding: 0.25em 1em;
  border: 2px solid palevioletred;
  border-radius: 3px;
`;
