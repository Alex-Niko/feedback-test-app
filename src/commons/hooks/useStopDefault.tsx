import { useCallback } from "react";

export const useStopDefault = (call?: () => void) =>
  useCallback(
    (e: React.MouseEvent<HTMLElement, MouseEvent>) => {
      e?.preventDefault();

      call?.();
    },
    [call]
  );
