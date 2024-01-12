const voiture = document.querySelector('#voiture');
voiture.style.gridColumnStart = "1";
voiture.style.gridRowStart = "1";

voiture.style.gridColumnEnd = "1";
voiture.style.gridRowEnd = "1";

console.log(voiture.style);

const parks = document.querySelectorAll('.park');

function checkCollision(deplacementCol, deplacementRow) {
  const voitureColStart = Number(voiture.style.gridColumnStart);
  const voitureColEnd = Number(voiture.style.gridColumnEnd);
  const voitureRowStart = Number(voiture.style.gridRowStart);
  const voitureRowEnd = Number(voiture.style.gridRowEnd);

  for (const park of parks) {
    const parkStyle = window.getComputedStyle(park);
    const parkStartRow = Number(parkStyle.gridRowStart);
    const parkEndRow = Number(parkStyle.gridRowEnd);
    const parkStartCol = Number(parkStyle.gridColumnStart);
    const parkEndCol = Number(parkStyle.gridColumnEnd);

    if (
      voitureColStart + deplacementCol >= parkStartCol &&
      voitureColEnd + deplacementCol <= parkEndCol - 1 &&
      voitureRowStart + deplacementRow >= parkStartRow &&
      voitureRowEnd + deplacementRow <= parkEndRow - 1
    ) {
      console.log("Collision");
      return true;
    }
  }
  console.log("Pas de collision");
  return false;
}

function moveRight() {
  if (voiture.style.gridColumnStart != 9)
  if (!checkCollision(1, 0)) {
    voiture.style.gridColumnStart++
    voiture.style.gridColumnEnd++
  }
}

function moveLeft() {
  if (!checkCollision(-1, 0)) {
    voiture.style.gridColumnStart--
    voiture.style.gridColumnEnd--
  }
}

function moveBottom() {
  if (voiture.style.gridRowStart != 9)
  if (!checkCollision(0, 1)) {
    voiture.style.gridRowStart++
    voiture.style.gridRowEnd++
  }
}

function moveTop() {
  if (!checkCollision(0, -1)) {
    voiture.style.gridRowStart--
    voiture.style.gridRowEnd--
  }
}
