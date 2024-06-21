import React from "react";
import styles from "./CartModal.module.scss";

const ModalOverlay = ({ children }) => {
  return (
    <div className={styles.modal}>
      <div className={styles.content}>{children}</div>
    </div>
  );
};

const CartModal = ({ children }) => {
  return (
    <>
      <div className={styles.backdrop} />
          <ModalOverlay>
              {children}
          </ModalOverlay>
    </>
  );
};

export default CartModal;
