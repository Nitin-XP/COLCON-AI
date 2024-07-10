import bodyParser from "body-parser";
import cors from 'cors';
import express from "express";
import OpenAI from "openai";

const app = express();
app.use(bodyParser.json());
app.use(cors());

const openai = new OpenAI({ apiKey: "" });

app.post("/services/Service1", async (req, res) => {
    const prompt = req.body;
    console.log(prompt)
    const completion = await openai.chat.completions.create({
        messages: [{ role: "system", content: prompt }],
        model: "gpt-3.5-turbo",
    });
    console.log(completion.choices[0].message.content)
    res.send(completion.choices[0].message.content);
});

const port = 5173;
app.listen(port, () => {
    console.log(`Server Running at ${port}`);
})
