import Link from "next/link"

export default function CustomButton (
    customUrl: {href: string; text:string}
) {

    return (
        <div className="bg-green-400 px-4 py-2 text-orange font-bold rounded-md hover:bg-green-300 hover:cursor-pointer">
            <Link href={customUrl.href}>{customUrl.text}</Link>
        </div>
    )
}