import { styled } from "styled-components";

export const Wrapper = styled.section`
  width: 80%;
  margin: 3em auto;

  .home {
    &__title {
      font-size: 2em;
      text-align: center;
      margin: 2em;
      text-transform: uppercase;
    }

    &__movielist {
      width: 100%;
      display: flex;
      justify-content: center;
      flex-wrap: wrap;
    }
  }
`;
