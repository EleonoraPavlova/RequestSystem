import { ReactElement, useCallback } from "react";
import { useDispatch } from "react-redux";

import styles from "./request-list.module.css";

import { useAppSelector } from "@/services/hooks";
import { RequestCard } from "@/shared/types";
import { removeRequest } from "@/services/requestSlice";
import RequestItem from "@/components/request-list/request-item";


const RequestList = (): ReactElement => {
  const requests = useAppSelector((state) => state.items.list);
  const dispatch = useDispatch();

  const removeRequestHandler = useCallback(
    (id: RequestCard["id"]) => {
      dispatch(removeRequest(id));
    },
    [dispatch]
  );

  if (requests.length === 0) {
    return <p>No requests found. Create one above!</p>;
  }

  return (
    <div className={styles.list}>
      {requests.map((request: RequestCard) => (
        <RequestItem request={request} onDelete={removeRequestHandler} key={request.id} />
      ))}
    </div>
  );
};

export default RequestList;
