import { GeminiAI } from '@/api/api';
import { useState } from 'react';

const Service5 = () => {
    let [prompt, setPrompt] = useState({
        character: "",
        settings: "",
        plot: "",
        theme: "",
        conflict: "",
        words: 200,
    });
    const [response, setResponse] = useState('Waiting for your story!!!');

    const handleSubmit = async (e) => {
        e.preventDefault();
        document.getElementById("submitButton").disabled = true;

        setResponse("Loading...")
        console.log(prompt.conflict)
        let aiPrompt = "Generate a story under " + prompt.words + " words based on the rules gives below:\n- Having character : " + prompt.character + ", \n- Settings : " + prompt.settings + ",\n- Plot : " + prompt.plot + ",\n- Theme : " + prompt.theme + ",\n- Conflict : " + prompt.conflict + "\n- If any input found explicit, then simply return `Explicit Input Found.`";

        console.log(aiPrompt);
        const text = await GeminiAI(aiPrompt);

        console.log(text)
        setResponse(text);

        document.getElementById("submitButton").disabled = false;
    }
    const handleChange = (e) => {
        setPrompt({
            ...prompt,
            [e.target.name]: e.target.value,
        });
    };

    const copyText = () => {
        navigator.clipboard.writeText(response);
        alert("Copied to ClipBoard!")
    }

    return (
        <div className=" eachServiceBg py-4 text-white">
            <div className=" text-white">
                <h1 className="text-[30px] font-extrabold text-center font-serif ">Story Generator</h1>
                <p className=" font-serif text-[20px] text-center p-5 px-[280px] hidden lg:block ">Empower your coding journey with our cutting-edge Error Debugger feature. Seamlessly identify and resolve errors within your code snippets, ensuring flawless execution every time.<br /> Say goodbye to debugging hassles and embrace a smoother coding experience with our Error Debugger - your trusted companion in the world of programming excellence.</p>
            </div>
            <div className=" bg-black-500 flex flex-col flex-1 flex-grow justify-evenly items-center py-4 gap-4 m-auto">
                <div className=" w-[90%] lg:w-[50%] text-white items-center justify-center">
                    <form onSubmit={handleSubmit} method='post'>
                        <div className=' items-center mt-3 rounded-xl'>
                            <label name="character" className=" font-serif font-bold text-[20px] ">Characters</label>
                            <textarea name='character' rows={2} placeholder='Define the main characters involved in the story. Characters drive the plot forward and engage the audience.' className="my-4 text-black outline-double p-5 text-[16px] w-full text-center items-center justify-center rounded-md" onChange={handleChange} value={prompt.character} />
                        </div>
                        <div className=' items-center mt-3 rounded-xl'>
                            <label name="settings" className=" font-serif font-bold text-[20px] ">Settings</label>
                            <textarea name="settings" rows={2} placeholder='Establish the time and place where the story takes place. The setting provides context and atmosphere for the events unfolding in the narrative.' className="my-4 text-black outline-double p-5 text-[16px] w-full text-center items-center justify-center rounded-md" onChange={handleChange} value={prompt.settings} />
                        </div>
                        <div className=' items-center mt-3 rounded-xl'>
                            <label name="plot" className=" font-serif font-bold text-[20px] ">Plot</label>
                            <textarea name="plot" rows={2} placeholder='Outline the sequence of events that form the storyline. This includes the central conflict, rising action, climax, and resolution.' className="my-4 p-5 text-black  outline-double text-[16px] w-full text-center items-center justify-center rounded-md" onChange={handleChange} value={prompt.plot} />
                        </div>
                        <div className=' items-center mt-3 rounded-xl'>
                            <label name="theme" className=" font-serif font-bold text-[20px] ">Theme</label>
                            <textarea name="theme" rows={2} placeholder='Determine the underlying message or moral of the story. Themes can explore universal truths, societal issues, or personal growth, adding depth and meaning to the narrative.' className="my-4 text-black outline-double p-5 text-[16px] w-full text-center items-center justify-center rounded-md" onChange={handleChange} value={prompt.theme} />
                        </div>
                        <div className=' items-center mt-3 rounded-xl'>
                            <label name="conflict" className=" font-serif font-bold text-[20px] ">Conflict</label>
                            <textarea name="conflict" rows={2} placeholder='Introduce obstacles or challenges that the characters must overcome. Conflict creates tension and drives the narrative forward, keeping the audience engaged until the resolution.' className="my-4 text-black outline-double p-5 text-[16px] w-full text-center items-center justify-center rounded-md" onChange={handleChange} value={prompt.conflict} />
                        </div>
                        <div className=' items-center mt-3 rounded-xl'>
                            <label name="words" className=" font-serif font-bold text-[20px] ">Words Length</label>
                            <input type='number' name="words" placeholder='Number of words (greater than 100)' className="my-4 text-black outline-double p-5 text-[16px] w-full text-center items-center justify-center rounded-md" onChange={handleChange} value={prompt.words} />
                        </div>

                        <center><button type='submit' id="submitButton" className="bg-black text-white hover:bg-white hover:text-black my-2 font-serif font-bold p-5 items-center rounded-2xl text-center " onClick={handleSubmit}>Submit</button></center>
                    </form>
                </div>
                <div className=" bg-white mt-8 w-[90%] p-7 rounded-2xl">
                    <pre className=" text-black font-semibold text-left">{response}</pre>
                    <center><button type='submit' className="bg-black text-white hover:bg-white hover:text-black mt-4 font-serif font-bold p-5 items-center rounded-2xl text-center " onClick={copyText}>Copy</button></center>
                </div>
            </div>
        </div>
    )
}
export default Service5