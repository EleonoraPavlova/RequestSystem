import { createContext, useContext, useEffect, ReactNode } from "react";
import { useTheme as useHeroTheme } from "@heroui/use-theme";

type Theme = "light" | "dark" | "system";

function isTheme(value: unknown): value is Theme {
  return value === "light" || value === "dark" || value === "system";
}

interface ThemeContextType {
  theme: Theme;
  setTheme: (_theme: Theme) => void;
  isDark: boolean;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export function ThemeProvider({ children }: { children: ReactNode }) {
  const { theme: heroTheme, setTheme } = useHeroTheme();
  const theme: Theme = isTheme(heroTheme) ? heroTheme : "system";

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");
    if (isTheme(savedTheme)) {
      setTheme(savedTheme);
    }
  }, [setTheme]);

  const handleSetTheme = (newTheme: Theme) => {
    setTheme(newTheme);
    localStorage.setItem("theme", newTheme);
  };

  const isDark =
    theme === "dark" ||
    (theme === "system" && window.matchMedia("(prefers-color-scheme: dark)").matches);

  return (
    <ThemeContext.Provider value={{ theme, setTheme: handleSetTheme, isDark }}>
      {children}
    </ThemeContext.Provider>
  );
}

// eslint-disable-next-line react-refresh/only-export-components
export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (!context) throw new Error("useTheme must be used within ThemeProvider");
  return context;
};
