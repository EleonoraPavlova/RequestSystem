import { memo, ReactElement, useState } from "react";

import styles from "./request-item.module.css";

import StatusBadge from "@/components/status-badge";
import { Button } from "@/components/button";
import { RequestCard } from "@/shared/types";
import { cn } from "@/shared/lib/cn";

interface RequestItemProps {
  onDelete: (_id: RequestCard["id"]) => void;
  request: RequestCard;
}

const RequestItem = memo(({ onDelete, request }: RequestItemProps): ReactElement => {
  const [isExpanded, setIsExpanded] = useState(false);
  return (
    <div className={styles.item}>
      <div className={styles.container}>
        <h4>Title: {request.title}</h4>
        <p
          className={cn(styles.desc, isExpanded && styles.expanded)}
          onClick={() => setIsExpanded(!isExpanded)}
        >
          Description: {request.description}
        </p>
        <StatusBadge status={request.status} className={styles.badge} />
      </div>
      <Button
        variant="danger"
        size="sm"
        onClick={() => onDelete(request.id)}
        className={styles.btn}
      >
        Delete
      </Button>
    </div>
  );
});

export default RequestItem;
