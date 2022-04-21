import { useCallback } from "react";
import * as styled from "./Rate.styled";

type Props = {
  rate: Number | undefined;
  onChange: (number: Number | undefined) => void;
};

export const Rate = ({ rate, onChange }: Props) => {
  const onClick = useCallback(
    (rate?: Number) => (e: React.MouseEvent<HTMLElement, MouseEvent>) => {
      e?.preventDefault?.();
      onChange(rate);
    },
    [onChange]
  );

  return (
    <styled.RateWrapper>
      {new Array(5).fill(1).map((item, i) => {
        const value = i + 1;
        return (
          <styled.RateButton
            key={value}
            onClick={onClick(value)}
            active={value === rate}
            children={value}
          />
        );
      })}
      <styled.NoRateButton onClick={onClick()} children="n/a" />
    </styled.RateWrapper>
  );
};
