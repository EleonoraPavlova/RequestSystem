import { ReactElement } from "react";
import { Modal, ModalBody, ModalContent, ModalFooter } from "@heroui/react";
import { useT } from "talkr";

import Button from "@/components/button";

interface ModalConfirmProps {
  isOpen: boolean;
  onClose: () => void;
  onConfirm: () => void;
  description?: string;
  confirmText?: string;
  cancelText?: string;
  isLoading?: boolean;
}

const ModalConfirm = ({
  isOpen,
  onClose,
  onConfirm,
  description,
  confirmText,
  cancelText,
  isLoading = false,
}: ModalConfirmProps): ReactElement => {
  const { T: t } = useT();
  const modalDescription = description ?? t("modal_confirm_delete");
  const modalConfirmText = confirmText ?? t("modal_delete");
  const modalCancelText = cancelText ?? t("modal_cancel");
  return (
    <Modal isOpen={isOpen} onClose={onClose} size="md">
      <ModalContent className="sm:max-w-[380px]">
        <ModalBody>
          <h4 className="text-foreground/80 font-semibold m-4">{modalDescription}</h4>
        </ModalBody>

        <ModalFooter className="flex gap-3">
          <Button variant="secondary" onClick={onClose} className="flex-1">
            {modalCancelText}
          </Button>

          <Button variant="danger" onClick={onConfirm} isLoading={isLoading} className="flex-1">
            {modalConfirmText}
          </Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
};

export default ModalConfirm;
