import { motion } from 'framer-motion';
import { Link, Outlet } from 'react-router-dom';
import { allServices } from '../constants/constants.js';

const Services = () => {
    const scrollToElement = () => {
        const targetElement = document.getElementById('targetElementId');
        if (targetElement) {
            targetElement.scrollIntoView({ behavior: 'smooth' });
        }
    };
    return (
        <>
            <div className="serviceBg text-white max-w-[100%]">
                <motion.div initial={{ y: -200 }} animate={{ y: 0 }} transition={{ duration: 1.5 }} className="flex flex-col flex-1 justify-center items-center max-w-[100%]">
                    <p className="font-serif justify-center text-center items-center text-[15px] font-extrabold mt-4">What We Provide?</p>
                    <h1 className="font-serif justify-center text-center items-center text-[40px] font-extrabold mt-1">Services</h1>
                    {/* <p className="mb-3 text-stone-600 font-serif font-semibold text-center p-6 text-[30px] max-w-[100%] ">Discover our AI-powered services tailored to streamline your coding experience. From code language conversion to error resolution, our innovative solutions harness the power of artificial intelligence to enhance productivity and accuracy in your projects. Say goodbye to language barriers and coding challenges - welcome to a new era of seamless development with our cutting-edge AI services.</p> */}
                </motion.div>
                <div className="mt-3 p-[5%] flex flex-wrap justify-evenly">
                    {allServices.map((service, index) => (
                        <Link
                            key={service.head}
                            to={`/services/${service.head}`}
                            className="w-full md:w-1/3 lg:w-1/4 my-4 serviceCards hover:bg-slate-100 p-5 rounded-2xl shadow-2xl shadow-neutral-800 mx-2"
                        >
                            <motion.div initial={{ y: -200, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ duration: 1 }} id={`card-${index}`} onClick={scrollToElement}>
                                <h1 className="text-center font-serif font-bold text-[30px]">{service.mainHead}</h1>
                                <p className="text-center font-serif text-[20px] mt-3">{service.para}</p>
                            </motion.div>
                        </Link>
                    ))}
                </div>

                <Outlet />
            </div >
        </>
    )
}

export default Services