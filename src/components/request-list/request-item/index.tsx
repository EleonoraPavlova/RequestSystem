import { memo, ReactElement, useState } from "react";

import styles from "./request-item.module.css";

import StatusBadge from "@/components/status-badge";
import Button from "@/components/button";
import { RequestCard, RequestStatus } from "@/shared/types";
import { cn } from "@/shared/lib/cn";
import { formatDate } from "@/shared/utils/formatDate";

interface RequestItemProps {
  onDelete: (_id: RequestCard["id"]) => void;
  onChangeStatus: (_id: RequestCard["id"], _status: RequestStatus) => void;
  request: RequestCard;
  isManagerPage: boolean;
}

const RequestItem = memo(
  ({ onDelete, onChangeStatus, request, isManagerPage }: RequestItemProps): ReactElement => {
    const [isExpanded, setIsExpanded] = useState(false);

    return (
      <div className={cn(styles.item, isManagerPage && styles.manager)}>
        <div className={styles.container}>
          {isManagerPage && <p>Id: {request.id}</p>}
          <p>Data: {formatDate(request.createdAt)}</p>
          <h4>Title: {request.title}</h4>
          <p
            className={cn(styles.desc, isExpanded && styles.expanded)}
            onClick={() => setIsExpanded(!isExpanded)}
          >
            Description: {request.description}
          </p>
          <StatusBadge status={request.status} className={styles.badge} />
        </div>
        {isManagerPage && (
          <div className={styles.btns}>
            <Button
              variant="danger"
              size="sm"
              onClick={() => onDelete(request.id)}
              className={styles.btn}
            >
              Delete
            </Button>

            <Button
              variant="primary"
              size="sm"
              disabled={request.status === RequestStatus.Done}
              onClick={() => onChangeStatus(request.id, request.status)}
              className={styles.btn}
            >
              Change Status
            </Button>
          </div>
        )}
      </div>
    );
  }
);

export default RequestItem;
