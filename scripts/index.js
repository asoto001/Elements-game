const attackSec = document.getElementById('attackSelecSec')
const messagesSection = document.getElementById('result')
const playerAtacks = document.getElementById('playerAtacks')
const enemyAtacks = document.getElementById('enemyAtacks')
const spanPlayerLifes = document.getElementById('player-lifes')
const spanEnemyLifes = document.getElementById('Enemi-lifes')
const spanFEName = document.getElementById('fEName')
const btnFigther = document.getElementById('btn')
const selecSec = document.getElementById('figther-slect-sec')
const reloadBtn = document.getElementById('reload')
const spanFPName = document.getElementById('fPName')
const cardsContainer = document.getElementById('cards-container')
const atacksContainer = document.getElementById('atacksContainer')

let inputAnng
let inputKioshy
let inptuKorra
let inputRoku
let figthers = []
let playerFigther
let playerAttack = []
let enemyAttack
let figthersAtacks
let btnWind
let btnEarth
let btnWater
let btnFire
let buttons = []
let victoryword
let figtherOption
let playerLifes = 3
let enemyLifes = 3


class Figther {
  constructor(nombre, foto, vida) {
    this.nombre = nombre
    this.foto = foto
    this.vida = vida
    this.ataques = []
  }
}

let ang = new Figther('Ang', './images/Ang1.png', 5)
let kioshy = new Figther('Kioshy', './images/Kyoshi1.png', 5)
let korra = new Figther('Korra', './images/Korra1.png', 5)
let roku = new Figther('Roku', './images/Roku.png', 5)


ang.ataques.push(
  { nombre: '💧', id: 'water' },
  { nombre: '💧', id: 'water' },
  { nombre: '💧', id: 'water' },
  { nombre: '🌪', id: 'wind' },
  { nombre: '🌪', id: 'wind' },
  { nombre: '🌪', id: 'wind' },
  { nombre: '🌪', id: 'wind' },
  { nombre: '🔥', id: 'fire' },
  { nombre: '🌱', id: 'earth' },
  { nombre: '🌱', id: 'earth' }
)

kioshy.ataques.push(
  { nombre: '💧', id: 'water' },
  { nombre: '🌪', id: 'wind' },
  { nombre: '🌱', id: 'earth' },
  { nombre: '🌱', id: 'earth' },
  { nombre: '🌱', id: 'earth' },
  { nombre: '🌱', id: 'earth' },
  { nombre: '🌱', id: 'earth' },
  { nombre: '🔥', id: 'fire' },
  { nombre: '🔥', id: 'fire' },
  { nombre: '🔥', id: 'fire' },
)

korra.ataques.push(
  { nombre: '💧', id: 'water' },
  { nombre: '💧', id: 'water' },
  { nombre: '💧', id: 'water' },
  { nombre: '💧', id: 'water' },
  { nombre: '🌪', id: 'wind' },
  { nombre: '🌱', id: 'earth' },
  { nombre: '🌱', id: 'earth' },
  { nombre: '🔥', id: 'fire' },
  { nombre: '🔥', id: 'fire' },
  { nombre: '🔥', id: 'fire' },
)

roku.ataques.push(
  { nombre: '💧', id: 'water' },
  { nombre: '🌪', id: 'wind' },
  { nombre: '🌪', id: 'wind' },
  { nombre: '🌪', id: 'wind' },
  { nombre: '🌪', id: 'wind' },
  { nombre: '🌱', id: 'earth' },
  { nombre: '🔥', id: 'fire' },
  { nombre: '🔥', id: 'fire' },
  { nombre: '🔥', id: 'fire' },
  { nombre: '🔥', id: 'fire' },
)
figthers.push(ang, kioshy, korra, roku)

const begin = () => {

  figthers.forEach((figther) => {
    figtherOption = `
  <input type="radio" name="peleador" id=${figther.nombre} />
                <label class="figther-card ${figther.nombre}" for=${figther.nombre}>
                    <p>${figther.nombre}</p>
                    <img src=${figther.foto} alt="">
                </label>
  `
    cardsContainer.innerHTML += figtherOption

    inputAnng = document.getElementById('Ang')
    inputKioshy = document.getElementById('Kioshy')
    inptuKorra = document.getElementById('Korra')
    inputRoku = document.getElementById('Roku')

  })

  btnFigther.addEventListener('click', figtherPlayerSelection)
  reloadBtn.addEventListener('click', reloadGame)
  reloadBtn.disabled = true

  hiddenAtackSection('hidden-class')
}

const figtherPlayerSelection = () => {
  btnFigther.disabled = true

  if (inputAnng.checked) {
    alert('hello there Anng')
    console.log(inputAnng)
    spanFPName.innerHTML = inputAnng.id
    playerFigther = inputAnng.id
  } else if (inputKioshy.checked) {
    alert('hello there Kioshy')
    console.log(inputKioshy)
    spanFPName.innerHTML = inputKioshy.id
    playerFigther = inputKioshy.id
  } else if (inptuKorra.checked) {
    alert('hello there Korra')
    console.log(inptuKorra)
    spanFPName.innerHTML = inptuKorra.id
    playerFigther = inptuKorra.id
  } else if (inputRoku.checked) {
    alert('hello there Roku')
    console.log(inputRoku)
    spanFPName.innerHTML = inputRoku.id
    playerFigther = inputRoku.id
  } else {
    alert('o Shit! here we go again')
    spanFPName.innerHTML = 'Cagada!'
  }

  extractAtacks(playerFigther)
  figtherEnemySelection()
  enablebtn(false)
  displayAtackSection()

}

extractAtacks = (playerFigther) => {
  let atacks

  for (let i = 0; i < figthers.length; i++) {
    if (playerFigther === figthers[i].nombre) {
      atacks = figthers[i].ataques
    }
  }
  showAtacks(atacks)
}

showAtacks = (atacks) => {

  atacks.forEach((atack) => {
    figthersAtacks = `<button class="btns-atacks__fire btns aButtons" id=${atack.id}>${atack.nombre}</button>`

    atacksContainer.innerHTML += figthersAtacks
  })
  btnWind = document.getElementById('wind')
  btnEarth = document.getElementById('earth')
  btnWater = document.getElementById('water')
  btnFire = document.getElementById('fire')
  buttons = document.querySelectorAll('.aButtons')

  
  enablebtn(true)
}

const atackSequence = () => {
  buttons.forEach((button) => {
    button.addEventListener('click', (e) => {
      console.log(e)
      if (e.target.textContent === '🔥') {
       playerAttack.push('Fuego')
       console.log(playerAttack)
       button.style.background = '#112f58'
      } else if (e.target.textContent === '💧') {
        playerAttack.push('Agua')
        console.log(playerAttack)
        button.style.background = '#112f58'
      } else if (e.target.textContent === '🌱') {
        playerAttack.push('Tierra')
        console.log(playerAttack)
        button.style.background = '#112f58'
      } else  {
        playerAttack.push('Aire')
        console.log(playerAttack)
        button.style.background = '#112f58'
      }
    })
  })
}

const figtherEnemySelection = () => {
  let randomNum = random(0, figthers.length - 1)

  spanFPName.innerHTML = figthers[randomNum].nombre

  displaySelecSec('hidden-class')
  atackSequence()
}

// const fireAttack = () => {
//   playerAttack = 'Fuego'
//   enemysAttackRandom()
// }

// const waterAttack = () => {
//   playerAttack = 'Agua'
//   enemysAttackRandom()
// }

// const earthAttack = () => {
//   playerAttack = 'Tierra'
//   enemysAttackRandom()
// }

// const windAttack = () => {
//   playerAttack = 'Aire'
//   enemysAttackRandom()
// }

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
    playerLifes--
    spanPlayerLifes.innerHTML = playerLifes
  } else if (enemyAttack == 'Agua' && playerAttack == 'Tierra') {
    victoryword = 'Perdiste'
    playerLifes--
    spanPlayerLifes.innerHTML = playerLifes
  } else if (enemyAttack == 'Tierra' && playerAttack == 'Fuego') {
    victoryword = 'Perdiste'
    playerLifes--
    spanPlayerLifes.innerHTML = playerLifes
  } else if (enemyAttack == 'Agua' && playerAttack == 'Fuego') {
    victoryword = 'Perdiste'
    playerLifes--
    spanPlayerLifes.innerHTML = playerLifes
  } else if (enemyAttack == 'Fuego' && playerAttack == 'Aire') {
    victoryword = 'Perdiste'
    playerLifes--
    spanPlayerLifes.innerHTML = playerLifes
  } else if (enemyAttack == 'Aire' && playerAttack == 'Agua') {
    victoryword = 'Perdiste'
    playerLifes--
    spanPlayerLifes.innerHTML = playerLifes
  } else if (enemyAttack === playerAttack) {
    victoryword = 'Empate'
  } else {
    victoryword = 'Ganaste'
    enemyLifes--
    spanEnemyLifes.innerHTML = enemyLifes
  }

  createMenssage()
  lifesCheck()
}

const lifesCheck = () => {
  if (playerLifes === 0) {
    alert('perdiste')
    createFinalMenssage('perdiste, mejor suerte la prxima')
  } else if (enemyLifes === 0) {
    alert('ganaste')
    createFinalMenssage('muy bien, ganaste')
  }
}

const createMenssage = () => {
  let atackResult = document.createElement('p')
  let newPlayerAtack = document.createElement('p')
  let newEnemyAtack = document.createElement('p')

  messagesSection.innerHTML = victoryword;
  newPlayerAtack.innerHTML = playerAttack;
  newEnemyAtack.innerHTML = enemyAttack;
  // paragraph.innerHTML = 'Tu peleador ataco con ' + playerAttack + ', y el peleador enemigo ataco con ' + enemyAttack + ', ' + victoryword;

  playerAtacks.appendChild(newPlayerAtack)
  enemyAtacks.appendChild(newEnemyAtack)
}

const createFinalMenssage = (finalResult) => {
  let paragraph = document.createElement('p')
  messagesSection.innerHTML = finalResult

  enablebtn(true)
}

const enablebtn = (state) => {
  btnFire.disabled = state
  btnWater.disabled = state
  btnEarth.disabled = state
  btnWind.disabled = state

  if (playerLifes === 0 || enemyLifes === 0) {
    reloadBtn.disabled = false
  } else {
    reloadBtn.disabled = true
  }
}

const hiddenAtackSection = (visibility) => {
  attackSec.classList.add(visibility)
  reloadBtn.classList.add(visibility)
}

const displayAtackSection = () => {
  attackSec.classList.remove('hidden-class')
  reloadBtn.classList.remove('hidden-class')
}

const displaySelecSec = (visibility) => {
  selecSec.classList.add(visibility)
}

const reloadGame = () => {
  location.reload()
}

const random = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1) + min)
}

window.addEventListener('load', begin)

