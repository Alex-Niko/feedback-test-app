import * as styled from "./FormField.styled";

interface Props {
  description: String;
  children: JSX.Element;
}

export const FormField = ({ children, description }: Props) => {
  return (
    <styled.FormFieldWrapper>
      <p>{description}</p>
      <p>{children}</p>
    </styled.FormFieldWrapper>
  );
};
