
// TOTAL SHTETA!

async function solution() {
  //   const moreButton = document.getElementById(
  //     'ee9823ab-c3e8-4a14-b998-8c22ec246bd3'

  const main = document.getElementById('main');

  const url = 'http://localhost:3030/jsonstore/advanced/articles/list';

  const res = await fetch(url);
  const data = await res.json();

  data.forEach((article) => {
    let divAccordion = document.createElement('div', '', [
      'class',
      'accordion',
    ]);

    main.appendChild(divAccordion);
  });

  function createElement(type, content, attributes = []) {
    const element = createElement(type);

    if (content) {
      element.textContent = content;
    }

    if (attributes.length > 0) {
      for (let i = 0; i < arguments.length; i += 2) {
        element.setAttribute(attributes[i], attributes[i + 1]);
      }
    }
    return element;
  }

  console.log(data);

  //   moreButton.addEventListener('click', () => {
  //     if (moreButton.textContent === 'More') {
  //       moreButton.textContent = 'less';
  //     } else {
  //       moreButton.textContent = 'More';
  //     }
  //   });
}

solution();
