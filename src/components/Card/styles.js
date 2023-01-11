import styled from "styled-components";

export const Container = styled.div`
  padding: 20px;
  background-color: ${(props) => props.theme.white};
  border: 1px solid ${(props) => props.theme.border};
  border-radius: 5px;
  cursor: pointer;
  display: flex;
  flex-direction: column;
  align-items: center;

  &:hover {
    box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;
  }
`;

export const IconContainer = styled.div`
  padding: 5px;
  background-color: ${(props) => props.secondaryColor};
  display: flex;
  align-items: center;
  justify-content: center;
  border: 1px solid ${(props) => props.theme.border};
  border-radius: 5px;
  height: 50px;
  width: 50px;
  margin-bottom: 15px;
`;

export const Title = styled.div`
  font-weight: bold;
`;

export const Description = styled.div`
  color: ${(props) => props.theme.gray};
  font-size: 0.875rem;
  margin-top: 10px;
`;
