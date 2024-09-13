import Link from "next/link";

export default function Navbar() {
  return (
    <main>
      <div className="h-16 w-full bg-pink-200">


        <div>


          <button className="bg-orange-500 text-white rounded-3xl h-8 w-20 ml-56 mx-5 my-4"><Link href='/'>Home </Link ></button>
          <button className="bg-orange-500 text-white rounded-3xl h-8 w-20 mx-5"><Link href='/Products'>Products</Link></button>
          <button className="bg-orange-500 text-white rounded-3xl h-8 w-20 mx-5"><Link href='/Prices'>Prices</Link></button>
          <button className="bg-orange-500 text-white rounded-3xl h-8 w-20 mx-5 "><Link href='/About'>About Us</Link></button>
          <button className="bg-orange-500 text-white rounded-3xl h-8 w-30 mx-5"><Link href='/Contact'>Contact Us</Link></button>
          <input type="input" placeholder="Search Items" className="ml-96 border border-black" />


        </div>


      </div>


    </main>
  );
}
