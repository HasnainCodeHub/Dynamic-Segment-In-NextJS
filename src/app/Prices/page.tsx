import Link from "next/link";
import AddToCartButton from "../button";

function prices() {
    return (
        <main className="bg-pink-200 h-full">
            <h1 className="text-9xl text-center bg-orange-500 text-white">Prices</h1>

            <ul>
                <li className="text-5xl text-justify ml-48 mt-24 mr-48">Laptops:</li>
                <br />
                <ul>
                    <li className="text-3xl text-justify  ml-48 mr-48 mt-4">01- Corei5 4thGen 8Gb Ram : 300$ <AddToCartButton/> </li>
                    <li className="text-3xl text-justify ml-48 mr-48 mt-4">02- Corei7 8thGen 12Gb Ram : 400$ <AddToCartButton/></li>
                    <li className="text-3xl text-justify  ml-48 mr-48 mt-4">03- Corei9 11thGen 16Gb Ram : 800$ <AddToCartButton/></li>

                </ul>
                <li className="text-5xl text-justify ml-48 mt-24 mr-48">Mobiles:</li>
                <br />
                <ul>
                    <li className="text-3xl text-justify  ml-48 mr-48 mt-4">01- Iphone 15Pro Max 512GB : 1500$ <AddToCartButton/></li>
                    <li className="text-3xl text-justify  ml-48 mr-48 mt-4">02- Iphone 16Pro Max 1TB : 1600$ <AddToCartButton/></li>
                    <li className="text-3xl text-justify  ml-48 mr-48 mt-4">03- Iphone 17Pro Max 2TB : 1700$ <AddToCartButton/></li>

                </ul>
                <li className="text-5xl text-justify  ml-48 mt-24 mr-48">Refrigerators:</li>
                <br />
                <ul>
                    <li className="text-3xl text-justify  ml-48 mr-48 mt-4">01- Haier Small Size 2 Door : 500$ <AddToCartButton/></li>
                    <li className="text-3xl text-justify  ml-48 mr-48 mt-4">02- Haier Medium Size 3 Door : 600$ <AddToCartButton/></li>
                    <li className="text-3xl text-justify  ml-48 mr-48 mt-4">03- Haier Large Size 4 Door : 700$ <AddToCartButton/></li>

                </ul>
                <li className="text-5xl text-justify  ml-48 mt-24 mr-48">Motor Bikes:</li>
                <br />
                <ul>
                    <li className="text-3xl text-justify  ml-48 mr-48 mt-4">01- Honda CD 70CC : 550$ <AddToCartButton/></li>
                    <li className="text-3xl text-justify  ml-48 mr-48 mt-4">02- Honda CG 125CC : 1050$ <AddToCartButton/></li>
                    <li className="text-3xl text-justify  ml-48 mr-48 mt-4">03- Honda CB 200CC : 1700$ <AddToCartButton/></li>

                </ul>
                <li className="text-5xl text-justify ml-48 mt-24 mr-48">Ovens:</li>
                <br />
                <ul>
                    <li className="text-3xl text-justify  ml-48 mr-48 mt-4">01- Microwave : 500$ <AddToCartButton/></li>
                    <li className="text-3xl text-justify  ml-48 mr-48 mt-4">02- Backing : 600$ <AddToCartButton/></li>
                    <li className="text-3xl text-justify  ml-48 mr-48 mt-4">03- All In One : 700$ <AddToCartButton/></li>

                </ul>
            </ul>
            <button className="bg-red-600 text-white ml-12 mt-24  h-12"><Link href='http://localhost:3000/'>Back To Home Page</Link></button>

        </main>
    )
}
export default prices