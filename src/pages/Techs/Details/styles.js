import styled from "styled-components";

export const Iframe = styled.iframe`
  min-height: calc(100vh - 107px);
  min-width: 100%;
  border: 1px solid ${(props) => props.theme.border};
  box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;
`;
