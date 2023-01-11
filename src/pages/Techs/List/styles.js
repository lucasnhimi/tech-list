import styled from "styled-components";

export const PreTitle = styled.h6`
  margin-bottom: 5px;
  font-size: 8px;
  color: ${(props) => props.theme.gray};
`;

export const Title = styled.h3`
  margin-bottom: 35px;
`;

export const Description = styled.p`
  margin-bottom: 35px;
  font-size: 0.8rem;
  color: ${(props) => props.theme.gray};
`;

export const TechsContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: 1fr;
  grid-row-gap: 20px;
  grid-column-gap: 20px;

  @media (max-width: 1050px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: 700px) {
    grid-template-columns: repeat(1, 1fr);
  }
`;

export const Loading = styled.div`
  font-size: 0.8rem;
`;
