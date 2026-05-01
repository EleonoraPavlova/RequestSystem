import { PATH } from "@/shared/enums";

export interface NavItem {
  label: string;
  path: string;
}

export const getNavBarItems = (t: (key: string) => string): NavItem[] => [
  { label: t("nav_user"), path: PATH.USER },
  { label: t("nav_manager"), path: PATH.MANAGER },
  { label: t("logs"), path: PATH.LOGS },
];
