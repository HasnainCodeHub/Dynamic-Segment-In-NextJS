import mainImage from './mainHome.jpg'
import Image from "next/image";


function MainImage(){
    return (<main>
  <Image src={mainImage} alt=""></Image>
  </main>
    )
}
export default MainImage