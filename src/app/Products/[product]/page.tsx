
import Image from "next/image";
import LaptopImage from './laptops.jpg'
import MobImage from './mobiles.webp'
import RefImage from './Ref.jpg'
import BikeImage from './bikes.jpg'
import AddToCartButton from "@/app/button";
import WashMachine from './machine.webp'

interface Props { params: { product: string } }
export default function Product({ params }: Props) {
    const data = [
        {
            id: 1,
            image: <Image src={LaptopImage} alt=""></Image>,
            name: "Laptops",
            title: "Specifications : Core i9 12th Generation",
            price: 'Prices : $15000',
            description: "Performance : Its A Fastest Gaming Machine In Reasonable Price"
        },
        {
            id: 2,
            name: "Mobiles",
            image: <Image className="h-72 w-auto" src={MobImage} alt=""></Image>,
            title: "Name : Iphone 16 Pro Max",
            price: 'Price : $5000',
            description: "Specs : 512GB 1080 Mega Pixel Back Camera Water resistance"
        },
        {
            id: 3,
            name: "Refrigerators",
            image: <Image src={RefImage} alt=""></Image>,
            title: "Brand : Haier ",
            price: 'Price : $5000',
            description: "Detailes : Double Glass Door Large Size  "
        },
        {
            name: "Motor Bikes",
            image: <Image src={BikeImage} alt=""></Image>,
            id: 4,
            title: "Brand : Honda",
            price: 'Price : $5000',
            description: "Detailes : Honda CG 125CC Model 2025"
        },
        {
            name: "Washing Machines",
            image: <Image src={WashMachine} alt=""></Image>,
            id: 5,
            title: "Brand : Pel",
            price: 'Price : $5000',
            description: "Detailes : PEL Washing Machine Fully Auto"
        }
    ]
    const productId = parseInt(params.product)
    const product = data.find((item) => item.id === productId)
    if (!product) {
        return <div>Product not found</div>
    }
    return (
        <div className="text-3xl h-full bg-red-200 ">
            <h1 className="p-4 bg-red-800 text-white">{`${product.name} in All Categories`}</h1>
            <div className="mt-12">{product.image}
            </div>
            <p> {`Product Number:${product.id}`} </p>
            <p> {product.title} </p>
            <p> {product.description} </p>
            <p> {product.price} </p>

            <AddToCartButton />
        </div>
    )
}






































// import Link from "next/link"


// function products() {

//     return (
//         <main className="bg-pink-100 h-full">
//             <h1 className="text-9xl text-center bg-orange-500 text-white">Products</h1>
//             <ol>
//                 <li className="text-5xl text-justify text-black ml-48 mt-24 mr-48">Laptops</li>
//                 <li className="text-5xl text-justify text-black ml-48 mt-24 mr-48">Mobiles</li>
//                 <li className="text-5xl text-justify text-black ml-48 mt-24 mr-48">Refrigerators</li>
//                 <li className="text-5xl text-justify text-black ml-48 mt-24 mr-48">Motor Bikes</li>
//                 <li className="text-5xl text-justify text-black ml-48 mt-24 mr-48">Microwave Oven</li>
//             </ol>

//             <button className="bg-red-600 text-white ml-12 mt-24 rounded-3xl h-12"><Link href='http://localhost:3000/'>Back To Home Page</Link></button>

//         </main>

//     )
// }
// export default products