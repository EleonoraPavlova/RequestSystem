import {
  Table,
  TableHeader,
  TableColumn,
  TableBody,
  TableRow,
  TableCell,
  Chip,
} from "@heroui/react";
import { useT } from "talkr";

import { LogEntry } from "@/shared/types";
import { useAppSelector } from "@/services/hooks";

const TableHeroUi = () => {
  const { T: t } = useT();
  const logs = useAppSelector((state) => state.logs.list);

  return (
    <Table aria-label={t("logs_title")}>
      <TableHeader>
        <TableColumn>{t("logs_role")}</TableColumn>
        <TableColumn>{t("logs_action")}</TableColumn>
        <TableColumn>{t("logs_time")}</TableColumn>
      </TableHeader>
      <TableBody emptyContent={t("logs_empty")}>
        {logs.map((log: LogEntry) => (
          <TableRow key={log.id}>
            <TableCell>
              <Chip size="sm" variant="flat">
                {t(`role_${log.role.toLowerCase()}` as string)}
              </Chip>
            </TableCell>
            <TableCell>{log.action}</TableCell>
            <TableCell>{new Date(log.timestamp).toLocaleString()}</TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
};

export default TableHeroUi;
