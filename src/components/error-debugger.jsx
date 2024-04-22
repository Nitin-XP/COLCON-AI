import OpenAI from "openai";
import { useState } from 'react';

const openai = new OpenAI({ apiKey: "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", dangerouslyAllowBrowser: true });

const Service2 = () => {
    let [prompt, setPrompt] = useState('');
    const [response, setResponse] = useState('Errors Will be Displayed here!');

    const handleSubmit = async (e) => {
        e.preventDefault();
        document.getElementById("submitButton").disabled = true;

        setResponse("Loading...")
        prompt = "Only mention the errors in detail in the snippet given below : " + prompt;
        const completion = await openai.chat.completions.create({
            messages: [{ role: "system", content: prompt }],
            model: "gpt-3.5-turbo",
        });

        console.log(completion.choices[0].message.content);
        setResponse(completion.choices[0].message.content);

        document.getElementById("submitButton").disabled = false;
    }


    return (
        <div className=" bgImageServices py-4 text-white">
            <div>
                <h1 className="text-[30px] font-extrabold text-center font-serif ">Error Debugger</h1>
                <p className=" font-serif text-[20px] text-center p-5 ">Empower your coding journey with our cutting-edge Error Debugger feature. Seamlessly identify and resolve errors within your code snippets, ensuring flawless execution every time.<br /> Say goodbye to debugging hassles and embrace a smoother coding experience with our Error Debugger - your trusted companion in the world of programming excellence.</p>
            </div>
            <div className=" text-black flex flex-col flex-1 flex-grow justify-evenly items-center py-4 gap-4 m-auto">
                <div className=" w-[90%] items-center justify-center">
                    <form onSubmit={handleSubmit} method="post">
                        <div className=' items-center mt-3 rounded-xl'>
                            <textarea rows={20} placeholder='Paste Code Here!' className=" p-3 w-full text-start items-center justify-center rounded-lg" onChange={(e) => setPrompt(e.target.value)} value={prompt} />
                        </div>
                        <center><button type='submit' id="submitButton" className="bg-black text-white hover:bg-white hover:text-black my-2 font-serif font-bold p-5 items-center rounded-2xl text-center " onClick={handleSubmit}>Submit</button></center>
                    </form>
                </div>
                <div className=" bg-white mt-8 w-[90%] p-7 rounded-2xl">
                    <pre className=" font-semibold text-left">{response}</pre>
                </div>
            </div>
        </div>
    )
}
export default Service2