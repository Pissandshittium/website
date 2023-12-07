"use client";
import { motion } from "framer-motion";
import { ArrowDownTrayIcon } from "@heroicons/react/24/outline";

export default function DownloadButton({downloadLink, downloadText}:{downloadLink:string,downloadText:string})
{
    return (
        <motion.div className="p-[0.125rem] shadow-md rounded-lg flex bg-light-primary insetter 
        from-light-accent to-light-secondary bg-opacity-0 hover:bg-opacity-100 bg-gradient-to-bl transition-all">
            <a href={downloadLink} className="w-full h-full py-4 px-6 bg-light-primary border-transparent text-light-accent dark:bg-dark-secondary dark:text-dark-text
            rounded-md flex gap-4 items-center justify-center">
                <ArrowDownTrayIcon width={24}></ArrowDownTrayIcon>
                <span>
                {downloadText}
                </span>
            </a>
        </motion.div>

    )
}