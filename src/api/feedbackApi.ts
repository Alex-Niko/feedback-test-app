const delay = (time: number) =>
  new Promise<void>((resolve) => setTimeout(() => resolve(), time));

const fetch = async (data: any) => {
  await delay(2000);
  return { status_code: 0 };
};

const sendFeedback = async (data: any) => {
  const payload = JSON.stringify(data);
  return await fetch(payload);
};

export const feedbackApi = { sendFeedback };
