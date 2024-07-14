import { GeminiAI } from "@/api/api";
import { useState } from 'react';

const Service4 = () => {
    let [prompt, setPrompt] = useState('');
    let [lang, setLang] = useState('');
    const [response, setResponse] = useState('Waiting for your prompt!!!');

    const handleSubmit = async (e) => {
        e.preventDefault();
        document.getElementById("submitButton").disabled = true;

        setResponse("Loading...")
        prompt = "``" + prompt + "``\n" + "Return the response based on the rules given below :\n" + "- Remove the grammatical errors.\n- Convert the statement given in delimiters above into " + lang + "\n- Return only the response.\n- If any explicit content is found, then simply return `Explicit Content Given!`\n- If the input is invalid then simply return Invalid Input ";

        console.log(prompt);
        const text = await GeminiAI(prompt);

        console.log(text)
        setResponse(text);

        document.getElementById("submitButton").disabled = false;
    }

    const copyText = () => {
        navigator.clipboard.writeText(response);
        alert("Copied to ClipBoard!")
    }

    return (
        <div className=" py-4 eachServiceBg text-white">
            <div>
                <h1 className="text-[30px] font-extrabold text-center font-serif ">Text Translator</h1>
                <p className=" font-serif text-[20px] text-center p-5 px-[280px] hidden lg:block ">Introducing our Text Translator feature! Seamlessly translate sentences into various languages, enabling global communication in under 30 words. Unlock linguistic diversity effortlessly.</p>
            </div>
            <div className=" text-black flex flex-col flex-1 flex-grow justify-evenly items-center py-4 gap-4 m-auto">
                <div className=" w-[90%] lg:w-[50%] items-center justify-center">
                    <form onSubmit={handleSubmit} method="post">
                        <div className=' items-center mt-3 rounded-xl'>
                            <textarea rows={2} placeholder="Paste Your Text Here!" className="  p-3 pl-6 w-full text-start items-center justify-center rounded-lg" onChange={(e) => setPrompt(e.target.value)} value={prompt} />

                            <center><input type="text" placeholder="Language?" className=" my-2 p-3 pl-6 w-full md:w-1/2 text-center items-center justify-center rounded-lg" onChange={(e) => setLang(e.target.value)} value={lang} /></center>
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