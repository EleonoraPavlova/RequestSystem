import { useAppDispatch } from "@/services/hooks";
import { addLog } from "@/services/logsSlice";

export const useActionLogger = (currentRole: "User" | "Manager") => {
  const dispatch = useAppDispatch();

  const logAction = (actionName: string) => {
    dispatch(addLog({ role: currentRole, action: actionName }));
  };

  return logAction;
};
