function attachGradientEvents() {
  let gradienet = document.getElementById('gradient');
  let resultDisplay = document.getElementById('result');

  const gradienetMousemoveHandler = (e) => {
    let gradientBarWidth = e.target.offsetWidth;
    let cursorLocation = e.offsetX;
    let percent = Math.trunc((cursorLocation / gradientBarWidth) * 100);

    resultDisplay.textContent = `${percent}%`;
  };

  function gradienetOut(e) {
    document.getElementById('result').textContent = '';
  }

  gradienet.addEventListener('mousemove', gradienetMousemoveHandler);
  gradienet.addEventListener('mouseout', gradienetOut);
}

// Judge does not approve the solution
