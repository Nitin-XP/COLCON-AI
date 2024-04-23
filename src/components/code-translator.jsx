import OpenAI from "openai";
import { useState } from 'react';
import { programmingLang } from "../constants/constants";

const openaiKey = import.meta.env.VITE_API_KEY;
const openai = new OpenAI({ apiKey: openaiKey, dangerouslyAllowBrowser: true });

const Service1 = () => {
    let [prompt, setPrompt] = useState('');
    const [response, setResponse] = useState('Output Will be Displayed here!');

    const handleSubmit = async (e) => {
        e.preventDefault();
        document.getElementById("submitButton").disabled = true;

        let language = document.getElementById("language").value;
        setResponse("Loading...")
        prompt = "Return only Converted code in" + language + " for " + prompt + "If the above is not a code, then return Invalid Input!";
        const completion = await openai.chat.completions.create({
            messages: [{ role: "system", content: prompt }],
            model: "gpt-3.5-turbo",
        });

        console.log(completion.choices[0].message.content);
        setResponse(completion.choices[0].message.content);

        document.getElementById("submitButton").disabled = false;
    }

    const copyText = () => {
        navigator.clipboard.writeText(response);
        alert("Copied to ClipBoard!")
    }


    return (
        <div className=" text-white bgImageServices py-4">
            <div>
                <h1 className="text-[30px] font-extrabold text-center font-serif ">Code Language Converter</h1>
                <p className=" font-serif text-[20px] text-center p-5 ">Experience the Premier Feature of COLCON AI: Seamlessly Translate Your Programming Code into Any Language!<br />Empower your coding endeavors with COLCON AI's renowned capability to effortlessly convert your code into various programming languages. Simply paste your code below, and within moments, unlock the transformative power of AI to receive the desired output.</p>
            </div>
            <div className=" flex flex-col flex-1 flex-grow justify-evenly items-center py-4 gap-4 m-auto text-black">
                <div className=" w-[90%] items-center justify-center">
                    <form onSubmit={handleSubmit} method="post">
                        <div className=' items-center mt-3 rounded-xl'>
                            <textarea rows={20} placeholder='Paste Code Here!' className=" p-3 w-full text-start items-center justify-center rounded-lg" onChange={(e) => setPrompt(e.target.value)} value={prompt} />
                        </div>
                        <center><select name="language" id="language" className="p-4 my-3 font-semibold text-[20px] font-serif rounded-2xl text-black" >
                            {programmingLang.map((language) => (
                                <option key={language}>{language}</option>
                            ))}
                        </select></center>
                        <center><button type='submit' id="submitButton" className="bg-black text-white hover:bg-white hover:text-black my-2 font-serif font-bold p-5 items-center rounded-2xl text-center " onClick={handleSubmit}>Submit</button></center>
                    </form>
                </div>
                <div className=" bg-white mt-8 w-[90%] p-7 rounded-2xl">
                    <pre className=" font-semibold">{response}</pre>
                    <center><button type='submit' className="bg-black text-white hover:bg-white hover:text-black mt-2 font-serif font-bold p-5 items-center rounded-2xl text-center " onClick={copyText}>Copy</button></center>
                </div>
            </div>
        </div>
    )
}
export default Service1