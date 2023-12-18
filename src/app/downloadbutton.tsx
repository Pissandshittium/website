"use client";
import { motion } from "framer-motion";
import { ArrowDownTrayIcon } from "@heroicons/react/24/outline";

export default function DownloadButton({downloadLink, downloadText}:{downloadLink:string,downloadText:string})
{
    return (
        <motion.div className="select-none group p-[0.25rem] shadow-md transition-all rounded-full flex insetter hover:drop-shadow-xl
         from-light-secondary to-light-accent dark:from-light-accent dark:to-light-secondary bg-opacity-0 group-hover:bg-opacity-100 bg-gradient-to-bl">
            <a href={downloadLink} className="w-full h-full py-4 px-6 bg-light-primary border-transparent text-light-accent dark:bg-dark-secondary
             dark:text-dark-text group-hover:saturate-150 group-hover:contrast-150 transition-all group-hover:text-amber-300 dark:group-hover:text-lime-200
            rounded-full flex gap-4 items-center justify-center">
                <ArrowDownTrayIcon width={24}></ArrowDownTrayIcon>
                <span>
                {downloadText}
                </span>
            </a>
        </motion.div>

    )
}