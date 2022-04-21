import styled from "styled-components";

const RateWrapper = styled.div`
  width: fit-content;
  height: fit-content;
  display: flex;
  gap: 2px;
  padding: 2px;
  background: #eeebf2;
`;

const RateButton = styled.button<{ active: boolean | undefined }>`
  width: 58px;
  height: 52px;
  background: ${({ active }) => (active ? "#464bff" : "white")};
  color: ${({ active }) => active && "white"};
  :hover {
    background: ${({ active }) => (active ? "#464bff" : "#464bff55")};
    color: white;
  }
`;

const NoRateButton = styled.button`
  width: 71px;
  height: 52px;
  background: none;
`;

export { RateWrapper, RateButton, NoRateButton };
