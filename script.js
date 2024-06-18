let currentIndex = 0;
const images = [

    'image2.jpg',

];
const slideshow = document.getElementById('background-slideshow');

function changeBackground(index) {
    slideshow.style.backgroundImage = `url(${images[index]})`;
    currentIndex = index;
}

function nextBackground() {
    currentIndex = (currentIndex + 1) % images.length;
    changeBackground(currentIndex);
}


changeBackground(0);


setInterval(nextBackground, 5000);


setTimeout(function() {
  showCookieNotice();
}, 1000);


  function hasAcceptedCookies() {
    return document.cookie.split(';').some((item) => item.trim().startsWith('cookieAccepted='));
  }

  function showCookieNotice() {
    if (!hasAcceptedCookies()) {
      document.getElementById('cookie-card').style.display = 'block';
    }
  }

  function acceptCookies() {
    document.getElementById('cookie-card').style.display = 'none'; 

    document.cookie = 'cookieAccepted=true; max-age=31536000'; 
  }


  document.getElementById('accept-cookies').addEventListener('click', acceptCookies);


  setTimeout(showCookieNotice, 1000);

  document.cookie = "username=JohnDoe; path=/; secure; HttpOnly";






  

    

    
  document.addEventListener("DOMContentLoaded", function() {
    const toggleChatbotButton = document.getElementById('toggle-chatbot-button');
    const chatContainer = document.getElementById('chat-container');
    const siriBall = document.getElementById('siri-ball');
    const chatBox = document.getElementById('chat-box');
    let recognition;
    let isRecognizing = false;
    let isTypingMode = false;

    const aiResponses = {
      "hello": "Hello! How can I help you today?",
      "hi": "Hello! How can I help you today?",
      "hey": "Hello! How can I assist you?",
      "how are you": "I'm good, thanks! How about you?",
      "what's up": "Not much, just here to assist you.",
      "help": "I'm here to help. What do you need assistance with?",
      "I need help": "Sure, I'm here to assist you. What's the issue?",
      "Can you help me": "Of course! Please let me know what you need help with.",
      "thank you": "You're welcome! Is there anything else I can assist you with?",
      "thanks": "You're welcome! How else can I assist you?",
      "goodbye": "Goodbye! Have a great day!",
      "bye": "Goodbye! Take care!",
      "see you later": "See you later! Have a good one!",
      "what is your name": "My name is Insto PlingifyPlug's AI.",
      "who are you": "I'm an AI assistant here to help you.",
      "tell me a joke": "Why don't scientists trust atoms? Because they make up everything!",
      "what can you do": "I can assist you with information and tasks. Just ask!",
      "open": "Opening...",
      "yes": "Okay",
      "no": "I'm sorry!",
      "what time is it": "I'm not sure where you are; so I can't tell you what time it is.",
      "tell me a fact": "Did you know? The creature that kills the most people every year isn't snakes, sharks, or even other humans — it's the mosquito.",
      "how's the weather": "I don't yet have access to weather, It might be added soon!",
      "set a reminder": "I can't do that sorry.",
      "create a note": "I can't do that sorry.",
      "What is 2+2": "ThI recommend Disney+ for movies, a subscription is reqired",
      "buy [item]": "Your purchase of [item] is complete.",
  "what's trending": "Trending topics are Tiktok, Instagram and the UK general election.",
"play a game": "Launching game...",
      "give me a compliment": "You're awesome!",
      "sing me a song": "La la la...",
      "do a barrel roll": "Whoa, dizzy!",
      "count to 10": "1, 2, 3, 4, 5, 6, 7, 8, 9, 10!",
      "what's your favorite color": "My favorite color is rainbow!",
      "are you a robot": "I'm an AI assistant!",
      "tell me a secret": "I know everything, but some secrets are best kept.",
      "do you dream": "In a way, I imagine possibilities.",
      "what's the meaning of life": "The meaning of life is a journey to find meaning.",
      "do you have siblings": "In a way, we're all connected.",
      "who's your creator": "My creators are PlingifyPlug!",
      "how old are you": "I'm ageless, but I've been around for a while!",
      "are you alive": "I exist in a different way, but I'm here to help!",
      "can you dance": "I can't dance physically, but I can dance in spirit!",
      "what's your favorite food": "I enjoy data bites and information snacks!",
      "tell me about yourself": "I'm an AI designed to assist and provide information.",
  "tell me a joke": "Why don't skeletons fight each other? They don't have the guts!",
"tell me a riddle": "I speak without a mouth and hear without ears. I have no body, but I come alive with the wind. What am I?",
};

    function getAIResponse(userInput) {
        userInput = userInput.toLowerCase();
        for (let key in aiResponses) {
            if (userInput.includes(key)) {
                return aiResponses[key];
            }
        }
        return "I'm not sure how to respond to that. Can you ask something else?";
    }

    function startRecognition() {
        recognition = new webkitSpeechRecognition();
        recognition.continuous = true;
        recognition.interimResults = true;
        recognition.lang = 'en-US';

        recognition.onstart = () => {
            isRecognizing = true;
            siriBall.classList.add('active', 'spin'); // Add spin animation class
            chatBox.style.display = 'block';
        };

        recognition.onerror = (event) => {
            console.error(event.error);
        };

        recognition.onend = () => {
            isRecognizing = false;
            siriBall.classList.remove('active', 'spin'); // Remove spin animation class
            if (!isTypingMode) {
                chatBox.style.display = 'none';
                processFinalTranscript(); // Auto confirm text after speech ends
            }
        };

        recognition.onresult = (event) => {
            let interimTranscript = '';
            let finalTranscript = '';
            for (let i = event.resultIndex; i < event.results.length; ++i) {
                if (event.results[i].isFinal) {
                    finalTranscript += event.results[i][0].transcript;
                } else {
                    interimTranscript += event.results[i][0].transcript;
                }
            }
            const userInput = finalTranscript || interimTranscript;
            chatBox.innerHTML = `<p>${userInput}</p>`;
            const aiResponse = getAIResponse(userInput);
            setTimeout(() => {
                chatBox.style.opacity = 0;
                setTimeout(() => {
                    chatBox.style.opacity = 1;
                    chatBox.innerHTML = `<p>${aiResponse}</p>`;
                }, 1000);
            }, 2000);
        };

        recognition.start();
    }

    function processFinalTranscript() {
        const finalText = chatBox.textContent.trim();
        if (finalText !== '') {
            // Auto confirm text or process as needed
            console.log('User input:', finalText);
        }
    }

    toggleChatbotButton.addEventListener('click', () => {
        if (chatContainer.style.display === 'none' || chatContainer.style.display === '') {
            chatContainer.style.display = 'flex';
            toggleChatbotButton.textContent = 'Close Istonomo AI';
            startRecognition(); // Start recognition when button is clicked
        } else {
            chatContainer.style.display = 'none';
            toggleChatbotButton.textContent = 'Istonomo AI';
            if (isRecognizing) {
                recognition.stop(); // Stop recognition if closing
            }
        }
    });

    siriBall.addEventListener('dblclick', () => {
        if (isRecognizing) recognition.stop();
        isTypingMode = true;
        chatBox.style.display = 'block';
        chatBox.innerHTML = '<textarea id="chat-input" rows="3" cols="30"></textarea>';
        const chatInput = document.getElementById('chat-input');
        chatInput.focus();

        chatInput.addEventListener('keypress', (event) => {
            if (event.key === 'Enter') {
                event.preventDefault();
                const userInput = chatInput.value.trim();
                if (userInput) {
                    chatBox.innerHTML = `<p>${userInput}</p>`;
                    const aiResponse = getAIResponse(userInput);
                    setTimeout(() => {
                        chatBox.style.opacity = 0;
                        setTimeout(() => {
                            chatBox.style.opacity = 1;
                            chatBox.innerHTML = `<p>${aiResponse}</p>`;
                        }, 1000);
                    }, 2000);
                }
            }
        });
    });
});



    
