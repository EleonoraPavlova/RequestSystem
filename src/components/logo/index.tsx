import { Image } from "@heroui/image";
import { ReactElement } from "react";

import logo from "@/assets/webp/logo.webp";

const Logo = (): ReactElement => {
  return (
    <div className="flex items-center justify-center space-x-2">
      <Image width={40} height={40} src={logo} alt="logo" />
      <p className="font-bold italic hidden min-[440px]:block">Mini Request System</p>
    </div>
  );
};

export default Logo;
