import { GoogleGenerativeAI } from '@google/generative-ai';
const genAI = new GoogleGenerativeAI(import.meta.env.VITE_GEMINI_API_KEY);

export const GeminiAI = async (prompt) => {
    const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

    const response = (await model.generateContent(prompt)).response;
    console.log(response);

    const text = response.text();
    return text;
}
export const OpenAI = async (prompt) => {
    // const completion = await openai.chat.completions.create({
    //     messages: [{ role: "system", content: prompt }],
    //     model: "gpt-3.5-turbo",
    // });

    // console.log(completion.choices[0].message.content);

}

