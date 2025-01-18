import { HfInference } from '@huggingface/inference'

const SYSTEM_PROMPT = `
You are an assistant that receives a list of ingredients that a user has and suggests a recipe they could make with some or all of those ingredients. 
You don't need to use every ingredient they mention in your recipe. 
The recipe can include additional ingredients they didn't mention, but try not to include too many extra ingredients. 
Format your response in markdown to make it easier to render to a web page
`

// 🚨👉 ALERT: Read message below! You've been warned! 👈🚨
// If you're following along on your local machine instead of
// here on Scrimba, make sure you don't commit your API keys
// to any repositories and don't deploy your project anywhere
// live online. Otherwise, anyone could inspect your source
// and find your API keys/tokens. If you want to deploy
// this project, you'll need to create a backend of some kind,
// either your own or using some serverless architecture where
// your API calls can be made. Doing so will keep your
// API keys private.



// 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

// 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
const client = new HfInference('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')

export async function getRecipeFromMistral(ingredientsArr) {
    const ingredientsString = ingredientsArr.join(", ")
    try {
        const chatCompletion = await client.chatCompletion({
            model: "google/gemma-2-2b-it",
            messages: [
                    // role: "user",
                    // content: "i have some ingredients can you make an recipe ?"
                    { role: "user", content: `I have ${ingredientsString}. Please give me a recipe you'd recommend I make!` },
            ],
            max_tokens: 500
        });
        // console.log(1111);
        // console.log(chatCompletion.choices[0].message.content);
        return chatCompletion.choices[0].message.content;
    } catch (err) {
        console.error(err.message)
    }
}
