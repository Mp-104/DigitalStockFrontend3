import Image from "next/image";
import { IProduct, IProducts } from "../_types/IProduct";

interface ProductProps {
    product: IProduct
}

export default function ProductCard (

    {product}  : {product: IProduct}

) {

    const {id, title, description, price, image } = product;

    return (

        <>
            <div key={id} className="border-r-4 border-red-500  bg-black-500">
                <header>{title}</header>
                <Image width={250} height={250} src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAMgAAABkCAMAAAD0WI85AAAAZlBMVEXMAAD/1wDIAAD/3AD/2QD/3gD/4AD/4gD/5ADQKwDebQDcZgDOFwD0swDgdgDsnADTOgDwqgDZXADmiwD6zAD2vwDVRwD1uQDpkgDlhgDvogDjgQDwrgDicgD80QDvpgDVTwD6xgA7gwPCAAAB+ElEQVR4nO3Z25KiMBAGYNI5QCAEOaMowvu/5CTi7s14JW5lY/3fBcVMzcXfdjLplEkCAPBVzCl0gg8ZSgod4TNyGTrBZ9BlnqNvibb5zV6pv+U2D53lEDNzW5ySpqiWInSWg06la4WZ7qFzHDfU5KqJfpMkSWHtqO8mdIzD6FqeTV3a0DkO01vjllV7DZ3jsOd4cop/bTnmK6pwTN5+SylNF/fB/hcN6T3yo2Rd3XanhJqsDB3lCGrE0m1j616nrI63J5QLR3Xavws1h87ztoILxni/nyWtEjpwnjdRIVwdYnvGXxdVRbm46Ob7wVj+J33PlyhbUkjfD1dMs1dCleRRnibDwpns3fLi9lEJWSXjXFtDp3pNbsPzfYgvUj5GWQito/H/glMhz7S/bFEW4k90/7BcyOmxR6ItZEdzJlRLZhM83rv73pNZMlW17nEOnedd+jw8Smml4Mwdj2vYOO+iKkvZnJAz+bORR3pzJ5vyTXFWT9PIfCEyzu8X3OibXfSYCi6lH1YE42WEN17Kt4y7MYtsl0o/y8teMNnFN2y5SYvvNymdX7aunxpTKzeyxLa6dOeaMDx/8Lvd13SVTMY2pKxuX/y+EJZKxVaIvtf578imqocXf/xfo5ef/OvfAgAAAAAAAAAAAAAAAAAAAAAAAAAAwL/2A5r0EaJmDaF4AAAAAElFTkSuQmCC" alt="test"></Image>

                <div>{description}</div>
                <footer>{price}</footer> <span>{id}</span>
            </div>
        </>

    )
}