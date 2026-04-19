import { Progress } from "@heroui/react";
import { ReactElement } from "react";

const ProgressHeroui = (): ReactElement => {
  return <Progress aria-label="Loading..." size="sm" color="secondary" value={30} />;
};

export default ProgressHeroui;
