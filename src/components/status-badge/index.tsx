import React, { ReactElement } from "react";
import { useT } from "talkr";

import styles from "./status-badge.module.css";

import { RequestStatus } from "@/shared/types";
import { cn } from "@/shared/lib/cn";

interface StatusBadgeProps {
  status: RequestStatus;
  className?: string;
}

const StatusBadge = ({ status, className }: StatusBadgeProps): ReactElement => {
  const { T: t } = useT();
  const statusClasses: Record<RequestStatus, string> = {
    [RequestStatus.Done]: styles.statusDone,
    [RequestStatus.New]: styles.statusNew,
    [RequestStatus.InProgress]: styles.statusInProgress,
  };

  const statusKey = `status_${status.replace("-", "")}`;

  return <span className={cn(styles.badge, statusClasses[status], className)}>{t(statusKey)}</span>;
};

export default StatusBadge;
