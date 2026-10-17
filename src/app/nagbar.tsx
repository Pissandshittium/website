import { DOMElement } from "react";

export default function NagBar({message}:{message:React.ReactNode}) {
    return (
        <div className="text-lg fixed z-50 shadow-sm bg-gradient-to-t bg-blend-overlay backdrop-blur-2xl from-yellow-800/0 to-yellow-800/50 text-dark-text w-full flex px-4 py-3 items-center justify-center">
            <div>{message}</div>
        </div>
    )
}