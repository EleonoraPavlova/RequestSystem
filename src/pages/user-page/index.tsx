import { ReactElement } from "react";

import styles from "./user-page.module.css";

import { PageLayout } from "@/components/layout";
import RequestCard from "@/components/request-card";
import RequestList from "@/components/request-list";

const UserPage = (): ReactElement => {
  return (
    <PageLayout title={"User's area"}>
      <div className={styles.wrapper}>
        <RequestCard />
        <RequestList />
      </div>
    </PageLayout>
  );
};

export default UserPage;
