import { ReactElement, useState } from "react";
import { useT } from "talkr";

import styles from "./manager-page.module.css";

import { PageLayout } from "@/components/layout";
import RequestList from "@/components/request-list";
import DropdownHeroUi from "@/components/dropdown";
import { useAppDispatch, useAppSelector } from "@/services/hooks";
import { FilterStatus } from "@/shared/types";
import { setFilter } from "@/services/requestSlice";
import Button from "@/components/button";

const ManagerPage = (): ReactElement => {
  const [showArchive, setShowArchive] = useState(false);
  const { T: t } = useT();
  const dispatch = useAppDispatch();
  const currentFilter = useAppSelector((state) => state.items.filter);

  const handleFilterChange = (key: FilterStatus) => {
    dispatch(setFilter(key));
  };

  return (
    <PageLayout title={t("page_manager_title")}>
      <div className={styles.dropdown}>
        <Button
          variant="ghost"
          size="sm"
          onClick={() => setShowArchive(!showArchive)}
          className={styles.btn}
        >
          {showArchive ? t("btn_back_to_list") : t("btn_archive")}
        </Button>
        {!showArchive && (
          <DropdownHeroUi selectedFilter={currentFilter} onFilterChange={handleFilterChange} />
        )}
      </div>
      <RequestList isArchiveMode={showArchive} />
    </PageLayout>
  );
};

export default ManagerPage;
