
const apiKey = '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';
const apiURL = 'https://api.openai.com/v1/engines/davinci-codex/completions';

async function breakDownText(prompt) {
    // input a prompt into chatgpt and recieve categories.
    const response = await axios.post(apiURL,{
        prompt: prompt,
        max_tokens: 20,
    },{
        headers: {
            'Authorization': `Bearer ${apiKey}`,
        }
    });
    // recieve categories
    category = response.data.choices[0].text;
}
console.log(output);
