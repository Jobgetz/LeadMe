const apiKey = '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'; 
const apiURL = 'https://api.openai.com/v1/engines/davinci-codex/completions';

async function breakDownText(prompt) {
    try {
        const response = await fetch(apiURL, {
            method: 'POST',
            headers: {
                'Authorization': `Bearer ${apiKey}`,
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                model: 'davinci-codex',
                prompt: prompt,
                max_tokens: 20,
            }),
        });

        if (!response.ok) {
            throw new Error(`Request failed with status: ${response.status}`);
        }

        const data = await response.json();

        // Extract the generated text (category) from the API response
        const category = data.choices[0].text;

        // Log the generated text to the console
        console.log('Generated Category:', category);

        // Display the generated text on the web page
        document.getElementById('category').innerText = category;
    } catch (error) {
        console.error('Error:', error);
    }
}


const speechButton = document.getElementById("speechButton");
const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
const recognition = new SpeechRecognition();

speechButton.addEventListener("click", function() {
    recognition.start();
});

recognition.onresult = function(event) {
    const prompt = event.results[0][0].transcript;
    document.getElementById('UserInput').value = prompt;
    breakDownText(prompt);
};
