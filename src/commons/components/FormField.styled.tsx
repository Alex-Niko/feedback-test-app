import styled from "styled-components";

const FormFieldWrapper = styled.div`
  display: flex;
  align-items: center;
  & > * {
    flex: 1;
  }

  @media (max-width: 768px) {
    display: block;
  }
`;

export { FormFieldWrapper };
