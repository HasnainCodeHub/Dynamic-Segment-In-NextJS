import Link from "next/link"
import { title } from "process"


function products() {
    const data = [
        {
            id: 1,
            name: "Laptops",
            title: "Laptops",
            price: 50000,
            description: "This is a laptop"
        },
        {
            id: 2,
            title: "Mobiles",
            price: 5000,
            description: "This is a Mobile"
        },
        {
            id: 3,
            title: "Refrigerators",
            price: 5000,
            description: "This is a Refrigerators"
        },
        {
            id: 4,
            title: "Motor bikes",
            price: 5000,
            description: "This is a Mobile"
        },
        {
            id: 5,
            title: "Washing Machines",
            price: 5000,
            description: "This is a Mobile"
        }
    ]

    return (
        <main className="bg-pink-100 h-full">
            <h1 className="text-9xl text-center bg-orange-500 text-white mt-24">Products In Our Store</h1>
            <ol>
                {
                data.map((item) => (
                    <li>
                        <div key={item.id} className="text-5xl text-justify text-black ml-4 mt-24 mr-48 ">  </div>
                        <Link className="text-5xl text-justify text-blue-600 4 mt-24 mr-48" href={`/Products/${item.id}`}>{item.title} </Link>
                    </li>
                ))
                }
            </ol>


            <button className="bg-red-600 text-white ml-12 mt-24 h-12"><Link href='http://localhost:3000/'>Back To Home Page</Link></button>
        </main>

    )
}
export default products
