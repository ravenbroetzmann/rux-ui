import React, { useRef } from "react";
import Button from "../Button/Button";
import Heading from "../Heading/Heading";
import P from "../P/P";
import "./Modal.scss";

export interface ModalProps {
  type?: "cancel-off" | "cancel-on";
  title: string;
  descriprion: string;
  onAccept: () => void;
  onCancel?: () => void;
}

const Modal: React.FC<ModalProps> = ({
  title,
  descriprion,
  onAccept,
  onCancel,
  type,
}) => {
  const modalRef = useRef<HTMLDivElement | null>(null);
  const deleteAndFadeOut = () => {
    modalRef.current?.classList.add("hidden");
    setTimeout(() => {
      modalRef.current?.remove();
    }, 500);
  };
  const handleAccept = () => {
    deleteAndFadeOut();
    onAccept();
  };
  const handleCancel = () => {
    deleteAndFadeOut();
    onCancel && onCancel();
  };
  return (
    <div className="modal-wrapper" ref={modalRef}>
      <Heading type="h3">{title}</Heading>
      <P>{descriprion}</P>
      <div className={`${type === "cancel-off" && "cancel-off"} buttons`}>
        {type === "cancel-on" && (
          <Button variant="alert" onClick={handleCancel}>
            Cancel
          </Button>
        )}
        <Button variant="primary" onClick={handleAccept}>
          Ok
        </Button>
      </div>
    </div>
  );
};

Modal.defaultProps = {
  type: "cancel-on",
};

export default Modal;
