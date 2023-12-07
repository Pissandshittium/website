"use client";

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import {
  ComputerDesktopIcon,
  SunIcon,
  MoonIcon,
} from "@heroicons/react/24/outline";
import { motion, stagger, useScroll } from "framer-motion";
import { useAnimationControls, AnimationControls, useSpring } from "framer-motion";

export default function ThemeSwitcher() {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme, resolvedTheme, systemTheme } = useTheme();

  const control = useAnimationControls();
  const bigControl = useAnimationControls();
  let [isAnimated, setAnimated] = useState(null);

  useEffect(() => {
    setMounted(true);
  }, []);
  const hidenshow = {
    initial: {  right: 48,gap:8 },
    hidden: {  width: 24 ,gap:0 },
    show: {  width: 56 ,gap:"8px"},
  };
  const systemThemeIcon = {
    initial: { opacity: 1,width:24,  },
    hidden: { opacity: 0, width:0, pointerEvents:"none" },
    show: { opacity: 1, width:24, pointerEvents:"auto" },
  };
  if (!mounted) return null;

  return (
    <>
      <motion.div
        initial={{ right: -192 }}
        transition={{ duration: 1 }}
        className="overflow-hidden z-50 fixed bottom-12 lg:top-12 right-12 lg:bottom-auto backdrop-blur-sm  mix-blend-difference backdrop-invert
    backdrop-brightness-110 flex origin-left items-center bg-transparent px-8 py-4 rounded-xl shadow-xl"
        variants={hidenshow}
        animate={"initial"}
      >
        <motion.div 
                variants={hidenshow}
                animate={bigControl}
        className="mix-blend-difference -z-10 flex gap-2 text-dark-text dark:text-dark-text">

          {(
            <motion.button
              variants={systemThemeIcon}
              animate={bigControl}
              onClick={() => {
                setTheme("system");
                control.set("reset");
                bigControl.start("hidden");
                if (systemTheme != resolvedTheme) {
                  control.start("rotate");
                } else {
                  control.set("stale");
                }
              }}
            >
              <ComputerDesktopIcon width={24}></ComputerDesktopIcon>
            </motion.button>
          )}
          
        <div className="flex">
                    <ThemeToggleSwitch
                      theme={resolvedTheme}
                      setTheme={setTheme}
                      control={control}
                      bigControl={bigControl}
                    ></ThemeToggleSwitch>
        </div>
        </motion.div>
      </motion.div>
    </>
  );
}

function ThemeToggleSwitch({
  theme,
  setTheme,
  control,
  bigControl
}: {
  theme: string | undefined;
  setTheme: Function;
  control: AnimationControls;
  bigControl: AnimationControls;
}) {
  const variant = {
    rotate: {
      rotateZ: 0,
      transition: {
        ease: [0.57, 1.8, 0.18, 0.52],
        duration: 0.5,
      },
    },
    reset: {
      rotateZ: -90,
      transition: {
        duration: 0,
      },
    },
    stale: {
      rotateZ: 0,
      transition: {
        duration: 0,
      },
    },
  };
  return (
    <>
      <motion.div
        className="flex gap-4"
        variants={variant}
        initial={"reset"}
        animate={control}
        onClick={() => {
          control.set("reset");
          control.start("rotate");
          bigControl.start("show");
        }}
      >
        {theme == "light" && (
          <button
            onClick={() => {
              setTheme("dark");
            }}
          >
            <SunIcon width={24}></SunIcon>
          </button>
        )}
        {theme == "dark" && (
          <button
            onClick={() => {
              setTheme("light");
            }}
          >
            <MoonIcon width={24}></MoonIcon>
          </button>
        )}
      </motion.div>
    </>
  );
}
