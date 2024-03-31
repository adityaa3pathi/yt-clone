import { useSelector } from "react-redux"
import { Link } from "react-router-dom";



export default function Sidebar()  {
  

    const isMenuOpen = useSelector((store) => store.app.isMenuOpen);

    if(!isMenuOpen) return null;

    return ( 
            <div className="p-5 shadow-lg w-48">
               <Link to={"/"}> <h2>Home</h2></Link>
                <h2>shorts</h2>
                <h2>Subscriptions</h2>
                <ul>
               <li>Channel 1</li>
                <li>Channel 4</li>
                <li>Channel 3</li>
                <li>Channel 2</li>
                </ul>
                <h2>Explore</h2>
                <ul>
                    <li>Trending</li>
                    <li>Music</li>
                    <li>Shopping</li>
                    <li>Gaming</li>
                </ul>

            </div>

    )

}