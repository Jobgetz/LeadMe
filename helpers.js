// Function to perform speech recognition and return a Promise that resolves with the transcript
export function startSpeechRecognition() {
    return new Promise((resolve, reject) => {
      const recognition = new window.webkitSpeechRecognition(); // For Safari compatibility
      recognition.lang = 'en-US';
      recognition.onresult = (event) => {
        const transcript = event.results[0][0].transcript;
        resolve(transcript);
      };
      recognition.onerror = (event) => {
        reject(event.error);
      };
      recognition.start();
    });
  }
  
  // Function to create the GPT prompt with the specified categories prefix
  export function createGPTPrompt(userInput) {
    const GPTprompt = 'in one word describe what the user wants from these only categories, all case sensitive {bathroom, exit, food, ballroom, grouproom, store, first-aid}:"';
    return GPTprompt + userInput;
  }
  
  // Function to display user's speech input on the web page
  export function displayUserSpeechInput(speechInput) {
    const userInputElement = document.getElementById('userInput');
    userInputElement.textContent = speechInput;
  }
  
  // Function to display AI response on the web page
  export function displayAIResponse(response) {
    const aiResponseElement = document.getElementById('aiResponse');
    aiResponseElement.textContent = response;
  }
  