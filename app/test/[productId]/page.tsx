export default async function productId (

    {params} : Promise <{ params : {productId: string} }>

) {
    const myParam = (await params).productId
    return (
        <main>
            <p>The RequestParam is {myParam}</p>

        </main>
    )
}