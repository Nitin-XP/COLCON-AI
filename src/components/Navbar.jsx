import { motion } from 'framer-motion';
import { NavLink } from 'react-router-dom';
import logo from '../assets/logo.webp';
import logo2 from '../assets/logo2.webp';
import logo3 from '../assets/logo3.webp';
import '../styles.css';

const imgArray = new Array(logo, logo2, logo3);

const Navbar = () => {
    return (
        <div className="p-4 sm:p-8 sm:w-screen navImg text-white flex flex-col md:flex-row sm:justify-between gap-2 sm:gap-0 justify-center items-center font-serif font-bold h-[300px] sm:h-[200px] lg:h-[100px] overflow-y-hidden">

            <div className="flex flex-row items-center gap-4 overflow-hidden">
                <NavLink to="/"><motion.img initial={{ y: -100 }} animate={{ y: 0 }} transition={{ ease: "easeInOut", duration: 1.3 }} className="w-24 h-24 hover:overflow-y-hidden" src={imgArray[Math.floor(Math.random() * 3)]} alt="Logo" /></NavLink>
                <NavLink to="/"><motion.h3 initial={{ y: -100 }} animate={{ y: 0 }} transition={{ ease: "easeInOut", duration: 1.3 }} className=" text-[25px]">COLCON AI</motion.h3></NavLink>
            </div>

            <motion.div initial={{ y: -100 }} animate={{ y: 0 }} transition={{ ease: "easeInOut", duration: 1.3 }} className=" m-4 text-[20px] justify-center flex flex-wrap sm:flex-row gap-12 sm:gap-14 md:gap-10 lg:gap-14 items-center overflow-y-hidden">
                <div className="hover:text-[#61fcff] p-1 hover:rounded-2xl">
                    <NavLink to="/">Home</NavLink>
                </div>
                <div className="hover:text-[#61fcff] p-1 hover:rounded-2xl">
                    <NavLink to="/about">About</NavLink>
                </div>
                <div className="hover:text-[#61fcff] p-1 hover:rounded-2xl">
                    <NavLink to="/services">Services</NavLink>
                </div>
                <div className="hover:text-[#61fcff] p-1 hover:rounded-2xl">
                    <NavLink to="/contact">Contact</NavLink>
                </div>
            </motion.div>
        </div>
    )
}
export default Navbar;