import { Switch } from "@heroui/react";

import { useTheme } from "@/providers/themeProvider";
import Sun from "@/assets/icons/sun";
import Moon from "@/assets/icons/moon";

const ThemeToggle = () => {
  const { isDark, setTheme } = useTheme();

  return (
    <Switch
      isSelected={isDark}
      onValueChange={(checked) => setTheme(checked ? "dark" : "light")}
      size="lg"
      color="secondary"
      thumbIcon={
        isDark ? <Moon className="size-4 text-current" /> : <Sun className="size-4 text-current" />
      }
    ></Switch>
  );
};

export default ThemeToggle;
