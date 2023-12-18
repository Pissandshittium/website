export default function Quote({author,children}:{author:React.ReactNode,children:any}){
    return (
        <div className="">
            {children}
            <span> ー {author}</span>
        </div>
    )
}