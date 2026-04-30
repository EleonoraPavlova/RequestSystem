import { ReactElement, useCallback, useMemo, useState } from "react";
import { useDispatch } from "react-redux";
import { useLocation } from "react-router-dom";
import { useT } from "talkr";

import styles from "./request-list.module.css";

import { useAppSelector } from "@/services/hooks";
import { RequestCard, RequestStatus } from "@/shared/types";
import { changeRequestStatus, removeRequest } from "@/services/requestSlice";
import RequestItem from "@/components/request-list/request-item";
import { PATH } from "@/shared/enums";
import { cn } from "@/shared/lib/cn";
import ModalConfirm from "@/components/modal";
import AlertHeroui from "@/components/alert";

const RequestList = (): ReactElement => {
  const { T: t } = useT();
  const { list, filter } = useAppSelector((state) => state.items);

  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);
  const [requestToDelete, setRequestToDelete] = useState<RequestCard["id"] | null>(null);
  const [isAlertVisible, setIsAlertVisible] = useState(false);

  const dispatch = useDispatch();

  const location = useLocation();

  const isManagerPage = location.pathname.includes(PATH.MANAGER);

  const filteredRequests = useMemo(() => {
    if (filter === "all") return list;
    return list.filter((req) => req.status === filter);
  }, [list, filter]);

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
    </>
  );
};

export default RequestList;
