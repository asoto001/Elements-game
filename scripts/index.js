let playerAttack
let enemyAttack
let victoryword

const begin = () => {
  const btnFigther = document.getElementById('btn')
  btnFigther.addEventListener('click', figtherPlayerSelection)
  const btnFire = document.getElementById('fire')
  btnFire.addEventListener('click', fireAttack)
  const btnWater = document.getElementById('water')
  btnWater.addEventListener('click', waterAttack)
  const btnEarth = document.getElementById('earth')
  btnEarth.addEventListener('click', earthAttack)
  const btnWind = document.getElementById('wind')
  btnWind.addEventListener('click', windAttack)

}
const figtherPlayerSelection = () => {
  const inputAnng = document.getElementById('Anng')
  const inputKioshy = document.getElementById('Kioshy')
  const inptuKorra = document.getElementById('Korra')
  const inputRoku = document.getElementById('Roku')
  const spanFPName = document.getElementById('fPName')

  if (inputAnng.checked) {
    alert('hello there Anng')
    console.log(inputAnng)
    spanFPName.innerHTML = 'Anng'
  } else if (inputKioshy.checked) {
    alert('hello there Kioshy')
    console.log(inputKioshy)
    spanFPName.innerHTML = 'Kiohsy'

  } else if (inptuKorra.checked) {
    alert('hello there Korra')
    console.log(inptuKorra)
    spanFPName.innerHTML = 'Korra'

  } else if (inputRoku.checked) {
    alert('hello there Roku')
    console.log(inputRoku)
    spanFPName.innerHTML = 'Roku'
  } else {
    alert('o Shit! here we go again')
    spanFPName.innerHTML = 'Cagada!'
  }

  figtherEnemySelection()

}

const figtherEnemySelection = () => {

  const spanFEName = document.getElementById('fEName')

  let randomNum = random(1, 4)

  if (randomNum === 1) {
    spanFEName.innerHTML = 'Anng'
  } else if (randomNum === 2) {
    spanFEName.innerHTML = 'kioshy'
  } else if (randomNum === 3) {
    spanFEName.innerHTML = 'Korra'
  } else if (randomNum === 4) {
    spanFEName.innerHTML = 'Roku'
  }

}

const fireAttack = () => {
  playerAttack = 'Fuego'
  enemysAttackRandom()
}

const waterAttack = () => {
  playerAttack = 'Agua'
  enemysAttackRandom()
}

const earthAttack = () => {
  playerAttack = 'Tierra'
  enemysAttackRandom()
}

const windAttack = () => {
  playerAttack = 'Aire'
  enemysAttackRandom()
}

const enemysAttackRandom = () => {

  let randomNumAttack = random(1, 4)

  if (randomNumAttack === 1) {
    enemyAttack = 'Fuego'
  } else if (randomNumAttack === 2) {
    enemyAttack = 'Agua'
  } else if (randomNumAttack === 3) {
    enemyAttack = 'Tierra'
  } else if (randomNumAttack === 4) {
    enemyAttack = 'Aire'
  }

  setVictoryword()

}

const setVictoryword = () => {

  if (enemyAttack == 'Aire' && playerAttack == 'Tierra') {
    victoryword = 'Perdiste'
  } else if (enemyAttack == 'Agua' && playerAttack == 'Tierra') {
    victoryword = 'Perdiste'
  } else if (enemyAttack == 'Tierra' && playerAttack == 'Fuego') {
    victoryword = 'Perdiste'
  } else if (enemyAttack == 'Agua' && playerAttack == 'Fuego') {
    victoryword = 'Perdiste'
  } else if (enemyAttack == 'Fuego' && playerAttack == 'Aire') {
    victoryword = 'Perdiste'
  } else if (enemyAttack == 'Aire' && playerAttack == 'Agua') {
    victoryword = 'Perdiste'
  } else if (enemyAttack === playerAttack) {
    victoryword = 'Empate'
  } else {
    victoryword = 'Ganaste'
  }

  createMenssage()
}

const createMenssage = () => {

  const messagesSection = document.getElementById('messages')

  let paragraph = document.createElement('p')
  paragraph.innerHTML = 'Tu peleador ataco con ' + playerAttack + ', y el peleador enemigo ataco con ' + enemyAttack + ', ' + victoryword;

  messagesSection.appendChild(paragraph)
}

const random = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1) + min)
}

window.addEventListener('load', begin)

