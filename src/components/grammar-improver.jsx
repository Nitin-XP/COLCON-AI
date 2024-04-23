import OpenAI from "openai";
import { useState } from 'react';

const openaiKey = import.meta.env.VITE_API_KEY;
const openai = new OpenAI({ apiKey: openaiKey, dangerouslyAllowBrowser: true });

const Service3 = () => {
    let [prompt, setPrompt] = useState('');
    const [response, setResponse] = useState('Waiting for your prompt!!!');

    const handleSubmit = async (e) => {
        e.preventDefault();
        document.getElementById("submitButton").disabled = true;

        setResponse("Loading...")
        prompt = prompt + "Remove the grammatical errors and enhance the tone of the statement given above or if the input is invalid then simply return Invalid Input ";
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
        <div className=" py-4 bgImageServices text-white">
            <div>
                <h1 className="text-[30px] font-extrabold text-center font-serif ">Grammar Improver</h1>
                <p className=" font-serif text-[20px] text-center p-5 px-[280px] hidden lg:block ">Enhance and refine your writing effortlessly with our feature that seamlessly corrects grammatical errors and elevates the tone of your paragraphs, ensuring polished and professional content every time.</p>
            </div>
            <div className=" flex flex-col flex-1 flex-grow justify-evenly items-center py-4 gap-4 m-auto">
                <div className=" w-[90%] lg:w-[50%] items-center justify-center">
                    <form onSubmit={handleSubmit} method="post">
                        <div className=' items-center mt-3 rounded-xl'>
                            <textarea rows={5} placeholder='Type your text here and watch it shine!📝' className=" text-black p-3 w-full text-start items-center justify-center rounded-lg" onChange={(e) => setPrompt(e.target.value)} value={prompt} />
                        </div>
                        <center><button type='submit' id="submitButton" className="bg-black text-white hover:bg-white hover:text-black my-2 font-serif font-bold p-5 items-center rounded-2xl text-center " onClick={handleSubmit}>Submit</button></center>
                    </form>
                </div>
                <div className=" bg-white mt-8 w-[70%] p-7 rounded-2xl">
                    <pre className=" text-black font-semibold text-left">{response}</pre>
                </div>
                <center><button type='submit' className="bg-black text-white hover:bg-white hover:text-black mt-4 font-serif font-bold p-5 items-center rounded-2xl text-center " onClick={copyText}>Copy</button></center>
            </div>
        </div>
    )
}
export default Service3