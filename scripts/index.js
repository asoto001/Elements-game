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
let enemyAttack = []
let figthersAtacks
let enemyFigthersAtacks
let indexPlayerAtack
let indexEnemyAtack
let btnWind
let btnEarth
let btnWater
let btnFire
let buttons = []
let figtherOption
let playerVictories = 0
let enemyVictories = 0
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
  { nombre: '💧', id: 'Agua', number: 0 },
  { nombre: '💧', id: 'Agua', number: 1 },
  { nombre: '💧', id: 'Agua', number: 2 },
  { nombre: '🌪', id: 'Aire', number: 3 },
  { nombre: '🌪', id: 'Aire', number: 4 },
  { nombre: '🌪', id: 'Aire', number: 5 },
  { nombre: '🌪', id: 'Aire', number: 6 },
  { nombre: '🔥', id: 'Fuego', number: 7 },
  { nombre: '🌱', id: 'Tierra', number: 8 },
  { nombre: '🌱', id: 'Tierra', number: 9 }
)

kioshy.ataques.push(
  { nombre: '💧', id: 'Agua', number: 0 },
  { nombre: '🌪', id: 'Aire', number: 1 },
  { nombre: '🌱', id: 'Tierra', number: 2 },
  { nombre: '🌱', id: 'Tierra', number: 3 },
  { nombre: '🌱', id: 'Tierra', number: 4 },
  { nombre: '🌱', id: 'Tierra', number: 5 },
  { nombre: '🌱', id: 'Tierra', number: 6 },
  { nombre: '🔥', id: 'Fuego', number: 7 },
  { nombre: '🔥', id: 'Fuego', number: 8 },
  { nombre: '🔥', id: 'Fuego', number: 9 },
)

korra.ataques.push(
  { nombre: '💧', id: 'Agua', number: 0 },
  { nombre: '💧', id: 'Agua', number: 1 },
  { nombre: '💧', id: 'Agua', number: 2 },
  { nombre: '💧', id: 'Agua', number: 3 },
  { nombre: '🌪', id: 'Aire', number: 4 },
  { nombre: '🌱', id: 'Tierra', number: 5 },
  { nombre: '🌱', id: 'Tierra', number: 6 },
  { nombre: '🔥', id: 'Fuego', number: 7 },
  { nombre: '🔥', id: 'Fuego', number: 8 },
  { nombre: '🔥', id: 'Fuego', number: 9 },
)

roku.ataques.push(
  { nombre: '💧', id: 'Agua', number: 0 },
  { nombre: '🌪', id: 'Aire', number: 1 },
  { nombre: '🌪', id: 'Aire', number: 2 },
  { nombre: '🌪', id: 'Aire', number: 3 },
  { nombre: '🌪', id: 'Aire', number: 4 },
  { nombre: '🌱', id: 'Tierra', number: 5 },
  { nombre: '🔥', id: 'Fuego', number: 6 },
  { nombre: '🔥', id: 'Fuego', number: 7 },
  { nombre: '🔥', id: 'Fuego', number: 8 },
  { nombre: '🔥', id: 'Fuego', number: 9 },
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
  btnWind = document.getElementById('Aire')
  btnEarth = document.getElementById('Tierra')
  btnWater = document.getElementById('Agua')
  btnFire = document.getElementById('Fuego')
  buttons = document.querySelectorAll('.aButtons')


  
}

const atackSequence = () => {
  buttons.forEach((button) => {
    button.addEventListener('click', (e) => {
      
      if (e.target.textContent === '🔥') {
        playerAttack.push('Fuego')
        console.log(playerAttack)
        button.style.background = '#112f58'
        button.disabled = true
      } else if (e.target.textContent === '💧') {
        playerAttack.push('Agua')
        console.log(playerAttack)
        button.style.background = '#112f58'
        button.disabled = true
      } else if (e.target.textContent === '🌱') {
        playerAttack.push('Tierra')
        console.log(playerAttack)
        button.style.background = '#112f58'
        button.disabled = true
      } else {
        playerAttack.push('Aire')
        console.log(playerAttack)
        button.style.background = '#112f58'
        button.disabled = true
      }
      enemysAttackRandom()
    })
  })

}

const figtherEnemySelection = () => {
  let randomNum = random(0, figthers.length - 1)

  spanFPName.innerHTML = figthers[randomNum].nombre
  enemyFigthersAtacks = figthers[randomNum].ataques

  displaySelecSec('hidden-class')
  atackSequence()
}

const enemysAttackRandom = () => {
  let randomNumAttack = random(0, enemyFigthersAtacks.length - 1)

  if (randomNumAttack === enemyFigthersAtacks[randomNumAttack].number) {
    enemyAttack.push(enemyFigthersAtacks[randomNumAttack].id)

  } else {
console.log('¡Mis putos tomates!')
   }
  console.log(enemyAttack)
  fightStart()
}

const fightStart = () => {
  if (playerAttack.length === 10) {
    setVictoryword()
  }
}

const indexOpponents = (player, enemy) => {
  indexPlayerAtack = playerAttack[player]
  indexEnemyAtack = enemyAttack[enemy]
}

const setVictoryword = () => {

for (let index = 0; index < playerAttack.length; index++) {
  if (playerAttack[index] === enemyAttack[index]) {
    indexOpponents(index, index)
    createMenssage('Empate') 
  } else if (playerAttack[index] == 'Fuego' && enemyAttack[index] == 'Aire') {
    indexOpponents(index, index)
    createMenssage('Ganaste')
    playerVictories++
    spanPlayerLifes.innerHTML = playerVictories
  } else if (playerAttack[index] == 'Aire' && enemyAttack[index] == 'Tierra') {
    indexOpponents(index, index)
    createMenssage('Ganaste')
    playerVictories++
    spanPlayerLifes.innerHTML = playerVictories
  } else if (playerAttack[index] == 'Tierra' && enemyAttack[index] == 'Fuego') {
    indexOpponents(index, index)
    createMenssage('Ganaste')
    playerVictories++
    spanPlayerLifes.innerHTML = playerVictories
  } else if (playerAttack[index] == 'Agua' && enemyAttack[index] == 'Tierra') {
    indexOpponents(index, index)
    createMenssage('Ganaste')
    playerVictories++
    spanPlayerLifes.innerHTML = playerVictories
  } else if (playerAttack[index] == 'Agua' && enemyAttack[index] =='Fuego') {
    indexOpponents(index, index)
    createMenssage('Ganaste')
    playerVictories++
    spanPlayerLifes.innerHTML = playerVictories
  }else if (playerAttack[index] == 'Aire' && enemyAttack[index] == 'Agua') {
    indexOpponents(index, index)
    createMenssage('Ganaste')
    playerVictories++
    spanPlayerLifes.innerHTML = playerVictories
  } else {
    indexOpponents(index, index)
    createMenssage('Perdiste')
    enemyVictories++
    spanEnemyLifes.innerHTML = enemyVictories
  }
  
}
  createMenssage()
  lifesCheck()
}

const lifesCheck = () => {
  if (playerVictories < enemyVictories ) {
    alert('perdiste')
    createFinalMenssage('perdiste, mejor suerte la proxima')
  } else if (playerVictories > enemyVictories) {
    alert('ganaste')
    createFinalMenssage('muy bien, ganaste!!')
  } else {
    createFinalMenssage('Tenemos unempate!!')
  }
}

const createMenssage = (victoryword) => {
  
  let newPlayerAtack = document.createElement('p')
  let newEnemyAtack = document.createElement('p')

  messagesSection.innerHTML = victoryword;
  newPlayerAtack.innerHTML = indexPlayerAtack;
  newEnemyAtack.innerHTML = indexEnemyAtack;
 
  playerAtacks.appendChild(newPlayerAtack)
  enemyAtacks.appendChild(newEnemyAtack)
}

const createFinalMenssage = (finalResult) => {
  messagesSection.innerHTML = finalResult
  enablebtn()
}

const enablebtn = () => {

  if (playerVictories === 0 || enemyVictories === 0) {
    reloadBtn.disabled = true
  } else {
    reloadBtn.disabled = false
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

