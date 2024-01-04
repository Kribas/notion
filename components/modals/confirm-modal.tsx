"use client";

import * as Dialog from "@/components/ui/alert-dialog";

interface ConfirmModalProps {
  children: React.ReactNode;
  onConfirm: () => void;
}

export const ConfirmModal = ({ onConfirm, children }: ConfirmModalProps) => {
  const handleConfirm = (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    e.stopPropagation();
    onConfirm();
  };

  return (
    <Dialog.AlertDialog>
      <Dialog.AlertDialogTrigger onClick={(e) => e.stopPropagation()} asChild>
        {children}
      </Dialog.AlertDialogTrigger>
      <Dialog.AlertDialogContent>
        <Dialog.AlertDialogHeader>
          <Dialog.AlertDialogTitle>
            Are you absolutely sure?
          </Dialog.AlertDialogTitle>
          <Dialog.AlertDialogDescription>
            This action cannot be undone.
          </Dialog.AlertDialogDescription>
        </Dialog.AlertDialogHeader>
        <Dialog.AlertDialogFooter>
          <Dialog.AlertDialogCancel onClick={(e) => e.stopPropagation()}>
            Cancel
          </Dialog.AlertDialogCancel>
          <Dialog.AlertDialogAction onClick={handleConfirm}>
            Confirm
          </Dialog.AlertDialogAction>
        </Dialog.AlertDialogFooter>
      </Dialog.AlertDialogContent>
    </Dialog.AlertDialog>
  );
};
