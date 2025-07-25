
import { useRef, useEffect, ReactNode } from "react";

type ModalProps = {
  openModal: boolean;
  closeModal: () => void;
  children: ReactNode;
};

function Modal({ openModal, closeModal, children }: ModalProps) {
  const ref = useRef<HTMLDialogElement | null>(null);

  useEffect(() => {
    const dialog = ref.current;
    if (!dialog) return;

    if (openModal && !dialog.open) {
      dialog.showModal();
    } else if (!openModal && dialog.open) {
      dialog.close();
    }

    const handleCancel = (e: Event) => {
      e.preventDefault(); // prevent Esc key from closing automatically
      closeModal();
    };

    const handleClickOutside = (e: MouseEvent) => {
      if (dialog && e.target === dialog) {
        closeModal();
      }
    };

    dialog.addEventListener("cancel", handleCancel);
    dialog.addEventListener("click", handleClickOutside);
    return () => {
      dialog.removeEventListener("cancel", handleCancel);
      dialog.removeEventListener("click", handleClickOutside);
    };
  }, [openModal, closeModal]);

  return (
    <dialog
      ref={ref}
      className="rounded-lg shadow-xl backdrop:bg-black/50 
                 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[60%] h-[75%]"
    >
      {children}
    </dialog>
  );
}

export default Modal;
