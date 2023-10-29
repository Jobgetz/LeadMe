import OpenAI from "openai";

var userPrompt = "I really feel hungry what are some places i can get it at"

const openai = new OpenAI({ apiKey: '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' });

async function main() {
  const GPTprompt = "in one word describe what the user wants from these only categories {bathroom, exit, food, ballroom, grouproom}: " + userPrompt; 

  const completion = await openai.chat.completions.create({
    messages: [
      { role: "system", content: "You are a helpful assistant." },
      { role: "user", content: GPTprompt }
    ],
    model: "gpt-3.5-turbo",
    max_tokens: 10, 
  });

  console.log(completion.choices[0]);
}

main();
