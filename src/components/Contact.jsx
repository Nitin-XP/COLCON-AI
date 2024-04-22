import emailjs from '@emailjs/browser';
import { motion } from 'framer-motion';
import { useRef, useState } from 'react';
import "../styles.css";

const Contact = () => {
    const formref = useRef();
    const [form, setForm] = useState({
        name: '',
        email: '',
        message: '',
    });
    const [loading, setLoading] = useState(false);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setForm({ ...form, [name]: value })

    }
    const handleSubmit = (e) => {
        e.preventDefault();
        setLoading(true);

        emailjs.send(
            'service_tem4aqm',
            'template_fx9nuem',
            {
                from_name: form.name,
                to_name: 'Nitin',
                to_email: 'nitinkumar150103@gmail.com',
                message: form.message,
            },
            'kyYhrU0Ag2qH4JOWE'
        ).then(() => {
            setLoading(false);
            alert("Thank You! I'll get back to you as soon as Possible.");
            setForm({
                name: '',
                email: '',
                message: '',
            });
        }, (error) => {
            setLoading(false);
            console.log(error);
            alert("Something Went Wrong!")
        });
    }
    return (
        <div className=" bgImage font-serif overflow-hidden py-4">
            <motion.div initial={{ y: -200 }} animate={{ y: 0 }} transition={{ duration: 1.5 }} className=" text-center my-3 p-4 cursor-default transition-[5s]">
                <p className="sm:text-[18px] text-[14px] font-serif text-white uppercase tracking-wider">Get In Touch</p>
                <h3 className="text-white font-black font-serif md:text-[60px] sm:text-[50px] xs:text-[40px] text-[30px]">Contact</h3>
            </motion.div>

            <div className=" flex flex-col md:flex-row w-full gap-3 p-8">
                <motion.form initial={{ x: -400 }} animate={{ x: 0 }} transition={{ duration: 1.5 }} action="" ref={formref} onSubmit={handleSubmit} className="mt-12 flex flex-col md:w-full gap-8 ">

                    <label htmlFor="" className="flex flex-col text-[20px] md:text-[16px] "><span className="text-white mb-4 font-semibold">Your Name</span></label>
                    <input type="text" name="name" value={form.name} onChange={handleChange} placeholder="What's your name?" className=" py-4 px-6 placeholder:text-black text-gray-700 rounded-lg outline-none border-black font-medium" />

                    <label htmlFor="" className="flex flex-col text-[20px] md:text-[16px] "><span className="text-white mb-4 font-semibold">Your Email</span></label>
                    <input type="email" name="email" value={form.email} onChange={handleChange} placeholder="What's your Email?" className="py-4 px-6 placeholder:text-black text-gray-700 rounded-lg outline-none border-black font-medium" />

                    <label htmlFor="" className="flex flex-col text-[20px] md:text-[16px] "><span className="text-white mb-4 font-semibold">Your Message</span></label>
                    <textarea rows="7" name="message" value={form.message} onChange={handleChange} placeholder="What do you want to say?" className="py-4 px-6 placeholder:text-black text-gray-700 rounded-lg outline-none border-black font-medium" />

                    <button type='submit' className=" bg-cyan-300 mb-4 py-3 px-8 outline-none m-auto w-fit text-black font-bold shadow-md shadow-primary rounded-xl hover:text-black hover:bg-yellow-400 font-serif ">
                        {loading ? "Sending" : 'Send'}
                    </button>
                </motion.form>

                <motion.div initial={{ x: 400 }} animate={{ x: 0 }} transition={{ duration: 1.5 }} className=" bg-transparent mt-11 w-full p-9 items-center justify-center text-white">
                    <div className=" mt-[5px] flex-1 md:ml-[90px] md:px-15 rounded-2xl border blurEffect">
                        <div className="p-4">
                            <h1 className=" text-[20px] font-semibold"><span><i className="fa-solid fa-location-dot text-yellow-300"></i>&nbsp;&nbsp;</span>&nbsp;Address</h1>
                            <p className=' text-[16px] font-medium pl-7 mt-3 '>E1-1806, EcoVill, Greater Noida West, India.</p>
                        </div>
                        <div className="p-4">
                            <h1 className=" text-[20px] font-semibold"><i className='fa-sharp fa-solid fa-phone text-yellow-300'></i>&nbsp;&nbsp;&nbsp;Let's Talk</h1>
                            <p className=' text-[16px] font-medium pl-7 mt-3 '>+91 9958695925</p>
                        </div>
                        <div className="p-4">
                            <h1 className=" text-[20px] font-semibold"><i className="fa-regular fa-envelope text-yellow-300"></i>&nbsp;&nbsp;&nbsp;General Support</h1>
                            <p className=' text-[16px] font-medium pl-7 mt-3 break-words '>multipurposemail15@gmail.com</p>
                        </div>
                    </div>
                </motion.div>
            </div>

        </div>
    )
}

export default Contact