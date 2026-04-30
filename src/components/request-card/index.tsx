import { ReactElement } from "react";
import { useT } from "talkr";

import styles from "./request-card.module.css";

import RequestForm from "@/components/request-form";

const RequestCard = (): ReactElement => {
  const { T: t } = useT();
  return (
    <div className={styles.wrapper}>
      <h2 className={styles.header}>{t("request_create_title")}</h2>
      <RequestForm />
    </div>
  );
};

export default RequestCard;
