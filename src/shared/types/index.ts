export enum RequestStatus {
  New = "new",
  InProgress = "in-progress",
  Done = "done",
}

export interface RequestCard {
  id: string;
  title: string;
  description: string;
  status: RequestStatus;
}

export interface RequestCardsState {
  list: RequestCard[];
  isLoading: boolean;
  error: string | null;
  success: boolean;
}
