import styled from "styled-components";

const FormWrapper = styled.form`
  max-width: 707px;
  display: flex;
  flex-direction: column;
  gap: 9px;
  margin: auto;
  padding: 8px;

  @media (min-width: 768px) {
    padding-top: 48px;
  }
`;

const FormFooter = styled.div`
  margin-top: 60px;
  & > * {
    float: right;
    margin-right: 32px;
    margin-bottom: 4px;
  }
`;

const Category = styled.div`
  display: flex;
  flex-direction: column;
  gap: 36px;
`;

const SubmitButton = styled.button`
  width: fit-content;
  height: 44px;
  padding: 0 20px;
  border-radius: 25px 25px 0;
  background: var(--lilac);
  color: white;
  font-weight: bold;
  font: Circular Std;
  font-size: 16px;
  :hover {
    opacity: 0.8;
  }
`;

export { FormWrapper, Category, FormFooter, SubmitButton };
