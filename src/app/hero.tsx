'use client';
import { use,useEffect, useState  } from "react";
import { PropsWithChildren } from "react"
import Image from "next/image"
import Logo from "./logo"
import DownloadButton from "./downloadbutton"
import { motion, useScroll,useTransform } from "framer-motion"

export default function Hero(){
    const { scrollYProgress } = useScroll();
    const [ loading, setLoading ] = useState(true)
    const [ latest, setLatest ] = useState("")
    useEffect(() => {
        getLatestVersion()
          .then((res) => res.text())
          .then((data) => {
            
            setLatest(data)
            setLoading(false)
          })
      }, [])
     
    return (
        <>
        <motion.div className="relative w-[100dvw] lg:w-full h-full clipper items-center justify-center z-10 flex-col gap-8 flex px-8 from-[#d48e64] to-transparent dark:from-[#833d58] dark:to-transparent bg-gradient-to-b"
    
            initial={{opacity:0, translateY:0}}
            animate={{opacity:1, translateY:0, transition:{duration:0.75}}}
        >
        <motion.img
        initial={{opacity:0, translateY:-300}}
        animate={{opacity:1, translateY:0, transition:{duration:0.75,delay:0.75,}}}
        style={{translateY: useTransform(scrollYProgress, l => l*-500),rotateZ:useTransform(scrollYProgress, l => l*-16+6)}} src="/hero/main.png" 
        className="absolute overflow-x-clip sepia saturate-200 -z-10 brightness-50 dark:hue-rotate-[100deg] right-[70%] blur-sm"></motion.img>
        <motion.img
        initial={{opacity:0, translateY:-300}}
        animate={{opacity:1, translateY:0, transition:{duration:0.75,delay:1.35,}}}
        style={{translateY: useTransform(scrollYProgress, l => l*-400),rotateZ:useTransform(scrollYProgress, l => l*7-5)}} src="/hero/twitter.png" 
        className="absolute overflow-x-clip sepia saturate-200 top-0 -z-10 brightness-50 dark:hue-rotate-[100deg] left-[70%] blur-sm"></motion.img>

            <motion.div className="items-center justify-center flex-col gap-8 flex"
                        initial={{opacity:0, translateY:100}}
                        animate={{opacity:1, translateY:0, transition:{duration:0.5,delay:0.5}}}
            >
                <h1 className="flex-col lg:flex-row flex items-center justify-center gap-4 text-3xl md:text-4xl lg:text-[4rem] 2xl:text-[7rem] font-extrabold font-display">
                    <Logo></Logo>
                    <span className="mix-blend-difference dark:mix-blend-exclusion text-center text-light-secondary dark:text-light-accent h-full flex items-center">
                        Pissand&shy;shittium
                    </span>
                </h1>
                <h2 className=" mix-blend-difference dark:mix-blend-exclusion  text-light-secondary dark:text-light-accent text-base md:text-3xl 2xl:text-4xl text-center">
                    The Browser that doesn&apos;t <span>give a SHIT</span>.
                </h2>
                <div className="flex gap-4 flex-col w-full flex-shrink lg:flex-row justify-center">

                <DownloadButton downloadText="Download for Windows" downloadLink={"https://files.aikoyori.xyz/pissandshittium/"+latest}></DownloadButton>
                <DownloadButton downloadText="Download for Linux Soon" downloadLink=""></DownloadButton>
                </div>
            </motion.div>

        </motion.div>
        </>
    )
}
async function getLatestVersion() {
    return (await fetch(`https://files.aikoyori.xyz/pissandshittium/VERSION`, { cache: 'no-store' }));

  }