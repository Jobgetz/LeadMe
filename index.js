import { startSpeechRecognition, displayUserSpeechInput, displayAIResponse, createGPTPrompt } from './helpers.js';
import OpenAI from 'openai';
// assign apiKey and allow local requests
const openai = new OpenAI({
  apiKey: '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',
  dangerouslyAllowBrowser: true,
});
// Speech recognition and requests to openAI
async function handleChat() {
  try {
    const userSpeechInput = await startSpeechRecognition();
    displayUserSpeechInput(userSpeechInput);

    // Create GPT prompt
    const GPTprompt = createGPTPrompt(userSpeechInput);

    // Send the GPT prompt to OpenAI
    await sendToOpenAI(GPTprompt);
  } catch (error) {
    console.error('Error:', error);
  }
}

// openAI setup and initialization
async function sendToOpenAI(userInput) {
  try {
    const response = await openai.chat.completions.create({
      messages: [
        { role: 'system', content: 'You are a helpful assistant.' },
        { role: 'user', content: userInput },
      ],
      model: 'gpt-3.5-turbo',
    });

    const aiResponse = response.choices[0].message.content;
    displayAIResponse(aiResponse);
  } catch (error) {
    console.error('Error:', error);
  }
}

const chatButton = document.getElementById('speechButton');
chatButton.addEventListener('click', handleChat);
