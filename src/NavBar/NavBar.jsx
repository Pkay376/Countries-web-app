import { HiOutlineMoon} from "react-icons/hi";

const NavBar = () => {
  return (
  <div className='bg-white shadow-md flex flex-row justify-between items-center px-12 py-5'>
      <div className="flex items-center gap-5">
            <h3>Where in the World?</h3>
      </div>
     <div className="flex items-center gap-5">
          <HiOutlineMoon/> 
          <p>Dark Mode</p>
      </div>
       
        
  </div>
  )
}

export default NavBar