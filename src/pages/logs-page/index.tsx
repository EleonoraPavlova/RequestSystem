import { ReactElement } from "react";
import { useT } from "talkr";

import { PageLayout } from "@/components/layout";
import LogsTable from "@/components/logs";

const LogsPage = (): ReactElement => {
  const { T: t } = useT();
  return (
    <PageLayout title={t("logs")}>
      <LogsTable />
    </PageLayout>
  );
};

export default LogsPage;
