import React, { useEffect } from "react";
import { Switch } from "@nextui-org/react";
import { Moon, Sun } from "lucide-react";
import { useThemeStore } from "../store/themeStore";

export default function ThemeToggle({ className = "" }) {
  const { isDark, toggleTheme } = useThemeStore();

  useEffect(() => {
    document.documentElement.classList.toggle("dark", isDark);
  }, [isDark]);

  return (
    <Switch
      size="lg"
      color="primary"
      isSelected={isDark}
      onChange={toggleTheme}
      startContent={<Sun className="w-5 h-5 text-amber-500" />}
      endContent={<Moon className="w-5 h-5 text-blue-300" />}
      className={`${className}`}
      classNames={{
        wrapper: "group-data-[selected=true]:bg-blue-900",
      }}
    />
  );
}
