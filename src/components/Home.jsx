import { motion } from "framer-motion"
import logo from "../assets/serviceBg.webp"
const Home = () => {
    return (
        <div>
            <div className=' flex flex-wrap p-5 bg-black text-white justify-evenly'>
                <motion.div
                    initial={{ x: -100, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    whileHover={{ scale: 1.09 }}
                    transition={{ ease: "easeOut", duration: 3 }}
                    className=" w-full xl:w-1/4 my-4 blurHome p-5 rounded-2xl shadow-2xl shadow-blue-600 mx-2 flex flex-col items-center">

                    <motion.h1
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ ease: "easeInOut", duration: 3 }}
                        className="text-[23px] text-center font-serif font-bold my-3">What is COLCON AI?</motion.h1>
                    <img src={logo} alt="image" className=" h-[200px] w-[450px] rounded-2xl my-2 text-center" />
                    <p
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ ease: "easeInOut", duration: 3 }}
                        className="mt-4 font-medium">COLCON AI is an advanced artificial intelligence platform designed to revolutionize communication. It empowers users with cutting-edge natural language processing capabilities, streamlining interactions and enhancing productivity.</p>
                </motion.div>

                <motion.div
                    initial={{ y: 200 }}
                    animate={{ y: 0 }}
                    transition={{ ease: "easeOut", duration: 3 }}
                    className=" w-full xl:w-1/4 my-4 homeBgImage hover:bg-slate-100 p-5 rounded-2xl shadow-2xl shadow-neutral-800 mx-2 hidden xl:block">

                </motion.div>
                <motion.div
                    initial={{ x: 100, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    whileHover={{ scale: 1.09 }}
                    transition={{ ease: "easeOut", duration: 3 }}
                    className=" w-full xl:w-1/4 my-4 bg-transparent blurHome p-5 rounded-2xl shadow-2xl shadow-blue-600 mx-2 flex flex-col items-center">
                    <motion.h1
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ ease: "easeInOut", duration: 3 }}
                        className="text-[25px] text-center font-serif font-bold my-3">OBJECTIVE</motion.h1>
                    <img src={logo} alt="image" className=" h-[200px] w-[450px] rounded-2xl my-2 text-center" />
                    <p
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ ease: "easeInOut", duration: 3 }}
                        className="mt-4 font-medium">The objective of Colcon AI is to transform how individuals and businesses communicate, by providing intuitive and efficient AI-powered solutions. We aim to simplify complex interactions, foster collaboration, and drive innovation in diverse sectors.</p>
                </motion.div>
            </div>
        </div>
    )
}

export default Home