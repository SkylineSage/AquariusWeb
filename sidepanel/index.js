import {
  GoogleGenerativeAI,
  HarmBlockThreshold,
  HarmCategory
} from '../node_modules/@google/generative-ai/dist/index.mjs';

import { marked } from 'marked';

// Important! Do not expose your API in your extension code. You have to
// options:
//
// 1. Let users provide their own API key.
// 2. Manage API keys in your own server and proxy all calls to the Gemini
// API through your own server, where you can implement additional security
// measures such as authentification.
//
// It is only OK to put your API key into this file if you're the only
// user of your extension or for testing.
let apiKey = '';

let genAI = null;
let model = null;
let generationConfig = {
  temperature: 1
};

const inputPrompt = document.body.querySelector('#input-prompt');
const buttonPrompt = document.body.querySelector('#button-prompt');
const elementResponse = document.body.querySelector('#response');
const elementLoading = document.body.querySelector('#loading');
const elementError = document.body.querySelector('#error');
const sliderTemperature = document.body.querySelector('#temperature');
const labelTemperature = document.body.querySelector('#label-temperature');
const apiKeyElement = document.body.querySelector('#api-key');
const toggleKeyVisibilityButton = document.querySelector('#toggle-key-visibility');

if (apiKeyElement) {
  apiKey = apiKeyElement.value;
} else {
  console.error('Element with id "api-key" not found');
}

function initModel(generationConfig) {
  const safetySettings = [
    {
      category: HarmCategory.HARM_CATEGORY_DANGEROUS_CONTENT,
      threshold: HarmBlockThreshold.BLOCK_NONE
    }
  ];
  const systemInstruction = 'You are a helpful assistant. Always try to detect the language of the user\'s input and respond in the same language.';
  genAI = new GoogleGenerativeAI(apiKey);
  model = genAI.getGenerativeModel({
    model: 'gemini-1.5-flash',
    safetySettings,
    generationConfig,
    systemInstruction: systemInstruction
  });
  return model;
}

async function runPrompt(prompt) {
  try {
    const result = await model.generateContent(prompt);
    const response = await result.response;
    return response.text();
  } catch (e) {
    console.log('Prompt failed');
    console.error(e);
    console.log('Prompt:', prompt);
    throw e;
  }
}

document.addEventListener('DOMContentLoaded', function() {
  const promptInput = document.getElementById('input-prompt');
  if (promptInput) {
    console.log('promptInput found:', promptInput);
    const options = document.querySelectorAll('.option');
    if (options.length > 0) {
      console.log('options found:', options);
      options.forEach(option => {
        option.addEventListener('click', function() {
          promptInput.value = this.getAttribute('data-value');
          promptInput.focus();
          buttonPrompt.removeAttribute('disabled');
        });
      });
    } else {
      console.error('No elements with class "option" found.');
    }
  } else {
    console.error('Element with id "prompt-input" not found.');
  }

  let isHidden = true;
  toggleKeyVisibilityButton.addEventListener('click', () => {
    if (isHidden) {
      apiKeyElement.type = 'text';
      toggleKeyVisibilityButton.textContent = 'hide api key';
    } else {
      apiKeyElement.type = 'password';
      toggleKeyVisibilityButton.textContent = 'show api key';
    }
    isHidden = !isHidden;
  });

  apiKeyElement.addEventListener('change', (event) => {
    apiKey = event.target.value;
  });

  sliderTemperature.addEventListener('input', (event) => {
    labelTemperature.textContent = event.target.value;
    generationConfig.temperature = event.target.value;
  });

  inputPrompt.addEventListener('input', () => {
    if (inputPrompt.value.trim()) {
      buttonPrompt.removeAttribute('disabled');
    } else {
      buttonPrompt.setAttribute('disabled', '');
    }
  });

  buttonPrompt.addEventListener('click', async () => {
    const prompt = inputPrompt.value.trim();
    showLoading();
    try {
      const generationConfig = {
        temperature: sliderTemperature.value
      };
      initModel(generationConfig);
      const response = await runPrompt(prompt, generationConfig);
      showResponse(response);
    } catch (e) {
      showError(e);
    }
  });
});


function showLoading() {
  hide(elementResponse);
  hide(elementError);
  show(elementLoading);
}

function showResponse(response) {
  hide(elementLoading);
  show(elementResponse);

  // Clear the previous content
  elementResponse.innerHTML = '';

  // Convert Markdown to HTML
  elementResponse.innerHTML = marked(response);

  // add copy button to each code block
  const codeBlocks = elementResponse.querySelectorAll('pre');
  codeBlocks.forEach(block => {
    const button = document.createElement('button');
    button.className = 'copy-button';
    button.textContent = 'Copy';
    block.classList.add('code-block');
    block.appendChild(button);

    button.addEventListener('click', () => {
      const lines = block.innerText.split('\n');
      if (lines[lines.length - 1].trim() === 'Copy') {
        lines.pop();
      }
      const code = lines.join('\n');
      navigator.clipboard.writeText(code).then(() => {
        button.textContent = 'Copied!';
        setTimeout(() => {
          button.textContent = 'Copy';
        }, 2000);
      });
    });
  });

  // Make sure to preserve line breaks in the response
  // elementResponse.textContent = '';
  // const paragraphs = response.split(/\r?\n/);
  // for (let i = 0; i < paragraphs.length; i++) {
  //   const paragraph = paragraphs[i];
  //   if (paragraph) {
  //     elementResponse.appendChild(document.createTextNode(paragraph));
  //   }
  //   // Don't add a new line after the final paragraph
  //   if (i < paragraphs.length - 1) {
  //     elementResponse.appendChild(document.createElement('BR'));
  //   }
  // }
}

function showError(error) {
  show(elementError);
  hide(elementResponse);
  hide(elementLoading);
  elementError.textContent = error;
}

function show(element) {
  element.removeAttribute('hidden');
}

function hide(element) {
  element.setAttribute('hidden', '');
}
