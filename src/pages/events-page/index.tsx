import { ReactElement } from "react";
import { useT } from "talkr";

import TableHeroUi from "@/components/table";
import { PageLayout } from "@/components/layout";

const EventsPage = (): ReactElement => {
  const { T: t } = useT();
  return (
    <PageLayout title={t("logs")}>
      <TableHeroUi />
    </PageLayout>
  );
};

export default EventsPage;
