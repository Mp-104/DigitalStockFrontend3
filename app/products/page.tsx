import Link from "next/link";
import { callbackify } from "util";
import { IProducts } from "../_types/IProduct";
import { IProduct } from "../_types/IProduct";
import ProductCard from "../_component/ProductCard";

export default async function Store() {

    
    const data = await fetch("https://dummyjson.com/c/13be-235c-4e6a-924c");

    const result: IProducts = await data.json();

    const productList: IProduct[] = result.products;

    return (
        <main>
            <div className="flex items-center justify-center">
                <h1>This is the Product, former Store, Page</h1>
                <ProductCard product={productList.at(0)}></ProductCard>

                <section className="">
                    
                
                    <div>{productList.map((product) => <div><span>pris: </span>{product.price + " " + "id:" + product.id}</div> )}</div>
                
                    <div>{productList.map((product, index) => (<ProductCard product={product} key={index}></ProductCard>))}</div>
                </section>
                <Link href={"/"} >To Home</Link>
            </div>
        </main>
    )
}