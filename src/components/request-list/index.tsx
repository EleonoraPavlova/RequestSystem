import { ReactElement, useCallback, useMemo } from "react";
import { useDispatch } from "react-redux";
import { useLocation } from "react-router-dom";

import styles from "./request-list.module.css";

import { useAppSelector } from "@/services/hooks";
import { RequestCard, RequestStatus } from "@/shared/types";
import { changeRequestStatus, removeRequest } from "@/services/requestSlice";
import RequestItem from "@/components/request-list/request-item";
import { PATH } from "@/shared/enums";
import { cn } from "@/shared/lib/cn";

const RequestList = (): ReactElement => {
  const { list, filter } = useAppSelector((state) => state.items);
  const dispatch = useDispatch();

  const location = useLocation();

  const isManagerPage = location.pathname.includes(PATH.MANAGER);

  const filteredRequests = useMemo(() => {
    if (filter === "all") return list;
    return list.filter((req) => req.status === filter);
  }, [list, filter]);

  const removeRequestHandler = useCallback(
    (id: RequestCard["id"]) => {
      dispatch(removeRequest(id));
    },
    [dispatch]
  );

  const changeRequestHandler = useCallback(
    (id: RequestCard["id"], currentStatus: RequestStatus) => {
      let next: RequestStatus | null = null;
      if (currentStatus === RequestStatus.New) next = RequestStatus.InProgress;
      if (currentStatus === RequestStatus.InProgress) next = RequestStatus.Done;

      if (next) {
        dispatch(changeRequestStatus({ id, newStatus: next }));
      }
    },
    [dispatch]
  );

  if (filteredRequests.length === 0) {
    return <p>No requests found. Create one above!</p>;
  }

  return (
    <div className={cn(styles.list, isManagerPage && styles.manager)}>
      {filteredRequests.map((request: RequestCard) => (
        <RequestItem
          request={request}
          onDelete={removeRequestHandler}
          key={request.id}
          onChangeStatus={changeRequestHandler}
          isManagerPage={isManagerPage}
        />
      ))}
    </div>
  );
};

export default RequestList;
