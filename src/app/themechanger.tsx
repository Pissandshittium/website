"use client";

import {useTheme} from "next-themes";
import { useEffect, useState } from "react";
import { ComputerDesktopIcon, SunIcon, MoonIcon } from "@heroicons/react/24/outline";
import { motion, stagger, useScroll  } from "framer-motion";
import { useAnimationControls,AnimationControls } from "framer-motion";

export default function ThemeSwitcher() {
  const [mounted, setMounted] = useState(false)
  const { theme, setTheme, resolvedTheme, systemTheme } = useTheme()

  const control = useAnimationControls();
  let [isAnimated,setAnimated] = useState(null);

  useEffect(() => {
    setMounted(true)
  }, [])

  if(!mounted) return null

  return (
    <>
    <motion.div initial={{right:-192}} animate={{right:48}} transition={{duration:1, ease:'anticipate'}} 
    className="z-50 fixed bottom-12 lg:top-12 right-12 lg:bottom-auto backdrop-blur-sm  mix-blend-difference backdrop-invert
    backdrop-brightness-110  bg-transparent px-8 py-4 rounded-xl shadow-xl">
        <div className="flex gap-2 mix-blend-difference text-dark-text dark:text-dark-text">
        <button onClick={() => {setTheme('system');control.set('reset');
        if(systemTheme != resolvedTheme)
        {control.start('rotate');}
        else{control.set('stale');}}}><ComputerDesktopIcon width={24}></ComputerDesktopIcon></button>
        <ThemeToggleSwitch theme={resolvedTheme} setTheme={setTheme} control={control}></ThemeToggleSwitch>

      </div>
      
    </motion.div>
    </>
  )
};

function ThemeToggleSwitch({theme,setTheme, control}:{theme:string | undefined,setTheme:Function,control:AnimationControls}){
    
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
  }
  return (
    <>
      <motion.div className="flex gap-4"  variants={variant} initial={'reset'} animate={control} onClick={() => {control.set('reset');control.start('rotate')}}>
      {theme == "light" &&  <button  onClick={() => {setTheme('dark');}}><SunIcon width={24}></SunIcon></button>}
      {theme == "dark" && <button  onClick={() => {setTheme('light');}}><MoonIcon width={24}></MoonIcon></button>}
      </motion.div>
    </>

  )
}