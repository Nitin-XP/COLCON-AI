import { easeInOut, motion } from 'framer-motion'
import { NavLink } from 'react-router-dom'

const Connect = () => {
    return (
        <>
            <footer className="footerBgImage">
                <div className=" footerBgImage bg-black w-full px-10 pt-10 font-serif">
                    <div className="icons flex items-center justify-center">
                        <NavLink to={`https://github.com/Nitin-XP`} className=" rounded-full p-4 decoration-none m-1  text-white "><i className="fa-brands fa-github overflow-hidden text-[1.9em] opacity-[0.9] "></i></NavLink>

                        <NavLink to={`https://www.instagram.com/_moneywise_nitin_?igsh=MTEzbjdwa2RsMm1yNw==`} className=" rounded-full p-4 decoration-none m-1  text-white hover:text-[#FCAF45] "><i className="fa-brands fa-instagram overflow-hidden text-[1.9em] opacity-[0.9] "></i></NavLink>

                        <NavLink to={`/`} className=" rounded-full p-4 decoration-none m-1  text-white hover:text-[#25D366] "><i className="fa-brands fa-whatsapp overflow-hidden text-[1.9em] opacity-[0.9] "></i></NavLink>

                        <NavLink to={`https://twitter.com/NITINKUMAR1501`} className=" rounded-full p-4 decoration-none m-1  text-white hover:text-[#1DA1F2] "><i className="fa-brands fa-twitter overflow-hidden text-[1.9em] opacity-[0.9] "></i></NavLink>

                        <NavLink to={`https://www.linkedin.com/in/nitin-kumar-181547226`} className=" rounded-full p-4 decoration-none m-1  text-white hover:text-blue-600 border-white "><i className="fa-brands fa-linkedin overflow-hidden text-[1.9em] opacity-[0.9] "></i></NavLink>
                    </div>
                    <div className="footerNav">
                        <ul className="flex flex-col sm:flex-row justify-center items-center">
                            <li className="m-2 sm:m-0"><NavLink to={`/home`} className="text-white m-5 text-[20px] opacity-[0.8] transition-[0.5s] hover:opacity-[1]" >Home</NavLink></li>
                            <li className="m-2 sm:m-0"><NavLink to={"/about"} className="text-white m-5 text-[20px] opacity-[0.8] transition-[0.5s] hover:opacity-[1]" >About</NavLink></li>
                            <li className="m-2 sm:m-0"><NavLink to={"/services"} className="text-white m-5 text-[20px] opacity-[0.8] transition-[0.5s] hover:opacity-[1]" >Service</NavLink></li>
                            <li className="m-2 sm:m-0"><NavLink to={"/contact"} className="text-white m-5 text-[20px] opacity-[0.8] transition-[0.5s] hover:opacity-[1]" >Contact</NavLink></li>
                        </ul>
                    </div>
                    <motion.div initial={{ y: 100 }} animate={{ y: 0 }} transition={{ ease: easeInOut, duration: 1.2 }} className="footerBottom  px-5 my-9 items-center">
                        <p className="text-white text-center mt-4" >Developed by <span className=" my-8 text-cyan-100 mx-1 font-semibold hover:text-cyan-400"><NavLink to={`https://portfolio-of-nitin.netlify.app/`}>NITIN KUMAR</NavLink></span></p>
                        <p className="text-white text-center">Copyright &copy;2024; All Rights Reserved! </p>
                    </motion.div>
                </div>
            </footer>
        </>
    )
}

export default Connect