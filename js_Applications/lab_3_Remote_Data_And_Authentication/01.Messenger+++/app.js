const url = 'http://localhost:3030/jsonstore/messenger';
const messages = document.getElementById('messages');
const submitBtn = document.getElementById('submit');

const inputName = document.getElementById('author');
const inputMessage = document.getElementById('content');

submitBtn.addEventListener('click', postMessage);

// async function postMessage() {
//   let newEntry = {
//     author: inputName.value,
//     content: inputMessage.value,
//   }
// }
  async function request(url, option) {
    if (option) {
      option = {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(option),
      }
    }
    
  }