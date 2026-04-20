import { FilterOption, RequestStatus } from "@/shared/types";

export const filters: FilterOption[] = [
  {
    key: "all",
    label: "All",
  },
  {
    key: RequestStatus.New,
    label: "New",
  },
  {
    key: RequestStatus.InProgress,
    label: "In progress",
  },
  {
    key: RequestStatus.Done,
    label: "Done",
  },
];
