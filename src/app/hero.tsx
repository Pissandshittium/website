'use client';

import { PropsWithChildren } from "react"
import Image from "next/image"
import Logo from "./logo"
import DownloadButton from "./downloadbutton"
import { motion } from "framer-motion"

export default function Hero(){
    return (
        <>
        <motion.div className="lg:w-full h-full items-center justify-center flex-col gap-2 flex px-8 from-[#ffab7a] to-transparent dark:from-[#833d58] dark:to-transparent bg-gradient-to-b"
    
            initial={{opacity:0, translateY:0}}
            animate={{opacity:1, translateY:0, transition:{duration:0.75,ease:'circOut'}}}
        >
            <motion.div className="items-center justify-center flex-col gap-2 flex "
                        initial={{opacity:0, translateY:100}}
                        animate={{opacity:1, translateY:0, transition:{duration:0.5,delay:0.5}}}
            >
                <h1 className="flex-col lg:flex-row flex items-center justify-center gap-4 text-2xl md:text-4xl lg:text-[4rem] 2xl:text-[7rem] font-extrabold font-display">
                    <Logo></Logo>
                    Pissandshittium
                </h1>
                <h2 className="text-lg md:text-3xl 2xl:text-4xl text-center">
                    The Browser that doesn&apos;t <span>give a SHIT</span>.
                </h2>
                <div className="flex gap-2 flex-col lg:flex-row">

                <DownloadButton downloadText="Download for Windows" downloadLink="https://files.aikoyori.xyz/pissandshittium/mini_installer.121.0.6167.0.exe"></DownloadButton>
                <DownloadButton downloadText="Download for Linux Soon" downloadLink=""></DownloadButton>
                </div>
            </motion.div>

        </motion.div>
        </>
    )
}
