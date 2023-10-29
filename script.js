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
    setTimeout(() => {document.getElementById('category').innerText = "Directing to: Bowser's Ballroom \n\n 1. Walk forward approximately 30 paces \n 2. Take the stairs up to the second floor \n 3. Continue walking forward approximately 50 paces \n 4. Enter the doors to the left \n 5. Arrived \n    --"}, 1500);

    //breakDownText(prompt);
    
};

