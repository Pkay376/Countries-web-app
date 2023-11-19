import { BsArrowLeft } from "react-icons/bs";

const CountryDetails = () => {
  return (
<>
  <button type="button" className='mt-3 inline-flex w-1/3 items-center gap-2 justify-center rounded-md  px-3 py-2 text-sm font-semibold  shadow-sm  hover:bg-gray-50 sm:mt-0 sm:w-auto'>
      <span>
         <BsArrowLeft/>
      </span>
      Back
</button>
 
 <div className = 'bg-white w-2/3 mx-auto mt-5 shadow-sm h-full md:w-full md:flex gap-10'>

     <div className = 'px-4 lg:w-1/2'>
         <div>
             <img src="https://flagcdn.com/w320/uy.png" className ='w-10 lg:h-11/12 lg:w-11/12 rounded-tl-md rounded-md lg:h-64 lg:w-10 xl:h-64 lg:mt-10 ' alt="Belgium"/>  
         </div>
     </div>   
      
      <div className="Card px-5 flex flex-col items-start gap-1 py-4">
           <p className='text-md font-bold px-5 '>Belgium</p>
            <p className="text-md font-medium lg:mt-10 ">Native name: <span className="text-md font-normal text-gray-400">Belgie</span></p>
           <p className="text-md font-medium ">Population: <span className="text-md font-normal text-gray-400">11,319,511</span></p>
           <p className="text-md font-medium">Region: <span className="text-md font-normal text-gray-400">Europe</span></p>
           <p className="text-md font-medium">Sub region: <span className="text-md font-normal text-gray-400">Western Europe</span></p>
            <p className="text-md font-medium">Capital: <span className="text-md font-normal text-gray-400">Brussels</span> </p>

      </div>
      <div className="mt-5  flex flex-col  gap-1 py-4 px-4 items-start lg:mt-16">
         <p className="text-md font-medium">Top Level Domain: <span className="text-md font-normal text-gray-400">.be</span> </p>
         <p className="text-md font-medium">Currencies: <span className="text-md font-normal text-gray-400">Euro</span> </p>
         <p className="text-md font-medium">Languages: <span className="text-md font-normal text-gray-400">Dutch,French,German</span> </p>
      </div>
     
        
 </div>

 <div className = "flex flex-wrap lg:items-center gap-4 mt-2">
         <p className="text-md font-medium mt-5 px-5">Border Countries: </p>
         <div className="flex justify-evenly mt-3">
            <button className="bg-white-900 hover:bg-blue-700 text-gray font-bold py-3 px-4 rounded">France</button>
            <button className="bg-white-900 hover:bg-blue-700 text-gray font-bold py-3 px-4 rounded">Germany</button>
            <button className="bg-white-900 hover:bg-blue-700 text-gray font-bold py-3 px-4 rounded">Netherlands</button>
         </div>
      </div>
 </>
 
  )
}

export default CountryDetails