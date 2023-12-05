"use client";

import {useTheme} from "next-themes";
import { useEffect, useState } from "react";
import { ComputerDesktopIcon, SunIcon, MoonIcon } from "@heroicons/react/24/outline";

export default function ThemeSwitcher() {
  const [mounted, setMounted] = useState(false)
  const { theme, setTheme } = useTheme()

  useEffect(() => {
    setMounted(true)
  }, [])

  if(!mounted) return null

  return (
    <div className="fixed bottom-12 lg:top-12 right-12 lg:bottom-auto backdrop-blur-sm invert backdrop-brightness-110  bg-transparent px-8 py-4 rounded-xl shadow-xl">
        <div className="flex gap-2">
        <button onClick={() => setTheme('system')}><ComputerDesktopIcon width={24}></ComputerDesktopIcon></button>
        <button onClick={() => setTheme('light')}><SunIcon width={24}></SunIcon></button>
        <button onClick={() => setTheme('dark')}><MoonIcon width={24}></MoonIcon></button>

      </div>
      
    </div>
  )
};