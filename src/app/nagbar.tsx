import { DOMElement } from "react";

export default function NagBar({message}:{message:React.ReactNode}) {
    return (
        <div className="text-lg fixed z-50 shadow-sm bg-red-500 text-dark-text w-full flex px-4 py-1 items-center justify-center">
            <div>{message}</div>
        </div>
    )
}