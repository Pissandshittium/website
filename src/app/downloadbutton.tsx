import { ArrowDownTrayIcon } from "@heroicons/react/24/outline";

export default function DownloadButton({downloadLink, downloadText}:{downloadLink:string,downloadText:string})
{
    return (
        <a href={downloadLink} className="bg-light-primary text-light-accent dark:bg-dark-secondary dark:text-dark-text py-4 px-6
         rounded-xl flex gap-4 items-center justify-center shadow-md">
            <ArrowDownTrayIcon width={24}></ArrowDownTrayIcon>
            {downloadText}
        </a>
    )
}