import Link from 'next/link'
export default function NagbarButton({children,href}:{children:any,href:string}){
    return (
        <>
            <Link href={href}>
            <button className="rounded-lg border-dark-text border-2 px-3 hover:bg-dark-text hover:text-red-500 transition-colors">
                {children}
            </button>
            </Link>
        </>
    )
}