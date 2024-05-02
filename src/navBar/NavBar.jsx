import './navBar.css';
import { NavLink, Outlet } from 'react-router-dom';
import { BsThreeDotsVertical } from "react-icons/bs";
import { IoCartOutline } from "react-icons/io5";
import { FiUser } from "react-icons/fi";
import { useState, useEffect } from 'react'
import RegisterForm from "../registerForm/Registration.jsx";

const NavBar = () => {
    const [showForm, setShowForm] = useState(false);
    useEffect(() => {
        if (showForm) {
          document.body.style.overflow = 'hidden';
        } else {
          document.body.style.overflow = 'visible';
        }
        // Clean up to re-enable scrolling when the component unmounts
        return () => {
          document.body.style.overflow = 'visible';
        };
      }, [showForm]);
    return(
        <div className="main-container">
            <header>
              <div className="profile">
                <NavLink to={"here"}><FiUser/></NavLink>
                <NavLink to={"panier"}><IoCartOutline/></NavLink>
              </div>
                    <nav>
                        <NavLink to={"/"}>Home</NavLink>
                        <NavLink to={"aboutUs"}>A propos</NavLink>
                        <button className='btn-connect-main flex' onClick={() => setShowForm(true)}>Offres et promotions</button>
                    </nav>
                    { showForm && <RegisterForm setShowForm={setShowForm} />}
            </header>
            <main>
                <Outlet/>
            </main>
        </div>
    )
}
export default NavBar;