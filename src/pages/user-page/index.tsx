import { ReactElement } from "react";
import { useT } from "talkr";

import styles from "./user-page.module.css";

import { PageLayout } from "@/components/layout";
import RequestCard from "@/components/request-card";
import RequestList from "@/components/request-list";

const UserPage = (): ReactElement => {
  const { T: t } = useT();
  return (
    <PageLayout title={t("page_user_title")}>
      <div className={styles.wrapper}>
        <RequestCard />
        <RequestList />
      </div>
    </PageLayout>
  );
};

export default UserPage;
