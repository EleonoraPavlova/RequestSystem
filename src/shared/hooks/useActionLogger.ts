import { useAppDispatch } from "@/services/hooks";
import { addLog } from "@/services/logsSlice";
import { LogActionObject } from "@/shared/types";

export const useActionLogger = (currentRole: "User" | "Manager") => {
  const dispatch = useAppDispatch();

  return (actionName: string | LogActionObject) => {
    dispatch(addLog({ role: currentRole, action: actionName }));
  };
};
