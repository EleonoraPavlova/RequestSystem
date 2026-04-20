import { ReactElement } from "react";

import styles from "./manager-page.module.css";

import { PageLayout } from "@/components/layout";
import RequestList from "@/components/request-list";
import DropdownHeroUi from "@/components/dropdown";
import { useAppDispatch, useAppSelector } from "@/services/hooks";
import { FilterStatus } from "@/shared/types";
import { setFilter } from "@/services/requestSlice";

const ManagerPage = (): ReactElement => {
  const dispatch = useAppDispatch();
  const currentFilter = useAppSelector((state) => state.items.filter);

  const handleFilterChange = (key: FilterStatus) => {
    dispatch(setFilter(key));
  };

  return (
    <PageLayout title={"Manager's area"}>
      <div className={styles.dropdown}>
        <DropdownHeroUi selectedFilter={currentFilter} onFilterChange={handleFilterChange} />
      </div>
      <RequestList />
    </PageLayout>
  );
};

export default ManagerPage;
