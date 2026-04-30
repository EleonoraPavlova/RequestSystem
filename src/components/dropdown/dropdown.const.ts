import { FilterOption, RequestStatus } from "@/shared/types";

export const getFilterOptions = (t: (key: string) => string): FilterOption[] => [
  {
    key: "all",
    label: t("status_all"),
  },
  {
    key: RequestStatus.New,
    label: t("status_new"),
  },
  {
    key: RequestStatus.InProgress,
    label: t("status_inprogress"),
  },
  {
    key: RequestStatus.Done,
    label: t("status_done"),
  },
];
