const messages = document.getElementById('messages');
const input = document.getElementById('input');
const send = document.getElementById('send');

send.addEventListener('click', () => {
  // Send the message to the server
  sendMessage(input.value);

  // Clear the input field
  input.value = '';
});

function sendMessage(message) {
  // Send an HTTP request to the server to send the message
}

function updateMessages(newMessages) {
  // Add the new messages to the messages div
  messages.innerHTML += newMessages;
}

// Use long polling to retrieve new messages from the server
(function getMessages() {
  const xhr = new XMLHttpRequest();
  xhr.onreadystatechange = function() {
    if (xhr.readyState === XMLHttpRequest.DONE) {
      if (xhr.status === 200) {
        updateMessages(xhr.responseText);
      }
      getMessages();
    }
  };
  xhr.open('GET', '/messages');
  xhr.send();
})();
