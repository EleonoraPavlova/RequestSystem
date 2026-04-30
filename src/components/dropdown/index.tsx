import { Dropdown, DropdownTrigger, DropdownMenu, DropdownItem, Button } from "@heroui/react";
import { ReactElement, useMemo } from "react";
import { useT } from "talkr";

import { FilterStatus } from "@/shared/types";
import { getFilterOptions } from "@/components/dropdown/dropdown.const";

interface DropdownHeroUiProps {
  selectedFilter: FilterStatus;
  onFilterChange: (_value: FilterStatus) => void;
}

const DropdownHeroUi = ({ selectedFilter, onFilterChange }: DropdownHeroUiProps): ReactElement => {
  const { T: t } = useT();
  const filterOptions = useMemo(() => getFilterOptions(t), [t]);

  return (
    <Dropdown>
      <DropdownTrigger>
        <Button variant="bordered">
          {selectedFilter === "all" ? t("status_all") : selectedFilter}
        </Button>
      </DropdownTrigger>
      <DropdownMenu
        aria-label="Filter requests"
        items={filterOptions}
        selectionMode="single"
        selectedKeys={new Set([selectedFilter])}
        onSelectionChange={(keys) => {
          const selectedKey = Array.from(keys)[0] as FilterStatus;
          onFilterChange(selectedKey);
        }}
      >
        {(item) => <DropdownItem key={item.key}>{item.label}</DropdownItem>}
      </DropdownMenu>
    </Dropdown>
  );
};

export default DropdownHeroUi;
