import { Alert, AlertProps } from "@heroui/react";
import { ReactElement } from "react";

const AlertHeroui = ({ title, color, ...props }: AlertProps): ReactElement => {
  return (
    <span className="fixed bottom-4 left-6 z-50 max-w-lg">
      <Alert
        hideIconWrapper
        title={title}
        color={color}
        variant={"faded"}
        className="text-base py-2 px-4"
        isClosable
        {...props}
      />
    </span>
  );
};
export default AlertHeroui;
