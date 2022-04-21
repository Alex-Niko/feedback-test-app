import React, { useCallback } from "react";
import { FeedbackFormType, Rate as RateType } from "./feedbackSlice";

import { FormField, Rate } from "../../commons";

import * as styled from "./FeedbackForm.styled";
import * as config from "./FeedbackForm.config";
import companyName from "../../assets/images/company-name.png";

interface Props {
  onSubmit: (e: any) => void;
  onChange: (key: string) => (e: any) => void;
  form: FeedbackFormType;
}

export const FeedbackForm = ({ onSubmit, onChange, form }: Props) => {
  const onChangeRate = useCallback(
    ({ categoryId, id }: { categoryId: String; id: String }) =>
      (number: Number | undefined) => {
        const newRate = {
          id,
          categoryId,
          rate: number,
        };
        const rates = form.rates.filter(
          (rate) => !(rate.id === id && rate.categoryId === categoryId)
        );
        if (number) rates.push(newRate as RateType);

        const e = {
          current: {
            target: { value: rates },
          },
        };
        onChange("rates")(e);
      },
    [form.rates, onChange]
  );

  return (
    <styled.FormWrapper onSubmit={onSubmit}>
      <div>
        <img src={companyName} alt="company name" />
        <h1>Feedback for Aglieglie Brazof</h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus
          sollicitudin tristique augue at ullamcorper. Aliquam lacinia nibh id
          metus mollis eleifend. Etiam luctus nec tellus ac vulputate.
          Pellentesque habitant morbi tristique senectus et netus et malesuada
          fames ac turpis egestas. Etiam eu libero vitae ipsum efficitur
          finibus. Fusce ac nibh scelerisque, gravida nulla quis, placerat
          augue. Donec dapibus nibh ut erat pellentesque iaculis. Suspendisse
          vitae gravida sapien, sed scelerisque sem. Ut faucibus molestie est in
          facilisis. Praesent congue, leo eget consectetur porttitor, sem orci
          hendrerit enim, interdum congue turpis lacus ac risus.
        </p>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus
          sollicitudin tristique augue at ullamcorper.
        </p>
      </div>
      {config.categories.map(({ id: categoryId, title, items }) => {
        return (
          <React.Fragment key={categoryId}>
            <h2 key={categoryId}>{title}</h2>
            {items.map(({ id, description }) => {
              const currentRate = form.rates.find(
                (rate) => rate.categoryId === categoryId && rate.id === id
              );
              return (
                <FormField key={id} description={description}>
                  <Rate
                    rate={currentRate?.rate}
                    onChange={onChangeRate({ categoryId, id })}
                  />
                </FormField>
              );
            })}
          </React.Fragment>
        );
      })}
      <styled.FormFooter>
        <styled.SubmitButton type="submit" children="Send Feedback" />
      </styled.FormFooter>
    </styled.FormWrapper>
  );
};
