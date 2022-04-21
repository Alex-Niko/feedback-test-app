import React, { useCallback, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { selectFeedback, setForm, sendFeedback, reset } from "./feedbackSlice";
import { useStopDefault } from "../../commons/hooks";
import { AppDispatch } from "../../app/store";

import { FeedbackForm } from "./FeedbackForm";

import * as styled from "./Feedback.styled";
import { PageLogo } from "../../commons";

const successMessage = "Your feedback has been sent successfully!";

export const Feedback = () => {
  const dispatch = useDispatch<AppDispatch>();
  const { form, status } = useSelector(selectFeedback);

  const onChange = useCallback(
    (key: string) => (e: any) => {
      let { value } = e.current.target;
      dispatch(setForm({ key, data: value }));
    },
    [dispatch]
  );

  const onSubmit = useStopDefault(async () => {
    dispatch(sendFeedback(form));
  });

  useEffect(() => {
    if (status !== "succeeded") return;
    alert(successMessage);
    dispatch(reset());
  }, [dispatch, status]);

  return (
    <styled.FeedbackWrapper>
      <styled.Header children={<PageLogo />} />
      <styled.Content>
        <FeedbackForm onSubmit={onSubmit} onChange={onChange} form={form} />
      </styled.Content>
    </styled.FeedbackWrapper>
  );
};
