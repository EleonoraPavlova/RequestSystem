import { memo, ReactElement, useState } from "react";
import { useT } from "talkr";

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
    const { T: t } = useT();
    const [isExpanded, setIsExpanded] = useState(false);

    return (
      <div className={cn(styles.item, isManagerPage && styles.manager)}>
        <div className={styles.container}>
          {isManagerPage && (
            <p>
              {t("request_id")}: {request.id}
            </p>
          )}
          <p>
            {t("request_date")}: {formatDate(request.createdAt)}
          </p>
          <h4>
            {t("request_title")}: {request.title}
          </h4>
          <p
            className={cn(styles.desc, isExpanded && styles.expanded)}
            onClick={() => setIsExpanded(!isExpanded)}
          >
            {t("request_description")}: {request.description}
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
              {t("action_delete")}
            </Button>

            <Button
              variant="primary"
              size="sm"
              disabled={request.status === RequestStatus.Done}
              onClick={() => onChangeStatus(request.id, request.status)}
              className={styles.btn}
            >
              {t("action_change_status")}
            </Button>
          </div>
        )}
      </div>
    );
  }
);

export default RequestItem;
