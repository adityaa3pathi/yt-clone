import { useDispatch } from "react-redux"
import { toggleMenu } from "../utils/appSlice";







export default function Header() {



const search_icon = <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
<path stroke-linecap="round" stroke-linejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
</svg>


const dispatch = useDispatch();



const handleToggleMenu = () => dispatch(toggleMenu()); 


   return (
    <div className="relative">
     <header className=" grid-flow-col " >
        <div className=" w-full h-14 flex  flex-row pl-4 pr-4 shadow-sm items-center cursor-pointer" >
                            <button className=" p-2" onClick={handleToggleMenu}>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5 " className="w-6 h-6"/>
                </svg>
                </button>
                <div className="flex w-24 h-5 ml-4 mr-4 ">
                    <img src="https://vectorseek.com/wp-content/uploads/2021/01/YouTube-Logo-Vector.png" className=""></img>
                </div>
               
                <div className="flex h-10 relative pl-2">
                    <input type="text" placeholder="Search" className=" border border-gray-300 rounded-l-full p-4"/>
                    <button className=" border border-gray-300 rounded-r-full h-10 w-16 ">
                        <div className="pl-5">
                        {search_icon}
                </div>
                </button>
                
                <div className="absolute top-full bg-white w-full mt-1 rounded-r-md">
                    <ul className=" pt-2">
                        <li className="flex py-2 shadow-sm hover:bg-gray-100"> <div className=" px-4">{search_icon} </div>search Suggestion 1 </li>
                        <li className="flex py-2 shadow-sm hover:bg-gray-100"> <div className=" px-4">{search_icon} </div>search Suggestion 1 </li>
                       
                        
                      
                    </ul>
                    </div>
                
                </div>
               
                <div className=" w-40 h-10 flex items-center justify-end">
                    <div className="flex ">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                <path stroke-linecap="round" stroke-linejoin="round" d="m15.75 10.5 4.72-4.72a.75.75 0 0 1 1.28.53v11.38a.75.75 0 0 1-1.28.53l-4.72-4.72M4.5 18.75h9a2.25 2.25 0 0 0 2.25-2.25v-9a2.25 2.25 0 0 0-2.25-2.25h-9A2.25 2.25 0 0 0 2.25 7.5v9a2.25 2.25 0 0 0 2.25 2.25Z" />
                </svg>

                    </div>
                    <div>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                <path stroke-linecap="round" stroke-linejoin="round" d="M14.857 17.082a23.848 23.848 0 0 0 5.454-1.31A8.967 8.967 0 0 1 18 9.75V9A6 6 0 0 0 6 9v.75a8.967 8.967 0 0 1-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 0 1-5.714 0m5.714 0a3 3 0 1 1-5.714 0" />
                </svg>

                    </div>
                    <div>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                <path stroke-linecap="round" stroke-linejoin="round" d="M17.982 18.725A7.488 7.488 0 0 0 12 15.75a7.488 7.488 0 0 0-5.982 2.975m11.963 0a9 9 0 1 0-11.963 0m11.963 0A8.966 8.966 0 0 1 12 21a8.966 8.966 0 0 1-5.982-2.275M15 9.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                </svg>

                    </div>


                </div>
        </div>
    </header>
    </div>
   )
}