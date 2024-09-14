import Link from "next/link"

function About(){
    return(
        <main className="bg-pink-100 h-full">
            <h1 className="text-9xl text-center bg-orange-500 text-white">About Us</h1>
            <h1 className="text-4xl text-justify text-black ml-64 mt-24 mr-64">Welcome to Hasnain Electronics, your go-to destination for all things laptops! Whether you're a tech enthusiast, a student, a professional, or someone just looking to upgrade your current device, we've got you covered.

At Hasnain Electronics, we are passionate about helping you find the perfect laptop that meets your needs and budget.
<br />
<br />
 Our team of experts is dedicated to providing you with in-depth reviews, comprehensive buying guides, and the latest news on the newest models hitting the market. We understand that buying a laptop is a significant investment, so we aim to equip you with the knowledge you need to make an informed decision.
<br />
<br />
We pride ourselves on being a trusted resource, offering unbiased advice and the most up-to-date information. Our goal is to simplify the laptop buying process, making it easier for you to navigate the wide array of options available. From powerful gaming laptops to budget-friendly notebooks, we cover it all.
<br />
<br />
Thank you for choosing Hasnain Electronics as your trusted source for laptops. We're excited to help you find the laptop that's perfect for you!</h1>
<button className="bg-red-600 text-white ml-12 mt-24 h-12"><Link href ='/'>Back To Home Page</Link></button>


        </main>
    )
}

export default About
