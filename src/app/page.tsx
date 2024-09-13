import Navbar from "./navbar/page";
import About from "./About/page";
import Prices from "./Prices/page";
import Contact from "./Contact/page";
import Products from "./Products/page";


export default function Home() {
  return (
    <main className="bg-image">
      <Navbar />
<div className="w-4/5">
  <p className=" bg-gradient-to-tr bg-yellow-100 text-9xl font-serif ml-60 mt-12 ">Welcome To Hasnain's Electronics</p>
</div>
      <Products />
      <Prices/>
      <About />
      <Contact/>
    

    </main>
  );
}
