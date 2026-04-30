import { ReactElement } from "react";
import { Modal, ModalBody, ModalContent, ModalFooter } from "@heroui/react";

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
  description = "Are you sure you want to delete this request?",
  confirmText = "Delete",
  cancelText = "Cancel",
  isLoading = false,
}: ModalConfirmProps): ReactElement => {
  return (
    <Modal isOpen={isOpen} onClose={onClose} size="md">
      <ModalContent className="sm:max-w-[380px]">
        <ModalBody>
          <h4 className="text-foreground/80 font-semibold m-4">{description}</h4>
        </ModalBody>

        <ModalFooter className="flex gap-3">
          <Button variant="secondary" onClick={onClose} className="flex-1">
            {cancelText}
          </Button>

          <Button variant="danger" onClick={onConfirm} isLoading={isLoading} className="flex-1">
            {confirmText}
          </Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
};

export default ModalConfirm;
