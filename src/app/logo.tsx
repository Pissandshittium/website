"use client";

import Image from "next/image";
import { motion,useAnimationControls } from "framer-motion";
import { useState } from "react";

export default function Logo() {
const variants = {
    rotate: {
        rotateZ: -720,
        transition: {
        ease: [0.59, 1.5, 0, 0.79],
        duration: 2,
        },
    },
    reset: {
        rotateZ: 0,
        transition: {
        duration: 0,
        },
    },
    };

const control = useAnimationControls();
    let [isAnimated,setAnimated] = useState(null);
  return (
    <motion.div
    initial={'reset'}
     onClick={(isAnimated)=>{
        if(isAnimated) control.set('reset')
        control.start('rotate')
    }} variants={variants} animate={control}>
      <Image src="/pissandshittium.svg" alt="" width={128} height={128}></Image>
    </motion.div>
  );
}
