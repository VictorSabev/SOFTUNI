function deleteByEmail() {
  let inputEmail = document.querySelector('input[name="email"]').value;
  let targetEmails = document.querySelectorAll('tbody tr td:nth-of-type(2)');
  let result = document.getElementById('result');

  for (let tdElement of targetEmails) {
    if (tdElement.textContent === inputEmail) {
      tdElement.parentNode.remove();
      result.textContent = 'Deleted.';
    } else {
      result.textContent = 'Not found.';
    }
  }
}
