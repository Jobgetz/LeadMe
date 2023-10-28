const axios = require('axios');
const apiKey = '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';
const apiURL = 'https://api.openai.com/v1/engines/davinci-codex/completions';

async function breakDownText(prompt) {
    const response = await axios.post(apiURL,{
        prompt: prompt,
        max_tokens: 20,
    },{
        headers: {
            'Authorization': `Bearer ${apiKey}`,
        }
    })
}