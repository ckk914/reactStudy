import React from "react";
// portal을 사용하기 위한 불러오기
import ReactDOM from "react-dom";

import Card from "../Card";
import Button from "../Button";
import styles from "./ErrorModal.module.css";
import Portal from "../Portal/Portal";

const BackDrop = ({ onClose }) => {
  return <div className={styles.backdrop} onClick={onClose}></div>;
};

const ModalOverlay = ({ title, message, onClose }) => {
  return (
    <Card className={styles.modal}>
      <header className={styles.header}>
        <h2>{title}</h2>
      </header>
      <div className={styles.content}>
        <p>{message}</p>
      </div>
      <footer className={styles.actions}>
        <Button onClick={onClose}>Okay</Button>
      </footer>
    </Card>
  );
};

const ErrorModal = ({ title, message, onClose }) => {
  return (
    <>
      <Portal destId="backdrop-root">
        <BackDrop onClose={onClose} />
      </Portal>

      <Portal destId="overlay-root">
        <ModalOverlay title={title} message={message} onClose={onClose} />
      </Portal>
    </>
  );
};

export default ErrorModal;
