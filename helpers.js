// Function to perform speech recognition
export function startSpeechRecognition() {
    return new Promise((resolve, reject) => {
      const recognition = new window.webkitSpeechRecognition(); 
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
  
  // Function to create the GPT prompt
  export function createGPTPrompt(userInput) {
    const GPTprompt = 'pick one word from these categories that best describes what the user wants, in none return null, all case sensitive {bathroom, exit, food, ballroom, grouproom, store, first-aid, null}:"';
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
  