function notify(message) {
  let notification = document.getElementById('notification');
  notification.innerText = message;
  notification.style.display = 'block';

  notification.addEventListener('click', (event) => {
    event.target.style.display = 'none';
  });

  // setting timetout:

  // setTimeout(function() {
  //   notification.style.display = 'none';
  // }, 2000);

  console.log('todo');
}
