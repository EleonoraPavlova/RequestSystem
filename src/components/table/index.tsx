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
  console.log("logs", logs);
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
            <TableCell className={"px-1"}>
              <Chip size="sm" variant="flat">
                {t(`role_${log.role.toLowerCase()}` as string)}
              </Chip>
            </TableCell>
            <TableCell>
              {typeof log.action === "string"
                ? t(log.action)
                : t(log.action.key, {
                    status: t(log.action.params?.status as string),
                  })}
            </TableCell>
            <TableCell>{new Date(log.timestamp).toLocaleString()}</TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
};

export default TableHeroUi;
