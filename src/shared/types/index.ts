export enum RequestStatus {
  New = "new",
  InProgress = "in-progress",
  Done = "done",
}

export interface FilterOption {
  key: FilterStatus;
  label: string;
}

export type FilterStatus = RequestStatus | "all";

export interface RequestCard {
  id: string;
  title: string;
  description: string;
  status: RequestStatus;
  createdAt: string;
}

export interface RequestCardsState {
  list: RequestCard[];
  isLoading: boolean;
  error: string | null;
  success: boolean;
  filter: FilterStatus;
}

export type LanguageCode = "uk" | "en";

export interface Language {
  code: LanguageCode;
  name: string;
  nativeName: string;
  flag: string;
}
