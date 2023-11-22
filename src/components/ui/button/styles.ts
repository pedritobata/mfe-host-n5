import styled from "styled-components";

export const StyledButton = styled.button<{ $primary?: boolean }>`
  background: ${(props) => (props.$primary ? "#BF4F74" : "white")};
  color: ${(props) => (props.$primary ? "white" : "#BF4F74")};

  font-size: 1em;
  margin: 1em;
  padding: 0.25em 1em;
  border: 2px solid #bf4f74;
  border-radius: 3px;
  cursor: pointer;
  text-align: center;
  text-transform: uppercase;

  &:hover {
    opacity: 0.85;
  }
`;

export const StyledLink = styled(StyledButton).attrs({ as: "div" })`
  padding: 10px 20px;
  & a {
    text-decoration: none;
    color: inherit;
  }
`;
