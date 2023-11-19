

const Country = () => {
  return (
 <div className = 'bg-white w-2/3 mx-auto mt-5 shadow-sm'>
     <div className = 'w-full'>
            <img src="https://flagcdn.com/w320/uy.png"className ='w-full' alt="Germany"/>
            <p className='text-md font-bold px-5'>Germany</p>
      </div>
      <div className="Card py-10 px-5">
          
           <p className="text-md font-medium ">Population: <span className="text-md font-normal text-gray-400">81,770,900</span></p>
           <p className="text-md font-medium">Region: <span className="text-md font-normal text-gray-400">Europe</span></p>
            <p className="text-md font-medium">Capital: <span className="text-md font-normal text-gray-400">Berlin</span> </p>

        </div>
       
 </div>
  )
}

export default Country