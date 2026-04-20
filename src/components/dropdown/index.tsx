import { Dropdown, DropdownTrigger, DropdownMenu, DropdownItem, Button } from "@heroui/react";
import { ReactElement } from "react";

import { filters } from "@/components/dropdown/dropdown.const";
import { FilterStatus } from "@/shared/types";

interface DropdownHeroUiProps {
  selectedFilter: FilterStatus;
  onFilterChange: (_value: FilterStatus) => void;
}

const DropdownHeroUi = ({ selectedFilter, onFilterChange }: DropdownHeroUiProps): ReactElement => {
  return (
    <Dropdown>
      <DropdownTrigger>
        <Button variant="bordered">
          {selectedFilter === "all" ? "All Filters" : selectedFilter}
        </Button>
      </DropdownTrigger>
      <DropdownMenu
        aria-label="Filter requests"
        items={filters}
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
