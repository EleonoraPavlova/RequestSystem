import { ReactElement } from "react";

import styles from "./request-card.module.css";

import RequestForm from "@/components/request-form";

const RequestCard = (): ReactElement => {
  return (
    <div className={styles.wrapper}>
      <h2 className={styles.header}>Create a request</h2>
      <RequestForm />
    </div>
  );
};

export default RequestCard;
