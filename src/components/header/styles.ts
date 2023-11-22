import styled from "styled-components";

export const Wrapper = styled.header`
  width: 100vw;
  box-shadow: 0px 4px 5px -4px rgba(173, 170, 173, 0.64);
  -moz-box-shadow: 0px 4px 5px -4px rgba(173, 170, 173, 0.64);
  box-shadow: 0px 4px 5px -4px rgba(173, 170, 173, 0.64);

  .header {
    &__navigation {
      width: 100vw;
      margin: 0;
    }

    &__navigation-list {
      padding: 0.6em 3em;
      display: flex;
      justify-content: space-between;
      align-items: center;
    }

    &__navigation-list-item {
      list-style: none;
    }

    &__navigation-link {
      color: inherit;
      text-transform: uppercase;
      text-decoration: none;
    }
  }
`;
