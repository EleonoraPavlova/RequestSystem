import { ReactElement, useCallback, useMemo, useState } from "react";
import { useDispatch } from "react-redux";
import { useLocation } from "react-router-dom";
import { useT } from "talkr";

import styles from "./request-list.module.css";

import { useAppSelector } from "@/services/hooks";
import { RequestCard, RequestStatus } from "@/shared/types";
import { archiveRequest, changeRequestStatus, removeRequest } from "@/services/requestSlice";
import RequestItem from "@/components/request-list/request-item";
import { PATH } from "@/shared/enums";
import { cn } from "@/shared/lib/cn";
import ModalConfirm from "@/components/modal";
import AlertHeroui from "@/components/alert";
import { useActionLogger } from "@/shared/hooks/useActionLogger";

interface RequestListProps {
  isArchiveMode?: boolean;
}

const RequestList = ({ isArchiveMode = false }: RequestListProps): ReactElement => {
  const { T: t } = useT();
  const logAction = useActionLogger("Manager");
  const { list, filter } = useAppSelector((state) => state.items);

  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);
  const [requestToDelete, setRequestToDelete] = useState<RequestCard["id"] | null>(null);
  const [isAlertVisible, setIsAlertVisible] = useState(false);
  const [isAlertVisibleArchived, setIsAlertVisibleArchived] = useState(false);

  const dispatch = useDispatch();

  const location = useLocation();

  const isManagerPage = location.pathname.includes(PATH.MANAGER);

  const filteredRequests = useMemo(() => {
    if (isArchiveMode) {
      return list.filter((req) => req.isArchived);
    }

    const activeRequests = list.filter((req) => !req.isArchived);

    if (filter === "all") return activeRequests;
    return activeRequests.filter((req) => req.status === filter);
  }, [list, filter, isArchiveMode]);

  const changeRequestHandler = useCallback(
    (id: RequestCard["id"], currentStatus: RequestStatus) => {
      let next: RequestStatus | null = null;
      if (currentStatus === RequestStatus.New) next = RequestStatus.InProgress;
      if (currentStatus === RequestStatus.InProgress) next = RequestStatus.Done;

      if (next) {
        dispatch(changeRequestStatus({ id, newStatus: next }));

        const statusKey = `status_${next.replace("-", "")}`;
        const statusLabel = t(statusKey);
        const logMessage = t("action_status_changed_to").replace("{{status}}", statusLabel);

        logAction(logMessage);
      }
    },
    [dispatch]
  );

  const onArchivedHandler = (id: RequestCard["id"]) => {
    dispatch(archiveRequest(id));
    logAction(t("alert_archived_success"));

    setIsAlertVisibleArchived(true);
    setTimeout(() => {
      setIsAlertVisibleArchived(false);
    }, 4000);
  };

  const openDeleteModal = useCallback((id: RequestCard["id"]) => {
    setRequestToDelete(id);
    setIsDeleteModalOpen(true);
  }, []);

  const closeDeleteModal = useCallback(() => {
    setRequestToDelete(null);
    setIsDeleteModalOpen(false);
  }, []);

  const confirmDelete = useCallback(() => {
    if (requestToDelete) {
      dispatch(removeRequest(requestToDelete));
      logAction(t("request_removed_success"));

      setIsAlertVisible(true);
      setTimeout(() => {
        setIsAlertVisible(false);
      }, 4000);
    }
    closeDeleteModal();
  }, [dispatch, requestToDelete, closeDeleteModal]);

  const removeRequestHandler = useCallback(
    (id: RequestCard["id"]) => {
      openDeleteModal(id);
    },
    [openDeleteModal]
  );

  if (filteredRequests.length === 0) {
    return <p>{t("list_empty")}</p>;
  }

  return (
    <>
      <div className={cn(styles.list, isManagerPage && styles.manager)}>
        {filteredRequests.map((request: RequestCard) => (
          <RequestItem
            request={request}
            onDelete={removeRequestHandler}
            key={request.id}
            onChangeStatus={changeRequestHandler}
            onArchived={onArchivedHandler}
            isManagerPage={isManagerPage}
          />
        ))}
      </div>

      <ModalConfirm
        isOpen={isDeleteModalOpen}
        onClose={closeDeleteModal}
        onConfirm={confirmDelete}
        description={t("modal_confirm_delete")}
      />
      {isAlertVisible && <AlertHeroui title={t("alert_request_removed")} color={"success"} />}
      {isAlertVisibleArchived && (
        <AlertHeroui title={t("alert_archived_success")} color={"success"} />
      )}
    </>
  );
};

export default RequestList;
