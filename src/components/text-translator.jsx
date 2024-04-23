import OpenAI from "openai";
import { useState } from 'react';

const openaiKey = import.meta.env.VITE_API_KEY;

const openai = new OpenAI({ apiKey: openaiKey, dangerouslyAllowBrowser: true });

const Service4 = () => {
    let [prompt, setPrompt] = useState('');
    let [lang, setLang] = useState('');
    const [response, setResponse] = useState('Waiting for your prompt!!!');

    const handleSubmit = async (e) => {
        e.preventDefault();
        document.getElementById("submitButton").disabled = true;

        setResponse("Loading...")
        prompt = prompt + "Remove the grammatical errors and convert the statement given above into" + lang + " or if the input is invalid then simply return Invalid Input ";
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
                <h1 className="text-[30px] font-extrabold text-center font-serif ">Text Translator</h1>
                <p className=" font-serif text-[20px] text-center p-5 px-[280px] hidden lg:block ">Introducing our Text Translator feature! Seamlessly translate sentences into various languages, enabling global communication in under 30 words. Unlock linguistic diversity effortlessly.</p>
            </div>
            <div className=" text-black flex flex-col flex-1 flex-grow justify-evenly items-center py-4 gap-4 m-auto">
                <div className=" w-[90%] lg:w-[50%] items-center justify-center">
                    <form onSubmit={handleSubmit} method="post">
                        <div className=' items-center mt-3 rounded-xl'>
                            <textarea rows={2} placeholder="Paste Your Text Here!" className="  p-3 w-full text-start items-center justify-center rounded-lg" onChange={(e) => setPrompt(e.target.value)} value={prompt} />

                            <input type="text" placeholder="Mention the language in which you're converting!" className="  p-3 w-full text-start items-center justify-center rounded-lg" onChange={(e) => setLang(e.target.value)} value={lang} />
                        </div>
                        <center><button type='submit' id="submitButton" className="bg-black text-white hover:bg-white hover:text-black my-2 font-serif font-bold p-5 items-center rounded-2xl text-center " onClick={handleSubmit}>Submit</button></center>
                    </form>
                </div>
                <div className=" bg-white mt-8 w-[60%] p-7 rounded-2xl">
                    <pre className=" text-left">{response}</pre>
                </div>
                <center><button type='submit' className="bg-black text-white hover:bg-white hover:text-black mt-4 font-serif font-bold p-5 items-center rounded-2xl text-center " onClick={copyText}>Copy</button></center>
            </div>
        </div>
    )
}
export default Service4