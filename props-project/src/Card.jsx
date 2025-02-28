
import ProductCard from "./ProductCard"
 import Samsung from "./assets/samsung.jpeg"
 import apple from "./assets/apple.jpeg"
 import Redmi from "./assets/Redmi.jpeg"
const Card = () => {
  return (
   
    <div className="Product flex items-center justify-center flex-wrap gap-5">
    <ProductCard image= {Samsung} 
        title="Samsung F209"
        price= '₹ 6299'
       Ram = "64 GB ROM | Expandable Upto 1 TB"
       Display= "17.12 cm (6.74 inch) HD+ Display"
       Camera= "50MP+2MP | 8MP Front Camera"
       Battery = '5000 mAh'
       Processor = "Helio G85.5"
       Warrenty ="1 Year Manufacturer Warranty for Device and 6 Months Manufacturer."
    />
    <ProductCard  image= {apple}  
     title="Apple iPhone 13"
     price= '₹ 44,999'
    Ram = "128 GB ROM | Expandable Upto 1 TB"
    Display= "15.49 cm (6.1 inch) Super Retina XDR Display"
    Camera= "12MP + 12MP | 12MP Front Camera"
    Battery = '3240 mAh'
    Processor = "A15 Bionic Chip Processor "
    Warrenty ="1 year warranty for phone and in Box Accessories."
    />
 <ProductCard  image = {Redmi} 
 
 title="Redmi 13C"
 price= '₹ 10,670'
Ram = "6 GB RAM | 128 GB ROM "
Display= "17.12 cm (6.74 inch) Display"
Camera= "50MP Rear Camera"
Battery = '5000 mAh'
Processor = "Mediatek "

Warrenty ="1 year warranty for phone and  in Box Accessories."

 
 />
     



    </div>




  )
}

export default Card