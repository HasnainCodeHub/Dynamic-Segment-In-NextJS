import Link from "next/link"



function contact() {
    return (
        <main className="bg-pink-100 h-full">
            <h1 className="text-9xl text-center bg-orange-500 text-white">Contact Us</h1>
            <h1 className="text-3xl text-center text-black ml-48 mt-24 mr-48">Phone:+923702537927 </h1>
            <h1 className="text-3xl text-center text-black ml-48  ">Email:azeemhusnain048@gmail.com </h1>
            <h1 className="text-3xl text-center text-black ml-40 mr-44 ">Instagram:Has_Nain_333 </h1>
            <button className="bg-red-600 text-white ml-12 mt-24 h-12"><Link href='http://localhost:3000/'>Back To Home Page</Link></button>

        </main>
    )
}

export default contact