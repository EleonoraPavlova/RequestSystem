import React, { ReactElement } from "react";

import styles from "./status-badge.module.css";

import { RequestStatus } from "@/shared/types";
import { cn } from "@/shared/lib/cn";

interface StatusBadgeProps {
  status: RequestStatus;
  className?: string;
}

const StatusBadge = ({ status, className }: StatusBadgeProps): ReactElement => {
  const statusClasses: Record<RequestStatus, string> = {
    [RequestStatus.Done]: styles.statusDone,
    [RequestStatus.New]: styles.statusNew,
    [RequestStatus.InProgress]: styles.statusInProgress,
  };

  return <span className={cn(styles.badge, statusClasses[status], className)}>{status}</span>;
};

export default StatusBadge;
