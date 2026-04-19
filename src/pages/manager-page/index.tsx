import { ReactElement } from "react";

import CardsHeroui from "@/components/cards";
import { PageLayout } from "@/components/layout";

const ManagerPage = (): ReactElement => {
  return (
    <PageLayout title={"Manager's area"}>
      <CardsHeroui />
    </PageLayout>
  );
};

export default ManagerPage;
