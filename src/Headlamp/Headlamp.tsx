import React, { useEffect } from "react";
import Modal from "react-modal";
import styles from "./Headlamp.module.css";
import { Header } from "./Header/Header";
import { Body } from "./Body/Body";
import { Footer } from "./Footer/Footer";

interface Props {
  isOpen: boolean;
  onAfterOpen?: () => void;
  onRequestClose: () => void;
  closeTimeoutMS?: number;
  contentLabel: string;
}

const getParentSelector = () => document.body;

export function Headlamp({
  isOpen,
  onAfterOpen,
  onRequestClose,
  contentLabel
}: Props) {
  useEffect(() => {
    Modal.setAppElement("#root");
  });
  return (
    <Modal
      isOpen={isOpen}
      onAfterOpen={onAfterOpen}
      onRequestClose={onRequestClose}
      contentLabel={contentLabel}
      className={styles.container}
      overlayClassName={styles.overlay}
      shouldFocusAfterRender={false}
      shouldCloseOnEsc
      shouldCloseOnOverlayClick
      shouldReturnFocusAfterClose
      role="dialog"
      parentSelector={getParentSelector}
    >
      <Header onRequestClose={onRequestClose} />
      <Body />
      <Footer />
    </Modal>
  );
}
