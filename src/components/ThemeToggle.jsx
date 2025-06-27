import { Switch } from "@/components/ui/switch";
import { useState, useEffect } from "react";

const ThemeToggle = () => {
  const [darkMode, setDarkMode] = useState(
    localStorage.getItem("theme") === "dark"
  );

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [darkMode]);

  return (
    <div className="flex items-center gap-2">
      <span>☀️</span>
      <Switch checked={darkMode} onChange={setDarkMode} />
      <span>🌙</span>
    </div>
  );
};

export default ThemeToggle;
