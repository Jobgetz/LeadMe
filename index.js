import axios from "axios";
const apiKey = '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';
const apiUrl = 'https://api.openai.com/v1/engines/davinci/completions';

async function createCompletion(prompt) {
    try {
        const response = await axios.post(apiUrl, {
            prompt: prompt,
            max_tokens: 20
        }, {
            headers: {
                'Authorization': `Bearer ${apiKey}`,
                'Content-Type': 'application/json'
            }
        });

        console.log('Generated text:', response.data.choices[0].text);
    } catch (error) {
        console.error('Error:', error);
    }
}

const userPrompt = "take this text and find where the user wants to go: 'Where can I find the best tacos'";
createCompletion(userPrompt);
