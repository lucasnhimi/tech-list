import styled from "styled-components";

export const Header = styled.header`
  padding: 20px;
  background-color: ${(props) => props.theme.purple};
  color: ${(props) => props.theme.white};
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-radius: 5px;
  margin-bottom: 35px;

  @media (max-width: 700px) {
    justify-content: center;
  }
`;

export const Title = styled.h3`
  font-weight: bold;

  @media (max-width: 700px) {
    display: none;
  }
`;

export const MediaContainer = styled.p`
  display: flex;
  align-items: center;
`;

export const Link = styled.a`
  display: flex;
  cursor: pointer;
  margin: 0 10px;
`;
