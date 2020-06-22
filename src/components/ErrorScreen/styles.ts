import styled from "styled-components";
import { SadCry } from "styled-icons/fa-solid";

export const Container = styled.div`
  background-color: var(--primary);
  height: 100vh;
  width: 100vw;

  display: flex;
  flex-direction: column;

  align-items: center;
  justify-content: center;

  padding: 0 20px;
`;

export const Emoji = styled(SadCry)`
  color: var(--discord);

  width: 150px;
  height: 150px;
`;

export const Warning = styled.h1`
  margin-top: 20px;
  font-size: 2rem;
  text-transform: uppercase;
  font-weight: 400;
  color: var(--discord);
`;

export const Description = styled.h2`
  margin-top: 20px;
  font-size: 1.5rem;
  font-weight: 100;

  text-align: justify;

  color: var(--symbol);
`;

export const Button = styled.a`
  background-color: var(--discord);

  margin-top: 20px;

  border-radius: 25px;
  width: 150px;
  height: 35px;

  display: flex;
  align-items: center;
  justify-content: center;

  text-decoration: none;

  > span {
    color: var(--white);
    text-transform: uppercase;
    font-weight: bold;
  }
`;
