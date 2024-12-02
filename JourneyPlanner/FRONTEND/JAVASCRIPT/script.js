document.querySelector('.chatbot-toggle').addEventListener('click', () => {
  document.querySelector('.chatbot-window').classList.toggle('open');
});

document.querySelector('.chatbot-close').addEventListener('click', () => {
  document.querySelector('.chatbot-window').classList.remove('open');
});


// Add interactivity for buttons or animations

document.querySelector('.cta-btn').addEventListener('click', () => {
    alert('Journey planning just got easier!');
  });
  
  // Example of a voice search simulation

  document.querySelector('.search-bar button').addEventListener('click', () => {
    alert('Voice search is coming soon!');
  });
  
// Chatbot toggle functionality

const chatbotToggle = document.querySelector('.chatbot-toggle');
const chatbotWindow = document.querySelector('.chatbot-window');
const chatbotClose = document.querySelector('.chatbot-close');
const sendBtn = document.querySelector('#send-btn');
const chatInput = document.querySelector('#chat-input');
const chatMessages = document.querySelector('.chatbot-messages');

// Open and close chatbot

chatbotToggle.addEventListener('click', () => {
  chatbotWindow.classList.toggle('active');
});

chatbotClose.addEventListener('click', () => {
  chatbotWindow.classList.remove('active');
});

// Simulate AI response

function sendMessage(message, sender = 'user') {
  const messageDiv = document.createElement('div');
  messageDiv.classList.add('message', sender);
  messageDiv.textContent = message;
  chatMessages.appendChild(messageDiv);
  chatMessages.scrollTop = chatMessages.scrollHeight;
}

sendBtn.addEventListener('click', () => {
  const userMessage = chatInput.value.trim();
  if (userMessage) {
    sendMessage(userMessage, 'user');
    chatInput.value = '';
    setTimeout(() => {
      // Simulate AI response
      
      sendMessage("That's a great question! Let me help you with that.", 'bot');
    }, 1000);
  }
});
