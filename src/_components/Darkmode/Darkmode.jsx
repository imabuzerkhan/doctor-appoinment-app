"use client";
import { MdLightMode, MdDarkMode } from "react-icons/md";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

const DarkMode = () => {
  const { theme, setTheme, resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const currentTheme = theme === "system" ? resolvedTheme : theme;

  useEffect(() => setMounted(true), []);

  return (
    <>
      {mounted && (
        currentTheme === "dark" ? (
          <MdLightMode className="text-2xl hover:text-amber-500 cursor-pointer " onClick={() => setTheme("light")} />
        ) : (
          <MdDarkMode className="text-2xl text-gray-800 cursor-pointer " onClick={() => setTheme("dark")} />
        )
      )}
    </>
  );
};

export default DarkMode;