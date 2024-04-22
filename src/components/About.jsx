import { easeInOut, motion } from 'framer-motion'
import about from '../assets/about.webp'
import '../styles.css'
const About = () => {
    return (
        <>
            <div className="pt-4 bg-white w-full overflow-x-hidden flex flex-col max-w-full ">
                <motion.h1 initial={{ y: -100 }} animate={{ y: 0 }} transition={{ easings: easeInOut, duration: 1.2 }} className="font-serif font-bold text-center items-center w-full text-6xl md:typewriter text-black my-4 mt-8 overflow-y-hidden ">Who Are We?</motion.h1>
                <div className="px-4 max-w-full mt-2 flex flex-col lg:flex-row justify-center items-center gap-0">
                    <div className="mt-4 p-4 flex xl:flex-row xl:flex-1 sm:flex-col sm:flex-wrap flex-grow flex-col justify-center rounded-2xl ">
                        <motion.div initial={{ x: -100 }} animate={{ x: 0 }} transition={{ easings: easeInOut, duration: 1.2 }} className="p-4 flex flex-col xl:w-[50%]">
                            <p className="font-semibold font-sans text-lg text-center lg:text-left">COLCON AI is your gateway to harnessing the transformative power of Artificial Intelligence (AI) for language conversion and enhancement. Our platform offers a revolutionary code language converter, empowering users with the ability to seamlessly translate code snippets between different programming languages, streamlining development processes and fostering cross-language collaboration.</p>
                            <p className="font-semibold font-sans text-lg text-center lg:text-left mt-4">Beyond code conversion, COLCON AI boasts an array of AI-driven features, including grammar correction, spell checking, and more, ensuring impeccable language quality and accuracy in your projects. With COLCON AI, you have the tools to elevate your coding experience to new heights, enabling smoother communication, enhanced productivity, and unparalleled precision in your coding endeavors.</p>
                            <p className="font-semibold font-sans text-lg text-center lg:text-left mt-4">Join us on this journey towards smarter, more efficient coding, where the possibilities are limitless and the future is AI-powered.</p>
                        </motion.div>
                        <motion.img initial={{ x: 200 }} animate={{ x: 0 }} transition={{ easings: easeInOut, duration: 1.2 }} src={about} alt="about" className=" w-auto p-2 mx-auto " />
                    </div>
                </div>
            </div>


        </>
    )
}
export default About