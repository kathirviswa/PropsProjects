
// function ProductCard (props) {
 
//     return (
//       <div className="product-card flex w-80 bg-slate-100  overflow-hidden  p-3 shadow-3xl  rounded-2xl box-content">
//         {/* //Product Card */}
//         <div className="product-item ">
//           <img
//             src = {props.image}
//             className="w-full h-80 object-contain"
//             alt="Product Image"  
           
//           />
//           <h2 className="text-xl font-semibold mt-5 pl-2">
//             {/* samsung F205 */} {props.title}
//            </h2>
//           <p className="font-semibold text-[18px] text-emerald-600 m-2">
//             <span className="text-red-500">Price :</span>
//           {/* ₹6,299  */} {props.price}
//           </p>
//           {/* //Specifications */}
//           <div className="product-specifications mt-3 font-semibold text-xl pl-2 ">
//             <p className=" text-[17px] font-medium">
//               <span className="text-[18px]   text-red-500 font-semibold ">
//                 RAM :
//               </span> 
//             {/* 64 GB ROM | Expandable Upto 1 TB  */} {props.Ram}
//             </p>
//             <p className="text-[17px] font-medium">
//               <span className="text-[18px]  text-red-500 font-semibold">
//                 Display :
//               </span>
            
//               {/* 17.12 cm (6.74 inch) HD+ Display  */} {props.Display}
//             </p>
//             <p className="text-[17px] font-medium">
//               <span className="text-[18px]   text-red-500 font-semibold">
//                 Camera :   
//               </span>
//                {/* 50MP+2MP | 8MP Front Camera  */} {props.Camera}
//             </p>
//             <p className=" text-[17px] font-medium">
//               <span className="text-[18px]  text-red-500 font-semibold">
//                 Battery :
//               </span>
//            {/* 5000 mAh  */} {props.Battery}
//             </p>
//             <p className=" text-[17px] font-medium">
//               <span className="text-[18px] text-red-500 font-semibold">
//                 Processor :
//               </span>
//                 {/* Helio G85.5  */} {props.Processor}
//             </p>
//             <p className=" text-[17px] font-medium mb-4">
//               <span className="text-[18px] text-red-500 font-semibold">
//                 Warrenty :
//               </span>
//                 {props.Warrenty}
//                {/* 1 Year Manufacturer Warranty for Device and 6 Months Manufacturer.  */}
//               </p>
//             {/* Product btn */} 
  
//             <button className="buy-button bg-none border-1 border-amber-700 hover:bg-amber-500 hover:text-white text-black font-sans  text-center rounded-3xl w-full h-full p-3 pt-2 py-2 uppercase
//              duration-[.3s linear]">
//               Buy Now
//             </button>
//           </div>
//         </div>
//       </div>
//     );
//   }
//   export default ProductCard;


//Destructuring 
  function ProductCard ({image,title,price,Ram,Display,Camera,Battery,Processor,Warrenty}) {
 
    return (
      <div className="product-card flex w-80 bg-slate-100  overflow-hidden  p-3 shadow-3xl  rounded-2xl box-content">
        {/* //Product Card */}
        <div className="product-item ">
          <img
            src = {image}
            className="w-full h-80 object-contain"
            alt="Product Image"  
           
          />
          <h2 className="text-xl font-semibold mt-5 pl-2">
            {/* samsung F205 */} {title}
           </h2>
          <p className="font-semibold text-[18px] text-emerald-600 m-2">
            <span className="text-red-500">Price :</span>
          {/* ₹6,299  */} {price}
          </p>
          {/* //Specifications */}
          <div className="product-specifications mt-3 font-semibold text-xl pl-2 ">
            <p className=" text-[17px] font-medium">
              <span className="text-[18px]   text-red-500 font-semibold ">
                RAM :
              </span> 
            {/* 64 GB ROM | Expandable Upto 1 TB  */} {Ram}
            </p>
            <p className="text-[17px] font-medium">
              <span className="text-[18px]  text-red-500 font-semibold">
                Display :
              </span>
            
              {/* 17.12 cm (6.74 inch) HD+ Display  */} {Display}
            </p>
            <p className="text-[17px] font-medium">
              <span className="text-[18px]   text-red-500 font-semibold">
                Camera :   
              </span>
               {/* 50MP+2MP | 8MP Front Camera  */} {Camera}
            </p>
            <p className=" text-[17px] font-medium">
              <span className="text-[18px]  text-red-500 font-semibold">
                Battery :
              </span>
           {/* 5000 mAh  */} {Battery}
            </p>
            <p className=" text-[17px] font-medium">
              <span className="text-[18px] text-red-500 font-semibold">
                Processor :
              </span>
                {/* Helio G85.5  */} {Processor}
            </p>
            <p className=" text-[17px] font-medium mb-4">
              <span className="text-[18px] text-red-500 font-semibold">
                Warrenty :
              </span>
                {Warrenty}
               {/* 1 Year Manufacturer Warranty for Device and 6 Months Manufacturer.  */}
              </p>
            {/* Product btn */} 
  
            <button className="buy-button bg-none border-1 border-amber-700 hover:bg-amber-500 hover:text-white text-black font-sans  text-center rounded-3xl w-full h-full p-3 pt-2 py-2 uppercase
             duration-[.3s linear]">
              Buy Now
            </button>
          </div>
        </div>
      </div>
    );
  }
  export default ProductCard;
  