import Link from "next/link"


interface CustomUrl {
    url: string
}

export default function Page( url: {url:string, text: string}) {

    
    return (
        <main>
            <Link href={url.url}>
            <p className="transition hover:text-red-500 hover:-translate-y-1">{url.text}</p>
            </Link>

        </main>
        
    )

}